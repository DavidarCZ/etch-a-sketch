function createGrid(size) {
    let container = document.querySelector(".container");

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
}

createGrid(16);

