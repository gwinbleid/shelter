// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = 'visible';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    document.body.style.overflow = 'visible';
    modal.style.display = "none";
  }
}

function drawModal(data) {
    console.log(data);

    let image = document.getElementById('modal__pet');

    let name = document.getElementById('modal__pet__name');
    let type = document.getElementById('pet__type');
    let breed = document.getElementById('pet__breed');
    let description = document.getElementById('pet__description');
    let age = document.getElementById('modal__age');
    let inoculations = document.getElementById('modal__inoculations');
    let diseases = document.getElementById('modal__diseases');
    let parasites = document.getElementById('modal__parasites');

    name.innerHTML = data.name;
    type.innerHTML = data.type;
    breed.innerHTML = data.breed;
    image.src = data.img;
    description.innerHTML = data.description;
    age.innerHTML = data.age;
    inoculations = data.inoculations;
    diseases = data.diseases;
    parasites = data.parasites;

    console.log(name);
}