let parent = document.getElementById("right");

function main(bilde) {
    //For smaller screens (modularity)
    if (window.innerWidth <= 800){
        document.getElementById("right").style.display = "block";
        document.getElementById("right").style.visibility = "visible";
        document.getElementById("button_div").style.visibility = "visible";

        let node = document.createElement("img");
        node.src = bilde.src;
        parent.appendChild(node);
        node.id = "current_picture"
    } else {
        //If there is no picture on display
        if (parent.querySelector("img")!= null) {
            //If the user clicks on the same image twice it will be removed
            if (bilde.src === parent.querySelector("img").src) {
                while (parent.children.length > 0) {
                    parent.removeChild(parent.lastChild)
            }
            //After removing everything in the div it will make sure to put the text back
            let node = document.createElement("h1");
            node.innerText = "Velkommen til galleriet!";
            let node2 = document.createElement("p");
            node.innerText = "Velkommen til galleriet!"
            node2.innerText = "Trykk på et bilde for å se det større. Trykk på samme bilde igjen for å ta det bort."
            let node3 = document.createElement("div");
            node3.appendChild(node);
            node3.appendChild(node2);
            parent.appendChild(node3);
            return;
            }

        }
        //If there is something in the right div it will be removed
        if (parent.children.length !== 0) {
            while (parent.children.length > 0) {
                parent.removeChild(parent.lastChild)
            }
            //Uses the src of the photo to display the same photo as clicked
            let node = document.createElement("img");
            node.src = bilde.src;
            parent.appendChild(node);
            node.id = "current_picture"
        }

    }



}
//Function for button. Removes eveything inside right div
function closeFunction() {
    document.getElementById("right").style.display = "none";
    document.getElementById("right").innerHTML = "";
    document.getElementById("button_div").style.visibility = "hidden";
}