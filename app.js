//get the elements in the html
let svgBg = document.body.style;
let titlePg = document.getElementById('titlePg').style;

//Creating a function that whenever a user clicks a button it automatically changes the color

function changeColor(){
    let randHex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    svgBg.backgroundColor = randHex;
    titlePg.color = randHex;
}
