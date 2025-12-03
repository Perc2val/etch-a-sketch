
const sketch = document.querySelector(".sketch");
const grid = document.querySelector(".number");
const reset = document.querySelector(".reset")
let gridNumber = 4;
function createPlayField() {
    sketch.innerHTML ="";
    for(x=0; x<(gridNumber*gridNumber);x++) {
    const div = document.createElement("div");
    div.style.width = (100/gridNumber) + "%";
    sketch.appendChild(div);
    div.classList.add("square");
    }
    color();
}
createPlayField();

function color() {
    const colorDivs = sketch.getElementsByClassName("square");
    const lenght = colorDivs.length;
    for (x = 0; x < lenght; x++){
        colorDivs[x].addEventListener("mouseover", function() {
            this.style.backgroundColor = getRandomColor();
        })
    }
}
grid.addEventListener("click", ()=>{
    let askNumber = prompt("Eine Nummer zwischen 1 und 100");
    let num = +askNumber;
    if (num >= 1 && num <= 100) {
        gridNumber = num;
        createPlayField()
    } else {
        askNumber = prompt("Eine Nummer zwischen 1 und 100 bitte")
    }
})

reset.addEventListener("click", ()=>{
    sketch.innerHTML="";
    createPlayField();
})

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}