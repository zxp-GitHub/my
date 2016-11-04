/*
 var screenWidth= document.documentElement.clientWidth||document.body.clientWidth;
 var screenHight = document.documentElement.clientHeight||document.body.clientHeight;
 * 
 * */

/*
 targt={
 	width:100,
 	height:90,
 	left:200,
 	top:30
 }
 * */
function getStyle(obj, attr) {//返回值为Xpx
	if (obj.currentStyle) {   //ie
		return obj.currentStyle[attr];
	} else {
		return window.getComputedStyle(obj, false)[attr];  //非ie
	}
}

function startMove(dom,target,fn){
	clearInterval(dom.timer);

	dom.timer=setInterval(function(){
		var count=0;
		var countTotal=0;
		for(var attr in target){
			countTotal++;
			if(attr=="opacity"){
				var iCur =Math.round(parseFloat(getStyle(dom,attr))*100);//因为alpha取值是1-100，所以 *100
				alert(iCur)
			}else{
				var iCur =Math.round(parseFloat(getStyle(dom,attr)));
			}
		
		
		var speed = (target[attr]-iCur)/10;
		speed>0?speed=Math.ceil(speed) : speed=Math.floor(speed);
		
		
		if(iCur == target[attr]){//透明度的话  传进来的是0-1之间的小数  所以说
			count++;
			
		}else{
			if(attr=="opacity"){
				dom.style.filter = 'alpha(opacity:' + parseInt(iCur + speed) + ')';
				dom.style.opacity = (iCur + speed) / 100;
			}else{
				dom.style[attr]=(iCur+speed)+"px";
			}
		}
		}
		if(count == countTotal){
			clearInterval(dom.timer);
			if(fn){
				fn();
			}
		}
	},30);
	
}
