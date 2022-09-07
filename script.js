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


 







