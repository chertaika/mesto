import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {
  popups,
  popupProfile,
  popupAddingCard,
  popupPhotoViewer,
  buttonEditProfile,
  buttonAddCard,
  formProfile,
  nameProfile,
  descriptionProfile,
  popupImage,
  popupImageTitle,
  cardsContainer,
  formAddCard,
  cardTemplate,
  initialCards,
  validationOptions
} from "./constants.js";

const handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
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

const handleImageViewer = (cardPhoto) => {
  popupImage.src = cardPhoto.src;
  popupImage.alt = cardPhoto.alt;
  popupImageTitle.textContent = cardPhoto.alt;
  openPopup(popupPhotoViewer);
};


const createCard = (cardData) => {
  const card = new Card(cardData, cardTemplate, handleImageViewer);
  return card.generateCard();
};

const renderCard = (cardData) => {
  const cardElement = createCard(cardData);
  cardsContainer.prepend(cardElement);
};

initialCards.forEach(cardData => {
  renderCard(cardData);
});

const formProfileValidator = new FormValidator(validationOptions, formProfile);
formProfileValidator.enableValidation();
const formAddCardValidator = new FormValidator(validationOptions, formAddCard);
formAddCardValidator.enableValidation();

const handleSaveCard = (evt) => {
  const cardData = {
    name: formAddCard.title.value,
    link: formAddCard.link.value
  };
  renderCard(cardData);
  closePopup(popupAddingCard);
  evt.target.reset();
};

const handleEditProfile = () => {
  formProfile.name.value = nameProfile.textContent;
  formProfile.desc.value = descriptionProfile.textContent;
  formProfileValidator.resetValidation();
  openPopup(popupProfile);
};

const handleSaveProfile = () => {
  nameProfile.textContent = formProfile.name.value;
  descriptionProfile.textContent = formProfile.desc.value;
  closePopup(popupProfile);
};

buttonEditProfile.addEventListener('click', handleEditProfile);
formProfile.addEventListener('submit', handleSaveProfile);
formAddCard.addEventListener('submit', handleSaveCard);
buttonAddCard.addEventListener('click', () => {
  formAddCardValidator.resetValidation();
  openPopup(popupAddingCard);
});