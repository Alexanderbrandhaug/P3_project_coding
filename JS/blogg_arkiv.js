// BLOG ARCHIVE FUNCTIONALITY
// Jeg (hovedansvarlig for denne js-fila) har valgt å skrive alt her på engelsk så det skal være mulig å forstå hva som
// er gjort for alle som eventuelt kommer til å lese dette

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

// Runs the function make_list where each item in the years list is taken as an argument
years.forEach(make_list);

// Runs the check_screen function each 100ms to keep the site responsive when changing browser size
setInterval(check_screen, 100);

// Makes a list element with a button that has the text ">" + the inputted year. This button also has a onclick function.
// The list element is then appended to the archive list (ul) in the html code. It also sets the buttons id as the same year
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

// This function lets the elements in the sub list to appear one after another with a animation
function waitAndAdd(x, y) {
    setTimeout(function() {x.className += " show";}, 50 * y);
}

// When the archive year button is pressed then the sub list is created if it isn't already extended. However, if it is,
// then the list is closed
function create_sub_list(x) {

    // For convenience sake, x is here redeclared as the "li" element that contains the button
    x = x.parentNode;

    // Checks if the list is extended, if not then it creates the sub list. However, if it's extended, then it closes
    // the sub list
    if (x.name !== "extended"){
        x.name = "extended";

        addHeading(x);

        // Rotates the ">" in the pressed archive button
        rotate(x);
    }
    else {
        close_sub_list(x);
    }
}

// Creates the sub list and adds the blog headings to it with animations
function addHeading(z) {
    // Goes through all the dates
    for (let x = 0; x < dates.length; x++) {
        // Checks if the button that was pressed has the same id (year) that the current date (year) has
        if (z.querySelector("button").id == dates[x][2]){

            let listMonths;

            // If the list-element has more than two children, then one should be button and at least one of the other
            // should be the container (ul) for the sub-list. Else it should create a new list (ul) and assign it to listMonths
            if (z.children.length >= 2){
                listMonths = z.querySelector("ul");
            } else {
                listMonths = document.createElement("ul");
                z.appendChild(listMonths);
            }

            let hasMonth = false;
            let hasLinkList = false;
            let indexMonth;

            // Checks if a month already is in the list of months, and if that would be the case it sets hasMonth to true.
            // If the month is already in the list, then it set's the month's index to indexMonth. Also checks if that
            // month has a list with links to the blog posts from that month and sets it to true if it has
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

            // If the current month is in the month list, then it sets the variable "child" to that month. If that's not
            // the case, then it makes a new month in the months list and adds a class so that the month can be animated
            if (hasMonth) {
                child = listMonths.children[indexMonth];
            } else {
                child = document.createElement("li");
                child.innerText = months[dates[x][1] - 1];
                child.name = months[dates[x][1] - 1];
                child.className += "insertLine";
                listMonths.appendChild(child);
            }

            // Begins the animation for the current month
            waitAndAdd(child, x);

            let linkList;

            // Checks if a given month has a link list, if yes, then assign it to linkList. If not, then creates a
            // link list and appends it to the current month
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

            // Creates a link to the blog post from the selected date and adds it to the link list
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

// Rotates the ">" 90 degrees in the archive year button (points to the right or down depending on it's current state)
function rotate(x) {
    const div = x.querySelector('div');
    if (div.className === "rotated" || div.className === ""){
        div.className = "normal";
    } else {
        div.className = "rotated";
    }
}


// This function controls when the archive should be visible and not, when the screen (width) is smaller or equal to 800px
function open_arkiv(x) {

    let arkiv = document.getElementById("right");
    let knapp;

    // Depending on if you press the button to open/close the archive or press a link, then the element containing the
    // button should be set to the variable knapp.
    if (x.nodeName === "A"){
        knapp = document.getElementById("arkiv_knapp")
        x = knapp.getElementsByTagName("button")[0];
    } else {
        knapp = x.parentElement;
    }

    // If the archive is open and when when the screen (width) is under or equal to 800px, then the archive button (and
    // the parent containing it) should be styled in a specific way and look like an X, so everyone understands that it's
    // meant to close the archive. Or else (with the screen width in mind) the button (and the parent containing it)
    // should again be styled in another way and the button should say that it needs to be pressed to open the archive.
    // It will also set the variable wasOpen depending on the state that it's in.
    if (window.innerWidth <= responsiveWidth && (arkiv.style.display === "" || arkiv.style.display === "none")) {
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