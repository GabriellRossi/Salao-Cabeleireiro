/* Abre e fecha o menu quando clicar no icone */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}


/* Quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll('ul li a')

for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}


/* Mudar o header da página quando der scroll */

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener('click', function() {
  if(window.scrollY >= navHeight) {

    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // Menor que a altura do header
    header.classList.remove('scroll')
  }
})



/* TESTIMONIALS CAROUSEL SLIDER SWIPER */


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
