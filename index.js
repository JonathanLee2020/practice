function openMenu () {
    document.body.classList += " open--menu"
}

function closeMenu() {
    document.body.classList.remove("open--menu")
}
// document.body.classList += " isDark";
// let isDark = true;

// function toggleDark() {
//     if (isDark === true) {
//         document.body.classList.remove("isDark");
//         isDark = !isDark;
//         console.log(`isDark is now ${isDark}`)
//     } else {
//         document.body.classList += " isDark";
//         isDark = !isDark;
//     }
// }

// document.body.classList += " dark-mode"
let isDark = false;

function darkMode () {
    if (isDark === true) {
        document.body.classList.remove("dark-mode");
        isDark = !isDark;
        console.log("dark is now removed")
        // document.body.classList.remove("dark-mode");
    } else {
        console.log("time to add dark baby");
        document.body.classList += " dark-mode";
        isDark = !isDark;
    }

    let timeOfDayText = document.querySelector(".time-of-day");
    if (!isDark) timeOfDayText.textContent = "Morning";
    else timeOfDayText.textContent = "Evening";
}

let isModalOpen = false;

function toggleModal() {
    if (!isModalOpen) {
        document.body.classList += " modalOpen";
        isModalOpen = !isModalOpen;
        console.log("our modal is now open")
    } else {
        document.body.classList.remove("modalOpen");
        isModalOpen = !isModalOpen;
        console.log("our modal is now closed")
    }
}