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
const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');
navberMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if(link === null) {
    return ;
  } else {
    navbarMenu.classList.remove('open');
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
//  console.log(1 - window.scrollY / homeContainerElHeight);
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


const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarMenu = document.querySelector('.navbar__menu');
navbarToggleBtn.addEventListener('click', function () {
  navberMenu.classList.toggle('open');
});


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
}


// const spyEls = document.querySelectorAll('section.scroll-spy');
// spyEls.forEach(function (spyEl) {
//     new ScrollMagic
//     .Scene({
//       triggerElement: spyEl,
//       triggerHook: .1
//     })
//     .setClassToggle(spyEl,'show')
//     .addTo(
//       new ScrollMagic.Controller()
//     );
//   });

  // // jQuery
  // $('.navbar__menu__item').live('click', function (){
  //   $('.navbar__menu__item').removeClass('active');
  //   $(this).addClass('active');
  // })



  // 1. 모든 섹션 요소들을 가지고 온다.
  // 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
  // 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

  // const sectionIds = [
  //   '#home',
  //   '#about',
  //   '#skills',
  //   '#work',
  //   '#testimonials',
  //   '#contact',
  // ];
  // const sections = sectionIds.map(id => document.querySelector(id));
  // const navItems = sectionIds.map(id =>
  //   document.querySelector(`[data-link="${id}"]`)
  // );
  
  // // const sections = sectionIds.map(function (id) {
  // //   document.querySelector(id);
  // // })
  // console.log(sections);
  // console.log(navItems);

  // let selectedNavItem = navItems[0];

  // const observerOptions = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.3,
  // };

  // const observerCallback = (entries, observer) => {
  //   entries.forEach(entry => {
  //     if(!entry.isIntersecting) {
  //       const index = sectionIds.indexOf(`#${entry.target.id}`);
  //       // console.log('index',index,'target.id',entry.target.id);

  //       // 스크롤링이 아래도되어서 페이지가 올라옴
  //       if(entry.boundingClientRect.y < 0) {
  //         selectedIndex = index + 1;
  //       } else {
  //         selectedIndex = index - 1;
  //       }
  //       selectedNavItem.classList.remove('active');
  //       const navItem = navItems[selectedIndex];
  //       navItem.classList.add('active');
  //     }
  //   });
  // };
  // const observer = new IntersectionObserver(observerCallback, observerOptions);
  // sections.forEach(section => observer.observe(section));

  const workBtnContainer = document.querySelector('.work__categories');
  const projectContainer = document.querySelector('.work__projects');
  const projects = document.querySelectorAll('.project');
  workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter === null) {
      return;
    }

    // Remove selection from the previous items and selected new one
    const actvie = document.querySelector('.category__btn.selected');
    actvie.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projects.forEach((project) => {
      console.log('type:',project.dataset.type);
      if ( filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
  });