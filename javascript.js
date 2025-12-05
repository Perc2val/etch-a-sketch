const sketch = document.querySelector(".sketch");
const grid = document.querySelector(".number");
const reset = document.querySelector(".reset");

let gridNumber = 4;

function createPlayField() {
  sketch.innerHTML = "";
  for (let x = 0; x < gridNumber * gridNumber; x++) {
    const div = document.createElement("div");
    div.style.width = 100 / gridNumber + "%";
    div.classList.add("square");
    // Optional: Startzustand
    div.style.backgroundColor = "white";
    div.style.opacity = 0;
    sketch.appendChild(div);
  }
  color();
}

createPlayField();

function color() {
  const colorDivs = sketch.getElementsByClassName("square");
  const length = colorDivs.length;

  for (let i = 0; i < length; i++) {
    colorDivs[i].addEventListener("mouseover", function () {
      // Falls noch keine Farbe gesetzt wurde (oder weiß), einmal Zufallsfarbe festlegen
      if (!this.dataset.colored || this.dataset.colored === "false") {
        this.style.backgroundColor = getRandomColor();
        this.dataset.colored = "true";
        this.style.opacity = 0.1;
      } else {
        // Opacity erhöhen, aber max. 1
        let currentOpacity = parseFloat(this.style.opacity) || 0;
        currentOpacity = Math.min(currentOpacity + 0.1, 1);
        this.style.opacity = currentOpacity;
      }
    });
  }
}

grid.addEventListener("click", () => {
  let askNumber = prompt("Eine Nummer zwischen 1 und 100");
  let num = +askNumber;

  if (num >= 1 && num <= 100) {
    gridNumber = num;
    createPlayField();
  } else {
    alert("Bitte wirklich eine Zahl zwischen 1 und 100 eingeben 🙂");
  }
});

reset.addEventListener("click", () => {
  sketch.innerHTML = "";
  createPlayField();
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
