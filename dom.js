const PElement = document.getElementById('athir-p');

function Switch(){
    PElement.classList.toggle('switch');
}


const modal = document.getElementById("athirModal");

const btn = document.getElementById("modalButton");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}