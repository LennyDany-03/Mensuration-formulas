let heightY;
let breadthY;
let lengthY;


let height;
let breadth;
let length;


document.getElementById("myButtA").onclick = function(){
    lengthY = parseFloat(document.getElementById("myLen").value);
    breadthY = parseFloat(document.getElementById("myBre").value);
    heightY = parseFloat(document.getElementById("myHig").value);
    value = length * breadth * height;
    document.getElementById("myH1").textContent = `The Volume of the Cuboid is ${value} cm`;
}
document.getElementById("myButtP").onclick = function(){
    length = parseFloat(document.getElementById("myLenS").value);
    breadth = parseFloat(document.getElementById("myBreS").value);
    height = parseFloat(document.getElementById("myHigS").value);
    value = 2 * ((length * breadth) + (breadth * height) + (height * length));
    document.getElementById("myH2").textContent = `The Surface Area of the Cuboid is ${value} cm`;
}