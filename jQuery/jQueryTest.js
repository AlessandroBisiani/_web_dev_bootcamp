// To check if jQuery has loaded.
jQuery

$("div").css("backgroundColor", "purple");

$(".highlight").css("width", "200px");

$("#third").css("border", "2px solid orange");

$("div:first").css("color", "pink");
//$("div:first-of-type").css("color", "pink");
// ^ Is faster because it's css, unlike :first which is jQuery


// get and set the textContent of a calling object.
.text()
// get and set the html content of a calling object.
.html()
// get and set a named attribute of a calling object.
// e.g. $("div:first").attr("src", "https://www.google.com")
.attr()
// get and set the value of the calling object. e.g. the contents of
// an input.
.val()
// Add, Remove and Toggle classes
.addClass()
.removeClass()
.toggleClass()

// add a click listener to calling object.
// e.g. Adding a listener on all buttons:

.click()
$("button").click(function(){
    console.log($(this).text());
    $(this).css("backgroundColor", "pink");
});

// In the case of a capital A being typed:
// .keyup() and .keydown() will fire on both shift and a.
// .keypress() fires and returns the capital A.
// .keyup() and .keydown() are better for capturing shifts and
// arrow keys, and such special characters.
.keypress()
$("input").keypress(function(event){
	if(event.which === 13){
    	console.log("Enter info.");
	}
});
// event.which property is the key code. 13 = Enter.


// Takes the place of the others.
// .click(function(){}) adds a listener for the elements selected
// there and then. The .on("click", function(){}) function adds 
// click listeners for all elements, including those added later.
.on()
$("ul").on("click", "li", function(){
    // Do something when an li inside a 
    // ul is clicked on.
});

<-- Effects:
// .fadeIn() and fadeOut()
$(".idgroup").fadeOut("time-to-fade", function(){
    // call this after the fade.
})

$(".idgroup").fadeToggle("time-to-fade");


$(".idgroup").remove();
$(this).remove();

$(".idgroup").slideDown("time", function(){});
$(".idgroup").slideUp("time", function(){});
$(".idgroup").slideToggle("time", function(){});
