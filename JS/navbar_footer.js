/**Adds a white stripe over the current page on the navbar*/
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

/** increase icon size */
function onEnter(icontype) {
    icontype.style.transform = "scale(1.2,1.2)"
}

/** reset icon size */
function onLeave(icontype) {
    icontype.style.transform = "";
}

var contactIcon = document.getElementById("contact"),
    instaIcon = document.getElementById("insta");

contactIcon.addEventListener("mouseenter", function () { onEnter(contactIcon); });
instaIcon.addEventListener("mouseenter", function () { onEnter(instaIcon); });
contactIcon.addEventListener("mouseleave", function () { onLeave(contactIcon); });
instaIcon.addEventListener("mouseleave", function () { onLeave(instaIcon); });
