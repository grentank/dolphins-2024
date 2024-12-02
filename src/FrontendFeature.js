const FeatureRequest = require('./FeatureRequest');

class FrontendFeature extends FeatureRequest {
  static isFrontendFeature(feature) {
    return feature instanceof FrontendFeature;
  }

  constructor({ assignee, priority, title, pages = [] }) {
    super({ assignee, priority, title });
    this.pages = pages;
  }

  addPage(page) {
    this.pages.push(page); // 'Home', 'Products'
  }

  removePage(page) {
    this.pages = this.pages.filter((el) => el !== page);
  }
}

module.exports = FrontendFeature;
