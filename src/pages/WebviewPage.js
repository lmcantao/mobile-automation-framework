const BasePage = require('./BasePage');

class WebviewPage extends BasePage {
  constructor() {
    super();
  }

  async open() {
    return this;
  }
}

module.exports = WebviewPage;
