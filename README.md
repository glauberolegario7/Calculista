# Calculista: trilha de estudo em estruturas

Plataforma de estudo para engenheiros que querem se tornar calculistas estruturais.

- **Trilha:** 10 módulos com teoria, exemplo resolvido, exercícios e checklist
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
| `manifest.webmanifest`, `sw.js`, `icons/` | Instalação como app e uso offline |
| `ferramentas/gera_questoes.py` | Script que gera o `questoes.js` com as contas feitas pelo Python |

## Como editar o conteúdo

- Exercícios: `{ n: nível 1–3, q: enunciado, o: [opções], s: resolução }`. **A primeira opção é sempre a correta.** O app embaralha na hora de exibir.
- Depois de mudar o conteúdo, altere `VERSAO` em `sw.js` (ex.: `calculista-v2`) para os celulares baixarem a versão nova.
- Para regenerar o banco: `python3 ferramentas/gera_questoes.py` (ajuste o caminho de saída no final do script).

## Aviso

Conteúdo de estudo. Não substitui as normas ABNT nem o responsável técnico habilitado.
