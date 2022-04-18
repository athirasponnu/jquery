$(document).ready(function () {
  $('.tab-menu-link').click(function () {
    $('.tab-menu-link').removeClass('active');
    $(this).addClass('active');
    tab = $(this).attr('href');
    $('.tabs .active').removeClass('active');
    $(tab).addClass('active');
  });
});