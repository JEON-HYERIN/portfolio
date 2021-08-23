const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  };
});

const navberMenu = document.querySelector('.navbar__menu');
navberMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if(link === null) {
    return ;
  } else {
    scrollIntoView(link);
  };
});

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

const homeContainerEl = document.querySelector('.home__container');
const homeContainerElHeight = homeContainerEl.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
 homeContainerEl.style.opacity = 1 - window.scrollY / homeContainerElHeight;
 console.log(1 - window.scrollY / homeContainerElHeight);
});


const arrowUp = document.querySelector('.arrow-up');
window.addEventListener('scroll', () => {
  if (window.scrollY > homeContainerElHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});




function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
}
