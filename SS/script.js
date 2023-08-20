'use strict';
var openM = document.querySelector('.menu-open');
var closeM = document.querySelector('.menu-close');
// var navMin = document.querySelector('.navbar');
var menuMin = document.querySelector('.menu-list');

// document.querySelector('.menu-open').addEventListener;
openM.addEventListener('click', function () {
  // navMin.classList.remove('hide');
  menuMin.classList.remove('hide-menulist');
  openM.classList.add('open-hide');
  closeM.classList.remove('close-hide');
});

closeM.addEventListener('click', function () {
  openM.classList.remove('open-hide');
  closeM.classList.add('close-hide');
  // navMin.classList.add('hide');
  menuMin.classList.add('hide-menulist');
});
