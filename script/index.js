function Color() {
    const rgbInputs = ['red', 'green', 'blue'];

    rgbInputs.forEach(function (color) {
        const colorInput = document.getElementById(color);
        colorInput.addEventListener("input", Hex);
    });

    Hex(); // use with default values
}

function Hex() {
    const red = document.getElementById("red").value;
    const green = document.getElementById("green").value;
    const blue = document.getElementById("blue").value;

    const hexColor = rgbToHex(red, green, blue);
    document.getElementById("hex").textContent = hexColor.toUpperCase();g}

function rgbToHex(red, green, blue) {
    const redHex = ('0' + Number(red).toString(16)).slice(-2);
    const greenHex = ('0' + Number(green).toString(16)).slice(-2);
    const blueHex = ('0' + Number(blue).toString(16)).slice(-2);
    return redHex + greenHex + blueHex;
}

Color();