$(document).ready(function(){
	$(".close").click(function(){
		$(".close").hide();
		$(".teaser").hide();
		$(".teaserbg").hide();
        $("video").prop('muted', true);
	});
  	$(".teaserbg").click(function(){
		$(".close").hide();
		$(".teaser").hide();
		$(".teaserbg").hide();
        $("video").prop('muted', true);
	});
});

$(document).ready(function(){
    $("#lore").click(function(){
        $("#zwMenue").show();
    });
});

$(document).ready(function(){
    $(".chronik").hover(function(){
        $(".blinken").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(2500);
	});
});

$(document).ready(function(){
	$(".drehbild1").click(function(){
		$(".drehbild1").fadeOut();
		$("#panel1").slideUp("slow");
	});
	$(".drehbild2").click(function(){
		$(".drehbild2").fadeOut();
		$("#panel2").slideUp("slow");
	});
	$(".drehbild3").click(function(){
		$(".drehbild3").fadeOut();
		$("#panel3").slideUp("slow");
	});
});

$(document).ready(function(){
	$("#flip1").click(function(){
		$("#panel1").slideDown("slow");
		$(".drehbild1").fadeIn();
	});
	$("#flip2").click(function(){
		$("#panel2").slideToggle("slow");
		$(".drehbild2").fadeIn();
	});
	$("#flip3").click(function(){
		$("#panel3").slideToggle("slow");
		$(".drehbild3").fadeIn();
	});
});

$(document).ready(function(){
 	$(".merk").blinkElement(500);
});  

$(document).ready(function(){
	$("button").click(function(){
		$(".merk").fadeToggle();
	});
});


$(document).ready(function(){
    $("#Reverseflash").hover(function(){
        $("#Reverseflash").animate({
            left: '46%'
        }, 1000);
        $("#ReverseflashName").fadeIn(2000);
    });
    $("#Zoom").hover(function(){
        $("#Zoom").animate({
            right: '62%'
        }, 1000);
        $("#ZoomName").fadeIn(2000);
    });
    $("#Savitar").hover(function(){
        $("#Savitar").animate({
            left: '46%'
        }, 1000);
        $("#SavitarName").fadeIn(2000);
    });
});

$(document).ready(function(){
	$("#Reverseflash").mouseenter(function(){
		$("<audio></audio>").attr({ 
			'src':'Bilder/Sound4.mp3', 
			'volume':0.4,
			'autoplay':'autoplay'
		});
	});

	$("#Zoom").mouseenter(function(){
		$("<audio></audio>").attr({ 
			'src':'Bilder/Sound4.mp3', 
			'volume':0.4,
			'autoplay':'autoplay'
		});
	});

	$("#Savitar").mouseenter(function(){
		$("<audio></audio>").attr({ 
			'src':'Bilder/Sound4.mp3', 
			'volume':0.4,
			'autoplay':'autoplay'
		});
	});
});


$(window).resize(function() {
   $('#bg2Text').html($(window).width());
});

$(window).resize(function(){
    if ($(window).width() > 200 && $(window).width() < 720) {
      	$("#bg2Text").animate({
        	height: '50%'
        }, 5);
        $(".schwebenderHome").animate({
        	height: '450px'
        }, 5);
    };
    if ($(window).width() > 720 && $(window).width() < 1080) {
      	$("#bg2Text").animate({
        	height: '95%'
        }, 5);
        $(".schwebenderHome").animate({
        	height: '805px'
        }, 5);
    };
    if ($(window).width() > 1080 && $(window).width() <= 1440) {
      	$("#bg2Text").animate({
        	height: '130%'
        }, 5);
        $(".schwebenderHome").animate({
        	height: '1010px'
        }, 5);
    };
});

$(window).ready(function(){
    if ($(window).width() > 200 && $(window).width() < 720) {
      	$("#bg2Text").animate({
        	height: '50%'
        }, 5);
        $(".schwebenderHome").animate({
        	height: '450px'
        }, 5);
    };
    if ($(window).width() > 720 && $(window).width() < 1080) {
      	$("#bg2Text").animate({
        	height: '95%'
        }, 5);
        $(".schwebenderHome").animate({
        	height: '805px'
        }, 5);
    };
    if ($(window).width() > 1080 && $(window).width() <= 1440) {
      	$("#bg2Text").animate({
        	height: '130%'
        }, 5);
        $(".schwebenderHome").animate({
        	height: '1010px'
        }, 5);
    };
});

//Inhalt
$(document).ready(function(){
    $("#S1").click(function(){
        $("#panel1Inhalt").slideToggle("slow");
    });
    $("#S2").click(function(){
        $("#panel2Inhalt").slideToggle("slow");
        $("#S2").animate({
            left: '50%'
        }, 1000);
    });
    $("#S3").click(function(){
        $("#panel3Inhalt").slideToggle("slow");
    });
    $("#S4").click(function(){
        $("#panel4Inhalt").slideToggle("slow");
    });
});

$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            $(".Spoiler").fadeToggle();
        };
    });
});



