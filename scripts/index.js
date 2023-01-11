let likeButtons = document.querySelectorAll('.elements__like');

likeButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    this.classList.toggle('elements__like_active');
  })
})

let modal = document.querySelector('.modal');
let editButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.modal__close-btn');
let formProfile = document.querySelector('.modal__form-profile');
let name = document.querySelector('.profile__name');
let prof = document.querySelector('.profile__prof');
let nameInput = document.querySelector('.modal__input_type_name');
let profInput = document.querySelector('.modal__input_type_prof');

function showModal() {
  nameInput.value = name.textContent;
  profInput.value = prof.textContent;
  modal.classList.add('modal_show');
  setTimeout(function () {
    nameInput.focus()
  }, 30);
}

function closeModal() {
  modal.classList.remove('modal_show');
}

function saveProfile(evt) {
  evt.preventDefault();
  if (nameInput.value === "") {
    alert("Имя не может быть пустым");
    return false;
  }
  name.textContent = nameInput.value;
  prof.textContent = profInput.value;
  closeModal();
}

editButton.addEventListener('click', showModal)
formProfile.addEventListener('submit', saveProfile)
closeButton.addEventListener('click', closeModal)
document.addEventListener('keydown', function (key) {
  if (key.code === "Escape" && modal.classList.contains('modal_show')) {
    closeModal();
  }
});


