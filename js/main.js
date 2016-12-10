$(document).ready(function(){
	var authorized = false;
	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy();
	$('.slider').slider({full_width: true});
	$('select').material_select();
	debugger
	if (window.location.pathname.includes('index')) {
		if (authorized) {
			return;
		} else {
			window.loc
		}
	}
	$('#password').submit(function(event){
		debugger;
		var value = $("input").val();
		if (value = "")
	})
});