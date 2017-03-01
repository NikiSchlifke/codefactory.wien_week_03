var dom_shoppingcart = document.getElementById("shoppingcart");
var dom_maincatalog = document.getElementById("maincatalog");

var template_catalogitem = document.getElementById("template--catalogitem");
function toogleCart() {
	var visibility = dom_shoppingcart.style.visibility;
	console.log(visibility);
	if (visibility == "hidden") {
		visibility = "visible";
	} else {
		visibility = "hidden";
	}
}

var items = [
	{
		"name": "phone",
		"price": 299,
		"oldprice": 399
	},
	{
		"name": "cup",
		"price": 2.9,
		"oldprice": false
	},
	{
		"name": "Laptop",
		"price": 1499,
		"oldprice": false
	}
]

function createItem(item)
{
	var newItem = template_catalogitem;
	newItem.id = '';
	newItemPrice = newItem.getElementsByClassName('price')[0];
	newItemOldPrice = newItem.getElementsByClassName('oldprice')[0];
	newItemName = newItem.getElementsByTagName('h3')[0];

	newItemPrice.innerHTML = item.price;
	newItemOldPrice.innerHTML = item.oldprice;
	newItemName.innerHTML = item.name;

	newItem.style.visibility = 'visible';
	newItem.style.position = 'relative';

	return newItem;
}

function createItems(items)