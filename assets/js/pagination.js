var totalPages = 6;
		var currentPage = 1;
	
		// Get pagination container and list elements
		var paginationContainer = document.getElementById('pagination-container');
		var paginationList = document.getElementById('pagination-list');
	
		// Create "Previous" button
		var prevBtn = document.createElement('button');
		prevBtn.innerHTML = 'Previous';
		prevBtn.classList.add('pagination-btn');
		prevBtn.classList.add('disabled');
		paginationContainer.insertBefore(prevBtn, paginationList);
	
		// Create page buttons
		for (var i = 1; i <= totalPages; i++) {
			var pageBtn = document.createElement('button');
			pageBtn.innerHTML = i;
			pageBtn.setAttribute('data-page', i);
			pageBtn.classList.add('pagination-btn');
			paginationList.appendChild(pageBtn);
		}
	
		// Create "Next" button
		var nextBtn = document.createElement('button');
		nextBtn.innerHTML = 'Next';
		nextBtn.classList.add('pagination-btn');
		if (totalPages === 1) {
			nextBtn.classList.add('disabled');
		}
		paginationContainer.appendChild(nextBtn);
	
		// Render pagination buttons
		function renderPaginationButtons() {
			// Find all the page buttons and remove the "active" class from any that have it
			var pageButtons = paginationList.querySelectorAll('.pagination-btn');
			pageButtons.forEach(function(button) {
				button.classList.remove('active');
			});
	
			// Add the "active" class to the button for the current page
			var activeButton = paginationList.querySelector(`[data-page="${currentPage}"]`);
			activeButton.classList.add('active');
	
			// Disable "Previous" button if on first page
			if (currentPage === 1) {
				prevBtn.classList.add('disabled');
			} else {
				prevBtn.classList.remove('disabled');
			}
	
			// Disable "Next" button if on last page
			if (currentPage === totalPages) {
				nextBtn.classList.add('disabled');
			} else {
				nextBtn.classList.remove('disabled');
			}
		}
	
		// Render initial pagination buttons
		renderPaginationButtons();
	
		// Handle page button click
		paginationList.addEventListener('click', function(event) {
			var pageBtn = event.target;
			if (pageBtn.tagName === 'BUTTON') {
				currentPage = parseInt(pageBtn.getAttribute('data-page'));
				renderPaginationButtons();
			}
		});
	
		// Handle "Previous" button click
		prevBtn.addEventListener('click', function() {
			if (currentPage > 1) {
				currentPage--;
				renderPaginationButtons();
			}
		});
	
		// Handle "Next" button click
		nextBtn.addEventListener('click', function() {
			if (currentPage < totalPages) {
				currentPage++;
				renderPaginationButtons();
			}
		});