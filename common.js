// function hamburgerToggle(x) {
//   x.classList.toggle("change");
// }

// let dropdown = document.querySelector('.hamburger-main');
// let items = document.querySelectorAll('.menu_item');
// const itemsArray = [...items];

// dropdown.addEventListener('click', (e) => {
//   if (dropdown.classList.contains('closed')) {
//     dropdown.classList.remove('closed');
//     itemsArray.forEach(node => node.classList.add('open'));
//   } else {
//     dropdown.classList.add('closed');
//     itemsArray.forEach(node => node.classList.remove('open'));
//   }
// });

// itemsArray.addEventListener('click', (s) => {
//   console.log('clicked item');
//   dropdown.classList.add('closed');
//   itemsArray.forEach(node => node.classList.remove('open'));
// });

// https://stackoverflow.com/questions/64873128/how-to-make-my-burger-menu-dissapear-when-clicking-on-link

const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //Toggle burger
  burger.addEventListener('click', () => {
    burger.classList.toggle('no-shadow');
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade .5s ease forwards ${index / 5 + .2}s`;
      }
    });
    burger.classList.toggle('toggle');
  });

  //Moved outside the burger event listner to avoid duplicate event bindings and let the event listener programmatically trigger the burger click to hide it again.
  navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      burger.click();
    });
  });
}
navSlide();