import { handleLogin } from "./script.mjs";

const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    handleLogin();
});