document.addEventListener("DOMContentLoaded", () => {
	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
	const navbar_func = () => {
		var x = document.getElementById("topnav");
		if (x.className === "navbar") {
			x.className += " responsive";
		} else {
			x.className = "navbar";
		}
	}
});