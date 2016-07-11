$(function(){
	// 按钮部分
	$('#zx-zx').click(function(){
		$('.thr_1').css('display','block');
		$('.thr_2').css('display','none');
		$('.thr_3').css('display','none');
		$('.cur a').css('color','#fff');
		$('.cur a').css('background-color','#ffba01');
		$('.cur a').css('border-color','#ffba01');
		$('.aur a').css('color','#555');
		$('.aur a').css('background-color','transparent');
		$('.aur a').css('border-color','#d6d6d6');
		$('.bur a').css('color','#555');
		$('.bur a').css('background-color','transparent');
		$('.bur a').css('border-color','#d6d6d6');
	});
	$('#xy-zx').click(function(){
		$('.thr_1').css('display','none');
		$('.thr_2').css('display','block');
		$('.thr_3').css('display','none');
		$('.cur a').css('color','#555');
		$('.cur a').css('background-color','transparent');
		$('.cur a').css('border-color','#d6d6d6');
		$('.aur a').css('color','#fff');
		$('.aur a').css('background-color','#ffba01');
		$('.aur a').css('border-color','#ffba01');
		$('.bur a').css('color','#555');
		$('.bur a').css('background-color','transparent');
		$('.bur a').css('border-color','#d6d6d6');
	});
	$('#gs-tp').click(function(){
		$('.thr_1').css('display','none');
		$('.thr_2').css('display','none');
		$('.thr_3').css('display','block');
		$('.cur a').css('color','#555');
		$('.cur a').css('background-color','transparent');
		$('.cur a').css('border-color','#d6d6d6');
		$('.aur a').css('color','#555');
		$('.aur a').css('background-color','transparent');
		$('.aur a').css('border-color','#d6d6d6');
		$('.bur a').css('color','#fff');
		$('.bur a').css('background-color','#ffba01');
		$('.bur a').css('border-color','#ffba01');
	});
})