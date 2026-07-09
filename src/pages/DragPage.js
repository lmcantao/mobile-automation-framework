const BasePage = require('./BasePage');

class DragPage extends BasePage {
  constructor() {
    super();
  }

  async open() {
    return this;
  }
}

module.exports = DragPage;
