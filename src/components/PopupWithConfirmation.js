import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__submit-btn');
    this._submitCallback = this._submitCallback.bind(this);
  }

  handleSubmit(action) {
    this._handleSubmit = action;
  }

  _submitCallback(evt) {
    evt.preventDefault();
    this._handleSubmit();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitCallback);
  }

  blockButton(buttonText, isBlocked = true) {
    this._submitButton.disabled = isBlocked;
    this._submitButton.textContent = buttonText;
  }
}