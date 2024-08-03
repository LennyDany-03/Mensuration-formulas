
let sideA;
let sideP;

document.getElementById("myButtA").onclick = function(){
    sideA = document.getElementById("myArea").value;
    value = sideA**2
    document.getElementById("myH1").textContent =  `The Area of the Square is ${value}cm`;
}
document.getElementById("myButtP").onclick = function(){
    sideP = document.getElementById("myPerimeter").value;
    value = 4 * sideP
    document.getElementById("myH2").textContent =  `The Perimeter of the Square is ${value}cm`;
}
