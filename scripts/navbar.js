document.addEventListener("DOMContentLoaded", () => {
	console.log("Test")
	const navbar = document.getElementById("topnav");
	const menuIcon = document.getElementById("menu-icon");

	// Function to navigate to the specified page
	const navigateToPage = (page) => {
		window.location.href = `./${page}.html`;
	};

	// Toggle responsive class for the navbar
	menuIcon.addEventListener("click", () => {
		navbar.classList.toggle("responsive");
	});

	// Add event listeners to all buttons
	document.querySelectorAll("#topnav button").forEach((button) => {
		const targetPage = button.dataset.page;
		button.addEventListener("click", () => navigateToPage(targetPage));
	});
});