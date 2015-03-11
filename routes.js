//This function takes a templateUrl and any params to pass through (like product, id, etc) and opens a new XMLHttpRequest for that request to get the route, then swaps out the template partial in the content div. It also changes the title for the product page - this will need to be moved later
var handleRoute = function(templateUrl, urlPath, routeParams){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', templateUrl, true);
	xhr.onreadystatechange = function(){
		if(this.readyState !== 4){ //If the state isn't read
			return;
		} else if (this.status !== 200) { //If the status returned is an error
			return;
		} else {
			document.getElementById('content').innerHTML = this.responseText; //push partial into content div
			window.history.replaceState({}, "", urlPath);

			if(templateUrl.indexOf('product.html') !== -1){ //if the route is the product page
				document.getElementById('product_title').innerHTML = routeParams; //Add the routeParams (id)
			};
		};
	};
	xhr.send(); //send request
};

var changeRoute = function(route, e, routeParams){
	if(e){ //If it is a mouseclick event
		e.preventDefault(); //Prevent <a> tag from firing default event, which is to redirect page, so can swap out partials
	};

	switch(route){ //Switch case matches routes
		case 'home':
			var templateUrl = 'home.html?' + Math.random(); //Math.random() is used to append a random generated number as a param in the request, making it seem to the browser as though a new page is being requested and forcing browser to check for new content, instead of caching old HTML
			var urlPath = "/home";
			handleRoute(templateUrl, urlPath, routeParams);
			break;
		case 'product':
			var templateUrl = 'product.html?' + Math.random() + "id=" + routeParams;
			var urlPath = "/product/" + routeParams;
			handleRoute(templateUrl, urlPath, routeParams);
			break;
		case 'checkout':
			var templateUrl = 'checkout.html?' + Math.random();
			var urlPath = "/checkout";
			handleRoute(templateUrl, urlPath, routeParams);
			break;
		default:
			var templateUrl = 'home.html?' + Math.random();
			var urlPath = "/home";
			handleRoute(templateUrl, urlPath, routeParams);
	};
};