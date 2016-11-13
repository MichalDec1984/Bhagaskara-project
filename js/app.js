document.addEventListener("DOMContentLoaded", function() {
//page reload after clicking a website logo
	var pageLogo = document.querySelector(".site_name");
	pageLogo.addEventListener("click", function(event) {
		location.reload()
	});
//scroll down after clicking a button
	var button = document.querySelector(".scroll_down");
	button.addEventListener("click", function(event) {
		console.log("Hurra! Działa!");
    	document.querySelector('nav').scrollIntoView({ 
  			behavior: 'smooth' 
		});
	});
//RWD menu
	var hamburgerMenu = document.querySelector(".rwd_menu");
	var menu = document.querySelector(".menu");


		function test_match_media_with_listener(){
			var mq = window.matchMedia("(max-width:1050px)");
			mq.addListener(WidthChange);
			WidthChange(mq);


			function WidthChange(mediaQuery) {
				if (mediaQuery.matches) {
					menu.classList.add("hidden");
					hamburgerMenu.classList.remove("hidden");
				} else {
					menu.classList.remove("hidden");
					hamburgerMenu.classList.add("hidden");
					menu.classList.remove("horizontal");
				}
			}
		}
		test_match_media_with_listener();
		hamburgerMenu.addEventListener("click", function() {
			menu.classList.toggle("horizontal");
		});
//gallery with filter
	var allButton = document.querySelector(".all");
	var webButton = document.querySelector(".web");
	var appButton = document.querySelector(".app");
	var iconsButton = document.querySelector(".icons");
	allButton.addEventListener("click", function() {
		if(document.querySelector(".one").style.display="none") {
			document.querySelector(".one").style.display = "inherit";
		}
		if(document.querySelector(".two").style.display="none") {
			document.querySelector(".two").style.display = "inherit";
		}
		if(document.querySelector(".three").style.display="none") {
			document.querySelector(".three").style.display = "inherit";
		}
		if(document.querySelector(".fourth").style.display="none") {
			document.querySelector(".fourth").style.display = "inherit";
		}
		if(document.querySelector(".fifth").style.display="none") {
			document.querySelector(".fifth").style.display = "inherit";
		}
		if(document.querySelector(".sixth").style.display="none") {
			document.querySelector(".sixth").style.display = "inherit";
		}
	});
	webButton.addEventListener("click", function() {
		document.querySelector(".one").style.display = "none";
		document.querySelector(".fourth").style.display = "none";
		if(document.querySelector(".two").style.display="none") {
			document.querySelector(".two").style.display = "inherit";
		}
		if(document.querySelector(".three").style.display="none") {
			document.querySelector(".three").style.display = "inherit";
		}
		if(document.querySelector(".fifth").style.display="none") {
			document.querySelector(".fifth").style.display = "inherit";
		}
		if(document.querySelector(".sixth").style.display="none") {
			document.querySelector(".sixth").style.display = "inherit";
		}	
	});
	appButton.addEventListener("click", function() {
		document.querySelector(".two").style.display = "none";
		document.querySelector(".fifth").style.display = "none";
		if(document.querySelector(".one").style.display="none") {
			document.querySelector(".one").style.display = "inherit";
		}
		if(document.querySelector(".three").style.display="none") {
			document.querySelector(".three").style.display = "inherit";
		}
		if(document.querySelector(".fourth").style.display="none") {
			document.querySelector(".fourth").style.display = "inherit";
		}
		if(document.querySelector(".sixth").style.display="none") {
			document.querySelector(".sixth").style.display = "inherit";
		}	
	});
	iconsButton.addEventListener("click", function() {
		document.querySelector(".three").style.display = "none";
		document.querySelector(".sixth").style.display = "none";
		if(document.querySelector(".one").style.display="none") {
			document.querySelector(".one").style.display = "inherit";
		}
		if(document.querySelector(".two").style.display="none") {
			document.querySelector(".two").style.display = "inherit";
		}
	
		if(document.querySelector(".fourth").style.display="none") {
			document.querySelector(".fourth").style.display = "inherit";
		}
		if(document.querySelector(".fifth").style.display="none") {
			document.querySelector(".fifth").style.display = "inherit";
		}	
	});
//form validation
	var myForm = document.querySelector("form");
	myForm.addEventListener("submit", function(event) {
		event.preventDefault();
		var name = document.querySelector('input[name="imie"]').value;
		var email = document.querySelector('input[name="email"]').value;
		var textArea = document.querySelector('textarea').value;
		var errorMessage1 = "";
		var errorMessage2 = "";
		var errorMessage3 = "";
		var errorHolder1 = document.getElementsByClassName("error_message1")[0];
		var errorHolder2 = document.getElementsByClassName("error_message2")[0];
		var errorHolder3 = document.getElementsByClassName("error_message3")[0]
		var result = true;
		//validation conditions
		if (name.length < 3) {
			//window.alert("Name can not be less than 3 characters");
				errorMessage1 = "Error: name can't be less than 3 characters";
				console.log("FY");
				result = false;
		} else {
				errorHolder1.innerHTML =""; //Cleanup error messages
		}

		if (email.indexOf("@") === -1) {
 				//window.alert("no @");
 				console.log("Y");
 				errorMessage2 = "Error: no @ in email";
 				result = false;
		} else {
 				//window.alert("no @");
 				errorHolder2.innerHTML =""; //Cleanup error messages
		}

		if (textArea.length < 1) {
				//window.alert("no text");
				errorMessage3 = "Error: no text in message";
				console.log("Z");
				result = false;
		} else {
				//window.alert("no text");
				errorHolder3.innerHTML =""; //Cleanup error messages
		}
		//show error message
		if (errorMessage1.length > 0) {
			errorHolder1.innerHTML = errorMessage1; 
			result = false;	
		} 

		if (errorMessage2.length > 0) { 
			errorHolder2.innerHTML = errorMessage2; 
			result = false;
		} 
		if (errorMessage3.length > 0) { 
			errorHolder3.innerHTML = errorMessage3;
			result = false;
		} 
		//condictions of form submit
		if ((errorMessage1.length = 0) && (errorMessage2.length = 0) && (errorMessage3.length = 0)) {
			errorHolder1.innerHTML = "";
			errorHolder2.innerHTML = "";
			errorHolder3.innerHTML = "";
			result = true; 
		}
		//form submit
		if (result) {
			this.submit();
		}
  	});
});
//sticky menu 
$(function() {
    console.log("działa");
    var nav = $('nav');
    var menu = nav.find('.menu');
    var hamburgerMenu = $(".rwd_menu");
    var positionTop = menu.position().top;
    function sticky(){
        var scrollTopWindow = $(window).scrollTop();
        if (scrollTopWindow > positionTop){
            menu.addClass('sticky');
            hamburgerMenu.addClass('sticky');
        }
        else {
            menu.removeClass('sticky');
            hamburgerMenu.removeClass('sticky');
        }
    }
    $(window).on('scroll', function(){
        var scrollTopWindow = $(window).scrollTop();
        sticky();
    });
    $(window).on('resize', function(){
    	positionTop;
        sticky();
    });
//slider 
	var left = $(".button_left");
	var right = $(".button_right");
	var owl = $(".team_third_row");
 
	owl.owlCarousel({
    	autoPlay: 3000,
   		dots: false,
    	items: 3,
   		itemsDesktop : [1000,2], 
    	itemsDesktopSmall : [900,2], 
    	itemsTablet: [600,1], 
    	itemsMobile : false
	});
 	right.click(function(){
    	owl.trigger('owl.next');
  	})
	left.click(function(){
    	owl.trigger('owl.prev');
	})
});
