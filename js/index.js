$(function(){
	//轮播#####
	var picli=$('.picPlay li');
	var n=0;
	var count=0;
	var moveleft=[];
	moveleft[0]=0;
	$(picli).each(function(i){
		$(this).css('left',moveleft[i]);
		moveleft[i+1]=moveleft[i]+1920;
	});
	setInterval(function(){     //定时器
		if(n==picli.length-1){
			var t1=setInterval(function(){
				if(count==10){
					clearInterval(t1);
					count=0;     //重置清零
				}else{
					picmove($(picli),384);
					count++;
				}
			},30);
			n=0;  //重置清零
		}else{
			var t2=setInterval(function(){
				if (count==10) {
					clearInterval(t2);
					count=0;
				}else{
					picmove($(picli),-192);
					count++;
				}
			},30);
			n++;    //重置清零
		}
	},3000);
	function picmove(ele,px){       //自定义的移动函数，ele 移动对象，px 移动距离
		var moveleft=[];
		ele.each(function(i){
			moveleft[i]=parseInt($(this).css('left'));
			$(this).css('left',moveleft[i]+px);
		});
	}
	//心意介绍的平移#####
	$('.main-main').mouseover(function(){
		$(".little-title").animate({
			top:'+100px',
		},500).fadeIn(100);
	});
	$('.main-main').mouseleave(function(){
		$(".little-title").animate({
			top:'-65px',
		}).fadeOut(500);
	});
	//心意动态的平移#####
	$('.main-three').mouseover(function(){
		$(".main-three .hd").animate({
			top:'+80px',
		},500).fadeIn(500);
	});
	$('.main-three').mouseleave(function(){
		$(".main-three .hd").animate({
			top:'-80px',
		}).fadeOut(30);
	});

	//小车的移动
	var x=0;
	$(window).scroll(function(){
		if ($('body').scrollTop()>900&&$('body').scrollTop()<1500){
			var distance=300-(x+=10);
			if (distance<50) {
				return false;
			}else{
				$('.box .little-people').animate({
					right: distance+'px'
				},'fast');
			}
		}
	})
	//最新活动 最新资讯
	$('#new-news').click(function(){
		$('.ins02').css('display','block');
		$('.ins01').css('display','none');
		$('.main-three .tab-hd li.tab-zx').css('color','#fff');
		$('.main-three .tab-hd li.tab-zx').css('background-color','#FFBA01');
		$('.main-three .tab-hd li.tab-act').css('color','#FFBA01');
		$('.main-three .tab-hd li.tab-act').css('background-color','transparent');
	});
	$('#new-act').click(function(){
		$('.ins01').css('display','block');
		$('.ins02').css('display','none');
		$('.main-three .tab-hd li.tab-zx').css('color','#FFBA01');
		$('.main-three .tab-hd li.tab-zx').css('background-color','transparent');
		$('.main-three .tab-hd li.tab-act').css('color','#fff');
		$('.main-three .tab-hd li.tab-act').css('background-color','#FFBA01');
	});
	//尾部轮播 
	// var li=$('.main-five ul li');
	// var h=0;
	// for (var j=0;j<li.length;j++) {
	// 	$(li[j]).css('left',h+'px');
	// 	h+=300;
	// }

})

