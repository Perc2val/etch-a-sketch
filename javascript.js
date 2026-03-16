const container = document.querySelector(".container");

function createDivs(i){
    let k = i * i;
    for (let j = 0; j<k; j++){
        const div = document.createElement("div");
        div.style.width = `${400/i}px`;
        div.style.height = `${400/i}px`;
        div.classList.add("childdiv");
        container.appendChild(div);
    }
}

createDivs(5)