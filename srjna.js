var main = function(){
	
	$("#hLink1").click(function(event){
        $('html, body').animate({scrollTop: 0}, 1200);
    });
	
	$("#hLink2").click(function(event){
        $('html, body').animate({scrollTop: 620}, 1200);
    });

    $("#hLink3").click(function(event){
        $('html, body').animate({scrollTop: 1235}, 1200);
    });

    $("#hLink4").click(function(event){
        $('html, body').animate({scrollTop: 1855}, 1200);
    });

    $("#hLink5").click(function(event){
        $('html, body').animate({scrollTop: 2476}, 1200);
    });

    $("#hLink6").click(function(event){
        $('html, body').animate({scrollTop: 3080}, 1200);
    });

    $("#hLink7").click(function(event){
        $('html, body').animate({scrollTop: 3715}, 1200);
    });

	
	$('.menu li').click(function(){
		$('.menu li').removeClass('active');
		$(this).addClass('active');
	});


	var body = $('body');
	var top = body.scrollTop();
	var limTop = 200;
	var x = top/limTop;
	$('.navbar .container').css({'opacity':'x', 'height':'(120-60*x)'})
	
	var radius = 200;
	var fields = $('.field'), imgs = $('.imgs'), width = imgs.width(), height = imgs.height();
	var angle = 0;
	
	
}

$(document).ready(main);