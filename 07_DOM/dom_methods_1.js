// SELECTION

// Returns a js onject
document.getElementById()

// Returns HTMLCollection
document.getElementsByClassName()

// Returns a NodeList
document.getElementsByTagName()

// Can be called with any css selector: 
    // "#ids", ".classes", "tag tag.class"
// Returns the first instance of that tag found.
// Returns a NodeList object
document.querySelector()

// Finds all instances of that selector.
// Returns a NodeList object.
document.querySelectorAll()


// MANIPULATION

// textContent is a property.
// It sets or returns the text of the node and ALL its decendants.
// When setting textContent, HTML tags are treated as text.
var tag = document.querySelector("#special");

tag.classList.add("");
tag.classList.remove("");
tag.classList.toggle("");

tag.textContent
tag.textContent = "Mendacious hips";


// It refers to all the text inside the specified tag, incuding 
// HTML tags.
// When setting innerHTML HTML tags are rendered as such.
tag.innerHTML


// Get the NodeList for the selected tags.
var pImg = document.querySelector("p img")
var bodyLinks = document.querySelectorAll("h1 ~ a")

// getAttribute()
// getAttribute() returns the specified attributeName as a string.
var pImgSource = pImg.getAttribute("src");
var bodyHyperlinks = bodyLinks.getAttribute("href");

// setAttribute()
// setAttribute() takes two strings: the attribute and its new value.
pImg.setAttribute("src", "https://www.yourface.com/profile.jpg");
bodyLinks.setAttribute("href", "https://www.headinjurytheatre.com");

// getAttribute() and setAttribute() on one line.
document.querySelectorAll("h1 ~ a").getAttribute("href");
document.querySelector("p img").setAttribute("src", "https://www.yourface.com/profile.jpg");


document.querySelector("h1").textContent("Fin");