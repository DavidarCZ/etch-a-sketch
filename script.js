function createGrid(size) {
    let container = document.querySelector(".container");
    let current = document.querySelector(".current");
    current.textContent = `${size}x${size}`

    removeGrid()

    for (let j = 0; j < size; j++) {
        let row = document.createElement("div")
        row.classList.add("grid-row");
        for (let i = 0; i < size; i++) {
            let div = document.createElement("div")
            div.classList.add("grid");

            row.appendChild(div);
        }
        container.appendChild(row);
    }
    
    document.querySelectorAll(".grid").forEach(element => {
    element.addEventListener("mouseover",function(event){
        element.classList.add("dark")
        });
    });
};

function removeGrid() {
    document.querySelectorAll(".grid").forEach(element => {
        element.remove();
    });
};

let changeGrid = document.querySelector(".button-grid");
changeGrid.addEventListener("click",() =>{
    let change = Number(prompt("How big should one side be?"));
    change = Number(change);
    if (change < 1) {
        alert("Min: 1");
    } else if (change > 100) {
        alert("Max: 100");
    } else if (Number.isInteger(change)) {
        let text;
        createGrid(change);
    } else {
        alert("Give me a number");
    }
});

createGrid(16);