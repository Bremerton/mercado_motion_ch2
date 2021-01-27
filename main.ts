while (true) {
    console.log(input.rotation(Rotation.Roll))
    if (input.rotation(Rotation.Roll) > 0 || input.rotation(Rotation.Roll) < 0) {
        light.setAll(light.rgb(0, 0, 255))
    }
    
    if (input.rotation(Rotation.Pitch) > 0 || input.rotation(Rotation.Pitch) < 0) {
        light.setAll(light.rgb(0, 255, 0))
    }
    
}
