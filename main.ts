let y = 2
let x = 2
basic.forever(function () {
    turtle.setPosition(x, y)
    if (input.acceleration(Dimension.X) < 500) {
        x += -1
    }
    if (input.acceleration(Dimension.X) > -500) {
        x += 1
    }
    if (input.acceleration(Dimension.Y) < 500) {
        y += -1
    }
    if (input.acceleration(Dimension.Y) > -500) {
        y += 1
    }
})
