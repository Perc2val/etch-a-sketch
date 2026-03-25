const container = document.querySelector(".container");
const button = document.querySelector(".grid");

createDivs(15)
button.addEventListener("click",()=>{
    let i = Number(window.prompt("Type in a number between 5 and 100", "5"));
    const childdiv = document.querySelectorAll(".childdiv");
    for (const element of childdiv) {
        element.remove()
    }
    createDivs(i);
})
function createDivs(i){
    let k = i * i;
    for (let j = 0; j<k; j++){
        const div = document.createElement("div");
        div.style.width = `${400/i}px`;
        div.style.height = `${400/i}px`;
        div.classList.add("childdiv");
        container.appendChild(div);
        div.addEventListener("mouseover", ()=>{
            div.style.background = randomColor();
        })
    }
}

function randomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}