//Loop Slider

jQuery(document).ready(function($) {
    var count = 1;
    var slideCount = $('#photoSlider ul li').length;
    var slideWidth = $('#photoSlider ul li').width();
    var slideHeight = $('#photoSlider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    $('#photoSlider').css({
        width: slideWidth,
        height: slideHeight
    });
    $('#photoSlider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });
    $('#photoSlider ul li:last-child').prependTo('#photoSlider ul');
    $('span#totalphoto').text(slideCount);

    function moveLeft() {
        $('#photoSlider ul').animate({
            left: +slideWidth
        }, 200, function() {
            $('#photoSlider ul li:last-child').prependTo('#photoSlider ul');
            $('#photoSlider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#photoSlider ul').animate({
            left: -slideWidth
        }, 200, function() {
            $('#photoSlider ul li:first-child').appendTo('#photoSlider ul');
            $('#photoSlider ul').css('left', '');
        });
    };
    $('.control_prev').click(function() {
        if (count == 1) {
            count = slideCount;
            $('span#photocunt').text(count);
        } else {
            count--
            $('span#photocunt').text(count);
        }
        moveLeft();
    });
    $('.control_next').click(function() {
        if (count == slideCount) {
            count = 1;
            $('span#photocunt').text(count);
        } else {
            count++
            $('span#photocunt').text(count);
        }
        moveRight();
    });
});







//=======Current clik slider Popup ============= 
	
	
	
		var windowWid = $(window).width();
		if(windowWid <= 400){
			$('.heritage-box .slider-section ul li').css('width','290px');
		}
	

 //======= slider 1 ============= 	

	var li_len=$('.heritage-box .slider-section ul li').length;
	//console.log(li_len)
	var li_wid=$('.heritage-box .slider-section ul li').width();
	var li_widA=$('.heritage-box .slider-section ul li').width();
	
	var li_widA=li_len*li_widA;
	var currentClick;
	var counter=0;
	var currentlen;
	$('.heritage-box .slider-section ul').css('width',li_widA);
	
	$('.allSpeakerSec ul li').click(function(){
		$('.heritage-box .slider-section ul').css('left', '0');
		currentlen = $(this).length;
		currentClick = $(this).index();
		counter = currentClick;
		
		$('.heritage-box .slider-section ul').animate({left:'-='+ li_wid*currentClick});
		
		if (counter == currentClick )
		{
			$('.heritage-box .nextbtn').show('slow');
			$('.heritage-box .prevbtn').show('slow');
		}
	});
	
	//right battan
	function next(){

	
		if(counter>=li_len-1){
				
				$(this).hide('slow');
			}
		else{
				$('.heritage-box .slider-section ul').animate({left:'-='+li_wid});	
				counter+=1;
				$('.heritage-box .prevbtn').show('slow')
			}	
	}
	//end right battan
	
	
	//left battan
	function prev(){

		if(counter==0){
			$(this).hide('slow');
			}
		else{
			$('.heritage-box .slider-section ul').animate({left:'+='+li_wid});
			counter-=1;
			$('.heritage-box .nextbtn').show('slow');
			}
	}
	
$(".heritage-box .nextbtn").on('click',next)
$(".heritage-box .prevbtn").on('click',prev)

	
	//Swiper
$(".slider-section").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
             next()
        }
        else if( Math.floor(xClick - xMove) < -5 ){
           prev()
        }
    });
    $(".slider-section").on("touchend", function(){
            $(this).off("touchmove");
    });
});

	

