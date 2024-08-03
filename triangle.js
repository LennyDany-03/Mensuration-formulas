let base;
let height;
let side1 ;
let stde2 ;
let stde3 ;


document.getElementById("myButtA").onclick = function(){
    base = document.getElementById("myAreaL").value;
    height = document.getElementById("myAreaB").value;
    value = 1/2 * base * height;
    document.getElementById("myH1").textContent = `The Area of the Triangle is ${value} cm`;
}
document.getElementById("myButtP").onclick = function(){
    side1 = parseFloat(document.getElementById("myPerimeterS1").value);
    side2 = parseFloat(document.getElementById("myPerimeterS2").value);
    side3 = parseFloat(document.getElementById("myPerimeterS2").value);
    value = side1 + side2 + side3;
    document.getElementById("myH2").textContent = `The Perimeter of the Triangle is ${value} cm`;
}