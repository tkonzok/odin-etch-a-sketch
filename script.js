function createGrid(rows, columns) {
    for (i = 0; i < rows; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add('row-container');
        rowDiv.setAttribute('id', `r${i+1}`);
        sketchContainer.appendChild(rowDiv);
        for (k = 0; k < columns ; k++) {
            const colDiv = document.createElement("div");
            colDiv.classList.add('grid');
            colDiv.setAttribute('id', `c${k+1}`);
            colDiv.addEventListener('mouseover', function (e) {
                e.target.style.background = 'purple';
              });
            rowDiv.appendChild(colDiv);
        }
    }
}

const container = document.querySelector('#container');

const btnContainer = document.createElement("div");
btnContainer.classList.add('btn-container');
container.appendChild(btnContainer);

const sketchContainer = document.createElement("div");
sketchContainer.classList.add('sketch-container');
container.appendChild(sketchContainer);

const btn = document.createElement("button");
btn.addEventListener("click", createNewGrid);
btn.textContent = "CREATE GRID"
btnContainer.appendChild(btn);

function createNewGrid() {
    rows = prompt('How many rows should the grid contain of? ');
    columns = prompt('How many columns should the grid contain of? ');
    document.querySelectorAll('.grid').forEach(e => e.remove());
    document.querySelectorAll('.row-container').forEach(e => e.remove());
    createGrid(rows, columns);
}