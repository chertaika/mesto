import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
  popupProfileSelector,
  popupAddingCardSelector,
  popupPhotoViewerSelector,
  buttonEditProfile,
  buttonAddCard,
  formProfile,
  nameProfile,
  descriptionProfile,
  cardsContainerSelector,
  formAddCard,
  cardTemplate,
  initialCards,
  validationOptions
} from './constants.js';


const handleSaveCard = (data) => {
  renderCard(data);
  popupAddCard.close();
};

const handleEditProfile = () => {
  formProfile.name.value = nameProfile.textContent;
  formProfile.description.value = descriptionProfile.textContent;
  formProfileValidator.resetValidation();
  popupEditProfile.open();
};

const handleSaveProfile = (data) => {
  nameProfile.textContent = data.name;
  descriptionProfile.textContent = data.description;
  popupEditProfile.close();
};

const popupWithImage = new PopupWithImage(popupPhotoViewerSelector);
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddingCardSelector, handleSaveCard);
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm(popupProfileSelector, handleSaveProfile);
popupEditProfile.setEventListeners();

const handleCardClick = (cardPhoto) => {
  popupWithImage.open(cardPhoto);
};

const renderCard = (cardData) => {
  const card = new Card(cardData, cardTemplate, handleCardClick);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
};

const cardList = new Section({items: initialCards, renderer: renderCard}, cardsContainerSelector);
cardList.renderItems();


const formProfileValidator = new FormValidator(validationOptions, formProfile);
formProfileValidator.enableValidation();
const formAddCardValidator = new FormValidator(validationOptions, formAddCard);
formAddCardValidator.enableValidation();

buttonEditProfile.addEventListener('click', handleEditProfile);
// // formProfile.addEventListener('submit', handleSaveProfile);
buttonAddCard.addEventListener('click', () => {
  formAddCardValidator.resetValidation();
  popupAddCard.open()
});