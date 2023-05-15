let sideMenu = document.getElementById("sideMenu");
let mainContent = document.getElementById("mainContent");

function openMenu() {
  sideMenu.style.right = "0";
  mainContent.style.backgroundColor = "#00000033";
}

function closeMenu() {
  sideMenu.style.right = "-250px";
  mainContent.style.backgroundColor = "";
}
