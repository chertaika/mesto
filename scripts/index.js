import { Card } from './Card.js';

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

const renderCard = (cardData) => {
  const cardElement = cardData.generateCard();
  cardsContainer.prepend(cardElement);
};

initialCards.forEach(item => {
  const card = new Card(item, cardTemplate);
  renderCard(card);
})

const handleSaveCard = (evt) => {
  evt.preventDefault();
  const data = {
    name: formCard.title.value,
    link: formCard.link.value
  };
  const card = new Card(data, cardTemplate);
  renderCard(card);
  closePopup(popupAddingCard);
  evt.target.reset();
};

const handleEditProfile = () => {
  formProfile.name.value = nameProfile.textContent;
  formProfile.desc.value = descriptionProfile.textContent;
  resetValidation(formProfile, validationOptions);
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
  resetValidation(formCard, validationOptions);
  openPopup(popupAddingCard);
});