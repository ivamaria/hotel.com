const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type:'bullets',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



const tabsLink = document.querySelectorAll('.tabs__link');

const tabsContent = document.querySelectorAll('.tabs__content');
tabsLink.forEach(function(tabsBtn){

tabsBtn.addEventListener('click', function(e) {
const path = e.currentTarget.dataset.path;

tabsContent.forEach(function(tabsItem){
tabsItem.classList.remove('tabs__content_active');
});

document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content_active');
});
});

$( function() {
  $( ".acc-list" ).accordion({
      header: ".acc-item__button",
      active: true,
      heightStyle: "content"

  });
} );

$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.nav__list').toggleClass('active');
  });
});


//const btn = document.querySelector('.header__burger');
//const menu = document.querySelector('.header__menu');

//btn.addEventListener('click', () => {
//menu.classList.toggle('active')
//})
