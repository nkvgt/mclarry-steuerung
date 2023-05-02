def on_forever():
    radio.set_group(99)
    if input.button_is_pressed(Button.A):
        MotionKit.turn_left(90)
    if input.button_is_pressed(Button.B):
        MotionKit.turn_right(90)
    if input.button_is_pressed(Button.AB):
        motors.motor_command(MotorCommand.SLEEP)
    if input.pin_is_pressed(TouchPin.P0):
        MotionKit.turn_left(180)
    if input.pin_is_pressed(TouchPin.P1):
        MotionKit.neutral()
    if input.pin_is_pressed(TouchPin.P2):
        MotionKit.backward()
        calliBot2.set_rgb_led(C2RgbLed.LH, 16, 0, 0)
        calliBot2.set_rgb_led(C2RgbLed.RH, 16, 0, 0)
    if input.pin_is_pressed(TouchPin.P3):
        MotionKit.stop()
    if input.is_gesture(Gesture.TILT_LEFT):
        calliBot2.motor(C2Motor.LINKS, C2Dir.RÜCKWÄRTS, 10)
        calliBot2.motor(C2Motor.RECHTS, C2Dir.VORWÄRTS, 100)
        calliBot2.set_rgb_led(C2RgbLed.LV, 16, 0, 0)
        calliBot2.set_rgb_led(C2RgbLed.LH, 16, 0, 0)
    if input.is_gesture(Gesture.TILT_RIGHT):
        calliBot2.motor(C2Motor.LINKS, C2Dir.VORWÄRTS, 100)
        calliBot2.motor(C2Motor.RECHTS, C2Dir.RÜCKWÄRTS, 10)
        calliBot2.set_rgb_led(C2RgbLed.RV, 16, 0, 0)
        calliBot2.set_rgb_led(C2RgbLed.RH, 16, 0, 0)
basic.forever(on_forever)
