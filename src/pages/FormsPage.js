const BasePage = require('./BasePage');

class FormsPage extends BasePage {
  constructor() {
    super();
  }

  async open() {
    return this;
  }
}

module.exports = FormsPage;
