<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Contact Us | Negrosanon Young Leaders Institute</title>
	<link rel="icon" type="image/x-icon" href="/assets/images/favicon.png" />
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.css" />
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
	<link href="assets/fontawesome/css/fontawesome.css" rel="stylesheet">
	<link href="assets/fontawesome/css/brands.css" rel="stylesheet">
	<link href="assets/fontawesome/css/solid.css" rel="stylesheet">
	<link rel="stylesheet" href="assets/css/style.css" />
</head>

<body>
	<?php require_once 'navbar.php'; ?>

	<section id="contact-us" class="header">
		<div class="d-flex justify-content-center p-5">
			<div class="d-flex flex-column justify-content-center align-items-center py-4">
				<div class="section-header-dark">
					<h2>Contact Us</h2>
					<hr>
				</div>
				<div class="p-2">
				</div>
			</div>
		</div>
	</section>

	<div class="contact-form">
		<div class="container text-center mt-5">
			<div class="row justify-content-center">
				<div class="col-12 col-md-6">
					<form action="" class="mb-5">
						<div class="mb-4">
							<input type="text" class="form-control" placeholder="Name">
						</div>
						<div class="mb-4">
							<input type="number" class="form-control" placeholder="Phone">
						</div>
						<div class="mb-4">
							<input type="email" class="form-control" placeholder="Email">
						</div>
						<div class="mb-4">
							<input type="subject" class="form-control" placeholder="Subject">
						</div>
						<div class="mb-4">
							<textarea class="form-control" rows="10" placeholder="Enter message here"></textarea>
						</div>
						<div style="width: 100%;">
							<button type="submit" class="nyli-btn-primary-light" style="margin: auto;">
								<span>Send</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<?php require_once 'footer.php'; ?>

	<script src="/assets/bootstrap/js/bootstrap.bundle.js"></script>
	<script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script src="/assets/bootstrap/js/bootstrap.js"></script>
	<script src="/assets/bootstrap/js/bootstrap.min.js"></script>
	<script src="/assets/js/script.js"></script>
</body>

</html>