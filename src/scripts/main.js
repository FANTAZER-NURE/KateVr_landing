'use strict';

/* BURGER MENU */

const icon = document.getElementById('header-burger');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('item6');
const item7 = document.getElementById('item7');

icon.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item1.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item2.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item3.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item4.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item5.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item6.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item7.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

/* HEADER TOGGLE */

const prev = document.getElementById('headerLink1');
const next = document.getElementById('headerLink2');

const prev1 = document.getElementById('productLink1');
const next1 = document.getElementById('productLink2');

prev.addEventListener('click', (event) => {
  event.preventDefault();

  next.classList.remove('header__link--active');
  prev.classList.add('header__link--active');
});

next.addEventListener('click', (event) => {
  event.preventDefault();

  prev.classList.remove('header__link--active');
  next.classList.add('header__link--active');
});

prev1.addEventListener('click', (event) => {
  event.preventDefault();

  next1.classList.remove('product__link--active');
  prev1.classList.add('product__link--active');

  document.getElementById('player').classList.add('product__video--active');
  document.getElementById('player1').classList.remove('product__video--active');

  document.getElementById('button').classList.add('product__button--active');

  const button1 = document.getElementById('button1');

  button1.classList.remove('product__button--active');

  document.getElementById('count').textContent = '1/2';
});

next1.addEventListener('click', (event) => {
  event.preventDefault();

  prev1.classList.remove('product__link--active');
  next1.classList.add('product__link--active');

  document.getElementById('player').classList.remove('product__video--active');
  document.getElementById('player1').classList.add('product__video--active');

  document.getElementById('button').classList.remove('product__button--active');

  document.getElementById('button1').classList.add('product__button--active');

  document.getElementById('count').textContent = '2/2';
});

/* TECH */

const plus1 = document.querySelector('.tech__svg--1');
const cross1 = document.querySelector('.cross1');

plus1.addEventListener('click', (e) => {
  document.getElementById('popUp1').classList.add('tech__pop-up--active');

  cross1.addEventListener('click', (event) => {
    document.getElementById('popUp1').classList.remove('tech__pop-up--active');
  });
});

const plus2 = document.querySelector('.tech__svg--2');
const cross2 = document.querySelector('.cross2');

plus2.addEventListener('click', (e) => {
  document.getElementById('popUp2').classList.add('tech__pop-up--active');

  cross2.addEventListener('click', (event) => {
    document.getElementById('popUp2').classList.remove('tech__pop-up--active');
  });
});

const plus3 = document.querySelector('.tech__svg--3');
const cross3 = document.querySelector('.cross3');

plus3.addEventListener('click', (e) => {
  document.getElementById('popUp3').classList.add('tech__pop-up--active');

  cross3.addEventListener('click', (event) => {
    document.getElementById('popUp3').classList.remove('tech__pop-up--active');
  });
});

/* FORMS */

document.getElementById('message').value = '';

function nameInput() {
  if (!document.getElementById('name').value.match(/[0-9]/)) {
    return true;
  }
}

function phoneInput() {
  if (!document.getElementById('phone').value.match(/[a-zA-Z]/)) {
    return true;
  }
}

const input1 = document.getElementById('name');
const text1 = document.getElementById('invalid1');

input1.addEventListener('blur', (e) => {
  e.preventDefault();

  if (nameInput(input1)) {
    input1.classList.remove('contact__input--invalid');
    input1.classList.add('contact__input--valid');
    text1.classList.remove('contact__invalid--active');
  }
});

input1.addEventListener('blur', (e) => {
  e.preventDefault();

  if (!nameInput(input1)) {
    input1.classList.remove('contact__input--valid');
    input1.classList.add('contact__input--invalid');
    text1.classList.add('contact__invalid--active');
  }
});

const input2 = document.getElementById('email');
const text2 = document.getElementById('invalid2');

input2.addEventListener('blur', (e) => {
  e.preventDefault();

  if (nameInput(input2)) {
    input2.classList.remove('contact__input--invalid');
    input2.classList.add('contact__input--valid');
    text2.classList.remove('contact__invalid--active');
  }
});

input2.addEventListener('blur', (e) => {
  e.preventDefault();

  if (!nameInput(input2)) {
    input2.classList.remove('contact__input--valid');
    input2.classList.add('contact__input--invalid');
    text2.classList.add('contact__invalid--active');
  }
});

const input3 = document.getElementById('phone');
const text3 = document.getElementById('invalid3');

input3.addEventListener('blur', (e) => {
  e.preventDefault();

  if (nameInput(input3)) {
    input3.classList.remove('contact__input--invalid');
    input3.classList.add('contact__input--valid');
    text3.classList.remove('contact__invalid--active');
  }
});

input3.addEventListener('blur', (e) => {
  e.preventDefault();

  if (!phoneInput(input3)) {
    input3.classList.add('contact__input--invalid');
    input3.classList.remove('contact__input--valid');
    text3.classList.add('contact__invalid--active');
  }
});

/* FAQ */

const arrow1 = document.querySelector('.faq__arrow--1');

arrow1.addEventListener('click', () => {
  arrow1.parentElement.classList.toggle('faq__question--active');
});

const arrow2 = document.querySelector('.faq__arrow--2');

arrow2.addEventListener('click', () => {
  arrow2.parentElement.classList.toggle('faq__question--active');
});

const arrow3 = document.querySelector('.faq__arrow--3');

arrow3.addEventListener('click', () => {
  arrow3.parentElement.classList.toggle('faq__question--active');
});

const arrow4 = document.querySelector('.faq__arrow--4');

arrow4.addEventListener('click', () => {
  arrow4.parentElement.classList.toggle('faq__question--active');
});

const faq = document.querySelector('.header__link--faq');
const faq2 = document.querySelector('.help__faq');

faq.addEventListener('click', (e) => {
  e.preventDefault();

  document.querySelector('.faq').classList.add('faq--active');
});

faq2.addEventListener('click', (e) => {
  e.preventDefault();

  document.querySelector('.faq').classList.add('faq--active');
});

item6.addEventListener('click', (e) => {
  e.preventDefault();

  document.querySelector('.faq').classList.add('faq--active');
});

const faqCross = document.querySelector('.faq__cross');

faqCross.addEventListener('click', () => {
  document.querySelector('.faq').classList.remove('faq--active');
});

/* HELP */

const help = document.querySelector('.header__link--help');

help.addEventListener('click', (e) => {
  e.preventDefault();

  document.querySelector('.help').classList.add('help--active');
});

item7.addEventListener('click', (e) => {
  e.preventDefault();

  document.querySelector('.help').classList.add('help--active');
});

const helpCross = document.querySelector('.help__cross');
const helpFaq = document.querySelector('.help__faq');

helpCross.addEventListener('click', () => {
  document.querySelector('.help').classList.remove('help--active');
});

helpFaq.addEventListener('click', () => {
  document.querySelector('.help').classList.remove('help--active');
});
