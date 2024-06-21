const swiperHomeMenu = new Swiper(".swiper--menu", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperFacilities = new Swiper(".swiper--facilities", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperRoom = new Swiper(".RoomsSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

const swiperHomeFacilities = new Swiper(".swiper--facilities", {
  pagination: {
    el: ".swiper-pagination",
  },
});
