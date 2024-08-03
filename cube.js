
let side;

document.getElementById("myButtA").onclick = function(){
    side = parseFloat(document.getElementById("myVol").value);
    value = side **3;
    document.getElementById("myH1").textContent = `The Volume of the Cube is ${value} cm`;
}
document.getElementById("myButtP").onclick = function(){
    side = parseFloat(document.getElementById("mySurface").value);
    value = 6 * side ** 2;
    document.getElementById("myH2").textContent = `The Surface Area of the Cube is ${value} cm`;
}