// moving the pieces sourced from mdn web docs

function allowDrop(allowdropevent) {
  allowdropevent.target.style.color = 'blue';
  allowdropevent.preventDefault();
}

function drag(dragevent) {
  dragevent.dataTransfer.setData("text", dragevent.target.id);
  dragevent.target.style.color = 'green';
}

function drop(dropevent) {
  dropevent.preventDefault();
  const data = dropevent.dataTransfer.getData("text");
  dropevent.target.appendChild(document.getElementById(data));
  document.getElementsById("drag").style.color = 'black';
}
