var NUM_MODALS = 1;
for(i = 1; i <= NUM_MODALS; i++) {
  // Get the modal
  var modal = document.getElementById("myModal" + i.toString());

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn" + i.toString());

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[i-1];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}