export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate = () => {
    return this._templateSelector
      .querySelector('.card')
      .cloneNode(true);
  }

  _handleOpenImageViewer = () => {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageTitle.textContent = this._name;
    popupPhotoViewer.classList.add('popup_opened');
  }

  _handleToggleLike = () => {
    this.buttonLike.classList.toggle('card__like_active');
  };

  _handleDeleteCard = () => {
    this._card.classList.add('card_removing');
    setTimeout(() => {
      this._card.remove();
    }, 300);
  };

  generateCard = () => {
    this._card = this._getTemplate();
    this.cardTitle = this._card.querySelector('.card__title');
    this.cardPhoto = this._card.querySelector('.card__photo');
    this.buttonLike = this._card.querySelector('.card__like');
    this.buttonDelete = this._card.querySelector('.card__delete-btn');

    this._setEventListeners();
    this.cardPhoto.src = this._link;
    this.cardTitle.alt = this._name;
    this.cardTitle.textContent = this._name;

    return this._card;
  };

  _setEventListeners = () => {
    this.cardPhoto.addEventListener('click', () => {
      this._handleOpenImageViewer();
    });
    this.buttonLike.addEventListener('click', () => {
      this._handleToggleLike();
    });
    this.buttonDelete.addEventListener('click', () => {
      this._handleDeleteCard();
    });
  };
}