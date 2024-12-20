const infoToggle = document.getElementById("infoToggle");
const infoMenuLarge = document.getElementById("infoMenuLarge");
const infoMenuSmall = document.getElementById("infoMenuSmall");

infoToggle.addEventListener("click", () => {
  // Handle large menu for larger screens
  if (window.innerWidth >= 992) {
    if (infoMenuLarge.style.visibility === "visible") {
      infoMenuLarge.style.visibility = "hidden";
      infoMenuLarge.style.opacity = "0";
      infoMenuLarge.classList.remove("show");
    } else {
      infoMenuLarge.style.visibility = "visible";
      infoMenuLarge.style.opacity = "1";
      infoMenuLarge.classList.add("show");
    }
  } else {
    // Handle small menu for smaller screens
    infoMenuSmall.style.display =
      infoMenuSmall.style.display === "block" ? "none" : "block";
  }
});

// Close large menu on close button click
document.getElementById("infoMenuClose").addEventListener("click", function () {
  infoMenuLarge.style.visibility = "hidden";
  infoMenuLarge.style.opacity = "0";
  infoMenuLarge.classList.remove("show");
});

function toggleDropdown(arrow) {
  const dropdownMenu = arrow.parentElement.querySelector(".dropdown-menu");
  const isOpen = dropdownMenu.style.display === "block";

  // Toggle the display of the dropdown menu
  dropdownMenu.style.display = isOpen ? "none" : "block";

  // Optionally, toggle a class on the arrow for styling changes
  arrow.classList.toggle("open", !isOpen);
}
