var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window. innerHeight

var c = canvas.getContext('2d') //context

// Many Circles Randomly

for(var i = 0; i < 30; i++) {
    var x = Math.random() * window.innerWidth
    var y = Math.random() * window.innerHeight
    c.beginPath()
    c.arc(x, y, 80, 0, Math.PI * 2, false)
    c.strokeStyle = 'orange'
    c.stroke()
}
