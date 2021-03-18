var menu = document.getElementById("menu");

menu.addEventListener("click", function (e) {
  e.stopPropagation();
});
document
  .getElementsByClassName("menu-mobie")[0]
  .addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("active");
  });
document.addEventListener("click", function () {
  menu.classList.remove("active");
});
