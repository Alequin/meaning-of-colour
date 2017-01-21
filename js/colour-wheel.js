
function onClickEnter(){
  $('#intro-container').fadeOut(2000);
  $('#main-container').fadeIn(2000);
}

$(document).ready(function() {

  $('.colour-circle').on('mouseenter', function(){
    var colourToSet = $(this).css("background-color");
    $('body').css("background-color", colourToSet);
  });
});
