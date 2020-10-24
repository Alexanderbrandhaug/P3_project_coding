// NETTBUTIKK FUNCTIONALITY


// Access main components from nettbutikk.html
const left = document.getElementById("left")
const right = document.getElementById("right")
const summary = document.getElementById("summary")
const cartTable = document.getElementById("cartTable")

// List of JSON-objects, containing information about each article
const articles = [
    {id: 0, 
    name: "Sett i naturfarger", 
    price: "1149 kr", 
    description: "Sett i naturfarger bestående av lue, genser med pen krage og praktisk ullbukse.", 
    image_loc: "images/naturfarge_sett.jpg", 
    sizes: ["0-3 måneder", "6-12 måneder", "1-2 år", "3-4 år"], 
    selectedSize: "", number: ""},

    {id: 1, 
    name: "Ullshorts", 
    price: "249 kr", 
    description: "Ullshorts i dus rosafarge.", 
    image_loc: "images/Ullshorts.jpg", 
    sizes: ["6-12 måneder", "1-2 år", "3-4 år"], 
    selectedSize: "", number: ""},

    {id: 2, 
    name: "Lilla genser", 
    price: "349 kr", 
    description: "Behagelig lilla genser med søte borddetaljer.", 
    image_loc: "images/lillagenser.jpg", 
    sizes: ["6-12 måneder", "1-2 år", "3-4 år"], 
    selectedSize: "", number: ""},

    {id: 3, 
    name: "Rosa sommerkjole", 
    price: "349 kr", 
    description: "Rosa sommerkjole med fine detaljer.", 
    image_loc: "images/rosakjole.jpg", 
    sizes: ["1-2 år", "3-4 år", "5-6 år"], 
    selectedSize: "", number: ""},

    {id: 4, 
    name: "Hvit kjolejakke", 
    price: "399 kr", 
    description: "Søt hvit kjolejakke ", 
    image_loc: "images/hvitkjolejakke.jpg", 
    sizes: ["6-12 måneder", "1-2 år", "3-4 år"], 
    selectedSize: "", number: ""},

    {id: 5, 
    name: "Sett i rosafarger", 
    price: "1149 kr", 
    description: "Sett bestående av rosa lue, hvit jakke og rosa body.", 
    image_loc: "images/rosa_og_hvitt_sett.jpg", 
    sizes: ["0-3 måneder", "6-12 måneder", "1-2 år", "3-4 år"], 
    selectedSize: "", number: ""},
]

// Articles in shopping cart will be added to this list
const selectedArticles = []

// GENERATION OF ELEMENTS FOR EACH ARTICLE

for (let i = 0; i < articles.length; i++) {

    // Create division where information about the article will be displayed
    var articleDivision = document.createElement("div")
    articleDivision.setAttribute('class', 'article')

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
    articleImage.setAttribute('alt', 'Article image')
    articleImage.setAttribute('class', 'article-image')
    articleImage.setAttribute('id', 'articleImage'+articles[i].id)
    articleImage.addEventListener('click', function() {displayPicture(articles[i].id)})

    // Image modal (pop-up when click on article image)
    var modalDivision = document.createElement('div')
    modalDivision.setAttribute('class', 'imageModal')
    modalDivision.setAttribute('id', 'modalDivision'+articles[i].id)
    var modalImage = document.createElement('img')
    modalImage.setAttribute('class', 'modalImage-content')
    modalImage.setAttribute('id', 'imageModal'+articles[i].id)
    var closeModalBtn = document.createElement('span')
    closeModalBtn.setAttribute('class', 'close-modal')
    closeModalBtn.setAttribute('id', 'closeModalBtn'+articles[i].id)
    closeModalBtn.innerHTML = '&times;'
    closeModalBtn.addEventListener('click', function () {closeModal(articles[i].id)})
    var modalCaption = document.createElement('p')
    modalCaption.setAttribute('class', 'modalCaption')
    modalCaption.setAttribute('id', 'modalCaption'+articles[i].id)
    
    modalDivision.appendChild(modalImage)
    modalDivision.appendChild(closeModalBtn)
    modalDivision.appendChild(modalCaption)
    

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

    // Possible to choose max 5 items (options in number drop down)
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

    articleDivision.appendChild(articleName)
    articleDivision.appendChild(articlePrice)
    articleDivision.appendChild(articleDescription)
    articleDivision.appendChild(articleImage)
    articleDivision.appendChild(modalDivision)
    articleDivision.appendChild(sizeDD)
    articleDivision.appendChild(numberDD)
    articleDivision.appendChild(addToCartBtn)


    left.appendChild(articleDivision)
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

function addToCart(articleId) {

    var article = articles[articleId]

    var row = document.createElement("TR")

    var nameCell = document.createElement("TD")
    nameCell.setAttribute("class", "nameCell")
    nameCell.innerHTML= article.name

    var numberCell = document.createElement("TD")
    numberCell.innerHTML = article.number + " stk"

    var sizeCell = document.createElement("TD")
    sizeCell.innerHTML = article.selectedSize

    var priceCell = document.createElement("TD")
    var pricePrItem = parseInt(article.price.slice(0,-3))
    priceCell.setAttribute('class', 'priceCell')
    priceCell.innerHTML = article.number*pricePrItem + " kr"
 
    row.appendChild(nameCell)
    row.appendChild(numberCell)
    row.appendChild(sizeCell)
    row.appendChild(priceCell)

    cartTable.appendChild(row)

    selectedArticles.push({name: articles[articleId].name, size: articles[articleId].selectedSize, price: articles[articleId].price, number: articles[articleId].number})

    if (selectedArticles.length == 1) {
        addCheckOutBtnAndTotalPrice()
    } 
    
    updateTotalPrice()
    
}

function addCheckOutBtnAndTotalPrice() {
    
    var checkOutBtn = document.createElement("BUTTON")
    checkOutBtn.setAttribute('id', 'checkOutBtn')
    checkOutBtn.innerHTML = "Bestill"
    checkOutBtn.addEventListener('click', checkOut)

    document.getElementById('noArticlesInCart').innerHTML = ""

    summary.appendChild(checkOutBtn)

    var totalPriceLine = document.createElement("TR")
    totalPriceLine.setAttribute('id', 'totalPriceLine')
    cartTable.appendChild(totalPriceLine)

}

function checkOut() {
    alert("Bestilt")
}

function updateTotalPrice() {
    var oldtotalPriceLine = document.getElementById('totalPriceLine')
    oldtotalPriceLine.remove()

    var newPrice = 0 ;
    for (var i = 0; i < selectedArticles.length; i++) {

        // Remove " kr" from price string, then makes int out of the price
        var pricePrItem = parseInt(selectedArticles[i].price.slice(0, -3))

        var numberOfItems = parseInt(selectedArticles[i].number)
        newPrice += numberOfItems*pricePrItem
    }

    var newTotalPriceLine = document.createElement("TR")
    newTotalPriceLine.setAttribute('id', 'totalPriceLine')

    newTotalPriceLine.appendChild(document.createElement("TD"))
    newTotalPriceLine.appendChild(document.createElement("TD"))
    newTotalPriceLine.appendChild(document.createElement("TD"))

    var totalPrice = document.createElement("TD")
    totalPrice.setAttribute('id', "totalPrice")
    totalPrice.innerHTML =  newPrice + "kr"

    newTotalPriceLine.appendChild(totalPrice)

    cartTable.appendChild(newTotalPriceLine)
    
}

function displayPicture(articleId) {
    var modalDivision = document.getElementById('modalDivision'+articleId)
    modalDivision.style.display = "block"

    var modalImage = document.getElementById('imageModal'+articleId)
    modalImage.src = articles[articleId].image_loc

    var modalCaption = document.getElementById('modalCaption'+articleId)
    modalCaption.innerHTML = articles[articleId].description
}

function closeModal(articleId) {
    var modalDivision = document.getElementById('modalDivision'+articleId)
    modalDivision.style.display = "none";
}
