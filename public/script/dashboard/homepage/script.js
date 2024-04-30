import { getMyDetails } from "./script.mjs";
import { toggleOverlay } from "./toggleoverlay/script.mjs";


// Get your details
const user = document.getElementById("user");

getMyDetails(user);


// Toggle add Item popup
const addItemBtn = document.getElementById("additem");
const closeOverlayBtn = document.getElementById("overlay-close");
const form = document.getElementById("form");

addItemBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleOverlay();
  form.innerHTML = `              
        <div class="form__group">
          <input type="text" name="" id="" placeholder="Item Name">
        </div>
        <div class="form__group">
          <input class="input__small" type="text" name="" id="" placeholder="Item Price">
          <input class="input__small" type="number" name="" id="" placeholder="Item stock">
        </div>
        <div class="form__group">
          <input class="submit" type="submit" value="Add Item">
        </div>
          `;
});

closeOverlayBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleOverlay();
});


//Toggle addItem popup mobile
const addItemMinBtn = document.getElementById("additem-min");
const check = document.getElementById("check");

addItemMinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  check.checked = false;
  toggleOverlay();
  form.innerHTML = `              
        <div class="form__group">
          <input type="text" name="" id="" placeholder="Item Name">
        </div>
        <div class="form__group">
          <input class="input__small" type="text" name="" id="" placeholder="Item Price">
          <input class="input__small" type="number" name="" id="" placeholder="Item stock">
        </div>
        <div class="form__group">
          <input class="submit" type="submit" value="Add Item">
        </div>
          `;
});









// Toggle add User popup
const addUserBtn = document.getElementById("adduser");

addUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleOverlay();
  form.innerHTML = `              
        <div class="form__group">
          <input type="text" name="" id="" placeholder="username">
        </div>
        <div class="form__group">
          <input class="submit" type="submit" value="Add User">
        </div>
          `;
});

closeOverlayBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleOverlay();
});


//Toggle addUser popup mobile
const addUserMinBtn = document.getElementById("adduser-min");

addUserMinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  check.checked = false;
  toggleOverlay();
  form.innerHTML = `              
        <div class="form__group">
          <input type="text" name="" id="" placeholder="username">
        </div>
        <div class="form__group">
          <input class="submit" type="submit" value="Add User">
        </div>
          `;
});
