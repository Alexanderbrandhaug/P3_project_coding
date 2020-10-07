// This JavaScript ...

function pagebar() {
    // Adds an white stripe over the current page on the navbar.
    var links = document.getElementById('navbar').getElementsByTagName("a");
    var current = location.href;
    var whiteLineDiv = document.createElement("div");
    whiteLineDiv.className = "whiteLine"

    for (var i = 0; i < links.length; i++) {
        if (links[i].href === current) {
            links[i].appendChild(whiteLineDiv)
        }
    }


    // Creates an <a>-element containing an <img>-element for the instagram icon
    var instaLink = document.createElement("a");
    instaLink.href = "https://instagram.com/strikktilelea?igshid=1qrrqqmczzgrx"
    instaLink.target = "_blank"

    var imgInstaIcon = document.createElement("img");
    imgInstaIcon.src = "images/instalogo.png";
    imgInstaIcon.className = "icon"
    instaLink.appendChild(imgInstaIcon);

    //Creates an <img>-element for the contact icon
    var imgContactIcon = document.createElement("img");
    imgContactIcon.src = "images/contact.png";
    imgContactIcon.className = "icon"
    imgContactIcon.id = "contact"

    // Creates a <div>-element and add the footer icons
    var icons = document.createElement("div")
    icons.className = "iconDiv"
    icons.appendChild(instaLink)
    icons.appendChild(imgContactIcon)

    // Creates the footer text
    var footerText = document.createElement("p")
    footerText.innerText = "© 2020"

    // Add the footer text and the footer icons to the footer
    var src = document.getElementById('footer')
    src.appendChild(footerText)
    src.appendChild(icons);





}
window.onload = pagebar;