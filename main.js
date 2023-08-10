window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementByClassName("navbar").style.padding = "30px 10px";
  } else {
    document.getElementByClassName("navbar").style.padding = "80px 10px";
  }
}