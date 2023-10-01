// Show Menu //
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


// Menu Show //
/* Validate if constant exists */ 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}


// Menu Hidden //
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

// Remove Menu Mobile //
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Shadow Header //

// Email JS //

// Show Scroll Up //

// Scroll Sections Active Link //

// Dark Mode //














// Previous
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


