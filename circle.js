let radius;
let pi = 3.14;
let circumference;


document.getElementById("myButtA").onclick = function(){
    radius = parseFloat(document.getElementById("myRadiusA").value);
    value = 2 * radius**2;
    document.getElementById("myH1").textContent = `The Area of the Circle is ${value} cm²`;
}
document.getElementById("myButtP").onclick = function(){
    circumference = document.getElementById("myPerimeter").value;
    value = 2 * pi * circumference;
    document.getElementById("myH2").textContent = `The Circumference of the Circle is ${value} cm²`;
}