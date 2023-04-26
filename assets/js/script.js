// Impact Section Counter Animation
const ValueDisplays = document.querySelectorAll(".num");
const element = document.querySelector('.stat-section');

const startCounters = () => {
  ValueDisplays.forEach((ValueDisplay) => {
    const updateCount = () => {
      const StartValue = parseInt(ValueDisplay.textContent.replace(/,/g, ''));
      const EndValue = parseInt(ValueDisplay.getAttribute("data-val").replace(/,/g, ''));
      const duration = Math.ceil(EndValue * 0.00125);
      if (StartValue < EndValue) {
        const newValue = (StartValue + duration).toLocaleString();
        ValueDisplay.textContent = newValue;
        setTimeout(updateCount, 1);
      } else {
        ValueDisplay.textContent = EndValue.toLocaleString();
      }
    };    
    updateCount();
  });
}

function isInViewport(element) {
  // Get the bounding client rectangle position in the viewport
  var bounding = element.getBoundingClientRect();
  
  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
      console.log('In the viewport! :)');
      return true;
  } else {
      console.log('Not in the viewport. :(');
      return false;
  }
}

window.addEventListener('scroll', function (event) {
  if (isInViewport(element)) {
    startCounters();
  }
}, false);

//About us section link
// Get all section links
const sectionLinks = document.querySelectorAll('.section-link');

// Loop through each link and add a click event listener
sectionLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default link behavior
    const sectionId = link.getAttribute('href'); // Get the href attribute value
    const section = document.querySelector(sectionId); // Get the section element
    const activeSection = document.querySelector('.section.active'); // Get the currently active section

    // Remove active class from currently active section, if any
    if (activeSection) {
      activeSection.classList.remove('active');
    }

    // Remove active class from currently active link, if any
    const activeLink = document.querySelector('.section-link.active');
    if (activeLink) {
      activeLink.classList.remove('active');
    }

    // Add active class to clicked section and link
    section.classList.add('active');
    link.classList.add('active');
  });
});

const projects = document.querySelectorAll('.project');

// Loop through each project element
projects.forEach((project) => {
  // Get the project gradient element
  const gradient = project.querySelector('.project-gradient');

  // Calculate the threshold for when the gradient should appear (in pixels)
  const threshold = project.offsetTop - window.innerHeight + 100;

  // Add a scroll event listener to the window
  window.addEventListener('scroll', () => {
    // Check if the user has scrolled past the threshold
    if (window.scrollY > threshold) {
      // Add the 'show' class to the gradient element
      gradient.classList.add('show');
    } else {
      // Remove the 'show' class from the gradient element
      gradient.classList.remove('show');
    }
  });
});

// Get the dropdown element and all the sections
const dropdown = document.querySelector('.dropdown');
const sections = document.querySelectorAll('.mobile-section');

// Listen for changes in the dropdown selection
dropdown.addEventListener('change', function() {
  // Get the selected option text
  const selectedOption = dropdown.options[dropdown.selectedIndex].textContent;

  // Hide all sections and show the selected one
  sections.forEach(function(section) {
    if (section.querySelector('a').textContent === selectedOption) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});

const sectionSelector = document.getElementById("section-selector");
		const contentSections = document.querySelectorAll(".content-section");

		sectionSelector.addEventListener("change", () => {
			// hide all content sections
			contentSections.forEach(section => section.style.display = "none");

			// show selected content section
			const selectedSection = document.getElementById(sectionSelector.value);
			selectedSection.style.display = "block";
		});