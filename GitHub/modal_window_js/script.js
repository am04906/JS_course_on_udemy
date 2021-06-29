// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-modal")[0];

const hideModal = function() {
  console.log('hide Modal');
  modal.classList.add('hidden');
}

const showModal = function() {

  console.log('show Modal');
  modal.classList.remove('hidden');
}

const hasModal = function() {
  return false === modal.classList.contains('hidden');
}

// When the user clicks on the button, open the modal
btn.onclick = showModal;

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = hideModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  if (e.target == modal)
    hideModal();
};

document.onkeydown = function(e) {
  if (e.key === 'Escape'&& hasModal()) {
    hideModal();
  }
}