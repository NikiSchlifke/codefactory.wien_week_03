$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});
// Create jQuery selectors that will select the elements according to the requirements bellow and for each of them just change their background color to yellow:


// Remove the form from the page
$("#myform").remove();
// Create 5 new DIVs in the article element. Each must use the text in the msg input field

$("article:first()").append(
	$('#msg').wrap('<div class="extra-wrapper"></div>');
);
// Add a class name of "box" to each new DIV
// Move 5 elements using offset to the left positions 100, 200, 300, 400 and 500 respectively
