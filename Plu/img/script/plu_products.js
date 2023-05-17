$(function(){

	// menu section =======================================
	$("#m-icon").click(function(){
		$(".menu").slideToggle();
		$(".gab li").delay(500)
		$(".gab li").fadeToggle(500)
	});
    
    // main section =======================================
    // l-section  -----------------------------------------
    $(".line-btn li").click(function(){
        $(".line-btn li").removeClass("on");
        $(this).addClass("on");
        $(".r-section>section").removeClass("on");

		if($(".line-btn li:nth-of-type(1)").hasClass("on")){
			$(".all-line").addClass("on");
		} else if ($(".line-btn li:nth-of-type(2)").hasClass("on")){
			$(".original-line").addClass("on");
		} else if ($(".line-btn li:nth-of-type(3)").hasClass("on")){
			$(".perfum-line").addClass("on");
		} else if ($(".line-btn li:nth-of-type(4)").hasClass("on")){
			$(".therapy-line").addClass("on");
		} else if ($(".line-btn li:nth-of-type(5)").hasClass("on")){
			$(".nap-line").addClass("on");
		}
    });
    
    // r-section sub-menu  --------------------------------
    $(".other1 li").click(function(){
        $(".other1 li").removeClass("on");
        $(this).addClass("on");
    });
    $(".other2 li").click(function(){
        $(".other2 li").removeClass("on");
        $(this).addClass("on");
    });
    $(".other3 li").click(function(){
        $(".other3 li").removeClass("on");
        $(this).addClass("on");
    });
    $(".other4 li").click(function(){
        $(".other4 li").removeClass("on");
        $(this).addClass("on");
    });

});

// main Isotope ===========================================
window.addEventListener("load",()=>{
    const grid = new Isotope(".r-bottom",{
        itemSelector : "article",
        transitionDuration: "0.5s"
    });
    
    const btns = document.querySelectorAll(".all-line .sub-menu li");

    btns.forEach((btn, index)=>{
        btn.addEventListener("click", e=>{
            e.preventDefault();

            const isOn = e.currentTarget.classList.contains("on");
            
            if(isOn) return;
            activation(e);
        });
    });

    function activation(event){
        for(let btn of btns) btn.classList.remove("on");
        event.currentTarget.classList.add("on");
        const btn_a = event.currentTarget.querySelector("a");
        const a_href = btn_a.getAttribute("data-filter");
        grid.arrange({filter : a_href});
    };

});













