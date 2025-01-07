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








// let type = document.getElementById("oneb");
// let type2 = document.getElementById("twob");

// // Show jumael kamga
// function showJumy() {
//     type.style.display = "block";
//     setInterval(() => {
//         type.style.display = "none";
//     }, 3000);
// }

// showJumy();

// // Show hakimicoder
// function showHakimi() {
//     type2.style.display = "block";
//     setInterval(() => {
//         type2.style.display = "none";
//     }, 3000);
// }

// showHakimi();