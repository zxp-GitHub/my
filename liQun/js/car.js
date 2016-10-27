$(function () {
window.localStorage.getItem("total");
      
    //实现加减功能
    $(document).on("click",".jia",function () {
        var oP =$(this).parents(".priceNum");
        var val = oP.find(".input_price").val();
        var span1 = $(this).parents("li").find(".car_small_span1").html();
        var span2 = $(this).parents("li").find(".car_small_span2").html();
        oP.find(".input_price").val(++val);
        span2 = span1*val;
        $(this).parents("li").find(".car_small_span2").html(span2);
        console.log(span2)
        
    });
    $(document).on("click",".reduce",function () {
        var oP =$(this).parents(".priceNum");
        var val = oP.find(".input_price").val();
        var span1 = $(this).parents("li").find(".car_small_span1").html();
        var span2 = $(this).parents("li").find(".car_small_span2").html();
        if(val>1){
            oP.find(".input_price").val(--val);
             span2 = span1*val;
             $(this).parents("li").find(".car_small_span2").html(span2);
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
   
    
$(document).on("click",".jieSuan",function () {
	  var allPrice = 0;
	  var allnum = 0;
	  $(".car_small_span2").each(function  () {
       	allPrice+=parseFloat($(this).html());
	  })
	  $(".input_price").each(function  () {
       	allnum+=parseInt($(this).val());
	  })
      $(".zongjia").html("￥"+allPrice+".00");
      $(".geshu").html(allnum);
});//jiesuan的click
   

    $(document).on("click",".intoCar",function () {
    var total =  window.localStorage.getItem("total")||"";
        var pro = new Object();
        pro = $(this).attr("data-id");
         total =total+"&"+pro;
         window.localStorage.setItem("total",total);
//      this.href = "car.html";

//      stmp = $(this).attr("data-id");
//      console.log(stmp);
	this.href = "car.html";
    });

    $.ajax({
        type: "get",
        url: "json/product.json",
        async: true,//你的async : false,表示同步,同步会等待执行完
        success: function (data) {
               var aaCar = window.localStorage.getItem("total");
               var bbCar = aaCar.split("&");
//             var ccCar=new Array;
//var ccCar = [];
//			for(var i=0;i<bbCar.length;i++){
//				
//				for(var j=i+1;j<bbCar.length;j++){
//					if(bbCar[j]==bbCar[i]){
//						
//						bbCar.splice(j);
//						ccCar.push([bbCar]);
////						ccCar = bbCar[j];
//						j--;
//						 
//					}
//				}
//			}


					 for(var i=0;i<bbCar.length;i++)
					 for(var j=i+1;j<bbCar.length;j++)
					if(bbCar[i]===bbCar[j]){bbCar.splice(j,1);j--;} 
//					console.log(bbCar); 	
         	 for (var i = 0; i < data.length; i++) {//如果可以找到这个数就添加这个货物
//       	 	 console.log(data[i]);
//                 addProduct(data[i]);
              //console.log(bbCar[i]);
			for (var k = 0; k < bbCar.length; k++) {
    				if (data[i].num == bbCar[k]) {
    				addProduct(data[i]);
         	 		}
         	 	}
         	 }
        }
        });

    function addProduct (obj) {
        //通过不断地加载，但是点击之后ul又会清空来实现分页的效果
        var html = "<li><div class=\"car_small_img left\">";
        html += "<img src=" + obj.img + " Number=" + obj.num + "  class=\"\" /></div>";
        html += "<div class=\"car_small_a left\">";
        html += "<a href=\"###\" class=\"car_small_a\" Number=" + obj.num + ">" + obj.name + "</a>";
        html += "</div>";
        html += "<div class=\"one_price left\">";
        html += "<span class=\"car_small_span1\" Number=" + obj.num + ">" + obj.money + "</span>";
        html += "</div>";
        /*<!--one_price-->*/

        html += "<div class=\"priceNum left\">";
        html += "<a href=\"javascript:;\" class=\"reduce price_a\">-</a>";
        html += "<input type=\"text\" name=\"\" class=\"input_price\" value=\"1\" />";
        html += "<a href=\"javascript:;\" class=\"jia price_a\">+</a>";
        html += "</div>";
        /*<!--priceNum-->*/
        html += "<div class=\"all_price left\">";
        html += "￥<span class=\"car_small_span2 \">" + obj.money + "</span>.00";
        html += "</div>";
        /*<!--all_price-->*/
        html += "<div class=\"jifen left\">";
        html += "<span class=\"car_small_span3 \">718</span>";

        html += "</div>";
        /*<!--jifen-->*/
        html += "<div class=\"car_small_del left\">";
        html += "<a href=\"###\" class=\"car_small_del\">清除</a>";
        html += "</div>";
//                                   /*<!--car_small_del-->*/
        html += "</li> ";
//					 $("#car_box_ul").html(html);
//      $("#car_box_ul").eq(0).append(html);
				$("#car_box_ul").append(html);
			$(document).on("click",".car_small_del",function(){
			 window.localStorage.clear();
//localStorage.removeItem("");
});

    }
});