// Mobile navigation
const mainMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .menu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
    console.log("items");
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
  console.log("opened");
}
function close() {
  mainMenu.style.top = "-100%";
  console.log("closed");
}
