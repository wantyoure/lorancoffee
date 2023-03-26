
$(function () {
  $('.javascript').animate({
    left: 550,
    opacity: 1
  }, 1000)

});
$(window).scroll(function () {
  if ($(this).scrollTop() > 600) {
    $('.top').fadeIn();
  } else {
    $('.top').fadeOut();
  }

  $('.top').click(function () {
    $('html, body').stop(true).animate({
      scrollTop: 0
    }, 400);
  });
});

