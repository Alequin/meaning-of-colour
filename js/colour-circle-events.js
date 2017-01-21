
const FADE_IN_TIME = 500;

$(document).ready(function(){

  $('.colour-circle').on("mousedown", function(){
    $(this).width('65px');
    $(this).height('65px');

    $(this).css("box-shadow", "none");
    $(this).css("-moz-box-shadow", "none");
    $(this).css("-webkit-box-shadow", "none");
    $(this).css("border-color", "grey");
  });

  $('.colour-circle').on("mouseenter", function(){
    $(this).width('67px');
    $(this).height('67px');

    $(this).css("box-shadow", "0 0 5px 1px");
    $(this).css("-moz-box-shadow", "0 0 5px 1px");
    $(this).css("-webkit-box-shadow", "0 0 5px 1px");
    $(this).css("border-color", "transparent");
  });
});

function fadeBackgroundIntoColour(colourToSet){

  colourToSet = colourToSet.toLowerCase();
  var $innerBody = $("#inner-body");

  var previousInnerBodyColour = $innerBody.css("background-color");
  $('body').css("background-color", previousInnerBodyColour);
  $innerBody.css("display", "none");
  $innerBody.css("background-color", colourToSet);
  $innerBody.fadeIn(FADE_IN_TIME);
}

function setTitleText(textToSet){
  var $title = $("#colour-description-title");
  $title.stop(true, true);

  $title.fadeOut(FADE_IN_TIME/2);

  setTimeout(function() {
    document.getElementById('colour-description-title').innerHTML = textToSet;
  },FADE_IN_TIME/2);

  $title.fadeIn(FADE_IN_TIME/2)
}

/**
 * Set the title and background-color of the page. The method should only
 * be used with a single parameter if the gievn colourName is a valid
 * colour useble with the css atribute background-color: (not case sensitive)
*/
function transitionPageToColour(colourName, colourCode){
  setTitleText(colourName);
  if(colourCode !== undefined){
    fadeBackgroundIntoColour(colourCode);
  }else{
    fadeBackgroundIntoColour(colourName);
  }
}

function onmousedownYellow(){
  transitionPageToColour("Yellow");
}

function onmousedownGreen(){
  transitionPageToColour("Green");
}

function onmousedownBlue(){
  transitionPageToColour("Blue");
}

function onmousedownPurple(){
  transitionPageToColour("Purple");
}

function onmousedownPink(){
  transitionPageToColour("Pink", "rgb(255,105,180)");
}

function onmousedownRed(){
  transitionPageToColour("Red");
}

function onmousedownOrange(){
  transitionPageToColour("Orange");
}

function onmousedownBrown(){
  transitionPageToColour("Brown", "rgb(139,69,19)");
}

function onmousedownBlack(){
  transitionPageToColour("Black");
}

function onmousedownWhite(){
  transitionPageToColour("White");
}
