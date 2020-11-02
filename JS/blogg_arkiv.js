// BLOG ARCHIVE FUNCTIONALITY
// Jeg har valgt å skrive alt her på engelsk så det skal være mulig å forstå hva jeg har gjort for alle som eventuelt
// kommer til å lese dette.

// Declares an empty list for each year with blog-content
let years = []

// Declares a list with all the months in a year, so that it can be used dynamically later
let months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

// Declares an empty list that will store all of the blog dates
let dates = []

// Gets all the blog posts
const parentDate = document.getElementsByClassName("blogg_content")

// Declares a variable that will be used to help the site with being responsive
const responsiveWidth = 800;

// The next two variables help with the responsiveness of the website when resizing the browser
let changeScreenSizeOnce = false;
let wasOpen = false;

// Goes through all blog posts and adds their dates to the dates-list, and gives each blog post a id based on the date
for (let x = 0; x < parentDate.length; x++) {
    // Adds all the dates to the dates list and separates the day, month and year in a sub array/list
    dates.push(parentDate[x].querySelector("h3").innerText.split("."));

    // Creates the current blog post id (day+month+year)
    let dateId = "";
    for (let y = 0; y < dates[x].length; y++){
        dates[x][y] = parseInt(dates[x][y]);
        dateId += dates[x][y].toString();
    }

    // If a blog post's year is not in the years list then it adds it to the years list
    if (years.includes(dates[x][2]) === false) {
        years.push(dates[x][2]);
    }

    // Adds the blog post id to the current blog post
    parentDate[x].id = dateId;
}

years.forEach(make_list);

setInterval(check_screen, 100);

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
        x.name = "extended";
        addHeading(x);
        rotate(x);
    }
    else {
        close_sub_list(x);
    }
}

function addHeading(z) {
    for (let x = 0; x < dates.length; x++) {
        /*console.log(x);*/

        if (z.querySelector("button").id == dates[x][2]){

            let listMonths;

            if (z.children.length >= 2){
                listMonths = z.querySelector("ul");
            } else {
                listMonths = document.createElement("ul");
                z.appendChild(listMonths);
            }

            let hasMonth = false;
            let hasLinkList = false;
            let indexMonth;

            // Checks if a month already is in the list of months, and if that would be the case it sets hasMonth to true
            // Also checks if that month has a linkList and sets it to true if it has
            for (let y = 0; y < listMonths.children.length; y++) {
                if (listMonths.children[y].innerText.includes(months[dates[x][1] - 1])) {
                    hasMonth = true;
                    indexMonth = y;
                    if (listMonths.children[y].querySelector("ul") != null) {
                        hasLinkList = true;
                    }
                }
            }

            let child;

            if (hasMonth) {
                child = listMonths.children[indexMonth];
            } else {
                child = document.createElement("li");
                child.innerText = months[dates[x][1] - 1];
                child.name = months[dates[x][1] - 1];
                child.className += "insertLine";
                listMonths.appendChild(child);
            }


            waitAndAdd(child, x);

            let linkList;


            // Checks if a given month has link-list, if yes, then assign it to linkList. If not, then create a linkList
            if (hasLinkList) {
                linkList = listMonths.children[indexMonth].querySelector("ul");
            } else {
                linkList = document.createElement("ul");
                for (let y = 0; y < listMonths.children.length; y++) {
                    if (listMonths.children[y].innerText.includes(months[dates[x][1] - 1])){
                        listMonths.children[y].appendChild(linkList);
                        break;
                    }
                }
            }

            let node = document.createElement("li");
            let a = document.createElement("a");
            a.href = "#"+ dates[x][0].toString() + dates[x][1].toString() + dates[x][2].toString();
            a.innerText = parentDate[x].querySelector("h1").innerText;
            a.addEventListener("click", function() {open_arkiv(this)})
            node.appendChild(a);
            linkList.appendChild(node);

        }
    }
}

function rotate(x) {
    const div = x.querySelector('div');
    if (div.className === "rotated" || div.className === ""){
        div.className = "normal";
    } else {
        div.className = "rotated";
    }
}

function open_arkiv(x) {

    let arkiv = document.getElementById("right");
    let knapp;
    if (x.nodeName === "A"){
        knapp = document.getElementById("arkiv_knapp")
        x = knapp.getElementsByTagName("button")[0];
    } else {
        knapp = x.parentElement;
    }

    if (window.innerWidth <= responsiveWidth && (arkiv.style.display === "" || arkiv.style.display === "none")){
        arkiv.style.display = "block";
        knapp.style.bottom = "";
        knapp.style.top = "55px";
        x.innerText = "×";
        x.style.fontSize = "25pt";
        x.style.paddingTop = "0";
        x.style.width = x.offsetHeight.toString() + "px";
        wasOpen = true;
    } else if (window.innerWidth <= responsiveWidth && arkiv.style.display === "block") {
        arkiv.style.display = "none";
        knapp.style.top = "";
        knapp.style.bottom = "55px";
        x.innerText = "Åpne arkiv";
        x.style.border = "";
        x.style.fontSize = "20px";
        x.style.paddingTop = "10px";
        x.style.width = "auto";
        wasOpen = false;
    }

    if (window.innerWidth <= responsiveWidth) {
            years.forEach(close_sub_list)
        }

}

function close_sub_list(x) {
    if (typeof x === "number"){
        x = document.getElementById(x).parentElement;
    }
    if (x.children.length >= 2 && window.innerWidth <= responsiveWidth) {
        x.removeChild(x.lastChild);
        x.name = "closed";
        rotate(x);
    } else if (x.children.length >= 2 && x.name === "extended") {
        x.removeChild(x.lastChild);
        x.name = "closed";
        rotate(x);
    }
}

function check_screen() {
    if (window.innerWidth > responsiveWidth){
        let arkiv = document.getElementById("right");
        if (arkiv.style.display === "" || arkiv.style.display === "none") {
            arkiv.style.display = "block";
            changeScreenSizeOnce = true;
        } else if (wasOpen) {
            arkiv.style.display = "none";

            let knapp = document.getElementById("arkiv_knapp")
            let x = knapp.getElementsByTagName("button")[0];
            knapp.style.top = "";
            knapp.style.bottom = "55px";
            x.innerText = "Åpne arkiv";
            x.style.border = "";
            x.style.fontSize = "20px";
            x.style.paddingTop = "10px";
            x.style.width = "auto";

            wasOpen = false;
        }
    } else {
        let arkiv = document.getElementById("right");
        if (arkiv.style.display === "block" && changeScreenSizeOnce === true) {
            arkiv.style.display = "none";
            changeScreenSizeOnce = false;
        }
    }
}