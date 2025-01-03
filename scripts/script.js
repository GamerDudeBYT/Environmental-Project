document.addEventListener("DOMContentLoaded", () => {
	const random_tasks = [
		{
			"task": "Take the compost out",
			"description": "Dispose of organic waste by transferring it to a compost bin.",
			"difficulty": "easy"
		},
		{
			"task": "Take the recycling out",
			"description": "Gather and sort recyclables, then place them in the appropriate bin.",
			"difficulty": "easy"
		},
		{
			"task": "Turn a device off instead of closing it",
			"description": "Power down devices completely to save energy rather than just closing the lid or putting them in sleep mode.",
			"difficulty": "easy"
		},
		{
			"task": "Use reusable shopping bags",
			"description": "Opt for reusable bags when shopping to reduce plastic waste.",
			"difficulty": "easy"
		},
		{
			"task": "Unplug devices when not in use",
			"description": "Save energy by unplugging electronic devices when they are not in use.",
			"difficulty": "easy"
		},
		{
			"task": "Turn off the tap while brushing your teeth",
			"description": "Conserve water by turning off the tap while brushing your teeth.",
			"difficulty": "easy"
		},
		{
			"task": "Use a reusable water bottle",
			"description": "Reduce plastic waste by using a reusable water bottle instead of single-use plastic ones.",
			"difficulty": "easy"
		},
		{
			"task": "Donate old clothes",
			"description": "Gather old clothes and donate them to a local charity or thrift store.",
			"difficulty": "easy"
		},
		{
			"task": "Turn the heating off for 2 hours",
			"description": "Save energy and lower bills by reducing electricty/gas used for heating",
			"difficulty": "medium"
		},
		{
			"task": "Pick up 10 pieces of litter",
			"description": "Help clean up your local environment by collecting and disposing of litter.",
			"difficulty": "medium"
		},
		{
			"task": "Turn all lights off for 1 hour",
			"description": "Save energy by turning off all lights in your home for one hour.",
			"difficulty": "medium"
		},
		{
			"task": "Walk 1 mile",
			"description": "Improve your fitness and reduce carbon emissions by walking instead of driving.",
			"difficulty": "medium"
		},
		{
			"task": "Cycle somewhere instead of driving",
			"description": "Choose a bicycle over a car for short trips to reduce your carbon footprint.",
			"difficulty": "medium"
		},
		{
			"task": "Reduce meat consumption for a day",
			"description": "Try going meat-free for a day to lower your environmental impact.",
			"difficulty": "medium"
		},
		{
			"task": "Buy local produce",
			"description": "Support local farmers and reduce your carbon footprint by purchasing locally grown produce.",
			"difficulty": "medium"
		},
		{
			"task": "Shower for 5 minutes instead of 10",
			"description": "Cut down on water usage by taking shorter showers.",
			"difficulty": "medium"
		},
		{
			"task": "Wash clothes in cold water",
			"description": "Save energy and protect your clothes by washing them in cold water.",
			"difficulty": "medium"
		},
		{
			"task": "Use a clothesline",
			"description": "Dry your clothes on a clothesline instead of using a dryer to save energy.",
			"difficulty": "medium"
		},
		{
			"task": "Make homemade cleaning products",
			"description": "Create eco-friendly cleaning solutions using common household items like vinegar and baking soda.",
			"difficulty": "medium"
		},
		{
			"task": "Participate in a local cleanup",
			"description": "Join a community cleanup event to help remove litter from public spaces.",
			"difficulty": "medium"
		},
		{
			"task": "Start a small vegetable garden",
			"description": "Use available space to grow your own vegetables, reducing the need for store-bought produce.",
			"difficulty": "medium"
		},
		{
			"task": "Walk to the shops for 1 month",
			"description": "Save fuel and reduce emissions when travelling the place you routinely visit",
			"difficulty": "hard"
		},
		{
			"task": "Make your own compost bin",
			"description": "Create a compost bin using items you already have at home, like an old bin or container.",
			"difficulty": "hard"
		},
		{
			"task": "Reduce plastic waste for a full week",
			"description": "Challenge yourself to avoid using plastic products for an entire week.",
			"difficulty": "hard"
		},
		{
			"task": "Switch to a plant-based diet for a week",
			"description": "Adopt a plant-based diet for a week to explore healthier eating and reduce your environmental impact.",
			"difficulty": "hard"
		},
		{
			"task": "Commit to zero waste for a month",
			"description": "Aim to produce no waste for an entire month, focusing on reducing, reusing, and recycling.",
			"difficulty": "hard"
		}
	]

	// Define the random tasks seperated into easy, medium and hard

	// Get eco_score from cookies and ensure it's treated as an integer
	const get_cookie = (cookie_name) => {
		const cookie = document.cookie.split("; ").find(row => row.startsWith(`${cookie_name}=`));
		return cookie ? parseInt(cookie.split("=")[1], 10) : 0;  // Default to 0 if cookie doesn't exist
	}

	const get_uncompleted_tasks = () => {
		const tasks_cookie = document.cookie.split("; ").find(row => row.startsWith("uncompleted_tasks="));
		return tasks_cookie ? JSON.parse(decodeURIComponent(tasks_cookie.split("=")[1])) : [];
	}

	const saveUncompletedTasks = (tasks) => {
		document.cookie = `uncompleted_tasks=${encodeURIComponent(JSON.stringify(tasks))}; path=/; max-age=31536000`;
	}

	const tasks_list_div = document.getElementById("tasks_list");
	const eco_score_p = document.getElementById("ecoscore");
	const reset_score_button = document.getElementById("reset_score_button");

	if (!tasks_list_div || !eco_score_p || !reset_score_button) {
		console.error("Required DOM elements are missing.");
		return;
	}

	let saved_tasks = get_uncompleted_tasks();
	let eco_score = get_cookie("eco_score");
	eco_score_p.innerHTML = eco_score;

	reset_score_button.addEventListener("click", () => {
		if (confirm("Wipe Save?")) {
			document.cookie = `eco_score=0; path=/; max-age=31536000`;
			eco_score = get_cookie("eco_score");
			eco_score_p.innerHTML = eco_score;
		}
	});

	// Render tasks from the saved list
	saved_tasks.forEach(task => choose_random_task(task));

	function choose_random_task(random_task) {
		const new_task_div = document.createElement('div');
		const new_task_title = document.createElement('h3');
		const new_task_description = document.createElement('p');
		const new_task_difficulty = document.createElement('p');
		const new_task_button_container = document.createElement('div');
		const new_task_completed_button = document.createElement('button');
		const new_task_reject_button = document.createElement('button');

		new_task_title.innerHTML = random_task.task;
		new_task_description.innerHTML = random_task.description;

		new_task_button_container.classList.add("button_container", "right");
		new_task_completed_button.innerHTML = "Completed";
		new_task_completed_button.classList.add("button", "completed");
		new_task_reject_button.innerHTML = "Reject";
		new_task_reject_button.classList.add("button", "reject");

		new_task_reject_button.addEventListener("click", () => {
			removeTask(random_task);
			new_task_reject_button.parentElement.parentElement.remove();
			console.log("Rejected Task")
		});

		new_task_completed_button.addEventListener("click", () => {
			new_task_completed_button.parentElement.parentElement.remove();
			console.log("Marked Task as Completed");
		})

		// Update Eco Score based on task difficulty
		const updateEcoScore = (points) => {
			eco_score += points;
			document.cookie = `eco_score=${eco_score}; path=/; max-age=31536000`;
			eco_score_p.innerHTML = eco_score;
			removeTask(random_task);
		};

		switch (random_task.difficulty) {
			case "easy":
				new_task_difficulty.innerHTML = "Easy";
				new_task_difficulty.classList.add("task_easy", "text");
				new_task_div.classList.add("task_easy", "border");
				new_task_completed_button.addEventListener("click", () => updateEcoScore(100));
				console.log("Added Easy Task");
				break;
			case "medium":
				new_task_difficulty.innerHTML = "Medium";
				new_task_difficulty.classList.add("task_medium", "text");
				new_task_div.classList.add("task_medium", "border");
				new_task_completed_button.addEventListener("click", () => updateEcoScore(200));
				console.log("Added Medium Task");
				break;
			case "hard":
				new_task_difficulty.innerHTML = "Hard";
				new_task_difficulty.classList.add("task_hard", "text");
				new_task_div.classList.add("task_hard", "border");
				new_task_completed_button.addEventListener("click", () => updateEcoScore(300));
				console.log("Added Hard Task")
				break;
			default:
				console.error("Error setting difficulty for new task");
				return;
		}

		new_task_div.appendChild(new_task_title);
		new_task_div.appendChild(new_task_description);
		new_task_div.appendChild(new_task_difficulty);
		new_task_button_container.appendChild(new_task_completed_button);
		new_task_button_container.appendChild(new_task_reject_button);
		new_task_div.appendChild(new_task_button_container);
		tasks_list_div.appendChild(new_task_div);
	}

	// Remove task from saved tasks list
	function removeTask(task) {
		saved_tasks = saved_tasks.filter(saved_task => saved_task.task !== task.task);
		saveUncompletedTasks(saved_tasks);
	}

	// Function to choose and display a random task based on difficulty
	window.choose_random_task = (difficulty) => {
		const filtered_tasks = random_tasks.filter(task => task.difficulty === difficulty);
		if (filtered_tasks.length === 0) {
			console.error(`No tasks available for difficulty: ${difficulty}`);
			return;
		}

		const random_task = filtered_tasks[Math.floor(Math.random() * filtered_tasks.length)];
		saved_tasks.push(random_task);
		saveUncompletedTasks(saved_tasks);
		choose_random_task(random_task);
	};
});

document.addEventListener("contextmenu", (e) => {
	e.preventDefault(); // Disable right-click
	console.log("NO RIGHT CLICK ALLOWED");
});