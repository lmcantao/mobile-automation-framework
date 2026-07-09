# Mobile Automation Framework - Setup Guide

## Overview
Este é um framework de automação de testes mobile utilizando:
- **WebdriverIO**: Framework de testes
- **Appium**: Automação mobile (Android/iOS)
- **JavaScript**: Linguagem de programação
- **Mocha**: Test runner
- **Allure Report**: Geração de relatórios

## Pré-requisitos

### Ambiente Local
- Node.js 18+ ([Download](https://nodejs.org/))
- npm 9+ (vem com Node.js)
- Java JDK 11+ (para Appium)
- Android SDK (para testes Android)
- Xcode (para testes iOS - macOS apenas)

### Instalação de Dependências

```bash
# Instalar Node.js
# Após instalação, verificar versão:
node --version
npm --version

# Instalar dependências do projeto
npm install

# Instalar Appium globalmente (opcional)
npm install -g appium
```

## Configuração do Ambiente

### Android

#### 1. Configurar variáveis de ambiente

**Windows (PowerShell):**
```powershell
[Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Users\{seu_usuario}\AppData\Local\Android\Sdk", "User")
[Environment]::SetEnvironmentVariable("PATH", "$env:PATH;$env:ANDROID_HOME\emulator;$env:ANDROID_HOME\tools\bin;$env:ANDROID_HOME\platform-tools", "User")
```

**macOS/Linux:**
```bash
export ANDROID_HOME=$HOME/Library/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

#### 2. Iniciar emulador Android
```bash
emulator -list-avds  # Listar emuladores disponíveis
emulator @{nome_emulador} # Iniciar emulador
```

#### 3. Iniciar Appium
```bash
appium
# ou
npm run appium
```

### iOS (macOS only)

```bash
# Instalar Xcode Command Line Tools
xcode-select --install

# Instalar dependências iOS
npm install -g ios-deploy
```

## Estrutura do Projeto

```
src/
├── pages/           # Page Object Model classes
├── helpers/         # Utilitários reutilizáveis
│   ├── logger.js         # Logging estruturado
│   ├── waitHelper.js      # Esperas e retries
│   ├── appHelper.js       # Inicialização da app
│   └── dataHelper.js      # Gerenciamento de dados
└── utils/           # Utilitários gerais

tests/
├── data/
│   └── testData.json      # Dados centralizados de testes
└── specs/           # Testes organizados por funcionalidade
    ├── smoke/            # Testes smoke
    ├── login/            # Testes de autenticação
    ├── forms/            # Testes de formulários
    ├── navigation/       # Testes de navegação
    ├── swipe/            # Testes de swipe
    ├── drag/             # Testes de drag & drop
    ├── webview/          # Testes de WebView
    ├── errors/           # Testes de tratamento de erro
    ├── gestures/         # Testes de gestos
    └── interactions/     # Testes de interações

config/             # Configurações WebdriverIO
├── wdio.shared.conf.js    # Configuração compartilhada
├── wdio.android.conf.js   # Configuração Android
├── wdio.ios.conf.js       # Configuração iOS
├── wdio.browserstack.conf.js # BrowserStack
├── capabilities/          # Capabilities para dispositivos
├── hooks/                 # Hooks (before/after)
├── reporters/             # Configuração de reporters
└── services/              # Serviços (Appium)
```

## Comandos Disponíveis

### Testes Android

```bash
# Todos os testes
npm run test:android

# Testes por categoria
npm run test:android:smoke
npm run test:android:login
npm run test:android:forms
npm run test:android:navigation
npm run test:android:gestures
npm run test:android:interactions
```

### Testes iOS

```bash
npm run test:ios
npm run test:ios:smoke
```

### BrowserStack

```bash
npm run test:browserstack
```

### Relatórios

```bash
# Gerar relatório Allure
npm run allure:report

# Servir relatório Allure (abre no browser)
npm run allure:serve
```

## Estrutura de Dados de Testes

O arquivo `tests/data/testData.json` contém todos os dados necessários:

```json
{
  "users": {
    "validUser": {...},
    "invalidUser": {...}
  },
  "forms": {
    "validForm": {...},
    "emptyForm": {...}
  },
  "errorMessages": {...},
  "navigation": {...}
}
```

### Usar dados em testes

```javascript
const dataHelper = require('../../../src/helpers/dataHelper');

// Obter usuário
const user = dataHelper.getValidUser();

// Obter dados de formulário
const form = dataHelper.getForm('validForm');

// Carregar dados customizados
const data = dataHelper.loadData('testData.json');
```

## Helpers Disponíveis

### Logger
```javascript
const logger = require('../src/helpers/logger');

logger.info('Mensagem de informação');
logger.warn('Mensagem de aviso');
logger.error('Mensagem de erro');
logger.success('Operação bem-sucedida');
```

### WaitHelper
```javascript
const waitHelper = require('../src/helpers/waitHelper');

await waitHelper.waitForDisplayed('~element-id', 5000);
await waitHelper.waitForEnabled('~button-submit');
await waitHelper.retry(async () => { /* ... */ }, 3, 1000);
await waitHelper.sleep(2000);
```

### AppHelper
```javascript
const appHelper = require('../src/helpers/appHelper');

await appHelper.initializeApp();
appHelper.isAndroid(); // true/false
appHelper.isIOS();     // true/false
await appHelper.takeScreenshot('test-name.png');
await appHelper.closeApp();
```

### DataHelper
```javascript
const dataHelper = require('../src/helpers/dataHelper');

const user = dataHelper.getValidUser();
const form = dataHelper.getForm('validForm');
const forms = dataHelper.getForms();
```

## Escrevendo Testes

### Template básico

```javascript
const { expect } = require('chai');
const dataHelper = require('../../../src/helpers/dataHelper');
const logger = require('../../../src/helpers/logger');

describe('Feature Tests', () => {
  beforeEach(async () => {
    logger.info('Preparando teste');
  });

  it('should perform specific action', async () => {
    const data = dataHelper.getValidUser();
    logger.info('Executando teste');
    
    // Ações de teste
    await $('~element-id').click();
    
    // Assertions
    const isDisplayed = await $('~result').isDisplayed();
    expect(isDisplayed).to.be.true;
    
    logger.success('Teste passou');
  });

  afterEach(async () => {
    logger.info('Limpando após teste');
  });
});
```

## Configurar CI/CD (GitLab)

O arquivo `.gitlab-ci.yml` já está configurado para executar testes automaticamente:

- **Install**: Instala dependências
- **Test stages**: Executa testes (smoke, login, forms, all)
- **Report**: Gera relatório Allure

## Troubleshooting

### Appium não conecta ao emulador
```bash
# Verificar dispositivos conectados
adb devices

# Resetar adb
adb kill-server
adb start-server
```

### Selectors não encontram elementos
```bash
# Usar UIAutomator Viewer para encontrar IDs
uiautomatorviewer
```

### Tests timeout
- Aumentar timeout em `config/wdio.shared.conf.js`
- Usar `waitHelper.retry()` para operações instáveis

### Limpar dados de teste
```bash
rm -rf allure-results/
rm -rf reports/
```

## Recursos Úteis

- [WebdriverIO Docs](https://webdriver.io/docs/gettingstarted/)
- [Appium Docs](http://appium.io/docs/en/about-appium/intro/)
- [Chai Assertions](https://www.chaijs.com/api/)
- [Allure Report](https://docs.qameta.io/allure/)

## Support

Para dúvidas ou issues, abrir um issue no repositório do projeto.
