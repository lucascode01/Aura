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
      return env.ASSETS.fetch(new Request(url, request));
    }

    // Qualquer outra coisa que tenha caído aqui (404 etc.)
    return env.ASSETS.fetch(request);
  },
};
