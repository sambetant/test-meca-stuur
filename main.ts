radio.setGroup(1)
basic.forever(function () {
    if (Math.abs(input.acceleration(Dimension.Y)) < 100 && Math.abs(input.acceleration(Dimension.X)) < 100) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        radio.sendNumber(0)
    }
    if (input.acceleration(Dimension.X) < -200) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        radio.sendNumber(1)
    }
    if (input.acceleration(Dimension.X) > 200) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        radio.sendNumber(2)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        radio.sendNumber(3)
    }
    if (input.acceleration(Dimension.Y) < -200) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendNumber(4)
    }
})
