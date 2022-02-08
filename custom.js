// task2
function clickedButton1() {
  var mysvg = document.getElementById("mySvg");
  mysvg.onclick = function (e) {
    var newLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    newLine.setAttribute("id", "line2");
    newLine.setAttribute("x1", e.offsetX);
    newLine.setAttribute("y1", e.offsetY);
    newLine.setAttribute("x2", e.offsetX + 100);
    newLine.setAttribute("y2", e.offsetY + 100);
    newLine.setAttribute("stroke", "#F1672C");
    mysvg.append(newLine);
  };
}

function clickedButton2() {
  var mysvg = document.getElementById("mySvg");
  mysvg.onclick = function (e) {
    var newRect = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    newRect.setAttribute("x", e.offsetX);
    newRect.setAttribute("y", e.offsetY);
    newRect.setAttribute("width", 80);
    newRect.setAttribute("height", 50);
    newRect.setAttribute("fill", "#31859C");
    mysvg.append(newRect);
  };
}

function clickedButton3() {
  var mysvg = document.getElementById("mySvg");
  mysvg.onclick = function (e) {
    var newCircle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    newCircle.setAttribute("cx", e.offsetX);
    newCircle.setAttribute("cy", e.offsetY);
    newCircle.setAttribute("r", 30);
    newCircle.setAttribute("fill", "#00B050");
    mysvg.append(newCircle);
  };
}

//  task3
var fillStyle = document.getElementById("color");
var strokStyle = document.getElementById("color2");
var theFillColor, theStrokColor;

fillStyle.addEventListener("input", function () {
  theFillColor = fillStyle.value;
  console.log(theFillColor);
});
strokStyle.addEventListener("input", function () {
  theStrokColor = strokStyle.value;
  console.log(theStrokColor);
});

// free hands draw

function freeDraw() {
  var clicked = false;
  var canvas = document.getElementById("my-canvas");
  canvas.onmousedown = function () {
    clicked = true;
  };
  canvas.onmouseup = function () {
    clicked = false;
  };
  canvas.onmousemove = function (e) {
    if (clicked) {
      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.fillStyle = theFillColor;
      ctx.strokeStyle = theStrokColor;
      ctx.arc(e.offsetX, e.offsetY, 10, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
  };
}

// free delete
function freeErease() {
  var clicked = false;
  var canvas = document.getElementById("my-canvas");
  canvas.onmousedown = function () {
    clicked = true;
  };
  canvas.onmouseup = function () {
    clicked = false;
  };
  canvas.onmousemove = function (e) {
    if (clicked) {
      var ctx = canvas.getContext("2d");
      ctx.clearRect(e.offsetX, e.offsetY, 20, 20);
    }
  };
}
// draw line
function drawline() {
  var x, y, xEnd, yEnd;
   var moved = false;
  var canvas = document.getElementById("my-canvas");
  canvas.onmousedown = function (e) {
    x = e.offsetX;
    y = e.offsetY;
    console.log(x, y + "DoWWWWWWWWWN");
    moved = false;
  };
  canvas.onmousemove = function () {
    moved = true;
  };
  canvas.onmouseup = function (e) {
        if (moved) {
        xEnd = e.offsetX;
        yEnd = e.offsetY;
        console.log(xEnd, yEnd + "UPPPPPPPPPP");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(xEnd, yEnd);
        ctx.strokeStyle = theStrokColor;
        ctx.stroke();
        ctx.closePath();
        moved = false;
        }
  };
}
// draw rect
function drawRec() {
    var x,y;
  var canvas = document.getElementById("my-canvas");
  canvas.onmousedown = function (e) {
     x = e.offsetX;
     y = e.offsetY;};
     canvas.onmouseup = function () {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = theFillColor;
    ctx.strokeStyle = theStrokColor;
    ctx.rect(x, y, 150, 100);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };
}

// draw circle
function drawCircle() {
    var x,y;
  var canvas = document.getElementById("my-canvas");
  var ctx = canvas.getContext("2d");
  canvas.onmousedown = function (e) {
     x = e.offsetX;
     y = e.offsetY;};
    canvas.onmouseup = function () {
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.fillStyle = theFillColor;
    ctx.strokeStyle = theStrokColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };
}
