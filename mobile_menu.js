const navList = document.getElementById('navList');
const closeButton = document.getElementById('closeButton');

function menuPopup() {
  navList.classList.toggle('active');
  closeButton.classList.toggle('active');

  if (window.innerWidth > 768) {
    document.getElementById('navList').classList.toggle('active');
    return false;
  }
  return true;
}
navList.addEventListener('click', menuPopup);