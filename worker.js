// Roteamento de idioma: /pt e /pt/* servem os MESMOS assets que a raiz,
// mantendo a URL /pt no navegador. O assets/i18n.js detecta o prefixo /pt
// e mantém o conteúdo em português (o padrão, sem prefixo, é traduzido para inglês).
//
// Assets estáticos (/, /styles.css, /sobre.html, /assets/*, ...) são servidos
// diretamente pelo binding de assets; este Worker só roda para rotas que NÃO
// correspondem a um arquivo — ou seja, as rotas /pt*.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname;

    // /pt -> redireciona para /pt/ para que links relativos resolvam sob /pt/
    if (p === "/pt") {
      return Response.redirect(url.origin + "/pt/" + url.search, 301);
    }

    // /pt/<resto> -> serve o asset /<resto> (a URL no navegador continua /pt/...)
    if (p.startsWith("/pt/")) {
      url.pathname = p.slice(3) || "/"; // remove o prefixo "/pt"
      const res = await env.ASSETS.fetch(new Request(url, request));

      // O handler de assets pode responder com um redirect (ex.: /portfolio.html
      // -> /portfolio para URLs limpas). Como buscamos o asset SEM o prefixo /pt,
      // esse Location volta sem /pt e jogaria o usuário para a versão em inglês.
      // Reescrevemos o Location para manter o prefixo /pt.
      if (res.status >= 300 && res.status < 400) {
        const loc = res.headers.get("Location");
        if (loc) {
          const locUrl = new URL(loc, url);
          if (
            locUrl.origin === url.origin &&
            !locUrl.pathname.startsWith("/pt/") &&
            locUrl.pathname !== "/pt"
          ) {
            locUrl.pathname = "/pt" + locUrl.pathname;
            const headers = new Headers(res.headers);
            headers.set("Location", locUrl.pathname + locUrl.search + locUrl.hash);
            return new Response(res.body, {
              status: res.status,
              statusText: res.statusText,
              headers,
            });
          }
        }
      }

      return res;
    }

    // Qualquer outra coisa que tenha caído aqui (404 etc.)
    return env.ASSETS.fetch(request);
  },
};
