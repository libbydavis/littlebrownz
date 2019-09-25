//scroll to reveal sections
ScrollReveal({ reset: true });
ScrollReveal({ duration: 1200 });

//adding fixed style to menu so that it can appear to fill the page
function menuButton() {
  var x = document.getElementById("fullpagenav");
 if (x.style.display === "none" || x.style.display === "") {
    x.style.position = "fixed";
  }

}


//showing and hiding the hamburger icon
$(document).ready(function(){
	$("#iconopen").click(function(){
		$(this).hide();
		$("#iconclose").show();
	});
	$("#iconclose").add("#fullpagenav").on('click', function(){
		$("#iconclose").hide();
		$("#iconopen").show();
	});
});


//showing and hiding the hamburger menu content
$(document).ready(function(){
	$("#iconopen").click(function(){
		$("#fullpagenav").fadeIn();
	});
	$("#iconclose").add("#fullpagenav").on('click', function(){
		$("#fullpagenav").fadeOut();
	});
});

//adding a scroll to animation
$(document).ready(function(){
	$(".aboutbutton").add("#logo").on('click', function(){
		$("html, body").animate({
			scrollTop: $("#about").offset().top
		}, 1000);
	});
	$(".gallerybutton").click(function(){
		$("html, body").animate({
			scrollTop: $("#gallery").offset().top
		}, 1000);
	});
	$(".contactbutton").add(".contactmebutton").on('click', function(){
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


var imageGallery1 = ["mackenzie1.jpg", "balletgirl2.jpg", "nic2.jpg"];
var imageGallery2 = ["mackenzie3.jpg", "balletgirl1.jpg", "nic1.jpg"];
var imageGallery3 = ["mackenzie2.jpg", "balletgirl3.jpg", "nic3.jpg"];
//setInterval("changeImage()", 3500);
var x = 0

function changeImage() {
	document.getElementById("gallery1").src= imageGallery1[x];
	document.getElementById("gallery2").src= imageGallery2[x];
	document.getElementById("gallery3").src= imageGallery3[x];
	x++;
	if (x === (imageGallery1.length)) {
		x = 0;
	}
}

function submitButton() {
	alert("Thanks for contacting me! I'll get back to you soon :)")
}
