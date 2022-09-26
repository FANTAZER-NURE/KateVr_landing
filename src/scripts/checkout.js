// 'use strict';

// // function nameInput() {
// //   if (!document.getElementById('name').value.match(/[0-9]/)) {
// //     return true;
// //   }
// // }

// // function phoneInput() {
// //   if (!document.getElementById('phone').value.match(/[a-zA-Z]/)) {
// //     return true;
// //   }
// // }

// // const input1 = document.getElementById('input1');
// // const text1 = document.getElementById('invalid1');

// // input1.addEventListener('blur', (e) => {
// //   e.preventDefault();

// //   if (nameInput(input1)) {
// //     input1.classList.remove('checkout__input--invalid');
// //     input1.classList.add('checkout__input--valid');
// //     text1.classList.remove('checkout__invalid--active');
// //   }
// // });

// // input1.addEventListener('blur', (e) => {
// //   e.preventDefault();

// //   if (!nameInput(input1)) {
// //     input1.classList.remove('checkout__input--valid');
// //     input1.classList.add('checkout__input--invalid');
// //     text1.classList.add('checkout__invalid--active');
// //   }
// // });

// // const input4 = document.getElementById('input4');
// // const text4 = document.getElementById('invalid4');

// // input4.addEventListener('blur', (e) => {
// //   e.preventDefault();

// //   if (phoneInput(input4)) {
// //     input4.classList.remove('checkout__input--invalid');
// //     input4.classList.add('checkout__input--valid');
// //     text4.classList.remove('checkout__invalid--active');
// //   }
// // });

// // input4.addEventListener('blur', (e) => {
// //   e.preventDefault();

// //   if (!nameInput(input4)) {
// //     input4.classList.remove('checkout__input--valid');
// //     input4.classList.add('checkout__input--invalid');
// //     text4.classList.add('checkout__invalid--active');
// //   }
// // });

// function allInput() {
//   for (let i = 1; i <= 5; i++) {
//     if (document.getElementById(`input${i}`).value === '') {
//       return false;
//     }
//   }

//   return true;
// }

// const submit1 = document.getElementById('submit1');
// const invaliText = document.getElementById('invalid');

// submit1.addEventListener('click', (e) => {
//   e.preventDefault();

//   if (allInput()) {
//     invaliText.classList.remove('checkout__invalid--active');
//     // window.location.href = '../checkout2.html';
//     window.open('../../checkout2.html');
//     // location = '../checkout2.html';
//     // window.location.replace = '../checkout2.html';
//   } else {
//     invaliText.classList.add('checkout__invalid--active');
//   }
// });
