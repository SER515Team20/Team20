function login() {

}
function logout() {
    window.location.href = "../../index.html";
}

function onDragStart(event) {
            event
                .dataTransfer
                .setData('text/plain', event.target.id);

            event
                .currentTarget
                .style
        }
        
        function onDragOver(event) {
  event.preventDefault();
}
function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  
  dropzone.appendChild(draggableElement);

  event
    .dataTransfer
    .clearData();
}
function drop(event) {
    event.preventDefault();
  var data=ev.dataTransfer.getData("text/plain");
  var nodeCopy = document.getElementById(id).cloneNode(true);
  nodeCopy.id = "newId"; /* We cannot use the same ID */
  event.target.appendChild(nodeCopy);
}