var $innerBody;

$(document).ready(function() {

  $innerBody = $('#inner-body');

  $('.colour-circle').on('mouseenter', function(){
    var colourToSet = $(this).css("background-color");
    fadeBackgroundIn(colourToSet);
  });
});

function onClickEnter(){
  $('#intro-container').fadeOut(2000);
  $('#main-container').fadeIn(2000);
}

function fadeBackgroundIn(colourToSet){
    var previousInnerBodyColour = $innerBody.css("background-color");
    $('body').css("background-color", previousInnerBodyColour);
    $innerBody.css("display", "none");
    $innerBody.css("background-color", colourToSet);
    $innerBody.fadeIn(500);
}
