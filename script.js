// define global variables
const buttonList = document.querySelectorAll('button');
const blackoutBackground = document.querySelector('.blackout-div');
const modalCloseList = document.querySelectorAll('.fa-times-circle');

// add event listeners to each button on the page
for (const button of buttonList) {
  button.addEventListener('click', function (e) {
    // close existing modals (if any are currently open)
    const currentModal = document.getElementsByClassName('visible')[0];
    if (currentModal) {
      removeModal();
    }

    // target the associated modal box that was clicked
    const modalBoxLocation = e.target.nextElementSibling;

    // trigger helper function to toggle modal visibility
    addModal(modalBoxLocation);
  });
}

// add event listener to each modal close button on the page
for (const closeButton of modalCloseList) {
  closeButton.addEventListener('click', function () {
    // trigger helper function to close modal box
    removeModal();
  });
}

// add event listener to escape key to close modal on keypress
document.addEventListener('keydown', function (e) {
  // retrieve list of modals (if any are currently open)
  const currentModal = document.getElementsByClassName('visible')[0];

  // triggers only on Escape key and if a current Modal is open
  if (e.key === 'Escape' && currentModal) {
    removeModal();
  }
});

// add event listener to the blackout div to close modal on click
blackoutBackground.addEventListener('click', function () {
  // trigger helper function to close modal box
  removeModal();
});

// helper function to ADD visible modal classes
function addModal(modalBox) {
  modalBox.classList.toggle('visible');
  blackoutBackground.classList.toggle('blackout-effect');
}

// helper function to REMOVE visible modal classes
function removeModal() {
  // target the modal that is currently open
  const currentModal = document.getElementsByClassName('visible')[0];

  // remove visible classes on modal and background
  currentModal.classList.remove('visible');
  blackoutBackground.classList.remove('blackout-effect');
}
