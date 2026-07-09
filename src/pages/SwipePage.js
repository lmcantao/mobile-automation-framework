const BasePage = require('./BasePage');

class SwipePage extends BasePage {
  constructor() {
    super();
  }

  async open() {
    return this;
  }
}

module.exports = SwipePage;
