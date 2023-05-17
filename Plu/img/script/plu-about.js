$(function(){
	AOS.init({
		duration:"1000",
		easing: "ease-in-out"
	});
    
	// menu section =============================
	$("#m-icon").click(function(){
		$(".menu").slideToggle();
		$(".gab li").delay(500)
		$(".gab li").fadeToggle(500)
	});

	// bg-img section ===========================
	$('.parallax-window').parallax({imageSrc:"img/section5_bg.jpg"});

	// swiper section ===========================
	const swiper = new Swiper('.swiper', {
		direction: "horizontal",
		grabCursor: true,
		slidesPerView: "auto",
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});

	// menu =============================









	








});













