document.addEventListener('mouseover', function () {
    if(event.target.classList.contains('grid-items')) {
        event.target.classList.toggle('highlight')
    }
}) 