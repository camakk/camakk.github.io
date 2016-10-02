class Polygon {
  constructor(height, width) {
    this.height=height;
    this.width=width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }

}

function printPolygon() {
  const square = new Polygon(10,10);
  alert(square.area)
}

var grindlay {

}



function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}
