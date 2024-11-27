document.addEventListener("DOMContentLoaded", () => {
	const home_div = document.getElementById("home");
	const about_div = document.getElementById("about");

	// Toggle responsive class for navbar
	const navbar_func = () => {
		var x = document.getElementById("topnav");
		if (x.className === "navbar") {
			x.className += " responsive";
		} else {
			x.className = "navbar";
		}
	};

	// Show the home content and hide the about content
	const home_func = () => {
		about_div.style.display = "none";
		home_div.style.display = "block";
	};

	// Show the about content and hide the home content
	const about_func = () => {
		home_div.style.display = "none";
		about_div.style.display = "block";
	};

	// Initialize with the home section visible by default
	home_func(); // Show Home by default when the page loads
});
