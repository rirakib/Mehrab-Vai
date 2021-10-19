// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal

var modalButton = document.querySelectorAll('.modelBtn');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }



// When the user clicks the button, open the modal
for(let i=0;i<modalButton.length;i++){
    modalButton[i].onclick = function(){
        modal.style.display = "block";
    }
}








// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function tabFunc(evt, ind) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(ind).style.display = "block";
    evt.currentTarget.className += " active";
  }