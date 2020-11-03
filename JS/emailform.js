// EMAIL FORM FUNCTIONALITY


var iconDiv = document.getElementById("iconDiv")
//creates the contact-form
var contactForm = document.createElement("form")
contactForm.setAttribute("id", "contact-form")
contactForm.setAttribute("method", "post")
contactForm.setAttribute("action", " ")
//Creates the textfield to input name
var nameInput = document.createElement("INPUT")
nameInput.setAttribute("id", "Email_name")
nameInput.setAttribute("name", "Navn")
nameInput.setAttribute("type", "text")
nameInput.setAttribute("class", "form-control")
nameInput.setAttribute("placeholder", "Skriv inn ditt navn")
nameInput.setAttribute("size", "50")
nameInput.setAttribute("required", true)
//Creates the textfield to input Email-adress
var emailInput = document.createElement("INPUT")
emailInput.setAttribute("id", "Email_input")
emailInput.setAttribute("name", "E-post")
emailInput.setAttribute("type", "email")
emailInput.setAttribute("class", "form-control")
emailInput.setAttribute("placeholder", "Skriv inn din Epostadresse")
emailInput.setAttribute("size", "50")
emailInput.setAttribute("required", true)
//Creates the textarea where the user can write his message
var messageInput = document.createElement("TEXTAREA")
messageInput.setAttribute("id", "message")
messageInput.setAttribute("name", "message")
messageInput.setAttribute("class", "form-control")
messageInput.setAttribute("placeholder", "Skriv i vei!")
messageInput.setAttribute("rows", "8")
messageInput.setAttribute("cols", "50")
messageInput.setAttribute("size", "50")
messageInput.setAttribute("required", true)
//Creates the submit-button
var submitBtn = document.createElement("INPUT")
submitBtn.setAttribute("id", "send")
submitBtn.setAttribute("type", "submit")
submitBtn.setAttribute("class", "form-control submit")
submitBtn.setAttribute("value", "Send")
submitBtn.setAttribute("size", "50")
submitBtn.addEventListener('click', confirmation_form)


contactForm.appendChild(nameInput)
contactForm.appendChild(emailInput)
contactForm.appendChild(messageInput)
contactForm.appendChild(submitBtn)

iconDiv.appendChild(contactForm)

//shows and hides the E-mail form.

function emailform() {
  var contactform = document.getElementById("contact-form");
  if (contactform.style.display === "block") {
    contactform.style.display = "none";
  } else {
    contactform.style.display = "block";
  }
}


function confirmation_form() {
  alert("Vi kommer tilbake til deg innen kort tid.")
}
