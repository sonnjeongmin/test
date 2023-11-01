// $(document).ready(function(){
//     let tabMenu = $('.tabMenu li'),
//         tabSlider = $('.tabs > div')
//     tabMenu.click(function(){
//         tabMenu.removeClass('active')
//         $(this).addClass('active')
//         tabSlider.hide();
//         let target = $(this).find('a').attr("href")
//         $(target).show()
//     })
//     tabMenu.eq(0).trigger('click')
// })
// new Swiper(".sw-tabslider", {
//     // autoplay: true,
//     slidesPerView: 1,
//     spaceBetween: 30,
//     slidesPerGroup: 5,
//     navigation: {
//         nextEl:".btn-next",
//         prevEl:".btn-prev",
//     }
// })
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".sw-tabslider", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: swiper,
    },
  });