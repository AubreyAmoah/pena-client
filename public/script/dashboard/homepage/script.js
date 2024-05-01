import { addUser } from "./addUser/script.mjs";
import { addItem } from "./additem/script.mjs";
import { getMyDetails } from "./script.mjs";
import { toggleOverlay } from "./toggleoverlay/script.mjs";


function itemForm () {
  const itemName = document.getElementById("name");
  const itemPrice = document.getElementById("price");
  const itemStock = document.getElementById("stock");
  
  addItem(itemName, itemPrice, itemStock);
}

function userForm () {
  const username = document.getElementById('username');

  addUser(username)
}


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
          <input type="text" name="" id="name" placeholder="Item Name">
        </div>
        <div class="form__group">
          <input class="input__small" type="text" name="" id="price" placeholder="Item Price">
          <input class="input__small" type="number" name="" id="stock" placeholder="Item stock">
        </div>
        <div class="form__group">
          <input class="submit" type="submit" value="Add Item" id = "submit-item">
        </div>
          `;

  const submitItem = document.getElementById("submit-item");

  submitItem.addEventListener("click", (e) => {
    e.preventDefault();
    itemForm()
  });
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
          <input type="text" name="" id="name" placeholder="Item Name">
        </div>
        <div class="form__group">
          <input class="input__small" type="text" name="" id="price" placeholder="Item Price">
          <input class="input__small" type="number" name="" id="stock" placeholder="Item stock">
        </div>
        <div class="form__group">
          <input class="submit" type="submit" value="Add Item" id="submit-item">
        </div>
          `;

  const submitItem = document.getElementById("submit-item");

  submitItem.addEventListener("click", (e) => {
    e.preventDefault();
    itemForm()
  });
});





// Toggle add User popup
const addUserBtn = document.getElementById("adduser");

addUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleOverlay();
  form.innerHTML = `              
        <div class="form__group">
          <input type="text" name="" id="username" placeholder="username">
        </div>
        <div class="form__group">
          <input class="submit" type="submit" value="Add User" id="submit-user">
        </div>
          `;

          const submitUser = document.getElementById('submit-user');

          submitUser.addEventListener('click', (e) => {
            e.preventDefault();
            userForm();
          })
});

//Toggle addUser popup mobile
const addUserMinBtn = document.getElementById("adduser-min");

addUserMinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  check.checked = false;
  toggleOverlay();
  form.innerHTML = `              
        <div class="form__group">
          <input type="text" name="" id="username" placeholder="username">
        </div>
        <div class="form__group">
          <input class="submit" type="submit" value="Add User" id="submit-user">
        </div>
          `;

          const submitUser = document.getElementById('submit-user');

          submitUser.addEventListener('click', (e) => {
            e.preventDefault();
            userForm();
          })
});
