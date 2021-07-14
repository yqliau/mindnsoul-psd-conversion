// 7.12.2021 - update to code efficiency and organization

app = {};

// create event listeners
app.addModalEvents = () => {
  // define variables
  const buttonList = document.querySelectorAll('button');
  const outerModalList = document.querySelectorAll('.outer-modal');

  // attach listener on each button
  buttonList.forEach((button) => {
    button.addEventListener('click', app.buttonHandler);
  });

  // attach listener on each modal
  outerModalList.forEach((outerModal) => {
    outerModal.addEventListener('click', app.modalHandler);
  });

  // attach listener on escape key press
  window.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      // call function to close open modals
      app.checkOpenModals();
    }
  });
};

// helper function to handle button clicks
app.buttonHandler = (event) => {
  const selectedModal = event.currentTarget.nextElementSibling;

  // close any existing modals (if any are still opened via keyboard navigation)
  app.checkOpenModals();

  // make modal visible
  selectedModal.classList.add('open');
};

// helper function to check and close any modal that is currently open
app.checkOpenModals = () => {
  const openModal = document.querySelector('.open');

  if (openModal) {
    app.closeModal(openModal);
  }
};

// helper function to handle blackout modal clicks
app.modalHandler = (event) => {
  // check if clicked outside the inner modal
  const clickedOutside = !event.target.closest('.inner-modal');
  // check if close button is clicked
  const isCloseButton = event.target.tagName === 'I';

  const currentOuterModal = event.currentTarget;

  // close associated modal if either is true
  if (clickedOutside || isCloseButton) {
    app.closeModal(currentOuterModal);
  }
};

// helper function to close the modal
app.closeModal = (targetElement) => {
  targetElement.classList.remove('open');
};

// init function expression
app.init = () => {
  app.addModalEvents();
};

// run init function
app.init();
