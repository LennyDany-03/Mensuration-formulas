let radius;
let pi = 3.14;

document.getElementById("myButtA").onclick = function(){
    radius = parseFloat(document.getElementById("myRad").value);
    value = 4/3 * pi * radius ** 3;
    document.getElementById("myH1").textContent = `The Volume of the Sphere is ${value} cm`;
}
document.getElementById("myButtP").onclick = function(){
    radius = parseFloat(document.getElementById("mySur").value);
    value = 4 * pi * radius ** 2;
    document.getElementById("myH2").textContent = `The Surface Area of the Sphere is ${value} cm`;
}