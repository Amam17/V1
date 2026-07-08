// ==========================================
// MegaNet Voucher Management
// Firebase Authentication
// ==========================================

import {

auth,

login,

logout

}

from "./firebase.js";

// Login Form

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const email =

document.getElementById("email").value.trim();

const password =

document.getElementById("password").value;

try{

await login(email,password);

window.location="../index.html";

}catch(error){

alert(error.message);

}

});

}

// Logout

const logoutBtn = document.getElementById("logout");

if(logoutBtn){

logoutBtn.addEventListener("click",async()=>{

try{

await logout();

window.location="../login.html";

}catch(error){

alert(error.message);

}

});

}

// Check Login

auth.onAuthStateChanged?.((user)=>{

if(user){

console.log("Logged in:",user.email);

}else{

console.log("Not logged in");

}

});
