
export default class UserInfo {
  constructor({nameSelector, descriptionSelector}) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector)
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo['name'] = this._name.textContent;
    this._userInfo['description'] = this._description.textContent;
    return this._userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.description;
  }
}


