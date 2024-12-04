<!DOCTYPE html>
<html>

<head>
	<title>Eco Tracker</title>
	<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="e44647b7-2d4e-4f2c-80ee-6a7a6786660a"
		data-blockingmode="auto" type="text/javascript"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="./css/style.css">
	<link rel="icon" type="image/x-icon" href="./images/favicon.ico">
</head>

<body>
	<div class="navbar" id="topnav">
		<button id="home-btn" data-target="home" class="active">Home</button>
		<button id="about-btn" data-target="about">About</button>
		<button id="facts-btn" data-target="facts">Facts</button>
		<a href="javascript:void(0);" class="icon" id="menu-icon">
			<i class="fa fa-bars"></i>
		</a>
	</div>

	<!-- Placeholder divs for dynamic content -->
	<div id="home" include-html="./home.html"></div>
	<div id="about" include-html="./about.html" style="display: none;"></div>
	<div id="facts" include-html="./facts.html" style="display: none;"></div>
	<?php include('./home.php'); ?>
	<!-- JavaScript files -->

	<script src="./scripts/consolescript.js"></script>
	<script src="./scripts/navbar.js"></script>
	<script src="./scripts/includes.js" defer></script>
	<script src="./scripts/script.js" defer></script>
</body>

</html>