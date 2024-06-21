const swiperRooms = new Swiper(".swiper--room", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    clickable: true,
    renderCustom: function (swiper, current, total) {
      let paginationHTML = "";
      for (let i = 0; i < total; i++) {
        let className = "swiper-pagination-custom-bullet";
        if (i === current - 1) {
          className += " swiper-pagination-custom-bullet-active";
        }
        paginationHTML +=
          '<span class="' +
          className +
          '" data-index="' +
          i +
          '">' +
          (i + 1) +
          "</span>";
      }
      return paginationHTML;
    },
  },
});
document
  .querySelector(".swiper--room .swiper-pagination")
  .addEventListener("click", function (event) {
    const index = event.target.getAttribute("data-index");
    if (index !== null) {
      swiperRooms.slideTo(parseInt(index));
    }
  });

document
  .querySelector(".swiper--roompage .swiper-pagination")
  .addEventListener("click", function (event) {
    const index = event.target.getAttribute("data-index");
    if (index !== null) {
      swiperRooms.slideTo(parseInt(index));
    }
  });
