# Mobile Automation Framework

## Sobre o projeto
Framework de automação mobile com foco em Android, usando WebdriverIO + Appium + Mocha para validar fluxos do aplicativo nativo incluído em apps/android/native-demo-app.apk.

O projeto possui execução local e pipeline no GitLab CI/CD com geração de resultados Allure e coleta de evidências.

## Tecnologias utilizadas
- JavaScript (Node.js)
- WebdriverIO
- Appium
- Appium UiAutomator2 Driver
- Mocha
- Allure Report
- GitLab CI/CD

## Arquitetura
A estrutura segue Page Object Model:
- BasePage com ações reutilizáveis (clique, escrita, leitura, waits, scroll e swipe)
- Páginas por domínio: HomePage, LoginPage, FormsPage, SwipePage e DragPage
- Configurações separadas por responsabilidade:
  - config/wdio.shared.conf.js (base)
  - config/wdio.android.conf.js e arquivos por suíte
  - capabilities em config/capabilities
  - serviço Appium em config/services
  - reporter Allure em config/reporters
- Dados de teste externos em JSON na pasta data

## Estrutura de diretórios
- apps: APK Android e pasta iOS
- config: configs WDIO, capabilities, serviço Appium e reporter Allure
- data: massa de dados dos testes
- src/pages: Page Objects
- tests/specs: cenários automatizados por funcionalidade
- logs: logs de execução do Appium
- reports: resultados Allure

## Pré-requisitos
Dependências do sistema:
- Node.js e npm
- Java (JDK)
- Android SDK
- ADB
- Emulador Android ou dispositivo conectado

Dependências npm:
- instaladas por npm install ou npm ci (WebdriverIO, Appium, UiAutomator2, Allure CLI)

Observação:
- O lockfile indica dependências do Appium com engines Node 20.19+, então é recomendado Node 20+.

## Instalação
1. Clonar o repositório
2. Entrar na pasta do projeto
3. Instalar dependências com npm install

## Configuração Android e Appium
1. Configure Android SDK e variáveis de ambiente (ANDROID_HOME e PATH com platform-tools/build-tools)
2. Valide com:
   - adb version
   - adb devices
3. Inicie emulador/dispositivo Android
4. Execute os testes

O Appium é iniciado automaticamente via @wdio/appium-service na execução Android.
Não é necessário subir Appium manualmente para os scripts já configurados.

## Execução dos testes

| Comando | Descrição |
|---------|-----------|
| npm run test:android | Executa todos os specs Android |
| npm run test:android:smoke | Executa smoke |
| npm run test:android:login | Executa login |
| npm run test:android:forms | Executa forms |
| npm run test:android:navigation | Configurado, sem specs atualmente |
| npm run test:android:gestures | Configurado, sem specs atualmente |
| npm run test:android:interactions | Configurado, sem specs atualmente |
| npm run test:ios | Placeholder |
| npm run test:browserstack | Placeholder |
| npm run allure:report | Gera relatório Allure |
| npm run allure:serve | Serve resultados Allure de reports/allure-results |

## Cenários automatizados
- Smoke: abertura do app, validação de menu principal, navegação para login
- Login: acesso à tela, login com sucesso, validação de e-mail inválido, validação de senha inválida
- Forms: acesso à tela, preenchimento de campo, alteração de switch, seleção de dropdown, popup Active e fechamento
- Swipe: acesso à tela, swipe horizontal e swipe vertical
- Drag: acesso à tela de drag

## Evidências e relatórios
- Em falha (afterTest), o framework:
  - captura screenshot
  - anexa screenshot no Allure
  - anexa mensagem de erro no Allure quando disponível
- Resultados Allure ficam em reports/allure-results
- Logs de Appium ficam em logs/appium

## CI/CD (GitLab)
Pipeline com stages:
- testes
- relatorio

Jobs:
- testes_android:
  - executa em push e merge request
  - exige runner com tags android e appium
  - roda npm ci e npm run test:android
  - publica artifacts de reports/allure-results e logs
- relatorio_allure:
  - depende do job de testes
  - roda npm ci e npm run allure:generate
  - publica reports/allure-report

Ponto de atenção:
- O script npm run allure:generate não existe no package.json atual (há divergência entre pipeline e scripts).

## Suporte a plataformas
- Android: implementado e validado no projeto
- iOS: apenas estrutura placeholder
- BrowserStack: apenas estrutura placeholder

## Limitações conhecidas
- Pastas de specs para navigation, gestures e interactions não possuem cenários implementados
- iOS e BrowserStack não estão implementados funcionalmente
- Pipeline precisa ajuste no comando de geração de relatório Allure

## Autor
- Lawrense Marçal Cantão