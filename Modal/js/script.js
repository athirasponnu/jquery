$(document).ready(function()
{
 $(".btn").click(function()
   {
      $(this).hide();
      $(".pop-up-content").addClass("active ");
   });
 $(".ok-btn").click(function()
   {
      $(".btn").show();
      $(".pop-up-content").removeClass("active");
   });
});