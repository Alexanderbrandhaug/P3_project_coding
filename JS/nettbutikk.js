// Get list element from nettbutikk.html

const left = document.getElementById("left")
const right = document.getElementById("right")
const summary = document.getElementById("summary")
const cartTable = document.getElementById("cartTable")


const articles = [
    {id: 0, name: "Artikkel 1", price: "849 kr", description: "Beskrivelse her", image_loc: "images/strikkp1.jpg", sizes: ["0-3 måneder", "6-12 måneder", "1-2 år"], selectedSize: "", number: ""},
    {id: 1, name: "Artikkel 2", price: "849 kr",description: "Beskrivelse her",image_loc: "images/strikkp1.jpg", sizes: ["6-12 måneder", "1-2 år", "3-4 år"], selectedSize: "", number: ""},
    {id: 2, name: "Artikkel 2", price: "849 kr",description: "Beskrivelse her",image_loc: "images/strikkp1.jpg", sizes: ["6-12 måneder", "1-2 år", "3-4 år"], selectedSize: "", number: ""},
    {id: 3, name: "Artikkel 2", price: "849 kr",description: "Beskrivelse her",image_loc: "images/strikkp1.jpg", sizes: ["6-12 måneder", "1-2 år", "3-4 år"], selectedSize: "", number: ""},
    {id: 4, name: "Artikkel 2", price: "849 kr",description: "Beskrivelse her",image_loc: "images/strikkp1.jpg", sizes: ["6-12 måneder", "1-2 år", "3-4 år"], selectedSize: "", number: ""},
]

const selectedArticles = []

var isElementsAddedToCart = false


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
    
    // Default size option will be "Velg størrelse"
    var defaultSizeOption = document.createElement("option")
    defaultSizeOption.setAttribute('value', 'Velg størrelse')
    defaultSizeOption.setAttribute('selected', true)
    defaultSizeOption.text = "Velg størrelse"
    sizeDD.appendChild(defaultSizeOption)

    // Iterate through size options for article
    for (let j = 0; j < articles[i].sizes.length; j++) {
        var sizeOption = document.createElement("option")
        sizeOption.setAttribute('value', articles[i].sizes[j])
        sizeOption.text =  articles[i].sizes[j]
        sizeDD.appendChild(sizeOption)
    }

    // Select number of articles dropdown menu
    var numberDD = document.createElement("select")
    numberDD.setAttribute('class', 'numberDD')
    numberDD.setAttribute('id', 'numberDD'+articles[i].id)
    numberDD.setAttribute('name', 'numberDD'+articles[i].id)
    numberDD.addEventListener('change', function() {updateNumber(this.value, articles[i].id)})

    // Default number option will be "Velg antall"
    var defaultNumberOption = document.createElement("option")
    defaultNumberOption.setAttribute('value', 'Velg antall')
    defaultNumberOption.setAttribute('selected', true)
    defaultNumberOption.text = "Velg antall"
    numberDD.appendChild(defaultNumberOption)

    // Possible to choose max 5 items
    for (let j = 1; j < 6; j++) {
        var numberOption = document.createElement("option")
        numberOption.setAttribute('value', j.toString())
        numberOption.text = j.toString()
        numberDD.appendChild(numberOption)
    }

    // Add to cart button
    var addToCartBtn = document.createElement("button")
    addToCartBtn.setAttribute('class', 'addToCartBtn')
    addToCartBtn.setAttribute('id', 'addToCartBtn'+articles[i].id)
    addToCartBtn.innerHTML = "Legg til i handlekurv"
    addToCartBtn.setAttribute('disabled', function() {if (articles[i].selectedSize=="") {true} else if (articles[i].number=="") {true} else {false}})
    addToCartBtn.addEventListener('click', function() {addToCart(articles[i].id)})

    article_division.appendChild(articleName)
    article_division.appendChild(articlePrice)
    article_division.appendChild(articleDescription)
    article_division.appendChild(articleImage)
    
    article_division.appendChild(sizeDD)
    article_division.appendChild(numberDD)
    article_division.appendChild(addToCartBtn)


    left.appendChild(article_division)
}

function updateSize(value, articleId) {
    if (value == "" || value == "Velg størrelse" ) {
        articles[articleId].selectedSize = ""
        document.getElementById('addToCartBtn'+articleId).disabled = true
    } else {
        articles[articleId].selectedSize = value

        if (articles[articleId].number != "" && articles[articleId].number != "Velg antall") {
            document.getElementById('addToCartBtn'+articleId).disabled = false
        }
    }

}

function updateNumber(value, articleId) {
    if (value == "" || value == "Velg antall") {
        articles[articleId].number = ""
        document.getElementById('addToCartBtn'+articleId).disabled = true
    } else {
        articles[articleId].number = value

        if (articles[articleId].selectedSize != "" && articles[articleId].selectedSize != "Velg størrelse") {
            document.getElementById('addToCartBtn'+articleId).disabled = false
        }
    }

}


function updateCheckout(articleName, articlePrice, articleSize){
    var line = document.createElement("p")
    var textNode = document.createTextNode(articleName + "\t" + articleSize + "\t" + articlePrice)

    selectedArticles.push({name: articleName, size: articleSize, price: articlePrice})
    line.appendChild(textNode)
    right.appendChild(line)
}

function addToCart(articleId) {
    isElementsAddedToCart = true

    var article = articles[articleId]

    var row = document.createElement("TR")

    var nameCell = document.createElement("TD")
    nameCell.innerHTML= article.name

    var numberCell = document.createElement("TD")
    numberCell.innerHTML = article.number + " stk"

    var sizeCell = document.createElement("TD")
    sizeCell.innerHTML = article.selectedSize

    var priceCell = document.createElement("TD")
    priceCell.innerHTML = article.price
 
    row.appendChild(nameCell)
    row.appendChild(numberCell)
    row.appendChild(sizeCell)
    row.appendChild(priceCell)

    cartTable.appendChild(row)

    selectedArticles.push({name: articles[articleId].name, size: articles[articleId].selectedSize, price: articles[articleId].price})

    if (selectedArticles.length == 1) {addCheckOutBtn()}
}

function addCheckOutBtn() {
    
    var checkOutBtn = document.createElement("BUTTON")
    checkOutBtn.setAttribute('id', 'checkOutBtn')
    checkOutBtn.innerHTML = "Bestill"
    checkOutBtn.addEventListener('click', checkOut)

    document.getElementById('noArticlesInCart').innerHTML = ""

   
    summary.appendChild(checkOutBtn)

}

function checkOut() {
    alert("Bestilt")
}
