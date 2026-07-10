# Mobile Automation Framework

Framework de automação de testes mobile desenvolvido com **WebdriverIO**, **Appium** e **Mocha**, com foco na automação de aplicações Android, arquitetura baseada em **Page Object Model**, geração automática de evidências, relatórios com **Allure Report** e integração com **GitLab CI/CD**.

O projeto foi estruturado para proporcionar organização, reutilização de código, facilidade de manutenção e execução automatizada dos testes.

---

## Sobre o projeto

Este projeto implementa um framework de automação de testes para uma aplicação mobile nativa Android.

A solução contempla testes automatizados de diferentes funcionalidades e interações mobile, incluindo:

- Inicialização e validação da aplicação;
- Login com cenários positivos e negativos;
- Preenchimento de formulários;
- Interação com switch e dropdown;
- Validação de popups;
- Gestos de swipe horizontal e vertical;
- Acesso à tela de Drag;
- Captura automática de screenshots em caso de falha;
- Geração de relatórios detalhados com Allure;
- Execução automatizada através de pipeline GitLab CI/CD.

O aplicativo utilizado nos testes está disponível no próprio projeto:

```text
apps/android/native-demo-app.apk
```

---

## Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| JavaScript | Linguagem utilizada na implementação dos testes |
| Node.js | Ambiente de execução JavaScript |
| WebdriverIO | Framework principal de automação |
| Appium | Automação da aplicação mobile |
| UiAutomator2 | Driver utilizado para automação Android |
| Mocha | Framework para organização e execução dos testes |
| Allure Report | Geração de relatórios e evidências |
| GitLab CI/CD | Automação da execução dos testes em pipeline |
| JSON | Armazenamento de massas de dados para os testes |

---

## Arquitetura do projeto

O framework utiliza o padrão **Page Object Model (POM)** para separar:

- Seletores dos elementos;
- Ações realizadas nas telas;
- Fluxos reutilizáveis;
- Cenários e validações dos testes.

Essa separação reduz a duplicação de código e facilita a manutenção dos testes quando ocorrem alterações na interface da aplicação.

### BasePage

A `BasePage.js` centraliza operações reutilizáveis entre as diferentes páginas, como:

- Clique em elementos;
- Preenchimento de campos;
- Esperas explícitas;
- Scroll vertical;
- Swipe horizontal;
- Interações reutilizáveis entre diferentes telas.

### Page Objects

As páginas encapsulam os elementos e comportamentos específicos de cada funcionalidade:

```text
src/pages/
├── BasePage.js
├── DragPage.js
├── FormsPage.js
├── HomePage.js
├── LoginPage.js
└── SwipePage.js
```

Os arquivos de teste utilizam esses objetos sem precisar conhecer diretamente os detalhes dos seletores ou da implementação das ações.

---

## Estrutura do projeto

```text
mobile-automation-framework/
│
├── apps/
│   ├── android/
│   │   └── native-demo-app.apk
│   └── ios/
│
├── config/
│   ├── capabilities/
│   ├── reporters/
│   ├── services/
│   ├── wdio.android.conf.js
│   ├── wdio.shared.conf.js
│   └── ...
│
├── data/
│   └── arquivos JSON com massas de teste
│
├── logs/
│   └── appium/
│
├── reports/
│   ├── allure-results/
│   └── allure-report/
│
├── src/
│   ├── pages/
│
├── tests/
│   ├── fixtures/
│   └── specs/
│       ├── drag/
│       ├── forms/
│       ├── login/
│       ├── smoke/
│       └── swipe/
│
├── .gitignore
├── .gitlab-ci.yml
├── package.json
├── package-lock.json
└── README.md
```

---

## Cenários automatizados

Os testes estão organizados por funcionalidade, permitindo a execução completa da suíte ou de grupos específicos.

### Smoke

Validações essenciais para verificar se a aplicação está disponível e funcional:

- Abertura da aplicação;
- Validação da tela principal;
- Validação dos principais elementos da interface.

### Login

Cobertura de cenários positivos e negativos:

- Acessar a tela de login;
- Realizar login com sucesso;
- Validar tentativa de login com e-mail inválido;
- Validar tentativa de login com senha inválida;
- Validar mensagens de retorno da aplicação.

### Forms

Cobertura das principais interações da tela de formulários:

- Acessar a tela Forms;
- Preencher campo de texto;
- Validar o texto informado;
- Alterar o estado do switch;
- Selecionar uma opção no dropdown;
- Clicar no botão Active;
- Validar a exibição do popup;
- Fechar o popup.

### Swipe

Validação de gestos mobile:

- Acessar a tela Swipe;
- Executar swipe horizontal no carrossel;
- Executar múltiplos swipes horizontais;
- Executar swipe vertical;
- Localizar conteúdo oculto após o swipe vertical.

### Drag

- Acessar a tela destinada às interações de drag and drop.

> Atualmente, a cobertura implementada para Drag contempla o acesso à tela. A automação completa do quebra-cabeça pode ser adicionada como evolução futura.

---

## Pré-requisitos

Antes de executar o projeto, é necessário possuir as seguintes ferramentas configuradas.

### Node.js e npm

É recomendado utilizar **Node.js 20 ou superior**.

Verifique a instalação:

```bash
node --version
npm --version
```

### Java JDK

O Java é necessário para execução das ferramentas Android e do Allure Report.

Verifique:

```bash
java -version
```

### Android SDK

É necessário possuir o Android SDK configurado, incluindo:

- Android SDK Platform Tools;
- ADB;
- Android Emulator, para execução em dispositivo virtual.

Verifique o ADB:

```bash
adb version
```

E os dispositivos disponíveis:

```bash
adb devices
```

Exemplo de saída:

```text
List of devices attached
emulator-5554    device
```

---

## Configuração das variáveis de ambiente

Configure a variável `ANDROID_HOME` apontando para o diretório do Android SDK.

Exemplo no Windows:

```text
ANDROID_HOME=C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk
```

Adicione também ao `PATH`:

```text
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\cmdline-tools\latest\bin
```

Após configurar, abra um novo terminal e execute:

```bash
adb version
```

---

## Instalação do projeto

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre no diretório:

```bash
cd mobile-automation-framework
```

Instale as dependências:

```bash
npm install
```

Para ambientes de integração contínua, utilize:

```bash
npm ci
```

---

## Configuração e inicialização do Appium

O projeto utiliza o serviço:

```text
@wdio/appium-service
```

Durante a execução dos testes Android, o Appium Server é iniciado automaticamente pelo WebdriverIO.

Portanto, para os scripts já configurados, **não é necessário iniciar o Appium manualmente**.

O fluxo ocorre automaticamente:

```text
Execução do teste
       │
       ▼
   WebdriverIO
       │
       ▼
@wdio/appium-service
       │
       ▼
  Appium Server
       │
       ▼
   UiAutomator2
       │
       ▼
Emulador ou dispositivo Android
```

Antes da execução, certifique-se apenas de que existe um emulador iniciado ou um dispositivo Android conectado:

```bash
adb devices
```

---

## Execução dos testes

### Executar toda a suíte Android

```bash
npm run test:android
```

### Executar grupos específicos

| Comando | Descrição |
|---|---|
| `npm run test:android` | Executa toda a suíte de testes Android |
| `npm run test:android:smoke` | Executa os testes de Smoke |
| `npm run test:android:login` | Executa os testes de Login |
| `npm run test:android:forms` | Executa os testes de Forms |
| `npm run test:android:navigation` | Configuração reservada para testes de navegação |
| `npm run test:android:gestures` | Configuração reservada para testes de gestos |
| `npm run test:android:interactions` | Configuração reservada para testes de interações |

> Os comandos disponíveis devem corresponder aos scripts definidos no arquivo `package.json`.

---

## Dados de teste

O projeto utiliza arquivos JSON externos para separar os dados de teste da implementação dos cenários.

Exemplo de organização:

```text
data/
├── login.json
├── forms.json
└── ...
```

Nos testes, os dados são carregados através de:

```javascript
const dados = require('../../../data/forms.json');
```

Essa estratégia permite:

- Reutilização das massas de teste;
- Redução de valores fixos nos cenários;
- Maior facilidade de manutenção;
- Preparação para testes orientados a dados.

---

## Evidências automáticas

Quando um teste falha, o hook `afterTest` do WebdriverIO é executado automaticamente.

O framework:

1. Identifica a falha;
2. Captura um screenshot da aplicação;
3. Anexa o screenshot ao resultado do Allure;
4. Adiciona os detalhes do erro quando disponíveis.

Exemplo da implementação:

```javascript
afterTest: async function (test, context, { error, passed }) {

    if (!passed) {

        const screenshot = await browser.takeScreenshot();

        allureReporter.addAttachment(
            'Screenshot da falha',
            Buffer.from(screenshot, 'base64'),
            'image/png'
        );

        if (error) {
            allureReporter.addAttachment(
                'Detalhes do erro',
                error.message,
                'text/plain'
            );
        }
    }
}
```

Dessa forma, cada falha possui evidências diretamente associadas ao teste correspondente.

---

## Relatórios Allure

Os resultados da execução são armazenados em:

```text
reports/allure-results/
```

O relatório permite visualizar:

- Quantidade de testes executados;
- Testes aprovados;
- Testes reprovados;
- Tempo de execução;
- Detalhes das falhas;
- Screenshots das falhas;
- Mensagens de erro.

### Visualizar diretamente o relatório

```bash
npm run allure:serve
```

### Gerar o relatório HTML

```bash
npm run allure:report
```

O relatório gerado é armazenado em:

```text
reports/allure-report/
```

---

## Logs

Os logs do Appium são armazenados em:

```text
logs/appium/
```

Eles auxiliam na investigação de problemas relacionados a:

- Inicialização de sessão;
- Comunicação com o dispositivo;
- Localização de elementos;
- Execução de comandos;
- Falhas do driver UiAutomator2.

---

## Integração CI/CD com GitLab

O projeto possui integração com GitLab CI/CD através do arquivo:

```text
.gitlab-ci.yml
```

O pipeline está dividido em dois estágios:

```text
Commit / Merge Request
          │
          ▼
      GitLab CI/CD
          │
          ▼
   ┌──────────────┐
   │    Testes    │
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │   Relatório  │
   └──────────────┘
```

### Etapa de testes

O job de testes:

- Instala as dependências com `npm ci`;
- Verifica o ambiente de execução;
- Executa a suíte Android;
- Preserva resultados Allure;
- Preserva logs de execução.

### Etapa de relatório

O job de relatório:

- Recebe os artefatos da execução;
- Gera o relatório Allure;
- Publica o relatório como artefato do pipeline.

### Requisitos do GitLab Runner

Por se tratar de automação mobile Android, o runner precisa possuir acesso a:

- Node.js;
- Java JDK;
- Android SDK;
- ADB;
- Emulador ou dispositivo Android;
- Appium e suas dependências.

O pipeline utiliza as tags:

```text
android
appium
```

Portanto, é necessário um GitLab Runner compatível com essas tags e preparado para executar testes Android.

---

## Suporte a plataformas

| Plataforma | Status |
|---|---|
| Android | Implementado e validado |
| iOS | Estrutura preparada, sem implementação funcional validada |
| BrowserStack | Estrutura preparada, sem integração funcional validada |

A execução principal e validada deste projeto é realizada em Android utilizando o driver UiAutomator2.

---

## Boas práticas aplicadas

O projeto utiliza as seguintes práticas de engenharia de testes:

- Page Object Model;
- Herança através de `BasePage`;
- Separação entre testes, páginas, configurações e dados;
- Massa de testes externa em JSON;
- Métodos reutilizáveis para interações mobile;
- Esperas explícitas;
- Execução de testes por funcionalidade;
- Inicialização automática do Appium;
- Captura automática de evidências em falhas;
- Relatórios com Allure;
- Logs do Appium;
- Pipeline de CI/CD;
- Configurações compartilhadas entre ambientes.

---

## Limitações conhecidas e possíveis evoluções

O projeto possui algumas oportunidades de evolução:

- Implementar execução funcional em iOS;
- Integrar execução em dispositivos reais através do BrowserStack;
- Expandir a cobertura do módulo Drag;
- Implementar os módulos Navigation, Gestures e Interactions;
- Evoluir o pipeline para execução em infraestrutura Android dedicada;
- Adicionar execução paralela em múltiplos dispositivos;
- Adicionar validações de acessibilidade;
- Expandir a estratégia de testes orientados a dados.

---

## Fluxo recomendado para execução

```bash
# 1. Instalar as dependências
npm install

# 2. Verificar o dispositivo Android
adb devices

# 3. Executar todos os testes Android
npm run test:android

# 4. Visualizar o relatório Allure
npm run allure:serve
```

---

## Autor

**Lawrense Marçal Cantão**

QA Automation Engineer | Analista de Testes

---

## Considerações finais

Este projeto demonstra a construção de uma solução de automação mobile baseada em separação de responsabilidades, reutilização de código, execução automatizada, geração de evidências e integração contínua.

A arquitetura foi preparada para permitir evolução gradual da cobertura de testes, inclusão de novas plataformas e integração com serviços de dispositivos em nuvem.
