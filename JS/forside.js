// Displays front page animation for first time visits
if (!sessionStorage.isFirstVisit) {
    sessionStorage.isFirstVisit = true;
}


brightDiv = document.getElementById("brightDiv")
welcomeTxt = document.getElementById("welcomeText")
navbar = document.getElementById("navbar")
footer = document.getElementById("footer")

if (sessionStorage.isFirstVisit == 'true') {

    brightDiv.style.animationName = "brightAnimation"

    welcomeTxt.style.left = "10%"
    welcomeTxt.style.animationName = "textFadeIn"

    navbar.style.animationName = "navbarFadeIn"
    navbar.style.top = "0px"

    footer.style.animationName = "footerFadeIn"
    footer.style.bottom = "0px"
    sessionStorage.isFirstVisit = false

}
else {
    welcomeTxt.style.left = "10%"
    navbar.style.top = "0px"
    footer.style.bottom = "0px"
}