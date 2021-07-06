let toggleNavStatus = false;
let getSidebar = document.querySelector(".nav");
let setToColor = document.querySelector("body");

let toggleNav = function(){
    if (toggleNavStatus === false){
        getSidebar.style.visibility = "visible";
        toggleNavStatus = true;
    }  

else if (toggleNavStatus === true) {
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
}
}

let backgroundToggleBlue = function(){
    setToColor.style.backgroundColor = "deepskyblue";
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
}

let backgroundToggleRed = function(){
    setToColor.style.backgroundColor = "red";
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
}

let backgroundToggleYellow = function(){
    setToColor.style.backgroundColor = "yellow";
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
}