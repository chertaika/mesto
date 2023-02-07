const editButton = document.querySelector('.profile__edit-btn'),
      formProfile = document.querySelector('.popup__form_profile'),
      name = document.querySelector('.profile__name'),
      prof = document.querySelector('.profile__prof'),
      nameInput = document.querySelector('.popup__input_type_name'),
      professionInput = document.querySelector('.popup__input_type_prof'),
      popupProfile = document.querySelector('.popup_profile'),
      addCardButton = document.querySelector('.profile__add-btn'),
      popupAddPhoto = document.querySelector('.popup_add-photo'),
      popupPhotoViewer = document.querySelector('.popup_photo-viewer'),
      popupImage = document.querySelector('.popup__image'),
      popupImageTitle = document.querySelector('.popup__image-title'),
      cardsContainer = document.querySelector('.elements'),
      formCard = document.querySelector('.popup__form_card'),
      closeButtons = document.querySelectorAll('.popup__close-btn');
const initialCards = [
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

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

const closePopup = (evt) => {
  const popup = evt.target.closest('.popup');
  popup.classList.remove('popup_opened');
};

const addLike = (evt) => {
  evt.target.classList.toggle('card__like_active');
};

const deleteCard = (evt) => {
  const card = evt.target.closest('.card');
  card.style.opacity = '0';
  setTimeout(() => {
    card.remove();
  }, 300);
};

const handleImageViewer = (evt) => {
  popupImage.src = evt.target.src;
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
  likeButton.addEventListener('click', (evt) => {
    addLike(evt);
  });
  deleteButton.addEventListener('click', (evt) => {
    deleteCard(evt);
  });
  cardPhoto.addEventListener('click', (evt) => {
    handleImageViewer(evt);
  });

  return cardElement;
};

const renderCard = (element) => {
  const cardElement = createCard(element);
  cardsContainer.prepend(cardElement);
};

initialCards.forEach(element => {
  renderCard(element);
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', (evt) => {
    closePopup(evt);
  });
});

const handleSaveCard = (evt) => {
  evt.preventDefault();
  const card = {
    name: formCard.title.value,
    link: formCard.link.value
  };
  renderCard(card);
  closePopup(evt);
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
  closePopup(evt);
};

editButton.addEventListener('click', handleEditProfile);
formProfile.addEventListener('submit', handleSaveProfile);
formCard.addEventListener('submit', handleSaveCard);
addCardButton.addEventListener('click', () => {
  openPopup(popupAddPhoto);
});