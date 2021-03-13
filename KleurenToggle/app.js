
let getBtnToggle = document.querySelector(".toggle-menu__button");
let getMenuNavToggle = document.querySelector(".toggle-menu__nav");
let getMenuNavToggle2 = document.querySelector(".toggle-menu__nav--animation");
let getLiNavMenu = document.querySelectorAll("li");
let getH1 = document.querySelector(".toggle-menu__bg-name");

let mouseOver = function () {
    getMenuNavToggle.classList.toggle("toggle-menu__nav--animation");
    getMenuNavToggle.style.transform = "translateX(0px)";
    getMenuNavToggle.style.transition = "all 1s ease-in";
}
let mouseOut = function () {
    getMenuNavToggle.classList.toggle("toggle-menu__nav--animation");
    getMenuNavToggle.style.transform = "translateX(-340px)";
    getMenuNavToggle.style.transition = "all 1s";
}

let changeText = function (text) {
    getH1.innerHTML = text;
}

let setBackgroundChanges = function (backgroundColor, elementId) {
    document.body.style.backgroundColor = (backgroundColor);
    getMenuNavToggle.style.transform = "translateX(-340px)";
    getMenuNavToggle.style.transition = "all 0s";
    document.getElementById(elementId).checked = true;
}

getBtnToggle.addEventListener("mouseover", mouseOver);

getBtnToggle.addEventListener("mouseout", mouseOut);

// normal links

getLiNavMenu[0].addEventListener("click", function () {
    setBackgroundChanges("gray", "home");
    changeText("Home");
});
getLiNavMenu[1].addEventListener("click", function () {
    setBackgroundChanges("red", "red");
    changeText("Red");
})
getLiNavMenu[2].addEventListener("click", function () {
    setBackgroundChanges("orange", "orange");
    changeText("Orange");
})
getLiNavMenu[3].addEventListener("click", function () {
    setBackgroundChanges("purple", "purple");
    changeText("Purple");
})
getLiNavMenu[4].addEventListener("click", function () {
    setBackgroundChanges("green", "green");
    changeText("Green");
})

//Radios button
getLiNavMenu[5].addEventListener("click", function () {
    setBackgroundChanges("gray", "home");
    changeText("Home");
})
getLiNavMenu[6].addEventListener("click", function () {
    setBackgroundChanges("red", "red");
    changeText("Red");
})
getLiNavMenu[7].addEventListener("click", function () {
    setBackgroundChanges("orange", "orange");
    changeText("Orange");
})
getLiNavMenu[8].addEventListener("click", function () {
    setBackgroundChanges("purple", "purple");
    changeText("Purple");
})
getLiNavMenu[9].addEventListener("click", function () {
    setBackgroundChanges("green", "green");
    changeText("Green");

})

window.addEventListener("keydown", function (keyboard) {
    if (keyboard.key === "1") {
        setBackgroundChanges("gray", "home");
        changeText("Home");
    }
    if (keyboard.key === "2") {
        setBackgroundChanges("red", "red");
        changeText("Red");
    }
    if (keyboard.key === "3") {
        setBackgroundChanges("orange", "orange");
        changeText("Orange");
    }
    if (keyboard.key === "4") {
        setBackgroundChanges("purple", "purple");
        changeText("Purple");
    }
    if (keyboard.key === "5") {
        setBackgroundChanges("green", "green");
        changeText("Green");
    }
})



