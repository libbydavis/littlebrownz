function menuButton() {
  var x = document.getElementById("fullpagenav");
 if (x.style.display === "none" || x.style.display === "") {
    x.style.position = "fixed";

  }
  var y = document.getElementById("iconclose");
  if (y.style.display === "none" || y.style.display === "") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("iconopen");
  if (z.style.display === "block" || z.style.display === "") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}
function hideMenu() {
	 var x = document.getElementById("fullpagenav");
 if (x.style.display === "block") {
    x.style.display = "none";
  }
   var y = document.getElementById("iconclose");
  if (y.style.display === "none" || y.style.display === "") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("iconopen");
  if (z.style.display === "block" || z.style.display === "") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}
$(document).ready(function(){
	$("#iconopen").click(function(){
		$("#fullpagenav").fadeIn();
	});
	$("#iconclose").click(function(){
		$("#fullpagenav").fadeOut();
	});
});
$(document).ready(function(){
	$(".aboutbutton").click(function(){
		$("html, body").animate({
			scrollTop: $("#about").offset().top
		}, 1000);
	});
	$(".gallerybutton").click(function(){
		$("html, body").animate({
			scrollTop: $("#gallery").offset().top
		}, 1000);
	});
	$(".contactbutton").click(function(){
		$("html, body").animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
	});
	$(".tipsbutton").click(function(){
		$("html, body").animate({
			scrollTop: $("#tips").offset().top
		}, 1000);
	});
});


var imageGallery1 = ["mackenzie1.jpg", "mackenzie2.jpg", "nic2.jpg"];
setInterval("changeImage()", 3000);
var x = 0

function changeImage() {
	document.getElementById("gallery1").src= imageGallery1[x];
	x++;
	if (x === (imageGallery1.length)) {
		x = 0;
	}
}
