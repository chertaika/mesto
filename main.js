(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u){var a=e.likes,c=e.name,s=e.link,l=e._id,f=e.owner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=c,this._link=s,this._cardId=l,this._likes=a,this._userId=u,this._templateElement=n,this._handleCardClick=r,this._handleLikeClick=o,this._handleDeleteClick=i,this._isOwner=f._id===u,this._isLiked=this._checkUserLike()}var n,r;return n=t,r=[{key:"_getTemplate",value:function(){return this._templateElement.querySelector(".card").cloneNode(!0)}},{key:"_handleLikeCard",value:function(){this._handleLikeClick(this._cardId,this._isLiked,this)}},{key:"_checkUserLike",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"_toggleLikeButtonState",value:function(t){t?this._buttonLike.classList.add("card__like-button_active"):this._buttonLike.classList.remove("card__like-button_active")}},{key:"checkLike",value:function(t){t&&(this._likes=t,this._isLiked=this._checkUserLike()),this._likeCounter.textContent=this._likes.length,this._toggleLikeButtonState(this._isLiked)}},{key:"blockLikeButton",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._buttonLike.disabled=t}},{key:"handleDeleteCard",value:function(){var t=this;this._card.classList.add("card_removing"),setTimeout((function(){t._card.remove(),t._card=null}),400)}},{key:"_setEventListeners",value:function(){var t=this;this._cardPhoto.addEventListener("click",(function(){t._handleCardClick(t._cardPhoto)})),this._buttonLike.addEventListener("click",(function(){t._handleLikeCard()})),this._isOwner&&this._buttonDelete.addEventListener("click",(function(){t._handleDeleteClick(t._cardId,t)}))}},{key:"_fillCard",value:function(){this._cardPhoto.src=this._link,this._cardPhoto.alt=this._name,this._cardTitle.textContent=this._name}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._cardTitle=this._card.querySelector(".card__title"),this._cardPhoto=this._card.querySelector(".card__photo"),this._buttonLike=this._card.querySelector(".card__like-button"),this._likeCounter=this._card.querySelector(".card__like-counter"),this._buttonDelete=this._card.querySelector(".card__delete-btn"),this._isOwner||this._buttonDelete.remove(),this.checkLike(),this._setEventListeners(),this._fillCard(),this._card}}],r&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(e.inputSelector)),this._submitButton=this._formElement.querySelector(e.submitButtonSelector),this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.classList.add(this._errorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disabledButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"_enabledButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disabledButton():this._enabledButton()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,n=[{key:"addItem",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?this._container.prepend(t):this._container.append(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}],n&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._keyHandler=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._keyHandler)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._keyHandler)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target===t._popup||e.target.classList.contains("popup__close-btn"))&&t.close()}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._title=e._popup.querySelector(".popup__image-title"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.src,n=t.alt;this._image.src=e,this._image.alt=n,this._title.textContent=n,h(b(u.prototype),"open",this).call(this)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n._handleFormSubmit=e,n._submitButton=n._form.querySelector(".popup__submit-btn"),n}return e=u,n=[{key:"close",value:function(){this._form.reset(),k(g(u.prototype),"close",this).call(this)}},{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;k(g(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){t._handleFormSubmit(t._getInputValues())}))}},{key:"blockButton",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._submitButton.disabled=e,this._submitButton.textContent=t}}],n&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var O=function(){function t(e){var n=e.nameSelector,r=e.descriptionSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._description=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.name=this._name.textContent,this._userInfo.about=this._description.textContent,this._userInfo}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._name.textContent=e,this._description.textContent=n}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this._avatar.src=e}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var C=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._address=n,this._headers=r}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject(t.status)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"editUserInfo",value:function(t){var e=t.name,n=t.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:n})}).then(this._checkResponse)}},{key:"editUserAvatar",value:function(t){var e=t.avatar;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"addNewCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:n})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._address,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"_addLike",value:function(t){return fetch("".concat(this._address,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"_removeLike",value:function(t){return fetch("".concat(this._address,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"handleLike",value:function(t,e){return e?this._removeLike(t):this._addLike(t)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var x,A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return q(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popup.querySelector(".popup__form"),e._submitButton=e._form.querySelector(".popup__submit-btn"),e._submitCallback=e._submitCallback.bind(q(e)),e}return e=u,n=[{key:"handleSubmit",value:function(t){this._handleSubmit=t}},{key:"_submitCallback",value:function(t){t.preventDefault(),this._handleSubmit()}},{key:"setEventListeners",value:function(){T(U(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitCallback)}},{key:"blockButton",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._submitButton.disabled=e,this._submitButton.textContent=t}}],n&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f),D=document.querySelector(".profile__edit-btn"),V=document.querySelector(".profile__add-btn"),N=document.querySelector(".popup__form_profile"),H=document.querySelector(".popup__form_card"),J=document.querySelector(".popup__form_avatar"),F=document.querySelector("#card").content,G=document.querySelector(".profile__avatar-edit"),M=document.querySelector(".loading"),z={inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var K=new O({nameSelector:".profile__name",descriptionSelector:".profile__desc",avatarSelector:".profile__avatar"}),Q=new C({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"ffc4fe39-d2b0-4f44-8e6a-cba07e00cdca","Content-Type":"application/json"}}),W=function(t,e,n){n.blockLikeButton(),Q.handleLike(t,e).then((function(t){n.checkLike(t.likes)})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return n.blockLikeButton(!1)}))},X=function(t,e){et.handleSubmit((function(){return function(t,e){et.blockButton("Удаление..."),Q.deleteCard(t).then((function(){e.handleDeleteCard(),et.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return et.blockButton("Да",!1)}))}(t,e)})),et.open()},Y=function(t){nt.open(t)},Z=function(t,e){var r=new n(t,F,Y,W,X,x).generateCard();tt.addItem(r,e)},tt=new c(Z,".elements"),et=new A(".popup_type_delete-card");et.setEventListeners();var nt=new v(".popup_type_photo-viewer");nt.setEventListeners();var rt=new w(".popup_type_adding-card",(function(t){rt.blockButton("Создание..."),Q.addNewCard(t).then((function(t){Z(t,!0),rt.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return rt.blockButton("Создать",!1)}))}));rt.setEventListeners();var ot=new w(".popup_type_profile",(function(t){ot.blockButton("Сохранение..."),Q.editUserInfo(t).then((function(t){K.setUserInfo(t),ot.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return ot.blockButton("Сохранить",!1)}))}));ot.setEventListeners();var it=new w(".popup_type_edit-avatar",(function(t){it.blockButton("Сохранение..."),Q.editUserAvatar(t).then((function(t){K.setUserAvatar(t),it.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return it.blockButton("Сохранить",!1)}))}));it.setEventListeners();var ut=new i(z,N);ut.enableValidation();var at=new i(z,H);at.enableValidation();var ct=new i(z,J);ct.enableValidation(),Promise.all([Q.getUserInfo(),Q.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];x=o._id,K.setUserInfo(o),K.setUserAvatar(o),tt.renderItems(i)})).then((function(){M.classList.add("loading_hidden")})).catch((function(t){return console.log("Ошибка: ".concat(t))})),G.addEventListener("click",(function(){ct.resetValidation(),it.open()})),D.addEventListener("click",(function(){var t=K.getUserInfo(),e=t.name,n=t.about;ot.setInputValues({name:e,about:n}),ut.resetValidation(),ot.open()})),V.addEventListener("click",(function(){at.resetValidation(),rt.open()}))})();