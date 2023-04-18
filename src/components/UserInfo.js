export default class UserInfo {
  constructor({nameSelector, descriptionSelector, avatarSelector}) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo['name'] = this._name.textContent;
    this._userInfo['about'] = this._description.textContent;
    return this._userInfo;
  }

  setUserInfo({name, about}) {
    this._name.textContent = name;
    this._description.textContent = about;
  }

  setUserAvatar({avatar}) {
    this._avatar.src = avatar;
  }
}


