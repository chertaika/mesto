import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._form.querySelector('.popup__submit-btn');
  }

  close() {
    this._form.reset();
    super.close();
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._handleFormSubmit(this._getInputValues());
    });
  }

  blockButton(buttonText, isBlocked = true) {
    this._submitButton.disabled = isBlocked;
    this._submitButton.textContent = buttonText;
  }
}