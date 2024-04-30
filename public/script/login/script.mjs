import { defaultUrl } from "../global.mjs";

const username = document.getElementById("login_username");
const password = document.getElementById("login_password");
const popup = document.getElementById("popup");
const popupIcon = document.getElementById("popup-icon");
const popupText = document.getElementById("popup-text");


export const handleLogin = async () => {
    const data = {
        username: username.value,
        password: password.value,
      };
  
      try {
        const response = await fetch(`${defaultUrl}/api/auth/signin`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();

        const msg = result.data || result.msg;
    
        if (popup.classList.contains("popup__hidden")) {
          popup.classList.remove("popup__hidden");
    
          if (!result.success || result.success !== 1) {
            popupIcon.style.color = "#edc527";
          } else {
            popupIcon.style.color = "#0cc21a";
          }
    
          popupText.innerText = `${msg}`;
        }
    
        setTimeout(() => {
          popup.classList.add("popup__hidden");
        }, 5000);
    
        if (result.success) {
          if (result.success === 1) {
            setTimeout(function () {
              window.location.href = "/dashboard";
            }, 1000);
          }
        }
      } catch (error) {
        if (popup.classList.contains("popup__hidden")) {
          popup.classList.remove("popup__hidden");
    
          popupIcon.style.color = "#d95151";
          popupText.innerText = `An error occurred try again if issue persists please check your internet connectivity or contact support`;
        }
        setTimeout(() => {
          popup.classList.add("popup__hidden");
        }, 5000);
        console.error("Error:", error);
        return error;
      }
};
