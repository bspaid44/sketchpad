const mainContainer = document.getElementById('main-container');

for (let i = 0; i < (64 * 64) - 1; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-items');
    mainContainer.appendChild(gridItem);
};

/* document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.getElementsByClassName('grid-items');
    for (let i = 0; i < gridItems.length; i++) {
        gridItems.addEventListener('mouseover', function () {
            document.getElementById('grid-items').style.backgroundColor = 'black'
        })
    }
}) */