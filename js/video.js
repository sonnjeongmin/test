var swiper = new Swiper(".sw-tabslider", {
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
});


$(document).ready(function(){

    $('.list li').click(function(){
      $('.modal').addClass('show')
      $('.modal').append(`<div class="item_box">
      <iframe src="https://www.youtube.com/embed/${$(this).data("video")}?rel=0&playsinline=1&autoplay=1" frameborder="0" allowfullscreen>
      </iframe>
      </div>`)
  
    })
  
    $('.modal .dim').click(function(){
      $('.modal .item_box').remove()
      $('.modal').removeClass('show')
    })
  
    $('.list img').mouseover(function(){
      $(this).attr('src', $(this).data('animated'))
    })
    $('.list img').mouseout(function(){
      $(this).attr('src', $(this).data('static'))
    })
  
  })

