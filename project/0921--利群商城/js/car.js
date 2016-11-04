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

    var total = 0;
    var stmp;
    $(document).on("click",".intoCar",function () {
        window.localStorage.setItem($(this).attr("data-id"),$(this).attr("data-id"));
        this.href = "car.html";

        stmp = $(this).attr("data-id");
        console.log(stmp);
    });



    $.ajax({
        type: "get",
        url: "json/product.json",
        async: true,//你的async : false,表示同步,同步会等待执行完
        success: function (data) {



            for (i = 0; i < data.length; i++) {
                console.log(window.localStorage.getItem(i));
                // console.log(data[i].num);
                if (data[i].num == window.localStorage.getItem($(".intoCar").attr("data-id"))){
                    addProduct(data[i]);
                }
            }
        }
        });
    //
    //         $.each(data, function (index, obj) {
    //             ;
    //             addProduct (obj);
    //             // var html = "<li><a href='single.html?id=" + obj["id"] + "'><img src='" + obj["imgres"] + "' title='" + obj["title"] + "'></a>";
    //             // html += "<h3><a href='single.html?id=" + obj["id"] + "' class='title'>" + obj["title"] + "</a></h3>";
    //             // html += "<p class='price'>" + obj["price"] + "</p>";
    //             // html += "<input type='button' value='加入购物车' data-id='" + obj["id"] + "' class='btn'></li>"
    //             // $(".product").eq(0).append(html);
    //         });
    //
    //     }
    // });
    //
    //










    function addProduct (obj) {

        //通过不断地加载，但是点击之后ul又会清空来实现分页的效果
//				 var carBoxUl = document.getElementById("car_box_ul");
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
        html += "<span class=\"car_small_span2 \">￥7188.00</span>";
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
        $("#car_box_ul").eq(0).append(html);


//	addProduct();
    }
});