let years = [2020, 2019, 2018, 2017]
let months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

years.forEach(make_list);

function make_list(x){
    let node = document.createElement("li");
    node.innerText = x;

    let childList = document.createElement("ul");

    for (let y = 0; y < months.length; y++){
        let child = document.createElement("li");
        child.innerText = months[y];
        childList.appendChild(child);
    }

    node.appendChild(childList);
    document.getElementById("arkiv_liste").appendChild(node)

    console.log("Test")
}