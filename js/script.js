'use strict';

let btnOpen = document.querySelector('#open'),
	btnClose = document.querySelector('#close'),
	navMenu = document.querySelector('.nav-menu');

btnOpen.addEventListener('click', () => {
	navMenu.style.display = 'flex';
});	

btnClose.addEventListener('click', () => {
	navMenu.style.display = '';
});	