export default class Card {
  constructor({likes, name, link, _id, owner}, templateElement, handleCardClick, handleLikeClick, handleDeleteClick, userId) {
    this._name = name;
    this._link = link;
    this._cardId = _id;
    this._likes = likes;
    this._userId = userId;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._isOwner = owner._id === userId;
    this._isLiked = this._checkUserLike();
  }

  _getTemplate() {
    return this._templateElement
      .querySelector('.card')
      .cloneNode(true);
  }

  _handleLikeCard() {
    this._handleLikeClick(this._cardId, this._isLiked, this);
  }

  _checkUserLike() {
    return this._likes.some(owner => owner._id === this._userId);
  }

  _toggleLikeButtonState(isLiked) {
    if(isLiked) {
      this._buttonLike.classList.add('card__like-button_active');
    } else {
      this._buttonLike.classList.remove('card__like-button_active');
    }
  }

  //
  checkLike(likes) {
    if(likes) {
      this._likes = likes;
      this._isLiked = this._checkUserLike();
    }
    this._likeCounter.textContent = this._likes.length;
    this._toggleLikeButtonState(this._isLiked);
  }

  blockLikeButton(isBlocked = true) {
    this._buttonLike.disabled = isBlocked;
  }

  handleDeleteCard() {
    this._card.classList.add('card_removing');
    setTimeout(() => {
      this._card.remove();
      this._card = null;
    }, 400);
  }

  _setEventListeners() {
    this._cardPhoto.addEventListener('click', () => {
      this._handleCardClick(this._cardPhoto);
    });
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeCard();
    });
    if(this._isOwner) {
      this._buttonDelete.addEventListener('click', () => {
        this._handleDeleteClick(this._cardId, this);
      });
    }
  }

  _fillCard() {
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._cardTitle.textContent = this._name;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._cardTitle = this._card.querySelector('.card__title');
    this._cardPhoto = this._card.querySelector('.card__photo');
    this._buttonLike = this._card.querySelector('.card__like-button');
    this._likeCounter = this._card.querySelector('.card__like-counter');
    this._buttonDelete = this._card.querySelector('.card__delete-btn');
    if(!this._isOwner) {
      this._buttonDelete.remove();
    }
    this.checkLike();
    this._setEventListeners();
    this._fillCard();

    return this._card;
  }
}