$("form").submit(function(e) {

    e.preventDefault();




});
// Create jQuery selectors that will select the elements according to the requirements bellow and for each of them just change their background color to yellow:



// Create 5 new DIVs in the article element. Each must use the text in the msg input field

for (var i = 0; i < 5; i++) {
    $("article").append(
        '<div>' + $('#msg').val() + '</div>'
    );
}

// Remove the form from the page
$("#myform").remove();

// Add a class name of "box" to each new DIV
// 
$("article div").addClass('box');	
// Move 5 elements using offset to the left positions 100, 200, 300, 400 and 500 respectively

// for (var index=0 ; index<$('.box').length; index++) {
// 	var elem = $('.box')[index];
// 	$(elem).offset({left: 100+index*100});
// }

$('.box').map(function(index, elem) {
	return $(elem).offset({left: 100+index*100});
});
