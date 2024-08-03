let lengthA;
let breadthA;
let lengthP;
let breadthP;

document.getElementById("myButtA").onclick = function() {
    lengthA = parseFloat(document.getElementById("myAreaL").value);
    breadthA = parseFloat(document.getElementById("myAreaB").value);
    const area = lengthA * breadthA;
    document.getElementById("myH1").textContent = `The Area of the Rectangle is ${area} cm²`;
};

document.getElementById("myButtP").onclick = function() {
    lengthP = parseFloat(document.getElementById("myPerimeterL").value);
    breadthP = parseFloat(document.getElementById("myPerimeterB").value);
    const perimeter = 2 * (lengthP + breadthP);
    document.getElementById("myH2").textContent = `The Perimeter of the Rectangle is ${perimeter} cm`;
};