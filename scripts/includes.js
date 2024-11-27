function includeHTML() {
	const elements = document.querySelectorAll("[include-html]");
	elements.forEach(async (element) => {
		const file = element.getAttribute("include-html");
		if (file) {
			try {
				const response = await fetch(file);
				if (response.ok) {
					element.innerHTML = await response.text();
				} else {
					element.innerHTML = "Page not found.";
				}
				element.removeAttribute("include-html");
				includeHTML(); // Recursively include nested includes
			} catch (error) {
				element.innerHTML = "Error loading the content.";
			}
		}
	});
}

// Execute includeHTML when DOM is fully loaded
document.addEventListener("DOMContentLoaded", includeHTML);
