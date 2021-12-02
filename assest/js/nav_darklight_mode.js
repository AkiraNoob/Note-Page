const transitionTime = 250;

const lightmode = document.querySelectorAll('.nav__mode__btn1--lightmode')[0];
const darkmode = document.querySelectorAll('.nav__mode__btn1--darkmode')[0];
const bodyId = document.body;

const button = document.querySelectorAll('.nav__mode__btn1');
const lightBtn = button[0];
const darkBtn = button[1];

lightBtn.addEventListener("focusin", () => {
    lightBtn.style.boxShadow = "rgb(119, 172, 241) 0px 0px 0px 2px"
})
lightBtn.addEventListener("focusout", () => {
    lightBtn.style.boxShadow = "none";
})

darkBtn.addEventListener("focusin", () => {
    darkBtn.style.boxShadow = "rgb(119, 172, 241) 0px 0px 0px 2px"
})
darkBtn.addEventListener("focusout", () => {
    darkBtn.style.boxShadow = "none";
})


lightBtn.addEventListener("click", () => {
    lightmode.style.transform = "translateY(50%)";
    lightmode.style.opacity = "0";
    setTimeout(() => {
        darkmode.style.transform = "translateY(0%)";
        darkmode.style.opacity = "1";
        darkmode.style.zIndex = "2";
    }, transitionTime);
    setTimeout(() => {
        lightmode.style.transform = "translateY(-50%)";
    }, transitionTime * 2);
})
lightBtn.addEventListener("click", () => {
    bodyId.classList.toggle("light_mode",true);
})

darkBtn.addEventListener("click", () => {
    darkmode.style.transform = "translateY(50%)";
    darkmode.style.opacity = "0";
    setTimeout(() => {
        darkmode.style.zIndex = "-1";
        lightmode.style.transform = "translateY(0%)";
        lightmode.style.opacity = "1";
    }, transitionTime);
    setTimeout(() => {
        darkmode.style.transform = "translateY(-50%)";
    }, transitionTime * 2);
})
darkBtn.addEventListener("click", () => {
    bodyId.classList.toggle("light_mode",false);
})