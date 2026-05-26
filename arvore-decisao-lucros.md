# 💰 Árvore de Decisão — Distribuição de Lucros

> Estrutura para definição da porcentagem do lucro por nível hierárquico.

---

## 🌳 Fluxograma de Decisão

```mermaid
flowchart TD
    START(["🏁 INÍCIO\nQual é o nível hierárquico\ndo funcionário?"])

    START --> N1
    START --> N2
    START --> N3
    START --> N4

    %% ─── NÍVEL 1 ───────────────────────────────────────────────
    N1["🔺 NÍVEL 1\nCAIXA / DONO"]
    N1 --> R1(["✅ 25% do lucro líquido"])

    %% ─── NÍVEL 2 ───────────────────────────────────────────────
    N2["🔷 NÍVEL 2\nDIRETORES / SÓCIOS"]
    N2 --> Q2{"Tem poder de\ndecisão estratégica?"}
    Q2 -->|SIM| Q2b{"Tem participação\nsocietária?"}
    Q2 -->|NÃO| RE2(["↩️ Reclassificar\npara Nível 3"])
    Q2b -->|SIM| R2a(["✅ Entre 8% e 15%"])
    Q2b -->|NÃO| R2b(["✅ Entre 5% e 8%"])

    %% ─── NÍVEL 3 ───────────────────────────────────────────────
    N3["🔹 NÍVEL 3\nGERENTES / COORDENADORES"]
    N3 --> Q3{"Lidera equipe e responde\npor resultados?"}
    Q3 -->|SIM| Q3b{"Gerencia mais\nde 5 pessoas?"}
    Q3 -->|NÃO| RE3(["↩️ Reclassificar\npara Nível 4"])
    Q3b -->|SIM| R3a(["✅ Entre 4% e 6%"])
    Q3b -->|NÃO| R3b(["✅ Entre 2% e 4%"])

    %% ─── NÍVEL 4 ───────────────────────────────────────────────
    N4["⬜ NÍVEL 4\nCOLABORADORES / OPERACIONAIS"]
    N4 --> Q4{"Tem mais de\n1 ano de empresa?"}
    Q4 -->|SIM| R4a(["✅ Entre 1,5% e 3%"])
    Q4 -->|NÃO| R4b(["✅ Entre 0,5% e 1,5%"])

    %% ─── ESTILOS ────────────────────────────────────────────────
    style START fill:#1a1a2e,color:#fff,stroke:#e94560,stroke-width:2px
    style N1    fill:#e94560,color:#fff,stroke:#c73652,stroke-width:2px
    style N2    fill:#16213e,color:#fff,stroke:#0f3460,stroke-width:2px
    style N3    fill:#0f3460,color:#fff,stroke:#16213e,stroke-width:2px
    style N4    fill:#4a4e69,color:#fff,stroke:#333,stroke-width:2px

    style R1    fill:#2d6a4f,color:#fff,stroke:#1b4332,stroke-width:2px
    style R2a   fill:#2d6a4f,color:#fff,stroke:#1b4332,stroke-width:2px
    style R2b   fill:#52b788,color:#fff,stroke:#2d6a4f,stroke-width:2px
    style R3a   fill:#2d6a4f,color:#fff,stroke:#1b4332,stroke-width:2px
    style R3b   fill:#52b788,color:#fff,stroke:#2d6a4f,stroke-width:2px
    style R4a   fill:#52b788,color:#fff,stroke:#2d6a4f,stroke-width:2px
    style R4b   fill:#74c69d,color:#1a1a1a,stroke:#52b788,stroke-width:2px

    style RE2   fill:#e76f51,color:#fff,stroke:#c1440e,stroke-width:2px
    style RE3   fill:#e76f51,color:#fff,stroke:#c1440e,stroke-width:2px

    style Q2    fill:#457b9d,color:#fff,stroke:#1d3557,stroke-width:2px
    style Q2b   fill:#457b9d,color:#fff,stroke:#1d3557,stroke-width:2px
    style Q3    fill:#457b9d,color:#fff,stroke:#1d3557,stroke-width:2px
    style Q3b   fill:#457b9d,color:#fff,stroke:#1d3557,stroke-width:2px
    style Q4    fill:#457b9d,color:#fff,stroke:#1d3557,stroke-width:2px
```

---

## 📊 Tabela Resumo de Distribuição

| Nível | Cargo | % por Pessoa | Critério |
|:-----:|-------|:------------:|---------|
| 🔺 **1** | Caixa / Dono | **25%** | Fixo |
| 🔷 **2** | Diretor / Sócio | **8% – 15%** | Com sociedade |
| 🔷 **2** | Diretor / Sócio | **5% – 8%** | Sem sociedade |
| 🔹 **3** | Gerente / Coordenador | **4% – 6%** | Equipe > 5 pessoas |
| 🔹 **3** | Gerente / Coordenador | **2% – 4%** | Equipe ≤ 5 pessoas |
| ⬜ **4** | Colaborador | **1,5% – 3%** | Mais de 1 ano |
| ⬜ **4** | Colaborador | **0,5% – 1,5%** | Menos de 1 ano |

---

## ⚙️ Regras Gerais

- 📌 A distribuição incide sobre o **lucro líquido** (após impostos e despesas).
- 📌 A soma de todas as porcentagens **não deve ultrapassar 72%** — os 28% restantes ficam como reserva da empresa.
- 📌 Revisão **anual obrigatória** no início de cada exercício.
- 📌 Gatilho mínimo: distribuição só ocorre se o lucro superar o **ponto de equilíbrio**.

---

*Documento interno · Revisão: Mai/2026*
