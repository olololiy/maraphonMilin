const board = document.querySelector('#board')
const colors = ['pink', 'purple', 'red', 'green']
const SQUAREAS_NUMBER = 500

for (let i = 0; i < SQUAREAS_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}
function setColor(element) {
    const color = 'rgba(205, 214, 219, 0.0)'
     element.style.backgroundColor = color
     element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`//старый не стал убирать. Хотел просто сделать прозрачным при наведении
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}