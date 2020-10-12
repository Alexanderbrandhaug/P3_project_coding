// Get list element from nettbutikk.html

const right = document.getElementById("right")

function displayDropdown(dropdown_id) {
    var dropdown = document.getElementById(dropdown_id)
    dropdown.style.display = "block";
}

function selectSize(size) {
    //dropdown.appendChild(option)

    var line = document.createElement("P")
    var textNode = document.createTextNode(size)

    line.appendChild(textNode)

    right.appendChild(line)

    

}