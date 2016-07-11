$(function(){
	//导航动画#####
	$(".nav ul li a").mouseover(function(){
		var i=$(".nav ul li a").index($(this));
		$(this).css('color','#fff');
		var distance=115*i+370;
  		$(".background").animate({
  			left: distance+'px'
  		},'slow');
	});
	$(".nav ul li a").mouseout(function(){
		$(this).css('color','#FFA809');
  		$(".background").animate({
  			left: '370px'
  		},'fast');
	});
	//尾部轮播#####
	var i=0;
	setInterval(function lunbo(){
		i++;
		var lenth=$('.main-five ul li').length;
		if(i+5>lenth){
			$('.main-five ul').append($('.main-five ul').html())
			//一共？张图片，初始值i为0，当时间开始计时的时候，i每700毫秒加一次，
			//当i+5大于ul里li的长度，就再次复制一份图片在后边，就无限滚动了。
		}
		$('.main-five ul').animate({left:-276.5*i},1000)
	},2000);
})