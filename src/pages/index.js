import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import {
  buttonAddCard,
  buttonEditProfile,
  cardsContainerSelector,
  cardTemplate,
  formAddCard,
  formEditAvatar,
  formProfile,
  popupAddingCardSelector,
  popupDeleteConfirmationSelector,
  popupEditAvatarSelector,
  popupPhotoViewerSelector,
  popupProfileSelector,
  profileAvatarEdit,
  profileInfo,
  settings,
  validationOptions
} from '../utils/constants.js';

let cardList;
let userId;
const cards = {};

const userInfo = new UserInfo(profileInfo);

const handleEditProfile = () => {
  const {name, about} = userInfo.getUserInfo()
  formProfile.elements.name.value = name;
  formProfile.elements.about.value = about;
  formProfileValidator.resetValidation();
  popupEditProfile.open();
};


const api = new Api(settings);

// Promise.all([
//   api.getUserInfo(),
//   api.getInitialCards()
// ])
//   .then(results => {
//     userInfo.setUserInfo(results[0]);
//     userInfo.setUserAvatar(results[0]);
//     renderInitialCards(results[1]);
//     return userId = results[0]._id;
//   })
//   .catch(error => console.log(`Ошибка: ${error}`));

api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo(res);
    userInfo.setUserAvatar(res);
    return userId = res._id;
  })
  .catch(error => console.log(`Ошибка: ${error}`));

api.getInitialCards()
  .then(res => renderInitialCards(res))
  .catch(error => console.log(`Ошибка: ${error}`));

const handleAddCard = (data) => {
  popupAddCard.blockButton('Создание...');
  api.addNewCard(data)
    .then(res => {
      renderCard(res, true);
      popupAddCard.close();
    })
    .catch(error => console.log(`Ошибка: ${error}`))
    .finally(() => popupAddCard.blockButton('Создать', false));
};

const handleSaveProfile = (data) => {
  popupEditProfile.blockButton('Сохранение...');
  api.editUserInfo(data)
    .then(res => {
      userInfo.setUserInfo(res);
      popupEditProfile.close();
    })
    .catch(error => console.log(`Ошибка: ${error}`))
    .finally(() => popupEditProfile.blockButton('Сохранить', false));

};

const handleSaveAvatar = (data) => {
  popupEditAvatar.blockButton('Сохранение...');
  api.editUserAvatar(data)
    .then(res => {
      userInfo.setUserAvatar(res);
      popupEditAvatar.close();
    })
    .catch(error => console.log(`Ошибка: ${error}`))
    .finally(() => popupEditAvatar.blockButton('Сохранить', false));
};

const handleLikeClick = (cardId, isLiked) => {
  cards[cardId].blockLikeButton();
  api.handleLike(cardId, isLiked)
    .then(res => cards[cardId].checkLike(res.likes))
    .catch(error => console.log(`Ошибка: ${error}`))
    .finally(() => cards[cardId].blockLikeButton(false));
}

const handleClickDeleteButton = (cardId) => {
  popupWithDeleteConfirmation.handleSubmit(() => deleteCard(cardId));
  popupWithDeleteConfirmation.setEventListeners();
  popupWithDeleteConfirmation.open();
}

const deleteCard = (cardId) => {
  popupWithDeleteConfirmation.blockButton('Удаление...');
  api.deleteCard(cardId)
    .then(() => {
      cards[cardId].handleDeleteCard()
      popupWithDeleteConfirmation.close()
    })
    .catch(error => console.log(`Ошибка: ${error}`))
    .finally(() => popupWithDeleteConfirmation.blockButton('Да', false));
}

const handleCardClick = (cardPhoto) => {
  popupWithImage.open(cardPhoto);
};

const renderCard = (cardData, isStart) => {
  const card = new Card(cardData, cardTemplate, handleCardClick, handleLikeClick, handleClickDeleteButton, userId);
  cards[cardData._id] = card;
  const cardElement = card.generateCard();
  cardList.addItem(cardElement, isStart);
};

const renderInitialCards = (items) => {
  cardList = new Section({
    items: items,
    renderer: renderCard
  }, cardsContainerSelector);
  cardList.renderItems();
}

const popupWithDeleteConfirmation = new PopupWithConfirmation(popupDeleteConfirmationSelector);

const popupWithImage = new PopupWithImage(popupPhotoViewerSelector);
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddingCardSelector, handleAddCard);
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm(popupProfileSelector, handleSaveProfile);
popupEditProfile.setEventListeners();

const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, handleSaveAvatar);
popupEditAvatar.setEventListeners();

const formProfileValidator = new FormValidator(validationOptions, formProfile);
formProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(validationOptions, formAddCard);
formAddCardValidator.enableValidation();

const formEditAvatarValidator = new FormValidator(validationOptions, formEditAvatar);
formEditAvatarValidator.enableValidation();

profileAvatarEdit.addEventListener('click', () => {
  formEditAvatarValidator.resetValidation();
  popupEditAvatar.open();
})
buttonEditProfile.addEventListener('click', handleEditProfile);
buttonAddCard.addEventListener('click', () => {
  formAddCardValidator.resetValidation();
  popupAddCard.open()
});