var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window. innerHeight

var c = canvas.getContext('2d') //context

// Line

c.beginPath()
c.moveTo(50, 300)
c.lineTo(300, 100)
c.lineTo(500, 100)
c.strokeStyle = "red" //learning how to change elements collor
c.stroke() //without stroke, nothing appears on the page