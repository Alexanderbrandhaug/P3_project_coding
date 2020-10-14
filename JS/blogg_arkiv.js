let years = [2020, 2019, 2018, 2017]
let months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

years.forEach(make_list);

function make_list(x){
    let node = document.createElement("li");
    let button = document.createElement("button")
    button.innerText = x;
    button.type = "button";
    button.onclick = function() {create_sub_list(this)};

    node.appendChild(button);
    document.getElementById("arkiv_liste").appendChild(node)
}

function create_sub_list(x) {

    x = x.parentNode;

    if (x.name !== "extended"){
        let childList = document.createElement("ul");
        childList.onclick = function() {};

        for (let y = 0; y < months.length; y++){
            let child = document.createElement("li");
            child.innerText = months[y];
            childList.appendChild(child);
        }

        x.appendChild(childList);

        x.name = "extended"
    }
    else {
        x.removeChild(x.lastChild)
        x.name = "closed"
    }


    /*console.log("Test")*/
}
