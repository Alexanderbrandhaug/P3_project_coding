let years = [2020, 2019, 2018, 2017]
let months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

years.forEach(make_list);

function make_list(x){
    let node = document.createElement("li");
    let button = document.createElement("button")
    button.innerText = x;
    button.id = x;
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
            child.name = months[y];
            childList.appendChild(child);
        }

        x.appendChild(childList);

        x.name = "extended";
        addHeading();
    }
    else {
        x.removeChild(x.lastChild);
        x.name = "closed";
    }
    /*console.log("Test")*/
}

const parentDate = document.getElementsByClassName("blogg_content")

function addHeading() {

    let dates = []

    for (let x = 0; x < parentDate.length; x++) {
        parentDate[x].id = parentDate[x].querySelector("h3").innerText;
        dates.push(parentDate[x].querySelector("h3").innerText.split("."));
    }

    for (let x = 0; x < dates.length; x++) {
        for (let y = 0; y < dates[x].length; y++){
            dates[x][y] = parseInt(dates[x][y]);
        }
    }

    for (let x = 0; x < dates.length; x++) {
        let newList = document.createElement("ul")
        let node = document.createElement("li");
        node.href = dates[x][0] + "." + dates[x][1] + "." + dates[x][2];
        node.innerText = parentDate[x].querySelector("h1").innerText;
        newList.appendChild(node);
        document.getElementById(dates[x][2]).parentNode.querySelector("ul").children.item(dates[x][1] - 1).appendChild(newList);

    }

    console.log(dates)
}