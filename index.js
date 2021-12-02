const versusTxt = document.getElementById("versusTxt");
const duplaTxt = document.getElementById("duplaTxt");
const items = Array.from(document.getElementsByClassName("item"));

hideOrShowTextDiv("versus");

items.forEach((item) => {
  item.addEventListener("click", onItemClick);
});

function onItemClick(event) {
  const selectedAttribute = event.target.getAttribute("data");
  addOrRemoveActive(selectedAttribute);
  hideOrShowTextDiv(selectedAttribute);
}

function hideOrShowTextDiv(selectedAttribute) {
  hideTextElements();

  if (selectedAttribute === "dupla") {
    duplaTxt.style.display = "block";
  }

  if (selectedAttribute === "versus") {
    versusTxt.style.display = "block";
  }

}

function addOrRemoveActive(selectedAttribute) {
  items.forEach((item) => {
    const itemAttribute = item.getAttribute("data");
    if (itemAttribute === selectedAttribute) {
      item.classList.add("active");
      return;
    }

    item.classList.remove("active");
  });
}

function hideTextElements() {
  versusTxt.style.display = "none"
  duplaTxt.style.display = "none"
}

var i = 1;
var p = 1;
$( "#btn" ).click(function() {
  $( "#inputs" ).append('<input class="jog" type="text" name="jogador" id="jogador'+i+'" placeholder="Nome do jogador"> <input class="pont" type="number" name="pontos" id="pontos'+p+'" placeholder="Pontuação">');
  i++;
  p++;
});

let pistas = document.querySelector("#pistas");
let btnJogar = document.querySelector('#btn-jogar');
let jogadores = document.getElementsByClassName("jog");



btnJogar.addEventListener('click', () => {
  let calc = jogadores.length;
  let pist = Number(pistas.value)
  let div = Number(calc);
  // console.log(pist);
  window.navigator.vibrate(100);
});