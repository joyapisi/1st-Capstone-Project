const NavList = document.getElementById('navList');
// const Hamburger = document.getElementById('hamburger');
const CloseButton = document.getElementById('closeButton');

function menuPopup() {
  NavList.classList.toggle('active');
  // Hamburger.classList.toggle('active');
  CloseButton.classList.toggle('active');

  if (window.innerWidth > 768) {
    document.getElementById('navigationList').classList.toggle('active');
    return false;
  }
  return true;
}
NavList.addEventListener('click', menuPopup);