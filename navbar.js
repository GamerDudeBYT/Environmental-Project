document.addEventListener("DOMContentLoaded", () => {
	const homeDiv = document.getElementById("home");
	const aboutDiv = document.getElementById("about");
	const homeBtn = document.getElementById("home-btn");
	const aboutBtn = document.getElementById("about-btn");
	const menuIcon = document.getElementById("menu-icon");
	const navbar = document.getElementById("topnav");

	// Toggle responsive class for navbar
	menuIcon.addEventListener("click", () => {
		if (navbar.className === "navbar") {
			navbar.className += " responsive";
		} else {
			navbar.className = "navbar";
		}
	});

	// Show the home content and hide the about content
	homeBtn.addEventListener("click", () => {
		aboutDiv.style.display = "none";
		homeDiv.style.display = "block";
		homeBtn.classList.add("active");
		aboutBtn.classList.remove("active");
	});

	// Show the about content and hide the home content
	aboutBtn.addEventListener("click", () => {
		homeDiv.style.display = "none";
		aboutDiv.style.display = "block";
		aboutBtn.classList.add("active");
		homeBtn.classList.remove("active");
	});

	// Initialize with the home section visible by default
	homeDiv.style.display = "block";
	homeBtn.classList.add("active");
});
