function Emailform() {
  var contactform = document.getElementById("contact-form");
  if (contactform.style.display === "none") {
    contactform.style.display = "block";
  } else {
    contactform.style.display = "none";
  }
}
