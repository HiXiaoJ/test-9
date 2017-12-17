// 模拟点击事件
var itcast = {
	tap:function(dom,callback){
		// 如果是基本类型或者不是对象
		if(!dom||typeof dom!='object'){
			return;
		}
		var x,y,x1,y1,cx,cy;
		dom.addEventListener('touchstart',function(e){
			if(e.targetTouches.length >1){
				console.log('只能单指');
				return;
			}
			starttime = new Date();
			x = e.targetTouches[0].clientX;
			y = e.targetTouches[0].clientY;
		})

		dom.addEventListener('touchend',function(e){
			if(e.changedTouches.length >1){
				console.log('只能单指');
				return;
			}
			if(new Date() - starttime > 150){
				console.log('时间过长，不是轻触');
				return;
			}
			x1 = e.changedTouches[0].clientX;
			y1 = e.changedTouches[0].clientY;
			cx = x1 - x;
			cy = y1 - y;
			if(cx<=6&&cy<=6){
				console.log('单击事件');
				if(callback){
					callback(e);
				}
			}
		})
	},
}