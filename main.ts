input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Pitchfork)
    record.setSampleRate(22000, record.AudioSampleRateScope.Recording)
    record.setMicGain(record.AudioLevels.Low)
    record.startRecording(record.BlockingState.Blocking)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . # #
        . # # . #
        # . # . #
        . # # . #
        . . . # #
        `)
    record.setSampleRate(22000, record.AudioSampleRateScope.Playback)
    record.playAudio(record.BlockingState.Blocking)
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Happy)
