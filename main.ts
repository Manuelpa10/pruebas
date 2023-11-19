input.onButtonPressed(Button.A, function () {
    cuteBot.stopcar()
})
input.onButtonPressed(Button.B, function () {
    cuteBot.moveTime(cuteBot.Direction.forward, 50, 5)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
