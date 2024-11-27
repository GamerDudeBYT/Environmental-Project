document.addEventListener("DOMContentLoaded", () => {
	const home_div = document.getElementById("home");
	const about_div = document.getElementById("about");

	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
	const navbar_func = () => {
		var x = document.getElementById("topnav");
		if (x.className === "navbar") {
			x.className += " responsive";
		} else {
			x.className = "navbar";
		}
	}

	const home_func = () => {
		about_div.style.cssText = "display: none;";
		home_div.style.cssText = "display: block;";
	};

	const about_func = () => {
		home_div.style.cssText = "display: none;";
		about_div.style.cssText = "display: block;";
	};

});