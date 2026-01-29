# @whoisfreire/eslint-config

Configuração customizada de ESLint para projetos WhoIsFreire. Baseada na configuração customizada de ESLint da Rocketseat.

Inclui:

- **ESLint** recommended
- **TypeScript ESLint** (typescript-eslint)
- **Neostandard** (estilo Standard com suporte a flat config)
- Regras de estilo (max-len, array-bracket-spacing, space-before-function-paren)

## Requisitos

- **ESLint** >= 9 (usa [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new))
- **TypeScript** >= 5 (opcional; necessário apenas em projetos TypeScript)

## Instalação

Com **pnpm**:

```bash
pnpm add -D eslint @whoisfreire/eslint-config
```

Com **npm**:

```bash
npm install -D eslint @whoisfreire/eslint-config
```

Com **yarn**:

```bash
yarn add -D eslint @whoisfreire/eslint-config
```

Para projetos **TypeScript**, instale também o TypeScript como dependência de desenvolvimento:

```bash
pnpm add -D typescript
# ou: npm install -D typescript
# ou: yarn add -D typescript
```

## Configuração

### 1. Usar apenas a config base

Crie um arquivo `eslint.config.mjs` na raiz do projeto:

```javascript
import whoisfreire from '@whoisfreire/eslint-config'

export default whoisfreire
```

### 2. Estender e customizar

Você pode estender a configuração e adicionar suas próprias regras ou arquivos:

```javascript
import whoisfreire from '@whoisfreire/eslint-config'

export default [
  ...whoisfreire,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // suas regras adicionais
    },
  },
]
```

### 3. Configuração para Node.js

O pacote exporta também uma config específica para ambiente Node (com globals do Node e regras ajustadas). Para usar:

```javascript
import nodeConfig from '@whoisfreire/eslint-config/node.mjs'

export default nodeConfig
```

Ou combinando com a base e outros ajustes:

```javascript
import baseConfig from '@whoisfreire/eslint-config'
import nodeConfig from '@whoisfreire/eslint-config/node.mjs'

export default [
  ...baseConfig,
  ...nodeConfig,
  // suas customizações
]
```

**Nota:** A config Node inclui o pacote `globals` como dependência do pacote; não é necessário instalá-lo no seu projeto.

## Estrutura do pacote

| Entrada              | Descrição                          |
|----------------------|------------------------------------|
| `@whoisfreire/eslint-config` | Config base (recomendado + TypeScript + Neostandard + regras de estilo) |
| `@whoisfreire/eslint-config/node.mjs` | Config base + regras e globals para Node.js |

## Scripts no `package.json`

Sugestão de scripts para rodar o ESLint no projeto:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Licença

MIT © WhoIsFreire
