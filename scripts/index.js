// let likeButtons = document.querySelectorAll('.elements__like');
//
// likeButtons.forEach(function (btn) {
//   btn.addEventListener('click', function () {
//     this.classList.toggle('elements__like_active');
//   })
// })

let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close-btn');
let formProfile = document.querySelector('.popup__form-profile');
let name = document.querySelector('.profile__name');
let prof = document.querySelector('.profile__prof');
let nameInput = document.querySelector('.popup__input_type_name');
let profInput = document.querySelector('.popup__input_type_prof');

function showPopup() {
  nameInput.value = name.textContent;
  profInput.value = prof.textContent;
  popup.classList.add('popup_opened');
  setTimeout(function () {
    nameInput.focus()
  }, 30);
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function saveProfile(evt) {
  evt.preventDefault();
  if (nameInput.value === "") {
    alert("Имя не может быть пустым");
    return false;
  }
  name.textContent = nameInput.value;
  prof.textContent = profInput.value;
  closePopup();
}

editButton.addEventListener('click', showPopup)
formProfile.addEventListener('submit', saveProfile)
closeButton.addEventListener('click', closePopup)
// document.addEventListener('keydown', function (key) {
//   if (key.code === "Escape" && popup.classList.contains('popup_show')) {
//     closePopup();
//   }
// });


