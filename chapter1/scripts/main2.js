$(document).ready(function () {});

$(".inside_header").hover(function () {
  $("#inside_trans1").css("visibility", "visible");
});

$("#inside_trans1").hover(function () {
  $("#inside_trans2").css("visibility", "visible");
});

$("#inside_trans2").hover(function () {
  $("#inside_trans3").css("visibility", "visible");
});

$("#inside_trans3").hover(function () {
  $("#inside_trans4").css("visibility", "visible");
});

$("#inside_trans4").hover(function () {
  $("#inside_trans5").css("visibility", "visible");
});

$("#inside_trans5").hover(function () {
  $("#inside_trans6").css("visibility", "visible");
});

$("#inside_trans6").hover(function () {
  $("#inside_trans7").css("visibility", "visible");
});

$(".outside_header").hover(function () {
  $("#outside_trans1").css("visibility", "visible");
});

$("#outside_trans1").hover(function () {
  $("#outside_trans2").css("visibility", "visible");
});

$("#outside_trans2").hover(function () {
  $("#outside_trans3").css("visibility", "visible");
});

$("#outside_trans3").hover(function () {
  $("#outside_trans4").css("visibility", "visible");
});

$("#outside_trans4").hover(function () {
  $("#outside_trans5").css("visibility", "visible");
});

//----> poem section
$("#outside_trans5").hover(function () {
  $(".poemC").css("visibility", "visible");
  $(".poemO").css("visibility", "hidden");
  $(".poemE").css("visibility", "hidden");
});

$("#inside_trans7").hover(function () {
  $(".poemC").css("visibility", "hidden");
  $(".poemO").css("visibility", "hidden");
  $(".poemE").css("visibility", "visible");
});

//------> single line of poem hover
$("#poem1c").hover(function () {
  $("#poem11c").css("visibility", "visible");
  $("#poem1c").css("visibility", "hidden");
});

$("#poem11c").hover(function () {
  $("#poem111c").css("visibility", "visible");
  $("#poem11c").css("visibility", "hidden");
});

$("#poem111c").hover(function () {
  $("#poem111c").css("visibility", "hidden");
  $("#poem1c").css("visibility", "visible");
});

$("#poem2c").hover(function () {
  $("#poem22c").css("visibility", "visible");
  $("#poem2c").css("visibility", "hidden");
});

$("#poem22c").hover(function () {
  $("#poem222c").css("visibility", "visible");
  $("#poem22c").css("visibility", "hidden");
});

$("#poem222c").hover(function () {
  $("#poem222c").css("visibility", "hidden");
  $("#poem2c").css("visibility", "visible");
});

$("#poem3c").hover(function () {
  $("#poem3c").css("visibility", "hidden");
  $("#poem3e").css("visibility", "visible");
});

$("#poem3e").hover(function () {
  $("#poem3c").css("visibility", "visible");
  $("#poem3e").css("visibility", "hidden");
});

$("#poem4c").hover(function () {
  $("#poem4c").css("visibility", "hidden");
  $("#poem4e").css("visibility", "visible");
});

$("#poem4e").hover(function () {
  $("#poem4e").css("visibility", "hidden");
  $("#poem4c").css("visibility", "visible");
});

$("#poem5c").hover(function () {
  $("#poem5c").css("visibility", "hidden");
  $("#poem5e").css("visibility", "visible");
});

$("#poem5e").hover(function () {
  $("#poem5e").css("visibility", "hidden");
  $("#poem5c").css("visibility", "visible");
});

$("#poem6c").hover(function () {
  $("#poem6c").css("visibility", "hidden");
  $("#poem6e").css("visibility", "visible");
});

$("#poem6e").hover(function () {
  $("#poem6e").css("visibility", "hidden");
  $("#poem6c").css("visibility", "visible");
});

$("#poem7c").hover(function () {
  $("#poem7c").css("visibility", "hidden");
  $("#poem7e").css("visibility", "visible");
});

$("#poem7e").hover(function () {
  $("#poem7e").css("visibility", "hidden");
  $("#poem7c").css("visibility", "visible");
});

$("#poem8c").hover(function () {
  $("#poem8c").css("visibility", "hidden");
  $("#poem8e").css("visibility", "visible");
});

$("#poem8e").hover(function () {
  $("#poem8e").css("visibility", "hidden");
  $("#poem8c").css("visibility", "visible");
});
