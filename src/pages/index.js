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
  loading,
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

let userId;

const userInfo = new UserInfo(profileInfo);
const api = new Api(settings);

//открытие попапа для редактирования профиля
const handleEditProfile = () => {
  const {name, about} = userInfo.getUserInfo();
  popupEditProfile.setInputValues({name, about});
  formProfileValidator.resetValidation();
  popupEditProfile.open();
};

//запрос на добавление новой карточки
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

//запрос на сохранение изменений профиля
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

//запрос на сохранение изменений аватара
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

//запрос на обработку лайка карточки
const handleLikeClick = (cardId, isLiked, card) => {
  card.blockLikeButton();
  api.handleLike(cardId, isLiked)
    .then(res => {
      card.checkLike(res.likes);
    })
    .catch(error => console.log(`Ошибка: ${error}`))
    .finally(() => card.blockLikeButton(false));
};

//запрос на удаление карточки
const deleteCard = (cardId, card) => {
  popupWithDeleteConfirmation.blockButton('Удаление...');
  api.deleteCard(cardId)
    .then(() => {
      card.handleDeleteCard();
      popupWithDeleteConfirmation.close();
    })
    .catch(error => console.log(`Ошибка: ${error}`))
    .finally(() => popupWithDeleteConfirmation.blockButton('Да', false));
};

//открытие попапа для подтверждения удаления карточки
const handleClickDeleteButton = (cardId, card) => {
  popupWithDeleteConfirmation.handleSubmit(() => deleteCard(cardId, card));
  popupWithDeleteConfirmation.open();
};

//открытие попапа с увеличенной картинкой
const handleCardClick = (cardPhoto) => {
  popupWithImage.open(cardPhoto);
};

//отрисовка и добавление новой карточки
const renderCard = (cardData, isStart) => {
  const card = new Card(cardData, cardTemplate, handleCardClick, handleLikeClick, handleClickDeleteButton, userId);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement, isStart);
};

const cardList = new Section(renderCard, cardsContainerSelector);

const popupWithDeleteConfirmation = new PopupWithConfirmation(popupDeleteConfirmationSelector);
popupWithDeleteConfirmation.setEventListeners()

console.log(popupWithDeleteConfirmation)

const popupWithImage = new PopupWithImage(popupPhotoViewerSelector);
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddingCardSelector, handleAddCard);
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm(popupProfileSelector, handleSaveProfile);
popupEditProfile.setEventListeners();

const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, handleSaveAvatar);
popupEditAvatar.setEventListeners();

console.log(popupEditProfile);

const formProfileValidator = new FormValidator(validationOptions, formProfile);
formProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(validationOptions, formAddCard);
formAddCardValidator.enableValidation();

const formEditAvatarValidator = new FormValidator(validationOptions, formEditAvatar);
formEditAvatarValidator.enableValidation();

// отрисовка профиля пользователя и карточек с сервера при загрузке страницы
Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    cardList.renderItems(cards);
  })
  .then(() => {
    loading.classList.add('preloader_hidden');
  })
  .catch(error => console.log(`Ошибка: ${error}`));

profileAvatarEdit.addEventListener('click', () => {
  formEditAvatarValidator.resetValidation();
  popupEditAvatar.open();
});
buttonEditProfile.addEventListener('click', handleEditProfile);
buttonAddCard.addEventListener('click', () => {
  formAddCardValidator.resetValidation();
  popupAddCard.open();
});