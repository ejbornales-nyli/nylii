// Impact Section Counter Animation
const ValueDisplays = document.querySelectorAll(".num");
const element = document.querySelector('.stat-section');

const startCounters = () => {
  ValueDisplays.forEach((ValueDisplay) => {
    const updateCount = () => {
      const StartValue = parseInt(ValueDisplay.textContent);
      const EndValue = parseInt(ValueDisplay.getAttribute("data-val"));
      const duration = Math.ceil(EndValue * 0.00125);
      if (StartValue < EndValue) {
        ValueDisplay.textContent = StartValue + duration;
        setTimeout(updateCount, 1);
      } else {
        ValueDisplay.textContent = EndValue;
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

// Mobile dropdown for about us
// const dropdown = document.querySelector('.dropdown');
// const sections = document.querySelectorAll('.section');

// dropdown.addEventListener('change', function() {
//   const selectedSection = this.value;
//   for (let i = 0; i < sections.length; i++) {
//     if (sections[i].id === selectedSection) {
//       sections[i].style.display = 'block';
//     } else {
//       sections[i].style.display = 'none';
//     }
//   }
// });
