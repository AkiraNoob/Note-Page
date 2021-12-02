const menu = document.querySelectorAll(".nav__mode__menu")[0];
const menuBtn = document.querySelectorAll(".nav__mode__btn2")[0];

menuBtn.addEventListener("click", () => {
    if(menu.style.transform === "scale(0)") {
        menu.style.transform = "scale(1)";
    } else {
        menu.style.transform = "scale(0)";
    }
});
