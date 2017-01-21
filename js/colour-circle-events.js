
var isSelectAColourTextHidden = false;
const FADE_IN_TIME = 500;

$(document).ready(function(){

  $('.colour-circle').on("mousedown", function(){
    if(!isSelectAColourTextHidden){
      $('#select-a-colour-text').remove();
      isSelectAColourTextHidden = true;
    }
  });

  $('.colour-circle').on("mousedown mouseout", function(){

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
  var $innerBody = $("#inner-body-1");

  var previousInnerBodyColour = $innerBody.css("background-color");
  $('body').css("background-color", previousInnerBodyColour);
  $innerBody.css("display", "none");
  $innerBody.css("background-color", colourToSet);
  $innerBody.fadeIn(FADE_IN_TIME);
}

function setTitleText(textToSet){
  setTextInElement('colour-description-title', textToSet);
}

function setDescriptionText(textToSet){
  setTextInElement('colour-description-text', textToSet);
}

function setTextInElement(elementID, textToSet){
  var $element = $('#'+elementID);
  $element.stop(true, true);

  $element.fadeOut(FADE_IN_TIME/2);

  setTimeout(function() {
    document.getElementById(elementID).innerHTML = textToSet;
  },FADE_IN_TIME/2);

  $element.fadeIn(FADE_IN_TIME/2)
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
  setDescriptionText(descriptionTexts[0]);
}

function onmousedownGreen(){
  transitionPageToColour("Green");
  setDescriptionText(descriptionTexts[1]);
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
