const headerEl = document.querySelector('header');
const headerHeight = headerEl.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    headerEl.classList.add('header--dark');
  } else {
    headerEl.classList.remove('header--dark');
  }
});

// toggle Btn
const headerToggleBtn = document.querySelector('.header__toggleBtn');
const headerMenuEl = document.querySelector('.header__menu');
headerToggleBtn.addEventListener('click', () => {
  headerMenuEl.classList.toggle('clicked');
});

// header Menu 
headerMenuEl.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if (link === null) {
    return ;
  } else {
      scrollIntoView(link);
      headerMenuEl.classList.remove('clicked');
  }  
});

// Arrowup btn
const arrowUpBtn = document.querySelector('.arrow-up');
arrowUpBtn.addEventListener('click', function () {
  scrollIntoView('#home');
});

const profileEl = document.querySelector('.profile');
const profileHeight = profileEl.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
  if (window.scrollY > profileHeight / 2) {
    arrowUpBtn.classList.add('visible');  
  } else {
    arrowUpBtn.classList.remove('visible');
  }
});

// profile opacity
window.addEventListener('scroll', () => {
  profileEl.style.opacity = (1 - window.scrollY / profileHeight);
});


// contact btn
const contactBtn = document.querySelector('#home .btn');
contactBtn.addEventListener('click', function () {
  scrollIntoView('footer');
});

// scrollIntoView
function scrollIntoView (selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:"smooth"});
}


// projects filter
const workBtn = document.querySelector('#work .btn');
const projects = document.querySelectorAll('#work .project');

workBtn.addEventListener('click', function (event) {
  const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
  console.log(filter);
  projects.forEach(function (project) {
    console.log('type:',project.dataset.type);
    if (filter === '*' || filter === project.dataset.type) {
      project.classList.remove('invisible');
    } else {
      project.classList.add('invisible');
    }
  });
});