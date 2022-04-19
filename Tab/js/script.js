$(document).ready(function () 
{
  $('.tab-menu-link').click(function () 
  {
    $(".tab-menu li").removeClass("active");
    $('.tab-menu-link').removeClass('active');
    $(this).addClass('active');
    tab = $(this).attr('href');
    $('.tabs .active').removeClass('active');
    $(this).parent("li").addClass("active");
    $(tab).addClass('active');
  });
});