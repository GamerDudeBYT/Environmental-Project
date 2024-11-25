
document.addEventListener("DOMContentLoaded", () => {
	// Get the output div
	const consoleDiv = document.createElement('div');

	consoleDiv.id = "consoleOutput";

	consoleDiv.style.cssText = `
		width: 100%;
		height: 300px;
		overflow-y: scroll;
		background-color: #f0f0f0;
		border: 1px solid #ccc;
		padding: 10px;
		font-family: monospace;
		white-space: pre-wrap;
		word-wrap: break-word;
	`;

	// Function to append log messages to the div
	function logToDiv(message, type) {
		const newMessage = document.createElement('div');
		newMessage.textContent = message;

		// Style the message based on the type
		if (type === 'error') {
			newMessage.style.color = 'red';
		} else if (type === 'warn') {
			newMessage.style.color = 'orange';
		} else {
			newMessage.style.color = 'black';
		}

		// Append the message to the div
		consoleDiv.appendChild(newMessage);

		// Scroll to the bottom of the div (to show the most recent log)
		consoleDiv.scrollTop = consoleDiv.scrollHeight;
	}

	// Save the original console methods
	const originalLog = console.log;
	const originalWarn = console.warn;
	const originalError = console.error;

	// Override console methods to capture messages and log them to the div
	console.log = function (message) {
		logToDiv(message, 'log');
		originalLog.apply(console, arguments);
	};

	console.warn = function (message) {
		logToDiv(message, 'warn');
		originalWarn.apply(console, arguments);
	};

	console.error = function (message) {
		logToDiv(message, 'error');
		originalError.apply(console, arguments);
	};

	// Capture uncaught JavaScript errors
	window.onerror = function (message, source, lineno, colno, error) {
		const errorMessage = `Error: ${message} at ${source}:${lineno}:${colno}`;
		logToDiv(errorMessage, 'error');
		return true; // Prevent the default browser error handling
	};

	document.body.appendChild(consoleDiv);
})