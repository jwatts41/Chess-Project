// moving the pieces sourced from mdn web and stack overflow

function allowDrop(allowdropevent) {
  allowdropevent.preventDefault();
}

function drag(dragevent) {
  dragevent.dataTransfer.setData("text", dragevent.target.id);
}

function drop(dropevent) {
  dropevent.preventDefault();
  let data = dropevent.dataTransfer.getData("text");
  let s = document.getElementById(data);
  dropevent.target.appendChild(s);
  dropevent.target.src=s.src;
}

// reset board button with confirmation sourced from quackit.com and W3 schools
function confirmBoardRefresh() {
  let yesToRefresh = confirm("Are you sure you would like to reset the board?");
  if (yesToRefresh){
    setTimeout("location.reload(true)", 500);
  }
}






 







