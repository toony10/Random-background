let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "D", "C", "E", "F",];
let colorParts = [];
// console.log(hexArray[Math.floor(Math.random() * hexArray.length)]);

for (let i = 0; i < 6; i++)
{
    colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
}

let finalColor = `#${ colorParts.join("") }`;

document.body.append(`the hex code of the color is ${ finalColor }`);
document.body.style.background = finalColor;



document.body.style.textAlign = 'center';