$(document).ready(function()
{
 $(".btn").click(function(){
    $(this).hide();
    $(".pop-up-window").addClass("active pop-up");
    $(".pop-up-content").addClass("active pop-up");
 });
 $(".ok-btn").click(function(){
    $(".btn").show();
    $(".pop-up-window").removeClass("active");
    $(".pop-up-content").removeClass("active");
 });
});