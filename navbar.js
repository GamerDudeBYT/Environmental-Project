document.addEventListener("DOMContentLoaded", () => {
	const navbar = document.getElementById("topnav");
	const menuIcon = document.getElementById("menu-icon");

	// Get all buttons in the navbar and all sections with `include-html`
	const buttons = Array.from(navbar.querySelectorAll("button"));
	const sections = Array.from(document.querySelectorAll("[include-html]"));

	// Toggle responsive class for the navbar
	menuIcon.addEventListener("click", () => {
		navbar.classList.toggle("responsive");
	});

	// Function to show the content of a section and hide others
	const showSection = (sectionId) => {
		sections.forEach((section) => {
			if (section.id === sectionId) {
				section.style.display = "block";
			} else {
				section.style.display = "none";
			}
		});
		buttons.forEach((button) => {
			if (button.dataset.target === sectionId) {
				button.classList.add("active");
			} else {
				button.classList.remove("active");
			}
		});
	};

	// Add event listeners to all buttons
	buttons.forEach((button) => {
		const targetId = button.dataset.target;
		button.addEventListener("click", () => showSection(targetId));
	});

	// Show the first section by default
	if (sections.length > 0) {
		showSection(sections[0].id);
	}
});
