'use strict';
// FAQ
const clickNav = document.querySelector('.navbar-btn');
const showNavList = document.querySelector('.nav-list');

clickNav.addEventListener('click', () => {
  showNavList.classList.toggle('active');
});

