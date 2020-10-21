var iconDiv = document.getElementById("iconDiv")

var contactForm = document.createElement("form")
contactForm.setAttribute("id", "contact-form")
contactForm.setAttribute("method", "post")
contactForm.setAttribute("action", " ")

var nameInput = document.createElement("INPUT")
nameInput.setAttribute("id", "Email_name")
nameInput.setAttribute("name", "Navn")
nameInput.setAttribute("type", "text")
nameInput.setAttribute("class", "form-control")
nameInput.setAttribute("placeholder", "Skriv inn ditt navn")
nameInput.setAttribute("size", "50")
nameInput.setAttribute("required", true)

var emailInput = document.createElement("INPUT")
emailInput.setAttribute("id", "Email_input")
emailInput.setAttribute("name", "E-post")
emailInput.setAttribute("type", "email")
emailInput.setAttribute("class", "form-control")
emailInput.setAttribute("placeholder", "Skriv inn din Epostadresse")
emailInput.setAttribute("size", "50")
emailInput.setAttribute("required", true)

var messageInput = document.createElement("TEXTAREA")
messageInput.setAttribute("id", "message")
messageInput.setAttribute("name", "message")
messageInput.setAttribute("class", "form-control")
messageInput.setAttribute("placeholder", "Skriv i vei!")
messageInput.setAttribute("rows", "8")
messageInput.setAttribute("cols", "50")
messageInput.setAttribute("size", "50")
messageInput.setAttribute("required", true)

var submitBtn = document.createElement("INPUT")
submitBtn.setAttribute("id", "send")
submitBtn.setAttribute("type", "submit")
submitBtn.setAttribute("class", "form-control submit")
submitBtn.setAttribute("value", "Send")
submitBtn.setAttribute("size", "50")


contactForm.appendChild(nameInput)
contactForm.appendChild(emailInput)
contactForm.appendChild(messageInput)
contactForm.appendChild(submitBtn)

iconDiv.appendChild(contactForm)


function emailform() {
  var contactform = document.getElementById("contact-form");
  if (contactform.style.display === "none") {
    contactform.style.display = "block";
  } else {
    contactform.style.display = "none";
  }
}