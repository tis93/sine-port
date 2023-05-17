
$(window).scroll(function(){
    if($(this).scrollTop()>50){
        $(".inner").addClass("active")
    }else{
        $(".inner").removeClass("active")
    }
});

$("li.main").mouseenter(function(){
    $(this).find("ul.sub").stop().slideDown()
    $(this).next(".nav-bg").stop().slideDown()
});
$("li.main").mouseleave(function(){
    $("ul.sub").stop().slideUp()
    $(".nav-bg").stop().slideUp()
});

// ===================================================

$(".slide-wrap").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed:1000,
    pauseOnHover:true,
    arrows: false,
    dots: true,
    appendDots:(".custom-slide-dots")
});

// ===================================================

$(".left-track").slick({
    autoplay: true,
    pauseOnHover:false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:(".custom-slick-dots1")
});
$(".right-track").slick({
    autoplay: true,
    pauseOnHover:false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:(".custom-slick-dots2")
});

// ===================================================

$(".animate").scrolla({
    mobile : false,
    once: true,
    animateCssVersion: 3,
});

// ===================================================

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

$(".tab-menu h3").click(function(){
    $('.tab-menu h3').removeClass('on');
    $(this).addClass("on");

    if($(".tab-menu h3:nth-of-type(1)").hasClass("on")){
        $(".tab-swiper .swiper").removeClass("on");
        $(".tab-swiper .best-treck").addClass("on");
    } else if ($(".tab-menu h3:nth-of-type(2)").hasClass("on")){
        $(".tab-swiper .swiper").removeClass("on");
        $(".tab-swiper .new-treck").addClass("on");
    }
});

$(".swiper-slide").mouseenter(function(){
    $(this).find(".cart-box").stop().slideDown()
});
$(".swiper-slide").mouseleave(function(){
    $(".cart-box").stop().slideUp()
});
    
// ===================================================

$(window).scroll(function(){
    if($(this).scrollTop()>600){
        $(".icon").addClass("active")
    }else{
        $(".icon").removeClass("active")
    }
});




