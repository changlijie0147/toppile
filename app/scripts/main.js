$(function () {
  $('.menu').on('mouseenter',function () {
    $('.icon-menu').css("transform", "rotate(90deg)");
    $('.menu-extend').fadeIn();
  });
  $('.menu-extend').on('mouseleave',function () {
    $('.icon-menu').css("transform", "none");
    $('.menu-extend').fadeOut();
  });
});
