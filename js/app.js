/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//nav globle variable
const  navigation=document.querySelector("#navbar__list");
//section globle variable
const sections = Array.from(document.querySelectorAll("section"));


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//1. bulid navbar menu
function bulidNavbar() { 
    for (sec of sections) {
        navItem = document.createElement("li");
        navItem.innerHTML= `<a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`; 
        navigation.appendChild(navItem);

    }
}bulidNavbar();



//Active Class
const  activeLink=document.querySelectorAll("a");
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (activeNav) { 
        if (
            activeNav.getBoundingClientRect().top>=-400 &&
            activeNav.getBoundingClientRect().top<=150
          ) {
            activeNav.classList.add("your-active-class");
            document.querySelector(`a[href^="#${activeNav.id}"]`).classList.add("active");
            // navItem.style.cssText="background-color: rgba(136,203,171,1)";
            // activeNav.style.cssText="background-color: #2C3032";

        }   else {
            activeNav.classList.remove("your-active-class");
            document.querySelector(`a[href^="#${activeNav.id}"]`).classList.remove("active");
            // navItem.style.cssText="background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
            // activeNav.style.cssText="background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";

        }
    });
};

 //3. smooth scroll

 navigation.addEventListener("click", (tS) => { 
    tS.preventDefault(); 
     if (tS.target.dataset.nav) {
       document 
          .getElementById(`${tS.target.dataset.nav}`)
          .scrollIntoView(
            { behavior: "smooth" }
            );
        setTimeout(() => { 
             location.hash =`${tS.target.dataset.nav}`; 
        }, 170);
    }
});
