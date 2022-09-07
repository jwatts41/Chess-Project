// moving the pieces sourced from mdn web

function allowDrop(allowdropevent) {
  allowdropevent.target.style.color = 'black';
  allowdropevent.preventDefault();
}

function drag(dragevent) {
  dragevent.dataTransfer.setData("text", dragevent.target.id);
  dragevent.target.style.color = 'green';
}

function drop(dropevent) {
  dropevent.preventDefault();
  const data = dropevent.dataTransfer.getData("text");
  dropevent.target.append(document.getElementById(data));
}




