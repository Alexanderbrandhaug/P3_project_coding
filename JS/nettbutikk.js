// Get list element from nettbutikk.html

const left = document.getElementById("left")
const right = document.getElementById("right")


const articles = [
    {id: 0, name: "Artikkel 1", price: "849 kr", description: "Beskrivelse her", image_loc: "images/strikkp1.jpg", sizes: ["0-3 måneder", "6-12 måneder", "1-2 år"], selectedSize: ""},
    {id: 1, name: "Artikkel 2", price: "849 kr",description: "Beskrivelse her",image_loc: "images/strikkp1.jpg", sizes: ["6-12 måneder", "1-2 år", "3-4 år"], selectedSize: ""},
    {id: 2, name: "Artikkel 2", price: "849 kr",description: "Beskrivelse her",image_loc: "images/strikkp1.jpg", sizes: ["6-12 måneder", "1-2 år", "3-4 år"], selectedSize: ""},
    {id: 3, name: "Artikkel 2", price: "849 kr",description: "Beskrivelse her",image_loc: "images/strikkp1.jpg", sizes: ["6-12 måneder", "1-2 år", "3-4 år"], selectedSize: ""},
    {id: 4, name: "Artikkel 2", price: "849 kr",description: "Beskrivelse her",image_loc: "images/strikkp1.jpg", sizes: ["6-12 måneder", "1-2 år", "3-4 år"], selectedSize: ""},
]

const selectedArticles = []


for (let i = 0; i < articles.length; i++) {
    // Create division where information about the article will be displayed
    var article_division = document.createElement("div")
    article_division.setAttribute('class', 'article')

    // Article name information
    var articleName = document.createElement('p')
    articleName.setAttribute('class', 'article-name')
    articleName.appendChild(document.createTextNode(articles[i].name))

    // Article price information
    var articlePrice = document.createElement('p')
    articlePrice.setAttribute('class', 'article-price')
    articlePrice.appendChild(document.createTextNode(articles[i].price))

    // Article description
    var articleDescription = document.createElement('p')
    articleDescription.setAttribute('class', 'article-description')
    articleDescription.appendChild(document.createTextNode(articles[i].description))

    // Article image
    var articleImage = document.createElement('img')
    articleImage.setAttribute('src', articles[i].image_loc)
    articleImage.setAttribute('class', 'article-image')

    // Select size dropdown    
    var sizeDD = document.createElement("select")
    sizeDD.setAttribute('class', 'sizeDD')
    sizeDD.setAttribute('id', 'sizeDD'+articles[i].id)
    sizeDD.setAttribute('name', 'sizeDD'+articles[i].id)
    sizeDD.addEventListener('change', function() {updateSize(this.value, articles[i].id)} )
    

    var defaultSizeOption = document.createElement("option")
    defaultSizeOption.setAttribute('value', 'Velg størrelse')
    defaultSizeOption.setAttribute('selected', true)
    defaultSizeOption.text = "Velg størrelse"
    sizeDD.appendChild(defaultSizeOption)

    for (let j = 0; j < articles[i].sizes.length; j++) {
        var option = document.createElement("option")
        option.setAttribute('value', articles[i].sizes[j])
        option.text =  articles[i].sizes[j]
        sizeDD.appendChild(option)
    }

    var addToCartBtn = document.createElement("button")
    addToCartBtn.setAttribute('class', 'addToCartBtn')
    addToCartBtn.innerHTML = "Legg til i handlekurv"
    // When pressed, the dropdown menu will be displayed 
    addToCartBtn.addEventListener('click', function() {addToCart(articles[i].id)})

    article_division.appendChild(articleName)
    article_division.appendChild(articlePrice)
    article_division.appendChild(articleDescription)
    article_division.appendChild(articleImage)
    
    
    article_division.appendChild(sizeDD)
    article_division.appendChild(addToCartBtn)


    left.appendChild(article_division)
}

function updateSize(value, articleId) {

   


    if (value == "") {
        articles[articleId].selectedSize = ""
    } else if (value == "Velg størrelse") {
        articles[articleId].selectedSize = ""
    } else {
        articles[articleId].selectedSize = value
    }

    

    console.log(articles[articleId])

    console.log(articles[articleId].selectedSize)


}



// Close the dropdown menu if the user clicks outside of it
// DENNE MÅ SKRIVES OM
// window.onclick = function(event) {
//     if (!event.target.matches('.sizeBtn')) {
//       var dropdowns = document.getElementsByClassName("sizeDropDown");
//       console.log(dropdowns)
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         console.log(openDropdown)
//         if (openDropdown.style.display = "block") {
//           openDropdown.style.display = "none";
//         }
//       }
//     }
//   }


function updateCheckout(articleName, articlePrice, articleSize){
    var line = document.createElement("p")
    var textNode = document.createTextNode(articleName + "\t" + articleSize + "\t" + articlePrice)

    selectedArticles.push({name: articleName, size: articleSize, price: articlePrice})
    console.log(selectedArticles)
    line.appendChild(textNode)
    right.appendChild(line)
}

function addToCart(articleId) {
    var line = document.createElement("p")
    var textNode = document.createTextNode(articles[articleId].name + "\t" + articles[articleId].selectedSize + "\t" + articles[articleId].price)

    selectedArticles.push({name: articles[articleId].name, size: articles[articleId].selectedSize, price: articles[articleId].price})
    console.log(selectedArticles)
    line.appendChild(textNode)
    right.appendChild(line)
}

function displayDropdown(dropdown_id) {
    var dropdown = document.getElementById(dropdown_id)
    dropdown.style.display = "block";
}

function selectSize(size) {
    var line = document.createElement("P")
    var textNode = document.createTextNode(size)

    line.appendChild(textNode)

    right.appendChild(line)

}

function updateBtn(article_id) {
    console.log("Button pressed")
    console.log(article_id)

    document.getElementById(article_id).style.display = "block"

}

// var selectSizes = document.createElement("select")
    // selectSizes.setAttribute('name', 'selectSize'+articles[i].id)
    // selectSizes.setAttribute('id', 'selectSize'+articles[i].id)
    // for (let j = 0; j < articles[i].sizes.length; j++) {
    //     var option = document.createElement("option")
    //     option.setAttribute("value", articles[i].sizes[j])
    //     option.innerHTML = articles[i].sizes[j]
    //     //option.addEventListener('change', testUpdate)
    //     selectSizes.appendChild(option)
    // }

    // selectSizes.addEventListener('change', function() {testUpdate(value)})



// GAMMEL DROPDOWN FOR STØRRELSE
// Create division for size selection dropdown
// var sizeDropDown = document.createElement('div')
// sizeDropDown.setAttribute('class', 'sizeDropDown')
// sizeDropDown.setAttribute('id', 'sizeDD'+articles[i].id)

// // Button for size selection, will display dropdown menu for sizes
// var sizeBtn = document.createElement('button')
// sizeBtn.setAttribute('class', 'sizeBtn')
// sizeBtn.innerHTML = "Velg størrelse"
// // When pressed, the dropdown menu will be displayed 
// sizeBtn.addEventListener('click', function() {updateBtn("options_"+articles[i].id)})

// // Divisions for the possible size choickes
// var options = document.createElement("div")
// options.setAttribute('class', 'sizeOptions')
// options.setAttribute('id', 'options_'+articles[i].id)

// // Iterate through all size options for the article, and make the size available in 
// // dropdown menu
// for (let j = 0; j < articles[i].sizes.length; j++){
//     var option = document.createElement('a')
//     option.addEventListener('click', function() {updateCheckout(articles[i].name, articles[i].price, articles[i].sizes[j])})
//     option.setAttribute('href', '#')
//     option.innerHTML = articles[i].sizes[j]
//     options.appendChild(option)
// }


// sizeDropDown.appendChild(sizeBtn)
// sizeDropDown.appendChild(options)

// article_division.appendChild(sizeDropDown)
