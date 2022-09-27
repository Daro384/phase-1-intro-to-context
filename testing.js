const createPerson = (height, weight, eyeColor) => {
    person = {
        height:height,
        weight:weight,
        eyeColor:eyeColor
    }
    return person
}
console.log(createPerson(175, 73, "blue"))