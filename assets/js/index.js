// Theme dark/clair et changement du logo selon le theme

const themeToggle = document.getElementById("theme-color");

const currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);
themeToggle.textContent = currentTheme === "light" ? "🌔" : "🌞";

// bascule

themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "light" ? "🌔" : "🌞";
    // themeToggle.textContent = newTheme === "light" ? "🌞" : "☀";
})


// Spinner ( Chargement avant l'affichage du site )

let spin = document.getElementById("spinner");
function closeSpin() {
    spin.style.display = "block";
    setTimeout(() => {
        spin.style.display = "none";
    }, 2000);
};
closeSpin();

// Date automatique au niveau du footer 

const firstDate = 2024;
const actuDate = new Date().getFullYear();
const textFooter = `© Copyright ${firstDate} - ${actuDate}`;
const footerAuthor = document.getElementById('footerAuthor').textContent = `${textFooter}`;


// Text replace ( changement de nom sur la banniere )

// var typingText = document.getElementById('oneb');
// var myTab = ["Jumael Kamga.", "HakimiCoder."];
// var arrayIndex = 1;

// function textReplace() {
//     setInterval(timer, 2000);
//     function timer() {
//         if (arrayIndex < myTab.length) {
//             typingText.innerHTML = myTab[arrayIndex];
//             arrayIndex = arrayIndex + 1;
//         }
//         else {
//             arrayIndex = 0;
//             typingText.innerHTML = myTab[arrayIndex];
//             arrayIndex = arrayIndex + 1;
//         }
//     }
// }

// textReplace();
















// Theme dark/clair et changement du logo selon le theme

// const themeToggle = document.getElementById("theme-color");

// const currentTheme = localStorage.getItem("theme") || "dark";
// document.documentElement.setAttribute("data-theme", currentTheme);
// // themeToggle.innerHTML= currentTheme === "light" ? `<i class="fa-brands fa-sun-o" aria-hidden="true">` : `<i class="fa - brands fa - moon - o" aria-hidden="true">`;
// themeToggle.innerHTML = currentTheme === "light" ? "☀" : "🌙";

// // bascule

// themeToggle.addEventListener("click", () => {
//     const isDark = document.documentElement.getAttribute("data-theme") === "dark";
//     const newTheme = isDark ? "light" : "dark";
//     document.documentElement.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//     // themeToggle.textContent = newTheme === "light" ? `<i class="fa-brands fa-sun-o" aria-hidden="true">` : `<i class="fa - brands fa - moon - o" aria-hidden="true">`;
//     themeToggle.textContent = newTheme === "light" ? "☀" : "🌙";
// })


// // Spinner ( Chargement avant l'affichage du site )

// let spin = document.getElementById("spinner");
// function closeSpin() {
//     spin.style.display = "block";
//     setTimeout(() => {
//         spin.style.display = "none";
//     }, 2000);
// };
// closeSpin();


// // Text replace ( changement de nom sur la banniere )

// var typingText = document.getElementById('oneb');
// var myTab = ["Jumael Kamga.", "HakimiCoder."];
// var arrayIndex = 1;

// function textReplace() {
//     setInterval(timer, 4000);
//     function timer() {
//         if (arrayIndex < myTab.length) {
//             typingText.innerHTML = myTab[arrayIndex];
//             arrayIndex = arrayIndex + 1;
//         }
//         else {
//             arrayIndex = 0;
//             typingText.innerHTML = myTab[arrayIndex];
//             arrayIndex = arrayIndex + 1;
//         }
//     }
// }

// textReplace();