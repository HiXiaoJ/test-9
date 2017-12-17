window.onload = function(){
	var tab = document.querySelector('.banner');
	var reds =tab.querySelectorAll('div');
	var sys = document.querySelectorAll('.sy');
	var flag2 = true;
	var flag = true;
	var music = document.querySelector('.img2_box');
 var img = music.querySelector('.img2');
 var kz = document.querySelector('.zt');
 var time;
 // 音乐播放与暂停
 var current = 0;
 	itcast.tap(music,function(e){
 		if(flag){
 			clearInterval(time);
 			kz.classList.add('yc');
 			flag = false;
 			var speed = 5;
 			time = setInterval(function(){
 				current+=speed;
 				img.style.transform = 'rotateZ('+(0+current)+'deg)';
 			},50);
 		}else{
 			clearInterval(time);
 			kz.classList.remove('yc');
 			flag = true;
 		}
 	})
	for(var i = 0; i < reds.length;i++){
		reds[i].index = i;
		itcast.tap(reds[i],function(e){
			for(var i = 0; i < reds.length;i++){
				reds[i].classList.remove('active');
			}
			e.target.parentNode.classList.add('active');
			for(var i = 0 ; i < sys.length; i++){
				sys[i].style.display = 'none';
			}
			sys[e.target.parentNode.index].style.display = 'block';
			if(e.target.parentNode.index == 1){
				if(flag2){
					var myScroll = new IScroll('#wrapper2', {
						mouseWheel: true,
						scrollbars: true
					});
					flag2 =false;
				}


			}
 		// uls[e.target.parentNode.index].style.top = uls[e.target.parentNode.index].current +'px';
 	})

	}
	// var a1 = document.querySelector('#wrapper1');
	// var a2 = document.querySelector('#wrapper2');
	// function fn(dom){
	// 		var myScroll = new IScroll(dom, {
	// 		mouseWheel: true,
	// 		scrollbars: true
	// 	});
	// }

 // fn(a1);
 // a1.addEventListener('touchstart',function(){
 // 	console.log('1')
 // })
 // a2.addEventListener('touchstart',function(){
 // 	console.log('2')
 // })
 // function fn2(dom){
	// 		var myScroll = new IScroll(dom, {
	// 		mouseWheel: true,
	// 		scrollbars: true
	// 	});
	// }
	// fn2(a2);



	var myScroll = new IScroll('#wrapper1', {
		mouseWheel: true,
		scrollbars: true
	});
	

}