# Relatório de Revisão — branch `revisao-copy-aura`

> **Sobre este documento:** este relatório **não foi escrito pelo autor da branch**. Ele foi
> reconstruído por engenharia reversa do diff, porque a branch foi entregue sem nenhuma
> documentação — sem relatório, sem PR, sem descrição de commit além do título de uma linha.
> As intenções atribuídas ao autor abaixo são inferências a partir do código, não declarações dele.

| | |
|---|---|
| **Branch** | `revisao-copy-aura` |
| **Autor** | pedro.plopes@sempreceub.com (peedrosetubal9@gmail.com) |
| **Commit** | `93140b4` — "Revisa textos pontuais da copy do site da Aura Software" |
| **Data** | 30/07/2026 19:10 |
| **Base** | `60fbac2` (24/06/2026) — **desatualizada**, 1 commit atrás do `main` |
| **Escopo** | 5 arquivos, +7 / −4 linhas |

---

## 1. Contexto necessário: como funciona o i18n do site

Sem isso as mudanças não fazem sentido. Do cabeçalho de `assets/i18n.js`:

- **O HTML é escrito em PORTUGUÊS — o português é a fonte da verdade.**
- A versão inglesa é gerada **em runtime**: em qualquer URL fora de `/pt`, o script varre o DOM e
  substitui cada texto PT pelo equivalente do dicionário `dict` (chave = texto PT exato).
- Em `/pt`, nada é traduzido — o HTML é exibido como está.

**Consequência:** todo texto hardcoded em inglês no HTML é um bug. Ele aparece em inglês na
página portuguesa (onde deveria estar em PT) e não tem chave no dicionário. É exatamente essa
classe de bug que a branch ataca.

---

## 2. Mudanças, uma a uma

### ✅ 2.1 `index.html:423` — "Our Services" → "Nossos Serviços"

```diff
-      <span class="eyebrow">Our Services</span>
+      <span class="eyebrow">Nossos Serviços</span>
```
Acompanhado de `assets/i18n.js:144` → `"Nossos Serviços": "Our Services"`.

**Veredicto: correto.** O eyebrow da seção de serviços da home estava em inglês, quebrando a
página PT. Agora o PT está no HTML e o EN vem do dicionário — exatamente o padrão da arquitetura.
Nenhuma regressão: em `/`, o texto renderizado continua sendo "Our Services".

### ✅ 2.2 `sobre.html:50` — "Dig Deep About Us" → "Conheça a Fundo"

```diff
-      <span class="hl-title">Dig Deep About Us</span>
+      <span class="hl-title">Conheça a Fundo</span>
```
Acompanhado de `assets/i18n.js:261` → `"Conheça a Fundo": "Dig Deep About Us"`.

**Veredicto: correto.** Mesmo bug, mesma correção, na tag do hero da página Sobre.

> Verifiquei todos os `eyebrow` e `hl-title` das 7 páginas do site: com estas duas correções,
> **100% deles estão em português.** A varredura do autor foi completa nessa categoria.

### ⚠️ 2.3 `portfolio/agendaclinica.html:61` e `portfolio/raioxfiscal.html:61` — "Ver Projeto Online" → "Peça uma Demonstração"

```diff
-        <a class="btn btn-primary" href="../contato.html">Ver Projeto Online</a>
+        <a class="btn btn-primary" href="../contato.html">Peça uma Demonstração</a>
```
Acompanhado de `assets/i18n.js:341` → `"Peça uma Demonstração": "Request a Demo"`.

**Veredicto: diagnóstico certo, solução inferior — e deve ser descartada.**

Estas duas linhas não são um problema de tradução; são um problema de honestidade da UI. O botão
prometia "Ver Projeto Online" mas levava para o formulário de contato. O autor percebeu isso
corretamente. Só que ele resolveu **rebaixando a promessa ao link** (mudou o texto para casar com
o destino errado), quando a correção certa era **elevar o link à promessa**.

E é precisamente isso que o commit `0283f99` do `main` já fez, três dias depois:

```diff
-        <a class="btn btn-primary" href="../contato.html">Ver Projeto Online</a>
+        <a class="btn btn-primary" href="https://xn--agendaclnica-zfb.com" target="_blank" rel="noopener">Ver Projeto Online</a>
-        <a class="btn btn-primary" href="../contato.html">Ver Projeto Online</a>
+        <a class="btn btn-primary" href="https://www.raioxfiscal.com.br/" target="_blank" rel="noopener">Ver Projeto Online</a>
```

Os dois projetos **estão no ar**. Trocar o texto para "Peça uma Demonstração" esconde do visitante
duas provas sociais reais e funcionando — o oposto do que uma página de portfólio existe para fazer.

**Evidência adicional de que essa era a leitura errada:** existe uma terceira página de portfólio,
`portfolio/maxperformance.html:61`, que o autor não tocou. Ela já apontava para o projeto real
(`https://sistema-max-performance-production.up.railway.app/lp`) com o texto "Ver Projeto Online".
Ou seja, o padrão correto do próprio repositório já estava lá, ao lado, e a mudança das outras duas
páginas as deixaria **inconsistentes com ele**.

Isso é consequência direta da branch ter saído de uma base desatualizada e o autor não ter
rebaseado antes de entregar.

---

## 3. Conflito com o `main`

A branch saiu de `60fbac2`; o `main` está em `0283f99`. Os dois commits editam **as mesmas duas
linhas, em direções opostas**.

**Um `git merge` vai conflitar em `portfolio/agendaclinica.html` e `portfolio/raioxfiscal.html`.**
O risco concreto é resolver o conflito aceitando a versão da branch e, com isso, reverter
silenciosamente os links dos projetos publicados de volta para `contato.html`.

---

## 4. O que ficou de fora

**`index.html:690` — string em inglês não corrigida:**

```html
<div class="view-cursor" id="viewCursor" aria-hidden="true">View Now</div>
```

É o label do cursor customizado, sem chave no dicionário. Mesmo bug das seções 2.1 e 2.2 — na
página `/pt` aparece "View Now" em inglês. Passou despercebido provavelmente porque não usa as
classes `eyebrow`/`hl-title` que guiaram a varredura.

*(Correção sugerida: trocar para `Ver Agora` no HTML e adicionar `"Ver Agora": "View Now"` ao dicionário.)*

**Outras lacunas de processo:**

- Sem PR aberta — nenhuma oportunidade de revisão antes do merge.
- Sem rebase na base atual, o que é a causa raiz do conflito da seção 3.
- Mensagem de commit de uma linha, sem corpo explicando o quê ou o porquê.
- Sem bump do cache-buster `assets/i18n.js?v=6` (referenciado assim em todas as páginas). Como
  o dicionário mudou, navegadores com a v6 em cache continuariam com o dicionário antigo — as
  novas chaves não resolveriam e os textos PT vazariam para a página EN.

---

## 5. Recomendação

**Aproveitar 3 dos 5 arquivos; descartar 2.**

| Arquivo | Ação |
|---|---|
| `index.html` (2.1) | ✅ Integrar |
| `sobre.html` (2.2) | ✅ Integrar |
| `assets/i18n.js` | ✅ Integrar as chaves `"Nossos Serviços"` e `"Conheça a Fundo"` |
| `assets/i18n.js` | ❌ Descartar a chave `"Peça uma Demonstração"` (fica órfã sem 2.3) |
| `portfolio/agendaclinica.html` (2.3) | ❌ Descartar — manter a versão do `main` |
| `portfolio/raioxfiscal.html` (2.3) | ❌ Descartar — manter a versão do `main` |

Fazer isso por **cherry-pick seletivo dos hunks**, não por merge direto — o merge força a
resolução manual do conflito e é onde os links dos projetos podem se perder por descuido.

Aproveitar a mesma passagem para fechar os dois pontos da seção 4: corrigir o `View Now` e subir
o cache-buster do `i18n.js` para `v=7` em todas as páginas.

**Devolutiva para o autor:** o instinto de tradução está certo e a varredura de `eyebrow`/`hl-title`
foi completa — esse é um trabalho bom. Os dois pontos a alinhar são de processo, não de talento:
(1) rebasear na base atual antes de entregar, para não decidir com informação velha; (2) quando um
botão mente sobre o destino, a pergunta a fazer primeiro é "o destino certo existe?" antes de
suavizar o texto.
