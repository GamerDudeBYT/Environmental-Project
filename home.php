<!DOCTYPE html>
<html lang="en">

<body>
	<header>
		<h1>Eco Tracker</h1>
	</header>

	<main>
		<section class="inset-container">
			<p>There are 3 levels of difficulty:</p>
			<ul>
				<li class="task_easy text">Easy: 100 Points</li>
				<li class="task_medium text">Medium: 200 Points</li>
				<li class="task_hard text">Hard: 300 Points</li>
			</ul>
		</section>

		<section class="inset-container">
			<h2>Your eco score is:</h2>
			<p id="ecoscore">0</p>
			<utton id="reset_score_button">Reset Score (Debug)</button>
		</section>

		<section class="inset-container">
			<h2>Tasks:</h2>
			<div class="button-container left">
				<button class="button task_easy text" onclick="choose_random_task('easy')"
					aria-label="Get a random easy task">
					<span class="button-icon">✔️</span> Random Easy Task
				</button>
				<button class="button task_medium text" onclick="choose_random_task('medium')"
					aria-label="Get a random medium task">
					<span class="button-icon">⚙️</span> Random Medium Task
				</button>
				<button class="button task_hard text" onclick="choose_random_task('hard')"
					aria-label="Get a random hard task">
					<span class="button-icon">🔥</span> Random Hard Task
				</button>
			</div>

			<div id="tasks_list" class="tasks_list">
				<!-- New tasks will appear here -->
			</div>
		</section>
	</main>

	<footer>


	</footer>

	<script src="./scripts/script.js"></script>
</body>

</html>