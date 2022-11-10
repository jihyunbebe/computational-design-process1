input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Diamond)
    }
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("love you")
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.ringTone(262)
})
