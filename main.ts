radio.onReceivedNumber(function (receivedNumber) {
    Empfangswert = receivedNumber
    if (Empfangswert < 100) {
        basic.setLedColor(0xffff00)
    } else {
        basic.setLedColor(0xff0000)
    }
})
let Empfangswert = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.lightLevel())
    basic.pause(1000)
})
