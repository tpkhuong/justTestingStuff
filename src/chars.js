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
        console.log(`${name} says goodbye. I like this color: ${color}`);
        console.log(Object.is(this, ourFunc));
    }
}
export { firstName, colorsObj, ourFunc };