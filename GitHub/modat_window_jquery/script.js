
const main = function() {
  var modal = $('.modal');
  var open_btn = $('.open-btn');
  var close_btn = $('.modal-btn');
  
  const showModal = function() {
    modal.removeClass('hidden');
  }
  const hideModal = function() {
    modal.addClass('hidden');
  }
  const isModal = function() {
    return modal.hasClass('hidden') == false;
  }  

  open_btn.click(showModal);
  close_btn.click(hideModal);
  $(document).click(function(e) {
    if ($(e.target).hasClass('modal'))
      hideModal()
  })

  $(document).keyup(function(e) { // keypress doesn't handle Escape
    if(e.key == 'Escape' && isModal)
      hideModal();
  })
}
 

