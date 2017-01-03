$(document).ready(function(){
	var authorized = checkForAuthCookie();
	var nav, origOffsetY;

	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy({scrollOffset: 64});
	$('.collapsible').collapsible();
	$('.materialboxed').materialbox();
	$('select').material_select();
	$('.carousel.carousel-slider').carousel({full_width: true});
	$('.modal-trigger').leanModal();

	if (authorized) {
		$('#password').hide();
		$('nav').fadeIn(2000);
		nav = $('nav');
		origOffsetY = nav.offset().top;
		$('#content').show();
	}

	$('#password').submit(function(event){
		event.preventDefault();
		var value = $("input").val().toLowerCase();
		// hey look! the password ;P
		if (value === "violetsareblue") {
			setAuthCookieValue();
			$('form').fadeOut(1500);
			$('nav').fadeIn(2000);
			$('#content').show();
			nav = $('nav');
			origOffsetY = nav.offset().top;
		} else if (value === "goons"){
			$("input").val("");
			$('input').attr("placeholder", "bad dave, bad");
		} else {
			$('form').hide();
			$("input").val("")
			$('input').attr("placeholder", "see invitation");
			$('form').fadeIn(1000);
		}
	})

  function getAuthCookieValue() {
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)rosalsAreWed\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return cookieValue;
  }

  function setAuthCookieValue() {
    document.cookie = "rosalsAreWed=" + "true";
  }

  function checkForAuthCookie() {
    if (document.cookie.includes("rosalsAreWed=") !== true) {
      document.cookie = "rosalsAreWed=; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }
    return getAuthCookieValue();
  }

  function scroll() {
      if ($(window).scrollTop() >= origOffsetY) {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  }

  document.onscroll = scroll;

});