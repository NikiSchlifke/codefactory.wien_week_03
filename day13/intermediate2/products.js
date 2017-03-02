// products.js

/*
First open the products_tempalte.html file from exercise files for this topic. 
Go through the HTML code  in order to get more familiar with the document structure. 
Once you understand it, write dynamic code inside myscript.js that 
dynamically changes the background color depending on the product's type. 
There are three types phone, notebook and tablet.

For Computers use red color
For Mobile Phones use green color
For Tablets use blue
After you successful dynamic styling of the products, according to their category, 
add another two products using the same structure. One product should be the phone another the tablet.

Hints: Put more attention how classes are nested one inside another, so you can access the element. 
We have learned a lot techniques how to select elements o the page, 
for such a purpose data-type HTML 5 attribute can be very handy.
Try firstly to access the element using plain CSS, the accessing logic could be the same for jQuery as well.
*/

// get all products on the page
var products = $(".prod-info-main");
// product images
var productImages = $(products).find($("img"));
// get specifc product kind images
notebookImages = $(products).find('img[src^="notebook"]');
phoneImages = $(products).find('img[src^="phone"]');
tabletImages = $(products).find('img[src^="tablet"]');
// get specifc products of some kind
notebookContainers = notebookImages.parents(".prod-info-main");
phoneContainers = phoneImages.parents(".prod-info-main");
tabletContainers = tabletImages.parents(".prod-info-main");
// set background colors
notebookContainers.find($('.col-md-7, .col-md-5')).children('*').css("background-color", "red");
phoneContainers.find($('.col-md-7, .col-md-5')).children('*').css("background-color", "green");
tabletContainers.find($('.col-md-7, .col-md-5')).children('*').css("background-color", "blue");


function newContainer(container, image_file, product_name, category) {
	var template = container.first().clone();
	template.find('img').attr('src', image_file);
	var link = template.find('.name a');
	link.text(product_name);
	link.append($('<span>').text(category));
	template.insertAfter(container.last());
}

newContainer(phoneContainers, "phone_modded.png", "Modded Phone", "Phones");
newContainer(tabletContainers, "tablet_modded.png", "Modded Tablet", "Tablets");


