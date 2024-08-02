var custSwiper = new Swiper('.custSwiper', {
  slidesPerView: 5,
  spaceBetween: 76,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next.cust',
    prevEl: '.swiper-button-prev.cust',
  },
});

window.addEventListener('resize', function () {
  if (custSwiper) custSwiper.destroy(true, true);
  if (window.innerWidth <= 800) {
    custSwiper = new Swiper('.custSwiper', {
      slidesPerView: 3,
      spaceBetween: 76,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next.cust',
        prevEl: '.swiper-button-prev.cust',
      },
    });
  } else {
    custSwiper = new Swiper('.custSwiper', {
      slidesPerView: 5,
      spaceBetween: 76,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next.cust',
        prevEl: '.swiper-button-prev.cust',
      },
    });
  }
});
