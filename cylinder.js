let radius;
let height;
let pi = 3.14;

document.getElementById("myButtA").onclick = function(){
    radius = parseFloat(document.getElementById("myRadiusV").value);
    height = parseFloat(document.getElementById("myHeightV").value);
    value = pi * radius ** 2 * height;
    document.getElementById("myH1").textContent = `The Volume of the Cylinder is ${value} cm`;
}
document.getElementById("myButtP").onclick = function(){
    radius = parseFloat(document.getElementById("myRadiusC").value);
    height = parseFloat(document.getElementById("myHeightC").value);
    value = 2 * pi * radius * height;
    document.getElementById("myH2").textContent = `The Curved Surface Area of the Cylinder is ${value} cm`;
}
document.getElementById("myButtX").onclick = function(){
    radius = parseFloat(document.getElementById("myRadiusT").value);
    height = parseFloat(document.getElementById("myHeightT").value);
    value = 2 * pi * radius * (radius + height)
    document.getElementById("myH3").textContent = `The Total Surface Area of the Cylinder is ${value} cm`;
}