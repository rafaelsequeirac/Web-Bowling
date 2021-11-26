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