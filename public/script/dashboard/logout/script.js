import { handleLogout } from "./script.mjs"

const logoutBtn = document.getElementById('logout');
const logoutMinBtn = document.getElementById('logout-min');
const check = document.getElementById('check');
const popup = document.getElementById("popup");
const popupIcon = document.getElementById("popup-icon");
const popupText = document.getElementById("popup-text");

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    handleLogout(popup, popupIcon, popupText);
})

logoutMinBtn.addEventListener('click', (e) => {
    e.preventDefault()
    check.checked = false;
    handleLogout(popup, popupIcon, popupText);
})