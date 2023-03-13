import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// forms.forEach(form => {
//   const formElement = new FormValidator(validationOptions, form);
//   formElement.enableValidation();
// })

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
})

const handleSaveCard = (evt) => {
  evt.preventDefault();
  const cardData = {
    name: formCard.title.value,
    link: formCard.link.value
  };
  renderCard(cardData);
  closePopup(popupAddingCard);
  evt.target.reset();
};

const createFormValidator = (formElement) => {
  const validatorElement = new FormValidator(validationOptions, formElement);
  validatorElement.enableValidation();
  return validatorElement;
}

const handleEditProfile = () => {
  formProfile.name.value = nameProfile.textContent;
  formProfile.desc.value = descriptionProfile.textContent;
  const form = createFormValidator(formProfile);
  form.resetValidation();
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
  const form = createFormValidator(formCard);
  form.resetValidation();
  openPopup(popupAddingCard);
});