"use strict";(self.webpackChunkportfolio_template=self.webpackChunkportfolio_template||[]).push([[582],{222:(e,s,n)=>{function t(e,s){for(var n=0;n<s.length;n++){var t=s[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}n.r(s),n.d(s,{default:()=>i});const i=function(){function e(){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}var s,n;return s=e,(n=[{key:"events",value:function(){var e=this;this.closeIcon.addEventListener("click",(function(){return e.closeTheModal()})),document.addEventListener("keyup",(function(s){return e.keyPressedHandler(s)}))}},{key:"keyPressedHandler",value:function(e){27==e.keyCode&&this.closeTheModal()}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n    <div class="modal">\n      <div class="modal__inner">\n        <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>\n        <div class="wrapper wrapper--narrow">\n          <p class="modal__description">If you have any suggestions, questions, or things you just want to tell me, please contact me with the links below!</p>\n        </div>\n\n        <div class="social-icons">\n          <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n          <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n          <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n          <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n        </div>\n      </div>\n      <div class="modal__close">X</div>\n    </div>\n    ')}}])&&t(s.prototype,n),Object.defineProperty(s,"prototype",{writable:!1}),e}()}}]);