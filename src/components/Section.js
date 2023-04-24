export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  //добавление новой карточки в контейнер
  addItem(element, isStart = false) {
    if (isStart) {
      this._container.prepend(element);
    } else {
      this._container.append(element);
    }
  }

  //отрисовка карточек
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }
}