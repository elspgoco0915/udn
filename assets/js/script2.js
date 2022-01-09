

jQuery(function($){
/******************************************
init
******************************************/
var winH = $(window).height();
$('.box').outerHeight(winH);


$(window).on('load',function(){
	setBgImg($('.fitMovie'));
});

$(window).on('resize',function(){
    winH = $(window).height();
    $('.box').outerHeight(winH);
    setBgImg($('.fitMovie'));
});

	function setBgImg(object){
		var imgW = object.width();
		var imgH = object.height();
		var winW = $(window).width();
		var winH = $(window).height();
		var scaleW = winW / imgW;
		var scaleH = winH / imgH;
		var fixScale = Math.max(scaleW, scaleH);
		var setW = imgW * fixScale;
		var setH = imgH * fixScale;
		var moveX = Math.floor((winW - setW) / 2);
		var moveY = Math.floor((winH - setH) / 2);
		object.css({
			'width': setW,
			'height': setH,
			'left' : moveX,
			'top' : moveY
		});
	}
});
