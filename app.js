// const entries = document.querySelectorAll(".section h2");
const entries = document.querySelectorAll(".section");

var sectionToNav = {
  "aboutSection": "aboutNav",
  "projectsSection": "projectsNav",
  "resumeSection": "resumeNav"
};

let previousEntry = null; // Initialize the previously active entry to null

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      const sectionId = entry.target.id;
      const navId = sectionToNav[sectionId]; // Get the corresponding nav ID

      const navElement = document.getElementById(navId);

      if (navElement) {
        if (entry.isIntersecting) {
          if (previousEntry && previousEntry !== entry) {
            const previousSectionId = previousEntry.target.id;
            const previousNavId = sectionToNav[previousSectionId];
            const previousNavElement = document.getElementById(previousNavId);
            previousNavElement.classList.remove("active"); // Remove the class from the previous nav
          }

          navElement.classList.add("active"); // Add the class to the current nav
          previousEntry = entry; // Update the previously active entry
        }
      }
    });
  },
  {
    rootMargin: "-30%"
  }
);

entries.forEach(entry => {
  observer.observe(entry);
});

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hello-msg").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



