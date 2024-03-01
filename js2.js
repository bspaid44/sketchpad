/* document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('grid-items');
    for (let i = 0; i < gridItems.length; i++) {
        gridItems.addEventListener('mouseover', function () {
            document.getElementById('grid-items').style.backgroundColor = 'black'
        })
    }
}) */

document.addEventListener('mouseover', function () {
    if(event.target.classList.contains('grid-items')) {
        event.target.classList.toggle('highlight')
    }
}) 