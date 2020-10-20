let years = []
let months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

let dates = []

const parentDate = document.getElementsByClassName("blogg_content")

for (let x = 0; x < parentDate.length; x++) {
    // parentDate[x].id = parentDate[x].querySelector("h3").innerText;
    dates.push(parentDate[x].querySelector("h3").innerText.split("."));

    let dateId = "";
    for (let y = 0; y < dates[x].length; y++){
        dates[x][y] = parseInt(dates[x][y]);
        dateId += dates[x][y].toString();
    }

    if (years.includes(dates[x][2]) === false) {
        years.push(dates[x][2]);
    }

    // console.log(dateId);
    parentDate[x].id = dateId;
}

years.forEach(make_list);

function make_list(x){
    let node = document.createElement("li");
    let button = document.createElement("button")
    button.innerHTML = "<div style='display: inline-block'>" + ">" + "</div>" + " " + x;
    button.id = x;
    button.type = "button";
    button.onclick = function() {create_sub_list(this)};

    node.appendChild(button);
    document.getElementById("arkiv_liste").appendChild(node)
}

function waitAndAdd(x, y) {
    setTimeout(function() {x.className += " show";}, 50 * y);
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
            child.className += "insertLine";
            childList.appendChild(child);
            waitAndAdd(child, y);
        }

        x.appendChild(childList);

        x.name = "extended";
        addHeading(x);
        rotate(x)

    }
    else {
        x.removeChild(x.lastChild);
        x.name = "closed";
        rotate(x)
    }
    /*console.log("Test")*/
}

function addHeading(z) {

    // let dates = []
    //
    // for (let x = 0; x < parentDate.length; x++) {
    //     // parentDate[x].id = parentDate[x].querySelector("h3").innerText;
    //     dates.push(parentDate[x].querySelector("h3").innerText.split("."));
    //
    //     let dateId = "";
    //     for (let y = 0; y < dates[x].length; y++){
    //         dates[x][y] = parseInt(dates[x][y]);
    //         dateId += dates[x][y].toString();
    //     }
    //     console.log(dateId);
    //     parentDate[x].id = dateId;
    // }

    for (let x = 0; x < dates.length; x++) {
        if (z.querySelector("button").id == dates[x][2]){
            let newList = document.createElement("ul")
            let node = document.createElement("li");
            let a = document.createElement("a");
            a.href = "#"+ dates[x][0].toString() + dates[x][1].toString() + dates[x][2].toString();
            a.innerText = parentDate[x].querySelector("h1").innerText;
            node.appendChild(a);
            newList.appendChild(node);
            document.getElementById(dates[x][2]).parentNode.querySelector("ul").children.item(dates[x][1] - 1).appendChild(newList);
        }


    }

    /*console.log(dates)*/
}

function rotate(x) {
    const div = x.querySelector('div');
    if (div.className === "rotated" || div.className === ""){
        div.className = "normal";
    } else {
        div.className = "rotated";
    }
}