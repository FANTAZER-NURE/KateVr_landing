parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.getElementById("header-burger"),t=document.getElementById("item1"),n=document.getElementById("item2"),c=document.getElementById("item3"),i=document.getElementById("item4"),d=document.getElementById("item5"),a=document.getElementById("item6"),o=document.getElementById("item7");e.addEventListener("click",function(){document.getElementById("menu-container").classList.toggle("menu-opened")}),t.addEventListener("click",function(){document.getElementById("menu-container").classList.toggle("menu-opened")}),n.addEventListener("click",function(){document.getElementById("menu-container").classList.toggle("menu-opened")}),c.addEventListener("click",function(){document.getElementById("menu-container").classList.toggle("menu-opened")}),i.addEventListener("click",function(){document.getElementById("menu-container").classList.toggle("menu-opened")}),d.addEventListener("click",function(){document.getElementById("menu-container").classList.toggle("menu-opened")}),a.addEventListener("click",function(){document.getElementById("menu-container").classList.toggle("menu-opened")}),o.addEventListener("click",function(){document.getElementById("menu-container").classList.toggle("menu-opened")});var l=document.getElementById("headerLink1"),s=document.getElementById("headerLink2"),u=document.getElementById("productLink1"),r=document.getElementById("productLink2");l.addEventListener("click",function(e){e.preventDefault(),s.classList.remove("header__link--active"),l.classList.add("header__link--active")}),s.addEventListener("click",function(e){e.preventDefault(),l.classList.remove("header__link--active"),s.classList.add("header__link--active")}),u.addEventListener("click",function(e){e.preventDefault(),r.classList.remove("product__link--active"),u.classList.add("product__link--active"),document.getElementById("player").classList.add("product__video--active"),document.getElementById("player1").classList.remove("product__video--active"),document.getElementById("button").classList.add("product__button--active"),document.getElementById("button1").classList.remove("product__button--active"),document.getElementById("count").textContent="1/2"}),r.addEventListener("click",function(e){e.preventDefault(),u.classList.remove("product__link--active"),r.classList.add("product__link--active"),document.getElementById("player").classList.remove("product__video--active"),document.getElementById("player1").classList.add("product__video--active"),document.getElementById("button").classList.remove("product__button--active"),document.getElementById("button1").classList.add("product__button--active"),document.getElementById("count").textContent="2/2"});var m=document.querySelector(".tech__svg--1"),v=document.querySelector(".cross1");m.addEventListener("click",function(e){document.getElementById("popUp1").classList.add("tech__pop-up--active"),v.addEventListener("click",function(e){document.getElementById("popUp1").classList.remove("tech__pop-up--active")})});var _=document.querySelector(".tech__svg--2"),p=document.querySelector(".cross2");_.addEventListener("click",function(e){document.getElementById("popUp2").classList.add("tech__pop-up--active"),p.addEventListener("click",function(e){document.getElementById("popUp2").classList.remove("tech__pop-up--active")})});var L=document.querySelector(".tech__svg--3"),E=document.querySelector(".cross3");function f(){if(!document.getElementById("name").value.match(/[0-9]/))return!0}function g(){if(!document.getElementById("phone").value.match(/[a-zA-Z]/))return!0}L.addEventListener("click",function(e){document.getElementById("popUp3").classList.add("tech__pop-up--active"),E.addEventListener("click",function(e){document.getElementById("popUp3").classList.remove("tech__pop-up--active")})}),document.getElementById("message").value="";var y=document.getElementById("name"),q=document.getElementById("invalid1");y.addEventListener("blur",function(e){e.preventDefault(),f(y)&&(y.classList.remove("contact__input--invalid"),y.classList.add("contact__input--valid"),q.classList.remove("contact__invalid--active"))}),y.addEventListener("blur",function(e){e.preventDefault(),f(y)||(y.classList.remove("contact__input--valid"),y.classList.add("contact__input--invalid"),q.classList.add("contact__invalid--active"))});var B=document.getElementById("email"),I=document.getElementById("invalid2");B.addEventListener("blur",function(e){e.preventDefault(),f(B)&&(B.classList.remove("contact__input--invalid"),B.classList.add("contact__input--valid"),I.classList.remove("contact__invalid--active"))}),B.addEventListener("blur",function(e){e.preventDefault(),f(B)||(B.classList.remove("contact__input--valid"),B.classList.add("contact__input--invalid"),I.classList.add("contact__invalid--active"))});var k=document.getElementById("phone"),h=document.getElementById("invalid3");k.addEventListener("blur",function(e){e.preventDefault(),f(k)&&(k.classList.remove("contact__input--invalid"),k.classList.add("contact__input--valid"),h.classList.remove("contact__invalid--active"))}),k.addEventListener("blur",function(e){e.preventDefault(),g(k)||(k.classList.add("contact__input--invalid"),k.classList.remove("contact__input--valid"),h.classList.add("contact__invalid--active"))});var S=document.querySelector(".faq__arrow--1");S.addEventListener("click",function(){S.parentElement.classList.toggle("faq__question--active")});var b=document.querySelector(".faq__arrow--2");b.addEventListener("click",function(){b.parentElement.classList.toggle("faq__question--active")});var D=document.querySelector(".faq__arrow--3");D.addEventListener("click",function(){D.parentElement.classList.toggle("faq__question--active")});var U=document.querySelector(".faq__arrow--4");U.addEventListener("click",function(){U.parentElement.classList.toggle("faq__question--active")});var w=document.querySelector(".header__link--faq"),x=document.querySelector(".help__faq");w.addEventListener("click",function(e){e.preventDefault(),document.querySelector(".faq").classList.add("faq--active")}),x.addEventListener("click",function(e){e.preventDefault(),document.querySelector(".faq").classList.add("faq--active")}),a.addEventListener("click",function(e){e.preventDefault(),document.querySelector(".faq").classList.add("faq--active")});var C=document.querySelector(".faq__cross");C.addEventListener("click",function(){document.querySelector(".faq").classList.remove("faq--active")});var z=document.querySelector(".header__link--help");z.addEventListener("click",function(e){e.preventDefault(),document.querySelector(".help").classList.add("help--active")}),o.addEventListener("click",function(e){e.preventDefault(),document.querySelector(".help").classList.add("help--active")});var A=document.querySelector(".help__cross"),Z=document.querySelector(".help__faq");A.addEventListener("click",function(){document.querySelector(".help").classList.remove("help--active")}),Z.addEventListener("click",function(){document.querySelector(".help").classList.remove("help--active")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.127d5f0c.js.map