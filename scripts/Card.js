export class Card {
  constructor(data, templateElement, handleOpenImageViewer) {
    this._name = data.name;
    this._link = data.link;
    this._templateElement = templateElement;
    this._handleOpenImageViewer = handleOpenImageViewer;
  }

  _getTemplate = () => {
    return this._templateElement
      .querySelector('.card')
      .cloneNode(true);
  }

  _handleToggleLike = () => {
    this._buttonLike.classList.toggle('card__like_active');
  };

  _handleDeleteCard = () => {
    this._card.classList.add('card_removing');
    setTimeout(() => {
      this._card.remove();
    }, 400);
  };

  _setEventListeners = () => {
    this._cardPhoto.addEventListener('click', () => {
      this._handleOpenImageViewer(this._cardPhoto);
    });
    this._buttonLike.addEventListener('click', () => {
      this._handleToggleLike();
    });
    this._buttonDelete.addEventListener('click', () => {
      this._handleDeleteCard();
    });
  };

  generateCard = () => {
    this._card = this._getTemplate();
    this._cardTitle = this._card.querySelector('.card__title');
    this._cardPhoto = this._card.querySelector('.card__photo');
    this._buttonLike = this._card.querySelector('.card__like');
    this._buttonDelete = this._card.querySelector('.card__delete-btn');

    this._setEventListeners();
    this._cardPhoto.src = this._link;
    this._cardTitle.alt = this._name;
    this._cardTitle.textContent = this._name;

    return this._card;
  };
}