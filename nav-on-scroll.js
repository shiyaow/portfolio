var prev_scroll_pos = window.pageYOffset;
var navigation_settings = document.getElementById("nav-top");

window.onscroll = function() {
  var current_scroll_pos = window.pageYOffset;

  if(prev_scroll_pos < current_scroll_pos) {
    navigation_settings.style.backgroundColor = "rgba(25, 25, 23, 0.7)";
    navigation_settings.style.paddingTop = "0";
  }
  else if(current_scroll_pos <= 15) {
    navigation_settings.style.backgroundColor = "transparent";
    navigation_settings.style.paddingTop = "3.5%";
  }
  prev_scroll_pos = current_scroll_pos;
}
