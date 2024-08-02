var serviceSwiper = new Swiper('.serviceSwiper', {
  pagination: {
    el: '.swiper-pagination.service',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  slidesPerView: 'auto',
  spaceBetween: 39,
  loop: true,
  centeredSlides: true,
});

window.addEventListener('resize', function () {
  // 기존 인스턴스 삭제
  if (serviceSwiper) {
    serviceSwiper.destroy(true, true);
  }

  if (window.innerWidth <= 800) {
    serviceSwiper = new Swiper('.serviceSwiper', {
      pagination: {
        el: '.swiper-pagination.service',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
      slidesPerView: 1.5,
      spaceBetween: 39,
      loop: true,
      centeredSlides: true,
    });
  } else {
    serviceSwiper = new Swiper('.serviceSwiper', {
      pagination: {
        el: '.swiper-pagination.service',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
      slidesPerView: 'auto',
      spaceBetween: 39,
      loop: true,
      centeredSlides: true,
    });
  }
});
