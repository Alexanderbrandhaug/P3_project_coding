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