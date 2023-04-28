const menuActive = document.querySelector('.menu-active');
const headerMenu = document.querySelector('.user-list__item-menu');

function activator() {
	menuActive.classList.toggle('hidden___menu'); 
}

headerMenu.addEventListener('click', activator); 