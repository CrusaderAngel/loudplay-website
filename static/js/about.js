if (window.screen.width > 421) {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: false,
    },
  })
} else {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.45,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: false,
    },
  })
}
