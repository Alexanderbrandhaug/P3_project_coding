let parent = document.getElementById("right");

function main(bilde) {
    if (parent.querySelector("img")!= null) {
        if (bilde.src === parent.querySelector("img").src) {
            while (parent.children.length > 0) {
                parent.removeChild(parent.lastChild)
            }
            let node = document.createElement("h1");
            node.innerText = "Velkommen til galleriet!";
            let node2 = document.createElement("p");
            node.innerText = "Her kan du se bilder av tidligere arbeid."
            parent.appendChild(node);
            return;
        }

    }
    if (parent.children.length != 0) {
        while (parent.children.length > 0) {
            parent.removeChild(parent.lastChild)
        }
        let node = document.createElement("img");
        node.src = bilde.src;
        parent.appendChild(node);
        node.id = "current_picture"
    }

}