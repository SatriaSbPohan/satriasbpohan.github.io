const closebtn = document.getElementsByClassName("close")[0];
const menubox = document.getElementsByClassName("menu-box")[0];
const menu2 = document.getElementsByClassName("menu2")[0];
const logo = document.getElementsByClassName("logo")[0];

closebtn.addEventListener("click", closemenu);
menubox.addEventListener("click", menu);

function closemenu() {
    menu2.style.display = "none";
    menubox.style.display = "block";
}

function menu() {
    menu2.style.display = "grid";
    menubox.style.display = "none";
}