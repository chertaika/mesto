import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = this._popup.querySelector('.popup__image');
    this._title = this._popup.querySelector('.popup__image-title');
  }

  open(cardPhoto) {
    this._image.src = cardPhoto.src;
    this._image.alt = cardPhoto.alt;
    this._title.textContent = cardPhoto.alt;
    super.open();
  }
}