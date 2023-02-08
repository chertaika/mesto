const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

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
  const cardTemplate = document.querySelector('#card').content,
        cardElement = cardTemplate.querySelector('.card').cloneNode(true),
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
  nameInput.value = name.textContent;
  professionInput.value = prof.textContent;
  openPopup(popupProfile);
  setTimeout(() => {
    nameInput.focus();
  }, 400);
};

const handleSaveProfile = (evt) => {
  evt.preventDefault();
  name.textContent = nameInput.value;
  prof.textContent = professionInput.value;
  closePopup(popupProfile);
};

editButton.addEventListener('click', handleEditProfile);
formProfile.addEventListener('submit', handleSaveProfile);
formCard.addEventListener('submit', handleSaveCard);
addingCardButton.addEventListener('click', () => {
  openPopup(popupAddingCard);
});
profileCloseButton.addEventListener('click', () => {
  closePopup(popupProfile);
});
photoViewerCloseButton.addEventListener('click', () => {
  closePopup(popupPhotoViewer);
});
addingCardCloseButton.addEventListener('click', () => {
  closePopup(popupAddingCard);
});