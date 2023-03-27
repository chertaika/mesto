import {descriptionProfile, nameProfile} from "../scripts/constants";

export default class UserInfo {
  constructor({name, description}) {
    this._name = name;
    this._description = description;
  }

  getUserInfo() {

  }

  setUserInfo() {
    nameProfile.textContent = this._name;
    descriptionProfile.textContent = this._description;
  }
}