let radius;
let height;
let pi = 3.14;

document.getElementById("myButtA").onclick = function(){
    radius = parseFloat(document.getElementById("myRadiusV").value);
    height = parseFloat(document.getElementById("myHeightV").value);
    value = 1/3 * pi * radius**2 * height;
    document.getElementById("myH1").textContent = `The Volume of the Cone is ${value} cm`;
}
document.getElementById("myButtP").onclick = function(){
    radius = parseFloat(document.getElementById("myRadiusC").value);
    height = parseFloat(document.getElementById("myHeightC").value);
    value = pi * radius * height;
    document.getElementById("myH2").textContent = `The Curved Surface Area of the Cone is ${value} cm`;
}
document.getElementById("myButtX").onclick = function(){
    radius = parseFloat(document.getElementById("myRadiusT").value);
    height = parseFloat(document.getElementById("myHeightT").value);
    value = pi * radius * (radius + height);
    document.getElementById("myH3").textContent = `The Curved Surface Area of the Cone is ${value} cm`;
}