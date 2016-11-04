$(function () {


    //实现加减功能
    $(document).on("click",".jia",function () {
        var oP =$(this).parents(".priceNum");
        var val = oP.find(".input_price").val();
        oP.find(".input_price").val(++val)
    });
    $(document).on("click",".reduce",function () {
        var oP =$(this).parents(".priceNum");
        var val = oP.find(".input_price").val();

        if(val>1){
            oP.find(".input_price").val(--val)
        }else{
            return
        }

    });
    $(document).on("click",".car_small_del",function () {
        var oP =$(this).parents("li");
        var val = oP.find(".input_price");
        console.log(val)
        oP.remove()
    });



//	$(document).on("click",".intoCar",function () {
//
////     	this.href = "car.html";
////	     addProduct();
////alert(2)
//	});
    $(document).on("click",".intoCar",function () {
        alert(2)
//       var intoCar = $(".intoCar");
//	     for(i=0;i<intoCar.length;i++){
//		  var intoCarIndex[] = intoCar.index[i];
//		   console.log(intoCar.index[i]);
//	var userName = $(this).parent("dd").siblings().html;
//			console.log(userName)

//		}
    });
    function addProduct (obj) {


        //通过不断地加载，但是点击之后ul又会清空来实现分页的效果
//				 var carBoxUl = document.getElementById("car_box_ul");
        var html ="<li><div class=\"car_small_img left\">";
        html+=	"<img src="+obj.img+" Number="+obj.num+"  class=\"\" /></div>";
        html+=	"<div class=\"car_small_a left\">";
        html+= "<a href=\"###\" class=\"car_small_a\" Number="+obj.num+">"+obj.name+"</a>";
        html+=	"</div>";
        html+=	"<div class=\"one_price left\">";
        html+=	"<span class=\"car_small_span1\" Number="+obj.num+">"+obj.money+"</span>";
        html+=	"</div>";
        /*<!--one_price-->*/

        html+=	"<div class=\"priceNum left\">";
        html+=	"<a href=\"javascript:;\" class=\"reduce price_a\">-</a>";
        html+=	"<input type=\"text\" name=\"\" class=\"input_price\" value=\"1\" />";
        html+=	"<a href=\"javascript:;\" class=\"jia price_a\">+</a>";
        html+=	"</div>";
        /*<!--priceNum-->*/
        html+=	"<div class=\"all_price left\">";
        html+=	"<span class=\"car_small_span2 \">￥7188.00</span>";
        html+=	"</div>";
        /*<!--all_price-->*/
        html+=	"<div class=\"jifen left\">";
        html+=	"<span class=\"car_small_span3 \">718</span>";

        html+=	"</div>";
        /*<!--jifen-->*/
        html+=	"<div class=\"car_small_del left\">";
        html+=	"<a href=\"###\" class=\"car_small_del\">清除</a>";
        html+=  "</div>";
//                                   /*<!--car_small_del-->*/
        html+="</li> ";
//					 $("#car_box_ul").html(html);
        $("#car_box_ul").eq(0).append(html);

    }

//	addProduct();
});



//
//
//	}



//	$(".intoCar").click(function(){
//		alert(2)

//			var tel = $("#tel").val();
//			var qq = $("#qq").val();
//			if(userName == "" || tel == "" || qq == ""){
//				alert("信息填写不完整");
//			}else{
//				//对象 Object
//				//创建一个对象
//				var user = new Object();
//				//添加属性
//				user.userName = userName;
//				user.tel = tel;
//				user.qq = qq;
//
//				console.log(user)//这是一个对象，但是localStorage存的是字符串
//				//对象转换为字符串
//				var userInfo = JSON.stringify(user);
//				console.log(userInfo)//字符串
//				//将名字作为key，上面字符串作为value存储
//				localStorage.setItem(userName,userInfo);
//			}
//		});
//		//sqlite actionscript
//
//		$("#searchBtn").click(function(){
//			var searchName = $("#searchName").val();
//			if(searchName == ""){
//				alert("我们没有无名人士");
//			}else{
//
//				/*alert("ok")*/
//				//localStorage.getItem(searchName)这个可以判断当前的key值是否存在并且有值
//				if(localStorage.getItem(searchName)){
////					alert("ok");
//					var data = localStorage.getItem(searchName);
////					alert(data)
//					//字符串转换对象
//					var userData = JSON.parse(data);
//					console.log(userData)
//
//					$("#result").html('姓名：'+userData.userName+'<br>'+
//				'手机：'+userData.tel+'<br>'+
//				'Q  Q:'+userData.qq)
//
//				}else{
//					alert("查无此人");
//				}
//			}
//		})












