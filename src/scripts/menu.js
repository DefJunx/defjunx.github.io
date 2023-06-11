const menuBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");
const mainContent = document.querySelector("#mainContent");
const overlay = document.querySelector("#overlay");

const toggleOverlay = () => {
  if (overlay) {
    overlay.classList.toggle("opacity-60");
    overlay.classList.toggle("opacity-0");
    overlay.classList.toggle("invisible");
  }
};

const toggleMainContent = () => {
  if (mainContent) {
    mainContent.classList.toggle("ml-[theme('width.sidebar')]");
  }
};

const toggleNavMenu = () => {
  if (navMenu) {
    navMenu.classList.toggle("w-0");
    navMenu.classList.toggle("w-sidebar");
  }
};

if (overlay) {
  overlay.addEventListener("click", e => {
    toggleNavMenu();
    toggleMainContent();
    toggleOverlay();

    if (menuBtn) {
      menuBtn.ariaExpanded = menuBtn.ariaExpanded === "true" ? "false" : "true";
    }
  });
}

if (menuBtn) {
  menuBtn.addEventListener("click", e => {
    e.preventDefault();
    console.log("menu btn click");
    toggleNavMenu();
    toggleMainContent();
    toggleOverlay();
    menuBtn.ariaExpanded = menuBtn.ariaExpanded === "true" ? "false" : "true";
  });
}
