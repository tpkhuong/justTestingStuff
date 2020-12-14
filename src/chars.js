var firstName = {
    char1: "Light",
    char2: "Dark",
    char3: "Angel"
}

var colorsObj = {
    firstColor: "Red",
    secondColor: "Green",
    thirdColor: "Blue"
}

var ourFunc = {
    sayGoodBye(name, color) {
        console.log(`${firstName.char1} says goodbye. I like this color: ${colorsObj.firstColor}`);
        console.log(this);
    }
}
export { firstName, colorsObj, ourFunc };