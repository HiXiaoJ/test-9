window.onload = function(){
	var flag = true;
 var music = document.querySelector('.img2_box');
 var img = music.querySelector('.img2');
 var kz = document.querySelector('.zt');
 var time;
 //音乐播放与暂停
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
// tab切换
 var tab = document.querySelector('.banner');
 var reds =tab.querySelectorAll('div');
 var sy = document.querySelector('.sy');
 var uls = sy.querySelectorAll('ul');
 for(var i = 0; i < reds.length;i++){
 	reds[i].index = i;
 	itcast.tap(reds[i],function(e){
 		for(var i = 0; i < reds.length;i++){
 			 reds[i].classList.remove('active');
 		}
 		e.target.parentNode.classList.add('active');
 		for(var i = 0 ; i < uls.length; i++){
 			uls[i].style.display = 'none';
 		}
 		console.log(uls[e.target.parentNode.index].current);
 		uls[e.target.parentNode.index].style.display = 'block';
 		uls[e.target.parentNode.index].style.top = uls[e.target.parentNode.index].current +'px';
 	})
 	
 }
// 给ul注册touch事件实现拖与拽
var syheight = sy.offsetHeight;
var ulheight = uls[0].offsetHeight;
// 静止最大top
var max_jz = 0;
//静止最小高度
var min_jz = syheight - ulheight;

//滑动最大top
var max_top = 60;
//滑动最小top
var min_top = syheight - ulheight - 60;

var y,y1,cy;
for(var i = 0 ; i < uls.length; i++){
	    uls[i].current = 0;
		uls[i].addEventListener('touchstart',function(e){
			y = e.targetTouches[0].clientY;
		})
		uls[i].addEventListener('touchmove',function(e){
			y1 = e.targetTouches[0].clientY;
			cy = y1 - y;
			this.style.transition = null;
			if(this.current+cy > max_top){
				return;
			}else if(this.current+cy < min_top){
				return;
			}else{
				this.style.top = this.current+cy+'px';
			}
		})
		uls[i].addEventListener('touchend',function(e){
			
			if(max_jz < this.current+cy){
				this.style.transition = 'top 500ms linear';	
				this.style.top = max_jz + 'px';
				this.current = max_jz;
			}else if(this.current+cy < min_jz){
				this.style.transition = 'top 500ms linear';
				this.style.top = min_jz + 'px';	
				this.current = min_jz;
			}else{
				this.current +=cy;
			}
		})
	} 

	//跳转
	// var Btn = document.querySelector('#Btn');
	// itcast.tap(Btn,function(e){
	// 	alert('sds')
	// })
}