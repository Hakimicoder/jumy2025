// AUTHOR Jumael Kamga & EmailJS.com 
// Initialisation EmailJS suivi de mon ID
//  Author : Jumael Kamga 
//  Type : Personal Portfolio 
//  Date : Tuesday 24 décembre 2024, 17:03:19
//  Tools : Html, Css, Tailwind Css, Javsacript
    // (Css Animation, ScrollyJS, Email.JS) 
//  Version : 1.0



let spin = document.getElementById("spinner");
// console.log(spin);
function closeSpin() {
    spin.style.display = "block";
    setTimeout(() => {
        spin.style.display = "none";
    }, 2000);
};
closeSpin();