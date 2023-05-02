basic.forever(function on_forever() {
    radio.setGroup(99)
    if (input.buttonIsPressed(Button.A)) {
        MotionKit.turnLeft(90)
    }
    
    if (input.buttonIsPressed(Button.B)) {
        MotionKit.turnRight(90)
    }
    
    if (input.buttonIsPressed(Button.AB)) {
        motors.motorCommand(MotorCommand.Sleep)
    }
    
    if (input.pinIsPressed(TouchPin.P0)) {
        MotionKit.turnLeft(180)
    }
    
    if (input.pinIsPressed(TouchPin.P1)) {
        MotionKit.neutral()
    }
    
    if (input.pinIsPressed(TouchPin.P2)) {
        MotionKit.backward()
        calliBot2.setRgbLed(C2RgbLed.LH, 16, 0, 0)
        calliBot2.setRgbLed(C2RgbLed.RH, 16, 0, 0)
    }
    
    if (input.pinIsPressed(TouchPin.P3)) {
        MotionKit.stop()
    }
    
    if (input.isGesture(Gesture.TiltLeft)) {
        calliBot2.motor(C2Motor.links, C2Dir.rückwärts, 10)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 100)
        calliBot2.setRgbLed(C2RgbLed.LV, 16, 0, 0)
        calliBot2.setRgbLed(C2RgbLed.LH, 16, 0, 0)
    }
    
    if (input.isGesture(Gesture.TiltRight)) {
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 100)
        calliBot2.motor(C2Motor.rechts, C2Dir.rückwärts, 10)
        calliBot2.setRgbLed(C2RgbLed.RV, 16, 0, 0)
        calliBot2.setRgbLed(C2RgbLed.RH, 16, 0, 0)
    }
    
})
