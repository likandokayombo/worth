const sidebarOpen = document.querySelector(".sidebarOpen");
const sidebarClose = document.querySelector(".sidebarClose");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

//js code to toggle side bar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});


// Wait for the window to load
window.onload = function() {
  // Set a timeout to simulate loading delay
  setTimeout(function() {
      // Hide preloader and show content
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
  }, 2000); // Adjust this time to simulate longer or shorter loading
};

// Get the current year
const currentYear = new Date().getFullYear();

// Update the year in the footer
document.getElementById('currentYear').textContent = currentYear;