Zepto(function () {
	//首页的列表icon图标
//	var  num  =0;
//	$(".iconfont").eq(0).siblings("div").css("display","block");
    $(".iconfont").eq(0).css("color","#FFFFFF");
	$(".jiantou").eq(0).css("display","block");
	var icon = $(".iconfont");
//	var num =0;
			 icon.tap(function(){
				$(".iconfont").css("color","#000");
				$(".jiantou").css("display","none");
				$(this).css("color","#FFFFFF");
				$(this).siblings("div").css("display","block");
				num = $(this).parents("li").index();
//				console.log(num)
				$(".main_ul").html("");
				ajaxNum(num);
			});/*tap*/
//ajax是不可以放入tap事件中的，因为刚刚加载页面时，必须要点击一次才可以调用数据加载图片，不点击图片不显示	
			ajaxNum(0);
			function ajaxNum(Num) {
			$.ajax({
			url: "http://datainfo.duapp.com/shopdata/getGoods.php",
			type:"get",
			data:{classID:Num}, //参数
			dataType:"jsonp",
			success:function(data){
				for (var i = 0; i < data.length; i++) {
				$li = $("<li class=\"yiLi\"><a href='###' class='img_a'><img src='"+data[i].goodsListImg+"'/></a><div class=\"price\"><h3>"+data[i].goodsName+"</h3><p><span>￥"+data[i].price+"</span> <span>￥"+ parseInt(data[i].price-data[i].discount)+"</span></p></div></li>");
				$(".main_ul").append($li);
				}
				
				var aImg= $(".img_a");
			    aImg.tap(function () {
				var img = $(this).find("img").attr("src");
                sessionStorage.setItem("aImg",img);
				window.location.href = "detail.html"
//			alert(2)
			})
				
				
				
				
				
				
				
				
			}
		});//ajax
			}//function
//	首页的图片加载	
			$(".footer-li").eq(0).css("border-top","4px solid red");
			$(".footer-li").tap(function () {
				$(".footer-li").css("border-top","4px solid #484850");
				$(this).css("border-top","4px solid red");
			});
			
			
			
			

			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		});//end