const mobileMenu = document.querySelector('.menu-bar');

function closeMenu() {
  mobileMenu.style.left = '-110%';
}

document.querySelector('.hamburger').addEventListener('click', closeMenu);

function OpenMenu() {
  mobileMenu.style.left = '0';
}

document.querySelector('.hambuger').addEventListener('click', OpenMenu);

document.querySelectorAll('.mobile-list').forEach((list) => {
  list.addEventListener('click', () => {
    mobileMenu.style.left = '-110%';
  });
});