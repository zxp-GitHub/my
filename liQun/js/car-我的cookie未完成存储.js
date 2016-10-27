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
	
	
	
	$(document).on("click",".intoCar",function () {
//     	this.href = "car.html";
//	     addProduct();
	});
	
	
	
						var total = 0;
							$(".intoCar").each(function(){
								alert(2)
								
								var num = $.cookie("id"+$(this).attr("data-id")+"num")||0;//获得点击当个的数量
//								console.log(this.num)
								$(this).on("click",function(){
									console.log($(this));
									var dateId = $(this).attr("data-id");
								console.log(dateId);
									
									$(this)(function() {
//										console.log(this.num)
										
										addProduct (obj)
									total++;
									if($.cookie("id"+$(this).attr("data-id"))==null){
										$.cookie("id"+$(this).attr("data-id"),$(this).attr("data-id"),{expires:7,path:'/'});
										$.cookie("id"+$(this).attr("data-id")+"num",++num);
									}else{
										$.cookie("id"+$(this).attr("data-id")+"num",++num);
									}
									$.cookie("total",total);
									$(".geshu").text($.cookie("total"));	
								})
								console.log(document.cookie);
							})
							addProduct (obj)
							total = parseInt($.cookie("total"))||total;
							if(total){
								$(".geshu").text($.cookie("total"));	
							}//if
							
							
							});
	
	function addProduct (obj) {
//					 //通过不断地加载，但是点击之后ul又会清空来实现分页的效果
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
						});


