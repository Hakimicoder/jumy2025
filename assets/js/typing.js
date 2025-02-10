// AUTHOR Jumael Kamga & EmailJS.com 
// Initialisation EmailJS suivi de mon ID
//  Author : Jumael Kamga 
//  Type : Personal Portfolio 
//  Date : Tuesday 24 décembre 2024, 17:03:19
//  Tools : Html, Css, Tailwind Css, Javsacript
    // (Css Animation, ScrollyJS, Email.JS) 
//  Version : 1.0



var typingText = document.getElementById('oneb');
var myTab = ["Jumael Kamga.", "HakimiCoder."];
var arrayIndex = 1;

function textReplace() {
    setInterval(timer, 4000);
    function timer() {
        if (arrayIndex < myTab.length) {
            typingText.innerHTML = myTab[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }
        else {
            arrayIndex = 0;
            typingText.innerHTML = myTab[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }
    }
}

textReplace();