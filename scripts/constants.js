const popups = document.querySelectorAll('.popup'),
      popupProfile = document.querySelector('.popup_type_profile'),
      popupAddingCard = document.querySelector('.popup_type_adding-card'),
      popupPhotoViewer = document.querySelector('.popup_type_photo-viewer'),
      editButton = document.querySelector('.profile__edit-btn'),
      addingCardButton = document.querySelector('.profile__add-btn'),
      formProfile = document.querySelector('.popup__form_profile'),
      name = document.querySelector('.profile__name'),
      description = document.querySelector('.profile__desc'),
      nameInput = document.querySelector('.popup__input_type_name'),
      descriptionInput = document.querySelector('.popup__input_type_desc'),
      popupImage = document.querySelector('.popup__image'),
      popupImageTitle = document.querySelector('.popup__image-title'),
      cardsContainer = document.querySelector('.elements'),
      formCard = document.querySelector('.popup__form_card'),
      // profileCloseButton = document.querySelector('.popup__close-btn_type_profile'),
      // photoViewerCloseButton = document.querySelector('.popup__close-btn_type_photo-viewer'),
      // addingCardCloseButton = document.querySelector('.popup__close-btn_type_adding-card'),
      // closeButtons = document.querySelectorAll('.popup__close-btn'),
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
      ];