function alertButton() {
    alert("Javascript test")
}

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


let y = 10
let x = 0
let z = 0

// Animation Loop
function animate() {
    window.requestAnimationFrame(animate)

    c.fillStyle = 'green'
    c.fillRect(120, y, 5, 2)

    c.fillStyle = 'cornflowerblue'
    c.fillRect(160, y, 5, 10)

    c.fillStyle = 'tomato'
    c.fillRect(200, y, 5, 18)

    y++
}

animate()