import { handleSignup } from "./script.mjs";


const signupBtn = document.getElementById("signup");

signupBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    handleSignup();
});