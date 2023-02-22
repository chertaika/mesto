const handleEscClose = (evt) => {
  if(evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  }
};

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClose);
};

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    } else if (evt.target.classList.contains('popup__close-btn')) {
      closePopup(popup);
    }
  });
});

const handleToggleLike = (buttonLike) => {
  buttonLike.classList.toggle('card__like_active');
};

const handleDeleteCard = (cardElement) => {
  cardElement.classList.add('card_removing');
  setTimeout(() => {
    cardElement.remove();
  }, 300);
};

const handleImageViewer = (cardPhoto) => {
  popupImage.src = cardPhoto.src;
  popupImage.alt = cardPhoto.alt;
  popupImageTitle.textContent = cardPhoto.alt;
  openPopup(popupPhotoViewer);
};

const createCard = (cardData) => {
  const cardElement = card.cloneNode(true),
        cardTitle = cardElement.querySelector('.card__title'),
        cardPhoto = cardElement.querySelector('.card__photo'),
        buttonLike = cardElement.querySelector('.card__like'),
        buttonDelete = cardElement.querySelector('.card__delete-btn');

  cardTitle.textContent = cardData.name;
  cardPhoto.src = cardData.link;
  cardPhoto.alt = cardData.name;
  buttonLike.addEventListener('click', () => {handleToggleLike(buttonLike)});
  buttonDelete.addEventListener('click', () => {handleDeleteCard(cardElement)});
  cardPhoto.addEventListener('click', () => {handleImageViewer(cardPhoto)});

  return cardElement;
};

const renderCard = (cardData) => {
  const cardElement = createCard(cardData);
  cardsContainer.prepend(cardElement);
};

initialCards.forEach(card => {
  renderCard(card);
});

const handleSaveCard = (evt) => {
  evt.preventDefault();
  const card = {
    name: formCard.title.value,
    link: formCard.link.value
  };
  renderCard(card);
  closePopup(popupAddingCard);
  evt.target.reset();
};

const handleEditProfile = () => {
  formProfile.name.value = nameProfile.textContent;
  formProfile.desc.value = descriptionProfile.textContent;
  enableValidation(popupProfile, validationOptions);
  openPopup(popupProfile);
  setTimeout(() => {
    formProfile.name.focus();
  }, 400);
};

const handleSaveProfile = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = formProfile.name.value;
  descriptionProfile.textContent = formProfile.desc.value;
  closePopup(popupProfile);
};

buttonEditProfile.addEventListener('click', handleEditProfile);
formProfile.addEventListener('submit', handleSaveProfile);
formCard.addEventListener('submit', handleSaveCard);
buttonAddCard.addEventListener('click', () => {
  enableValidation(popupAddingCard, validationOptions);
  openPopup(popupAddingCard);
});