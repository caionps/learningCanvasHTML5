var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window. innerHeight

var c = canvas.getContext('2d') //context

c.fillRect(100, 100, 100, 100)
c.fillRect(200, 200, 100, 100)
c.fillRect(360, 400, 100, 100)
c.fillRect(500, 100, 100, 100)