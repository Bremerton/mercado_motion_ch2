while True:
    print(input.rotation(Rotation.ROLL))
    if input.rotation(Rotation.ROLL) > 0 or input.rotation(Rotation.ROLL) < 0:
        light.set_all(light.rgb(0,0,255))
    if input.rotation(Rotation.PITCH) > 0 or input.rotation(Rotation.PITCH) < 0:
        light.set_all(light.rgb(0,255,0))