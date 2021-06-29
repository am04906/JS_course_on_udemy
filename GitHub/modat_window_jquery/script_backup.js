var open_btn = document.getElementsByClassName("open-btn")[0];
var close_btn = document.getElementsByClassName("modal-btn")[0];
var modal = document.getElementsByClassName("modal")[0];

const showModal = function() {
  modal.classList.remove("hidden")
}
const hideModal = function() {
  modal.classList.add("hidden")
}
const hasModal = function() {
  return modal.classList.contains('hidden') == false;
 }

open_btn.onclick = showModal;
close_btn.onclick = hideModal;

document.onmousedown = function(e) {
  if(e.toElement == modal)
    hideModal()
}

document.onkeydown = function(e) {
  if (e.key == 'Escape' && hasModal())
    hideModal();
}