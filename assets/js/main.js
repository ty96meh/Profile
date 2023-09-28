// document.addEventListener("DOMContentLoaded", function() {
//     resizeFunction(); 
//     scrollFunction();

//     window.onscroll = function() {
//         scrollFunction()
//     };
//     window.onresize = function() {
//         resizeFunction()
//     };

 

// });


// function resizeFunction(){
//     var menus = document.querySelectorAll(".menu-container");
//     var links = document.querySelectorAll(".nav-list a");
//     for (var i = 0; i < links.length; i++) {
//       if (window.outerWidth < 659) {
//         links[i].classList.add("width-adjust");
        
//         menus.forEach(function(menu) {
//           menu.style.display = 'inline-block';
//         });
//       } else {
//         links[i].classList.remove("width-adjust");
//         links[i].classList.remove("toggleChange");
//         menus.forEach(function(menu) {
//           menu.style.display = 'none';
//           menu.classList.remove("change");
//         });
//       }
//     }

// }


// function scrollFunction() {
//     var menus = document.querySelectorAll(".menu-container");

//     var links = document.querySelectorAll(".navbar-top a");
  
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { 
//       menus.forEach(function(menu) {
//         menu.style.padding = '0px';
//       });

//       for (var i = 0; i < links.length; i++) {
//         links[i].classList.add("scroll-down");
//       }

//     } else {
//       menus.forEach(function(menu) {
//         menu.style.padding = '6px 0px';
//       });

//       for (var i = 0; i < links.length; i++) {        
//         links[i].classList.remove("scroll-down");
//       }
//     }
// }




// function toggleFunction(x) {
//   x.classList.toggle("change");
//   var links = document.querySelectorAll(".nav-list a");
//     if (x.classList.contains("change") ) {
//       for (var i = 0; i < links.length; i++) {
//         links[i].classList.add("toggleChange");
//       }
//     } else {
//       for (var i = 0; i < links.length; i++) {
//         links[i].classList.remove("toggleChange");
//       }
//     }
    
// }
