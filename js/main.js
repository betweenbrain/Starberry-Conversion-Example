$(document).ready(function() {
	$('.gallery .thumbs li:first-child a').addClass("opacity")
	var ss = $(".properties .slides").bxSlider({
		minSlides: 1,
		maxSlides: 7,
		slideWidth: 258,
		slideMargin: 14,
		pager: false
	});

	var s1 = $(".gallery .thumbs ul").bxSlider({
		minSlides: 1,
		maxSlides: 8,
		slideWidth: 79,
		slideMargin: 10,
		pager: false
	});

	$(window).scroll(function() {
		$("select").crfs("hide")
	});

	$('[placeholder]').each(function() {  
		var input = $(this);
					
		$(input).focus(function(){
			if (input.val() == input.attr('placeholder')) {
			   input.val('').removeClass("placeholder");
			}
		});
			
		$(input).blur(function(){
		   if (input.val() == '' || input.val() == input.attr('placeholder')) {
			   input.val(input.attr('placeholder')).addClass("placeholder");
		   }
		});
	}).blur();

	var s2 = $(".gallery .slides ul").bxSlider({
		pagerCustom: '.thumbs ul'
	});

	$("select").crfs();
	
	$("input[type=checkbox], input[type=radio]").crfi();

	$('.mobile-links a.ico-search').click(function (e) {
		if (!$(".navbar-toggle").hasClass("collapsed")) {
			$(".mobile-links .navbar-toggle").trigger("click")
		};
		$(this).parent().toggleClass("open");
	   	return false;
	});
	$('.gallery .thumbs li a').click(function (e) {
		$(".opacity").removeClass("opacity");
	    $(this).addClass("opacity")
	});
	$('.seo-links .nav-tabs li a').click(function (e) {
	    if($(this).parent('li').hasClass('active')){
	    	$(this).parentsUntil(".seo-links").parent().find(".active").removeClass("active");
	    	return false;
	    }
	});
	$(".mobile-links .navbar-toggle").click(function (e) {
	    $('.mobile-links').removeClass("open")
	});
	if ($(".properties .slides").length) {

		$(window).resize(function() {
			ss.goToSlide(0);
		});

	};
});