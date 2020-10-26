// Adds a white stripe over the current page on the navbar
function pagebar() {
    var links = document.getElementById('navbar').getElementsByTagName("a");
    var current = location.href;
    var whiteLineDiv = document.createElement("div");
    whiteLineDiv.className = "whiteLine"

    for (var i = 0; i < links.length; i++) {
        if (links[i].href === current) {
            links[i].appendChild(whiteLineDiv)
        }
    }
}
window.onload = pagebar;

// Creates a pop-up menu (small screen feature)
var menuform = document.createElement("div")
menuform.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
menuform.style.position = "fixed"
menuform.style.width = "140px"
menuform.style.height = "200px"
menuform.style.top = "50px"
menuform.style.left = "0px"
menuform.style.zIndex = "3"
menuform.style.display = "none"

var navbar = document.getElementById("navbar")
navbar.appendChild(menuform)

links = document.getElementById('navbar').getElementsByTagName("a")
var menuLinks = document.createElement("div")
menuLinks.className = "menuLinks"

for (var i = 0; i < links.length; i++) {
    menuLinks.appendChild(links[i].cloneNode(true))
    menuLinks.getElementsByTagName('a')[i].className = "menupage"
}


// Reveals the pop-up menu on click (small screen feature)
function menuForm() {
    if (menuform.style.display == "none") {
        menuform.style.display = "flex"
        menuform.style.flexDirection = "column"
        menuform.style.alignItems = "center"
        menuform.style.justifyContent = "center"
        menuform.appendChild(menuLinks)
    }
    else {
        menuform.style.display = "none"
    }
}

function checkWindowWidth() {
    if (screen.width > "800") {
        menuform.style.display = "none"
    }
}
window.onresize = checkWindowWidth


// Increase icon size
function onEnter(icontype) {
    icontype.style.transform = "scale(1.2,1.2)"
}
// Reset icon size
function onLeave(icontype) {
    icontype.style.transform = "";
}

// Check if cursor is over icon
var contactIcon = document.getElementById("contact"),
    instaIcon = document.getElementById("insta");
menuIcon = document.getElementById("menuIcon")

contactIcon.addEventListener("mouseenter", function () { onEnter(contactIcon); });
instaIcon.addEventListener("mouseenter", function () { onEnter(instaIcon); });
contactIcon.addEventListener("mouseleave", function () { onLeave(contactIcon); });
instaIcon.addEventListener("mouseleave", function () { onLeave(instaIcon); });
menuIcon.addEventListener("mouseenter", function () { onEnter(menuIcon); });
menuIcon.addEventListener("mouseleave", function () { onLeave(menuIcon); });
