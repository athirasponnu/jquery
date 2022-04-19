$(document).ready(function()
{
   $(".btn").click(function()
   {
      $(this).hide();
      $(".pop-up-content").addClass("active ");
      $(".pop-up-content").parent().addClass("active "); 
   });
   $(".ok-btn").click(function()
   {
      $(".btn").show();
      $(".pop-up-content").removeClass("active");
      $(".pop-up-content").parent().removeClass("active ");  
   });
   $(".fa-circle-xmark").click(function()
   {
      $(".btn").show();
      $(".pop-up-content").removeClass("active");
      $(".pop-up-content").parent().removeClass("active "); 
   });
});