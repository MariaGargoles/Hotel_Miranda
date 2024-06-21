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

const swiperHomeRoom = new Swiper(".swiper--rooms", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperHomeFacilities = new Swiper(".swiper--facilities", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperExtraMenu = new Swiper(".swiper--extramenu", {
  spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination--extramenu",
    clickable: true,
  },
});
