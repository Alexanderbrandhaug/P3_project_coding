// Get list element from nettbutikk.html

const right = document.getElementById("right")

function selectSize() {

    var line = document.createElement("P")
    var textNode = document.createTextNode("Dette er en text node")

    line.appendChild(textNode)

    right.appendChild(line)

    

}