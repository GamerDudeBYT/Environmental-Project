document.addEventListener("DOMContentLoaded", () => {
	function includeHTML() {
		const elements = document.querySelectorAll("[include-html]");
		elements.forEach((element) => {
			const file = element.getAttribute("include-html");
			if (file) {
				try {
					const response = fetch(file);
					if (response.ok) {
						element.innerHTML = response.text();
					} else {
						element.innerHTML = "Page not found.";
					}
					element.removeAttribute("include-html");
				} catch (error) {
					element.innerHTML = "Error loading the content.";
				}
			}
		});
	}
	includeHTML();
})