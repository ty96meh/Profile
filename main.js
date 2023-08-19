document.addEventListener("DOMContentLoaded", function() {
    resizeFunction();  
    window.onscroll = function() {
        scrollFunction()
    };
    window.onresize = function() {
        resizeFunction()
    };

 

});


function resizeFunction(){
    var links = document.querySelectorAll(".nav-list a");
  
    for (var i = 0; i < links.length; i++) {
      if (
        window.outerWidth < 659 
      ) {
        links[i].classList.add("width-adjust");
      } else {
        links[i].classList.remove("width-adjust");
      }
    }
}

function myFunction(x) {
  x.classList.toggle("change");
}

// @media screen and (max-width: 523px) {
//     .navbar-top {
//         font-size: 15px;
//         border-radius: 7.5px;
//     }
// }

// .navbar-top a {
//     font-size: 18px;
//     display:block; <---- edit to change by window width
// }


function scrollFunction() {
    var menus = document.querySelectorAll(".menu-container");

    var links = document.querySelectorAll(".navbar-top a");
  
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { 
      menus.forEach(function(menu) {
        menu.style.padding = '0px';
      });

      for (var i = 0; i < links.length; i++) {
        links[i].classList.add("scroll-down");
      }

    } else {
      menus.forEach(function(menu) {
        menu.style.padding = '6px 0px';
      });

      for (var i = 0; i < links.length; i++) {        
        links[i].classList.remove("scroll-down");
      }
    }
}

