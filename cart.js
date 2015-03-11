var getCartLength = function(){
	var cartArray = window.sessionStorage.getItem('cart');
	cartArray = cartArray.split(",");

	if(cartArray.indexOf('null') !== -1){
		cartArray.splice(cartArray.indexOf('null'), 1);
	};

	numOfItems = cartArray.length;
};

var loadCart = function(){
	if(window.sessionStorage){
			if(window.sessionStorage.getItem('cart') === undefined || window.sessionStorage.getItem('cart')=== "null" || window.sessionStorage.getItem('cart') === null){
				window.sessionStorage.setItem('cart', null);
				numOfItems = 0;
			} else {
				getCartLength();
			}
		};

		console.log("NUM OF ITEMS " + numOfItems);

		if(numOfItems === '' || numOfItems === undefined || numOfItems === null){
		document.getElementById('cart_items').innerHTML = "0";
	} else {
		document.getElementById('cart_items').innerHTML = numOfItems;
	}

};


var calcNumOfItems = function(){
	var numOfItems = document.getElementById('cart_items').innerHTML;
	numOfItems = parseInt(numOfItems, 10); //Parsed for calculation
	numOfItems = numOfItems + 1;
	console.log("HELLO CART " + document.getElementById('cart_items'));
	document.getElementById('cart_items').innerHTML = numOfItems;

};

var changeBadgeStyle = function(){
	document.getElementById('cart_items').style.transition = "all 1s";
	document.getElementById('cart_items').style.backgroundColor = "red";
	setTimeout(function(){
		document.getElementById('cart_items').style.transition = "all 1s";
		document.getElementById('cart_items').style.backgroundColor = "#777";
	}, 5 * 1000); //timeout the red color
};

var addCartItems = function(item){
	calcNumOfItems();
	changeBadgeStyle();
	window.sessionStorage.setItem('cart', window.sessionStorage.getItem('cart') + "," + item);
};

var openCart = function(){
	var cartArray = window.sessionStorage.getItem('cart');
		console.log("CART ARRAY " + cartArray);
		cartArray = cartArray.split(",");

		if(cartArray.indexOf('null') !== -1){
			cartArray.splice(cartArray.indexOf('null'), 1);
		}

	if(cartArray.length > 0){
		alert("You have " + cartArray.length + " items in your cart: " + cartArray);
	} else {
		alert("You have 0 items in your cart.");
	}
};