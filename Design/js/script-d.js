$(function(){
    $(".nav li").click(function(){
        $(".nav li").removeClass("on");
        $(this).addClass("on");
        $(".main>div").removeClass("on");

        if($(".nav li:nth-of-type(1)").hasClass("on")){
			$(".fashion").addClass("on");
		} else if ($(".nav li:nth-of-type(2)").hasClass("on")){
			$(".brand").addClass("on");
		} else if ($(".nav li:nth-of-type(3)").hasClass("on")){
			$(".logo").addClass("on");
		} else if ($(".nav li:nth-of-type(4)").hasClass("on")){
			$(".edit").addClass("on");
		}
    });

    $(".fashion img").click(function(){
        $(".f-modal").fadeIn();
    });
    $(".brand img").click(function(){
        $(".br-modal").fadeIn();
    });
    $(".logo img").click(function(){
        $(".l-modal").fadeIn();
    });
    $("#ban").click(function(){
        $(".ba-modal").fadeIn();
    });
    $("#edit").click(function(){
        $(".e-modal").fadeIn();
    });

    $(".modal-inner img").click(function(){
        $(".modal").fadeOut();
    });











});
