function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/* Loop through all HTML elements */
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/* Search for elements with the "include-html" attribute */
		file = elmnt.getAttribute("include-html");
		if (file) {
			/* Make an HTTP request to load the HTML content */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = "Page not found.";
					}
					/* Remove the attribute and call this function again */
					elmnt.removeAttribute("include-html");
					includeHTML();
				}
			};
			xhttp.open("GET", file, true);
			xhttp.send();
			/* Exit the function */
			return;
		}
	}
};
