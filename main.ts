let lightson = false
input.onSound(DetectedSound.Loud, function () {
    lightson = !(lightson)
    if (lightson) {
        basic.showIcon(IconNames.EigthNote)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.showString("" + (lightson))
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # # . . #
            # . . . .
            # # . . #
            . # # # .
            `)
    }
})
