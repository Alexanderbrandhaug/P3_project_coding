let parent = document.getElementById("right");

function main(bilde) {
    console.log('test3')
    if (parent.querySelector("img")!= null) {
        if (bilde.src === parent.querySelector("img").src) {
            while (parent.children.length > 0) {
                parent.removeChild(parent.lastChild)
            }
            let node = document.createElement("h1");
            node.innerText = "Velkommen til galleriet!";
            let node2 = document.createElement("p");
            node.innerText = "Velkommen til galleriet!"
            node2.innerText = "Trykk på et bilde for å se det større. Trykk på samme bilde igjen for å ta det bort."
            parent.appendChild(node);
            parent.appendChild(node2)
            console.log('test1')
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
        console.log('test2')
    }
}

function testing() {
    document.getElementById("right").innerHTML ="";
    document.getElementById("right").style.position = 'absolute';
}