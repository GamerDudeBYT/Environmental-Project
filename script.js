document.addEventListener("DOMContentLoaded", () => {
	const random_tasks = [
		{ task: "Take the compost out", difficulty: "easy" },
		{ task: "Take the recycling out", difficulty: "easy" },
		{ task: "Turn a device off instead of closing it", difficulty: "easy" },
		{ task: "Use reusable shopping bags", difficulty: "easy" },
		{ task: "Unplug devices when not in use", difficulty: "easy" },
		{ task: "Switch to LED bulbs", difficulty: "easy" },
		{ task: "Turn off the tap while brushing your teeth", difficulty: "easy" },
		{ task: "Use a reusable water bottle", difficulty: "easy" },

		{ task: "Pick up 10 pieces of litter", difficulty: "medium" },
		{ task: "Turn all lights off for 1 hour", difficulty: "medium" },
		{ task: "Walk 1 mile", difficulty: "medium" },
		{ task: "Cycle somewhere instead of driving", difficulty: "medium" },
		{ task: "Plant a tree or a plant", difficulty: "medium" },
		{ task: "Reduce meat consumption for a day", difficulty: "medium" },
		{ task: "Buy local produce", difficulty: "medium" },
		{ task: "Shower for 5 minutes instead of 10", difficulty: "medium" },
		{ task: "Wash clothes in cold water", difficulty: "medium" },

		{ task: "Cycle somewhere instead of driving", difficulty: "hard" },
		{ task: "Install a rainwater collection system", difficulty: "hard" },
		{ task: "Build a compost bin in your backyard", difficulty: "hard" },
		{ task: "Reduce plastic waste for a full week", difficulty: "hard" },
		{ task: "Switch to a plant-based diet for a week", difficulty: "hard" },
		{ task: "Install solar panels or solar-powered lights", difficulty: "hard" },
		{ task: "Commit to zero waste for a month", difficulty: "hard" },
		{ task: "Switch to an electric car or hybrid vehicle", difficulty: "hard" },
		{ task: "Create a sustainable garden with native plants", difficulty: "hard" }
	];


	const testTask_block = document.getElementById("testTask");
	const testDifficulty_block = document.getElementById("testDifficulty");


	window.choose_random_task = (difficulty) => {

		const random_tasks_filtered = random_tasks.filter(task => task.difficulty === difficulty);

		const random_task = random_tasks_filtered[Math.floor(Math.random() * random_tasks_filtered.length)];

		testTask_block.innerHTML = random_task.task;
		testDifficulty_block.innerHTML = random_task.difficulty;

		return random_task;
	};
});
