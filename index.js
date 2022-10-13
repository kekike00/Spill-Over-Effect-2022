var mouseX, mouseY;

$(document).mousemove(function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$(".hynl").mouseover(function () {
  $(".hynl").css("opacity", "100%");
  $(".welcome").css("visibility", "visible");
  $(".eng").css("left", mouseX);
  $(".eng").css("top", mouseY);
});

$(".hynl").mouseout(function () {
  $(".welcome").css("visibility", "hidden");
  $(".hynl").css("opacity", "80%");
});

// let hynl = document.getElementsByClassName("hynl");
// let welcome = document.getElementsByClassName("welcome");

// hynl.addEventListener("mouseout", mouseOut);
// hynl.addEventListener("mouseover", mouseOver);

// function mouseOver(){
//     welcome.setAttribute("style", "visibility: visible;");
//     alert("hi");
// }

// function mouseOut(){
//     welcome.setAttribute("style", "visibility: hidden;")
// }
