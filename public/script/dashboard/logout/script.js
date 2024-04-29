import { handleLogout } from "./script.mjs"

const logoutBtn = document.getElementById('logout')

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    handleLogout();
})