import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popup, image, title) {
    super(popup);
    this._image = image;
    this._title = title;
  }

  open(cardPhoto) {
    this._image.src = cardPhoto.src;
    this._image.alt = cardPhoto.alt;
    this._title.textContent = cardPhoto.alt;
    super.open();
  }
}