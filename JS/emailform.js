function Emailform() {
  var contactform = document.getElementById("contact-form");
  if (contactform.style.display === "block") {
    contactform.style.display = "none";
  } else {
    contactform.style.display = "block";
  }
}
