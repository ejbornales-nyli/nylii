<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Stories | Negrosanon Young Leaders Institute</title>
	<link rel="icon" type="image/x-icon" href="/assets/images/favicon.png" />
	<link rel="stylesheet" href="assets/css/style.css" />
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
	<link href="assets/fontawesome/css/fontawesome.css" rel="stylesheet">
	<link href="assets/fontawesome/css/brands.css" rel="stylesheet">
	<link href="assets/fontawesome/css/solid.css" rel="stylesheet">

	<script defer src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
</head>

<body>
	<?php require_once 'navbar.php'; ?>

	<section id="stories" class="header">
		<div class="d-flex justify-content-center p-5">
			<div class="d-flex flex-column justify-content-center align-items-center py-4">
				<div class="section-header-dark">
					<h2>Stories</h2>
					<hr>
				</div>
				<div class="p-2">
				</div>
			</div>
		</div>
	</section>

	<section class="stories-section">
		<div class="container d-flex flex-column">
			<div class="filter-content row" style="margin: 2rem 0rem;">
				<div class="col-md-6 col-sm-12 order-last order-sm-first">
					<select class="dropdown">
						<option class="option-link" value="all">All</option>
						<option class="option-link" value="category1">Category 1</option>
						<option class="option-link" value="category2">Category 2</option>
						<option class="option-link" value="category3">Category 3</option>
					</select>
				</div>
				<div class="col-md-6 col-sm-12 order-first order-sm-last">
					<form class="search-form" action="#">
						<div class="search-field form-control">
							<span class="fa fa-search search-icon"></span>
							<input type="text" class="search form-control" placeholder="Search" name="search"
								autocomplete="off">
						</div>
						<button type="button" class="nyli-btn-primary-light">
							<a id="search-button-desktop" href="#">Search</a>
							<a id="search-button-mobile" href="#">
								<i class="fa-solid fa-magnifying-glass"></i>
							</a>
						</button>
					</form>
				</div>
			</div>
			<div class="stories-content">
				<div class="row">
					<div class="content-list col-md-4 col-xs-12">
						<img src="assets/images/3.png" class="img-fluid mx-auto d-block text-center">
						<div class="header-title-main">
							<h3>3 Negrosanon Young Leaders to represent Negros Occidental in a U.S. Fellowship</h3>
							<p>January 24, 2023</p>
						</div>
						<button type="button" class="nyli-btn-primary-light">
							<a href="story-article.php">Read more</a>
						</button>
					</div>
					<div class="content-list col-md-4 col-xs-12">
						<img src="assets/images/2.jpg" class="img-fluid mx-auto d-block text-center">
						<div class="header-title-main">
							<h3>“Relatively cheap” and “charging less for quality work” – How the Filipino online
								workers are being advertised by the Philippine business process outsourcing industry
								and online job sites</h3>
							<p>January 24, 2023</p>
						</div>
						<button type="button" class="nyli-btn-primary-light">
							<a href="story-article.php">Read more</a>
						</button>
					</div>
					<div class="content-list col-md-4 col-xs-12">
						<img src="assets/images/beautiful.jpg" class="img-fluid mx-auto d-block text-center">
						<div class="header-title-main">
							<h3>NYLI, SK Federation Bacolod, capacitates the youth through Youth Employment
								Enrichment Workshop</h3>
							<p>January 24, 2023</p>
						</div>
						<button type="button" class="nyli-btn-primary-light">
							<a href="story-article.php">Read more</a>
						</button>
					</div>
				</div>
				<div class="row">
					<div class="content-list col-md-4 col-xs-12">
						<img src="assets/images/default.png" class="img-fluid mx-auto d-block text-center">
						<div class="header-title-main">
							<h3>3 Negrosanon Young Leaders to represent Negros Occidental in a U.S. Fellowship</h3>
							<p>January 24, 2023</p>
						</div>
						<button type="button" class="nyli-btn-primary-light">
							<a href="story-article.php">Read more</a>
						</button>
					</div>
					<div class="content-list col-md-4 col-xs-12">
						<img src="assets/images/default.png" class="img-fluid mx-auto d-block text-center">
						<div class="header-title-main">
							<h3>3 Negrosanon Young Leaders to represent Negros Occidental in a U.S. Fellowship</h3>
							<p>January 24, 2023</p>
						</div>
						<button type="button" class="nyli-btn-primary-light">
							<a href="story-article.php">Read more</a>
						</button>
					</div>
					<div class="content-list col-md-4 col-xs-12">
						<img src="assets/images/default.png" class="img-fluid mx-auto d-block text-center">
						<div class="header-title-main">
							<h3>3 Negrosanon Young Leaders to represent Negros Occidental in a U.S. Fellowship</h3>
							<p>January 24, 2023</p>
						</div>
						<button type="button" class="nyli-btn-primary-light">
							<a href="story-article.php">Read more</a>
						</button>
					</div>
				</div>
			</div>
			<div id="pagination-container">
				<ul id="pagination-list"></ul>
			</div>
		</div>
	</section>

	<?php require_once 'footer.php'; ?>

	<script src="/assets/js/script.js"></script>
	<script>
		const width = window.innerWidth;
		const height = window.innerHeight;

		console.log(`The viewport's width is ${width} and the height is ${height}.`);
	</script>
	<script src="/assets/js/pagination.js"></script>
</body>

</php>