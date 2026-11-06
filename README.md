# Calculista: trilha de estudo em estruturas

Plataforma de estudo para engenheiros que querem se tornar calculistas estruturais.

- **Trilha:** 10 módulos com teoria para iniciantes (cerca de 24 mil palavras), 58 exemplos resolvidos passo a passo, exercícios e checklist
- **Calcular:** calculadoras de flexão, viga, seção, pilar, combinações e lajes
- **Simulado:** 174 questões em 3 níveis (Básico, Intermediário, Avançado), com resolução
- **Plano:** cronograma de 12 semanas

Funciona no navegador, pode ser instalado no celular (PWA) e funciona offline depois da primeira visita.

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | Interface do app |
| `conteudo.js` | Teoria, exemplos e exercícios de cada módulo |
| `questoes.js` | Banco extra do simulado |
| `leituras.js` | Teoria de cada módulo (gerado a partir de `_leituras/*.html`) |
| `exemplos.js` | Exemplos resolvidos (gerado por `ferramentas/gera_exemplos.py`) |
| `_leituras/` | Texto-fonte da teoria, um HTML por módulo |
| `manifest.webmanifest`, `sw.js`, `icons/` | Instalação como app e uso offline |
| `ferramentas/` | Scripts: `gera_questoes.py`, `gera_exemplos.py` (contas feitas em Python) e `junta_leituras.py` |

## Como editar o conteúdo

- Exercícios: `{ n: nível 1–3, q: enunciado, o: [opções], s: resolução }`. **A primeira opção é sempre a correta.** O app embaralha na hora de exibir.
- Depois de mudar o conteúdo, altere `VERSAO` em `sw.js` (ex.: `calculista-v2`) para os celulares baixarem a versão nova.
- Teoria: edite `_leituras/<módulo>.html` e rode `python3 ferramentas/junta_leituras.py`.
- Exemplos e questões: edite e rode `python3 ferramentas/gera_exemplos.py` ou `gera_questoes.py`.

## Aviso

Conteúdo de estudo. Não substitui as normas ABNT nem o responsável técnico habilitado.
