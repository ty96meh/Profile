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
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Shadow Header //
const shadowHeader = () => {
    const header = document.getElementById('header');
    
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                        : header.classList.remove('shadow-header'); //conditional (ternary) operator, alternative to an if...else

}
window.addEventListener('scroll', shadowHeader);

// Email JS //
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) =>{
    e.preventDefault() //preventDefault() = cancels the event if it is cancelable

    //sercive - templateID - #form - publicKey
    emailjs.sendForm('service_3qfq43e','template_uamgfws','#contact-form','9tVhafE9UhNlQkKHz')
    .then(() =>{
        //show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        //remove message after 5 sec
        setTimeout(()=> {
            contactMessage.textContent = ''
        }, 5000)

        //clear input field
        contactForm.reset()
    }, () => {
        //show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    
    })
} // using.then from the promise object, wait for fulfilled promise(success/error callback)

contactForm.addEventListener('submit', sendEmail);

// Show Scroll Up //
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// Scroll Sections Active Link //
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        }        
    })
}

window.addEventListener('scroll', scrollActive);




// Dark Mode //
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line'; //<i class="ri-sun-line"></i>

// Previously selected topic (if selected)
const selectedTheme = localStorage. getItem('selected-theme'); //localStorage object allows you to save key/value pairs in the browser
const selectedIcon = localStorage. getItem('selected-icon'); 

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'ri-moon-line' : 'ri-sun-line'

// Validate if the user previously choose a topic
if(selectedTheme){
    //if the validate is fulfilled, we ask what the issue was to know if we activated or not.
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remove dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    //Save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// Scroll reveal animation //
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400
    // reset: true //animation repeat
})

sr.reveal(`.home__perfil, .about__image, 
           .contact__mail`, {origin: 'right'});

sr.reveal(`.home__name, .home__info, 
           .about__container .section__title-1, .about__info,
           .contact__social, .contact__data`, {origin: 'left'});

sr.reveal(`.services__card, .projects__card`, {interval:100});
