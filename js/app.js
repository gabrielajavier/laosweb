/*========== CAMBIO DE COLOR MENU ==========*/
$(window).scroll(function(){
  var prueba = $(this).scrollTop();
  if (prueba > 100) {
    $(".navbar").addClass("scroll");
  }
  else if (prueba < 100) {
    $(".navbar").removeClass("scroll");
   }
});

$('.navbar-toggle').on('click',function(){
  $('body').toggleClass('fixed');
})


/*========== EFECTO SMOTH ==========*/

$(function() {
$('nav a').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : s('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
})

$(function() {
$('.scroll-wrapper a').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : s('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
})