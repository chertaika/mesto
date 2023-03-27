export const popupProfileSelector = '.popup_type_profile',
      popupAddingCardSelector = '.popup_type_adding-card',
      popupPhotoViewerSelector = '.popup_type_photo-viewer',
      buttonEditProfile = document.querySelector('.profile__edit-btn'),
      buttonAddCard = document.querySelector('.profile__add-btn'),
      formProfile = document.querySelector('.popup__form_profile'),
      nameProfile = document.querySelector('.profile__name'),
      descriptionProfile = document.querySelector('.profile__desc'),
      cardsContainerSelector = '.elements',
      formAddCard = document.querySelector('.popup__form_card'),
      cardTemplate = document.querySelector('#card').content,
      initialCards = [
        {
          name: 'Гейзерное озеро, Алтай',
          link: 'https://i.ibb.co/NSXcVCP/altay.jpg'
        },
        {
          name: 'Остров Ольхон, Байкал',
          link: 'https://i.ibb.co/9rKVbjc/baikal.jpg'
        },
        {
          name: 'Гора Фишт, Кавказ',
          link: 'https://i.ibb.co/zfy06dt/fisht.jpg'
        },
        {
          name: 'Мыс Фиолент, Крым',
          link: 'https://i.ibb.co/0yKmgqC/fiolent.jpg'
        },
        {
          name: 'Корякский вулкан, Камчатка',
          link: 'https://i.ibb.co/L62F3xH/kamchatka.jpg'
        },
        {
          name: 'Озеро Кезеной-Ам, Чечня',
          link: 'https://i.ibb.co/v16Jhcz/kezenoy-am.jpg'
        }
      ],
      validationOptions = {
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__submit-btn',
        inactiveButtonClass: 'popup__submit-btn_disabled',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__input-error_visible'
      };