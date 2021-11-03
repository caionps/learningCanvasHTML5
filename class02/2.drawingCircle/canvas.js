var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window. innerHeight

var c = canvas.getContext('2d') //context

// Arc / Circle
c.arc(450, 450, 80, 0, Math.PI * 2, false)
c.strokeStyle = 'orange'
c.stroke()
