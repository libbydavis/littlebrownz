$(".accordion").on("click", ".accordionheader", function() {
	$(this).toggleClass("active").next().slideToggle();

});
$("#blog1").click(function(){
	$("#blogcontent1").fadeIn();
});
$("#blog2").click(function(){
	$("#blogcontent2").fadeIn();
});
$("#blog3").click(function(){
	$("#blogcontent3").fadeIn();
});
$(".closeicon").click(function(){
	$("#blogcontent1").fadeOut();
	$("#blogcontent2").fadeOut();
	$("#blogcontent3").fadeOut();
});