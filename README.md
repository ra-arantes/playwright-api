# Playwright Automation

Estrutura inicial de automacao web e API com Playwright Test e TypeScript. Os
testes de exemplo usam o site publico do Playwright e a API JSONPlaceholder;
ajuste `BASE_URL` e `API_BASE_URL` para os ambientes que serao testados.

## Requisitos

- Node.js 20 ou superior
- npm

## Configuracao

```bash
npm install
npx playwright install
```

Copie `.env.example` para `.env` e configure as URLs da aplicacao web e da API:

```dotenv
BASE_URL=https://seu-site.com
API_BASE_URL=https://api.seu-site.com
```

## Comandos

| Comando                 | Descricao                                         |
| ----------------------- | ------------------------------------------------- |
| `npm test`              | Executa os testes em Chromium, Firefox e WebKit   |
| `npm run test:web`      | Executa apenas os testes web nos tres navegadores |
| `npm run test:api`      | Executa apenas os testes de API                   |
| `npm run test:chromium` | Executa apenas no Chromium                        |
| `npm run test:headed`   | Executa mostrando o navegador                     |
| `npm run test:ui`       | Abre a interface interativa do Playwright         |
| `npm run test:debug`    | Inicia o modo de depuracao                        |
| `npm run report`        | Abre o relatorio HTML da ultima execucao          |
| `npm run typecheck`     | Verifica os tipos TypeScript                      |
| `npm run lint`          | Executa o ESLint                                  |
| `npm run format:check`  | Verifica a formatacao                             |

## Estrutura

```text
tests/
  e2e/             # Especificacoes organizadas por funcionalidade
  api/             # Testes de endpoints e contratos HTTP
  fixtures/        # Fixtures compartilhadas e extensoes do test
  pages/           # Page Objects e locators reutilizaveis
playwright.config.ts
```

Os projetos web (`chromium`, `firefox` e `webkit`) executam somente arquivos em
`tests/e2e`. O projeto `api` executa somente arquivos em `tests/api`, usando a
fixture `request` do Playwright e `API_BASE_URL`. Assim, os testes de API nao sao
repetidos para cada navegador. `npm test` executa os dois tipos de teste.

## Convencoes

- Prefira locators acessiveis, como `getByRole`, em vez de seletores CSS frageis.
- Use as assertions auto-waiting do Playwright (`expect(locator).toBeVisible()`).
- Nos testes de API, valide status HTTP, corpo e headers relevantes; mantenha os
  dados independentes para que os testes possam rodar em paralelo.
- Mantenha cada teste independente e com dados isolados.
- Compartilhe setup via fixtures; mantenha Page Objects focados em interacoes da pagina.
- Investigue falhas com traces, screenshots e videos gerados em caso de falha.
- Configure credenciais e URLs via variaveis de ambiente; nao versione segredos.
