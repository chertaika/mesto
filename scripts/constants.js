const popupProfile = document.querySelector('.popup_profile'),
      popupAddingCard = document.querySelector('.popup_adding-card'),
      popupPhotoViewer = document.querySelector('.popup_photo-viewer'),
      editButton = document.querySelector('.profile__edit-btn'),
      addingCardButton = document.querySelector('.profile__add-btn'),
      formProfile = document.querySelector('.popup__form_profile'),
      name = document.querySelector('.profile__name'),
      prof = document.querySelector('.profile__prof'),
      nameInput = document.querySelector('.popup__input_type_name'),
      professionInput = document.querySelector('.popup__input_type_prof'),
      popupImage = document.querySelector('.popup__image'),
      popupImageTitle = document.querySelector('.popup__image-title'),
      cardsContainer = document.querySelector('.elements'),
      formCard = document.querySelector('.popup__form_card'),
      profileCloseButton = document.querySelector('.popup__close-btn_profile'),
      photoViewerCloseButton = document.querySelector('.popup__close-btn_photo-viewer'),
      addingCardCloseButton = document.querySelector('.popup__close-btn_adding-card'),
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