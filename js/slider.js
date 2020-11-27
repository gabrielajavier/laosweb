/*========== SLICK GALERIA ==========*/
$(document).ready(function(){
  $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
  });
});
