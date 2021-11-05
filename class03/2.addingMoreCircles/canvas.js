var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window. innerHeight

var c = canvas.getContext('2d') //context

// Animating Circles
var x = Math.random() * innerWidth
var y = Math.random() * innerHeight
var dx = (Math.random() - 0.5) * 10 // Circle velocity
var dy = (Math.random() - 0.5) * 10// Circle velocity
var radius = 60

function animate() {
    requestAnimationFrame(animate)

    c.clearRect(0, 0, innerWidth, innerHeight)

    c.beginPath()
    c.arc(x, y, radius, 0, Math.PI * 2, false)
    c.strokeStyle = 'orange'
    c.stroke()
    
    x += dx //Incrementing 1px from the last position we create movement
    y += dy
    if (x > innerWidth - radius || x < radius) {
        dx = -dx
    }
    if (y > innerHeight - radius || y < radius) {
        dy = -dy
    }
}

animate()