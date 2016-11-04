/*
 targt={
 	width:100,
 	height:90,
 	left:200,
 	top:30
 }
 * */
function changeColor(){
	var color='';
	for(var i=0;i<6;i++){
		color+=(Math.floor(Math.random()*16)).toString(16);
	}
		var str="#"+color;
		return str;
}
function getStyle(obj, attr) {
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
				var iCur =Math.round(parseFloat(getStyle(dom,attr))*100);
			}else{
				var iCur =Math.round(parseFloat(getStyle(dom,attr)));
			}
		
		
		var speed = (target[attr]-iCur)/10;
		speed>0?speed=Math.ceil(speed) : speed=Math.floor(speed);
		
		
		if(iCur == target[attr]){
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
	},200);
	
}












/*document.documentElement.clientWidth (2010-12-01 17:27:38)转载▼
标签： document clientwidth 杂谈	分类： js/jquery
关于获取各种浏览器可见窗口大小的一点点研究
<script>
function getInfo()
{
var s = "";
s = " 网页可见区域宽：" document.body.clientWidth;
s = " 网页可见区域高：" document.body.clientHeight;
s = " 网页可见区域宽：" document.body.offsetWidth " (包括边线和滚动条的宽)";
s = " 网页可见区域高：" document.body.offsetHeight " (包括边线的宽)";
s = " 网页正文全文宽：" document.body.scrollWidth;
s = " 网页正文全文高：" document.body.scrollHeight;
s = " 网页被卷去的高(ff)：" document.body.scrollTop;
s = " 网页被卷去的高(ie)：" document.documentElement.scrollTop;
s = " 网页被卷去的左：" document.body.scrollLeft;
s = " 网页正文部分上：" window.screenTop;
s = " 网页正文部分左：" window.screenLeft;
s = " 屏幕分辨率的高：" window.screen.height;
s = " 屏幕分辨率的宽：" window.screen.width;
s = " 屏幕可用工作区高度：" window.screen.availHeight;
s = " 屏幕可用工作区宽度：" window.screen.availWidth;

s = " 你的屏幕设置是 " window.screen.colorDepth " 位彩色";
s = " 你的屏幕设置 " window.screen.deviceXDPI " 像素/英寸";
//alert (s);
}
getInfo();
</script>
在我本地测试当中：
在IE、FireFox、Opera下都可以使用
document.body.clientWidth
document.body.clientHeight
即可获得，很简单，很方便。
而在公司项目当中：
Opera仍然使用
document.body.clientWidth
document.body.clientHeight
可是IE和FireFox则使用
document.documentElement.clientWidth
document.documentElement.clientHeight
原来是W3C的标准在作怪啊
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
如果在页面中添加这行标记的话 在IE中：
document.body.clientWidth ==> BODY对象宽度
document.body.clientHeight ==> BODY对象高度
document.documentElement.clientWidth ==> 可见区域宽度
document.documentElement.clientHeight ==> 可见区域高度
在FireFox中：
document.body.clientWidth ==> BODY对象宽度
document.body.clientHeight ==> BODY对象高度
document.documentElement.clientWidth ==> 可见区域宽度
document.documentElement.clientHeight ==> 可见区域高度
?
在Opera中：
document.body.clientWidth ==> 可见区域宽度
document.body.clientHeight ==> 可见区域高度
document.documentElement.clientWidth ==> 页面对象宽度（即BODY对象宽度加上Margin宽）
document.documentElement.clientHeight ==> 页面对象高度（即BODY对象高度加上Margin高）
而如果没有定义W3C的标准，则
IE为：
document.documentElement.clientWidth ==> 0
document.documentElement.clientHeight ==> 0
FireFox为：
document.documentElement.clientWidth ==> 页面对象宽度（即BODY对象宽度加上Margin宽）document.documentElement.clientHeight ==> 页面对象高度（即BODY对象高度加上Margin高）
Opera为：
document.documentElement.clientWidth ==> 页面对象宽度（即BODY对象宽度加上Margin宽）document.documentElement.clientHeight ==> 页面对象高度（即BODY对象高度加上Margin高）*/










/*浏览器默认的样式就是这样的，默认情况下<body>的宽度就比<html>小的，原因是<body>和<html>的内外边框所导致。因此我们在与CSS样式表的时候都要进行“reset”：
* {
  outline: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
消除了默认的内外边框之后，<body>的宽度就与<html>相同了。*/