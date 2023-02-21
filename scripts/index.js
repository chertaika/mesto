const handleEscClose = (evt) => {
  const currentPopup = document.querySelector('.popup_opened');
  if(evt.key === 'Escape') {
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
    }
    if (evt.target.classList.contains('popup__close-btn')) {
      closePopup(popup);
    }
  });
});

const toggleLike = (evt) => {
  evt.target.classList.toggle('card__like_active');
};

const deleteCard = (evt) => {
  const card = evt.target.closest('.card');
  card.classList.add('card_removing');
  setTimeout(() => {
    card.remove();
  }, 300);
};

const handleImageViewer = (evt) => {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupImageTitle.textContent = evt.target.alt;
  openPopup(popupPhotoViewer);
};

const createCard = (element) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true),
        cardTitle = cardElement.querySelector('.card__title'),
        cardPhoto = cardElement.querySelector('.card__photo'),
        likeButton = cardElement.querySelector('.card__like'),
        deleteButton = cardElement.querySelector('.card__delete-btn');

  cardTitle.textContent = element.name;
  cardPhoto.src = element.link;
  cardPhoto.alt = element.name;
  likeButton.addEventListener('click', toggleLike);
  deleteButton.addEventListener('click', deleteCard);
  cardPhoto.addEventListener('click', handleImageViewer);

  return cardElement;
};

const renderCard = (element) => {
  const cardElement = createCard(element);
  cardsContainer.prepend(cardElement);
};

initialCards.forEach(element => {
  renderCard(element);
});

const handleSaveCard = (evt) => {
  const card = {
    name: formCard.title.value,
    link: formCard.link.value
  };
  renderCard(card);
  closePopup(popupAddingCard);
  evt.target.reset();
};

const handleEditProfile = () => {
  formProfile.name.value = name.textContent;
  formProfile.desc.value = description.textContent;
  openPopup(popupProfile);
  formProfile.name.dispatchEvent(new Event('input'));
  formProfile.desc.dispatchEvent(new Event('input'));
  setTimeout(() => {
    formProfile.name.focus();
  }, 400);
};

const handleSaveProfile = () => {
  name.textContent = formProfile.name.value;
  description.textContent = formProfile.desc.value;
  closePopup(popupProfile);
};

editButton.addEventListener('click', handleEditProfile);
formProfile.addEventListener('submit', handleSaveProfile);
formCard.addEventListener('submit', handleSaveCard);
addingCardButton.addEventListener('click', () => {
  openPopup(popupAddingCard);
});