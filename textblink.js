var blinkIndex=0;
blinkText ();

function blinkText() {
  var i;
  var texts = document.getElementsByClassName("animated-text");
  for (i= 0; i<texts.length; i++){
    texts[i].style.display = "none";
  }
  blinkIndex++;
  if (blinkIndex > texts.length) {
    blinkIndex = 1;
  }
  texts[blinkIndex-1].style.display = "block";
  setTimeout (blinkText, 4000);
}
