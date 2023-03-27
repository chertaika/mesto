export default class Section {
  constructor({items, renderer}, cardContainer) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = cardContainer;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}