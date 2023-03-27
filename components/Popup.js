export default class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  open() {
    this._popup.classList.add('popup_opened');
    this._keyHandler = this._handleEscClose.bind(this);
    document.addEventListener('keydown', this._keyHandler);
  };

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._keyHandler);
  };

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      } else if (evt.target.classList.contains('popup__close-btn')) {
        this.close();
      }
    });
  }
}