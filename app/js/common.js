$(document).ready(function() {

	new WOW().init();

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;

	});

	$(".phone").mask("+7(000)000-00-00", {
		placeholder: "",
		clearIfNotMatch: true
	});

	$("a[href*='#']").mPageScroll2id();

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".btn-close,.offer").click(function() {
		if ($(".overlay").is(":visible")) {
			$(".overlay").fadeOut(300);
		} else {
			$(".overlay").fadeIn(300);		
		};
	});

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".cbalink").addClass("hidden");

});
