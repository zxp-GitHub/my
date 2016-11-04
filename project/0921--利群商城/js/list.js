/**
 * Created by hasee on 2016/9/12.
 */
$(function () {
	/*-----开始-------------*/
	var proUl = document.getElementById("right_sc_mainPic_ul");//最好写在外面，使其成为全局变量，这样任何时候都可以获取到它
	$("#pages").on("click","a",function(){//on事件，三个参数
		proUl.innerHTML = '';//每次点击时让proUl.innerHTML为空
		var pageIndex =$(this).text();//获取按钮的数字
		 ajaxProducts(pageIndex)
	})
	
	function ajaxProducts(pageIndex){
		$.ajax({//获取json数据必写哦！！！
			type:"get",
			url:"json/product.json",
			dataType:"json",
			success:function(data){//consol一下是很重要的！！！！！！
				//假如一页获取m条
				
				for(var i=(pageIndex-1)*20;i<pageIndex*20;i++){//加载json里面的图片，json里面数是从零开始的
					 var html= "<li><a href=\"###\"><img src=\""+data[i].img+"\"/></a>";//当遇到引号时记得要转义
					 html+="<dl><dd><a href=\"###\" class=\"dl_a color\">"+data[i].name+"</a></dd>";
					 html+="<dd class=\"right_sc_mainPic_dd2\"> 商城价：<span class=\"money\">￥"+data[i].money+"</span>";
					 html+="<a href=\"###\" class=\"intoCar  color3\">加入购物车</a></dd></dl></li>";
					 proUl.innerHTML+= html;//通过不断地加载，但是点击之后ul又会清空来实现分页的效果
				}
			}
			
		});
	}
	
	/*还有就是一开始图片没有时，按钮会上去，所以要先把图片写死，至于第一页，*/
	/*------结束--------------*/














   /* var pageRows = 40;
    var productData = [];
    var $proList = $(".sct-list");



    $.get("json/product.json",function (data) {
        console.log(data);
        productData = data;
        var pageCount =data.length/pageRows;//总共有多少页

        addData(1);

        $("#page-rows").createPage({
            pageCount:pageCount, //总共有多少页
            current:1,//当前第几页
            backFn:function (page) {
                //alert(page)当前跳转到的页码
                addData(page)
            }
        });

    });
    
    function addData(page) {
       // productData = 有45条数据的数组
        //page是页码
        //pageRows是每页显示多少条
        console.log("需要添加第"+page+"页的数据")

        //page =2
        //10
        var disNum = (page-1)*40;
        //需要给$proList里面添加数据
        var str = "";
        for(var i=0;i<pageRows;i++){
            if(!productData[disNum+i]){
                break
            }
                str+=' <li>'+'<a href="###"><img src="'+productData[i+disNum].img+'"/></a>'+
							'<dl>'+
							'<dd><a href="###" class="dl_a color">'+productData[i+disNum].name+'</a></dd>'+
							'<dd class="right_sc_mainPic_dd2"> 商城价：<span class="money">￥'+productData[i+disNum].money+'</span>'+
							'<a href="###" class="intoCar  color3">加入购物车</a></dd>'	+
							'</dl>'+
						'</li>'
        }

        $proList.html(str)

    }*/




   /* $("#page-rows").createPage({
        pageCount: proData.length/10,
        current: 1,
        backFn: function (page) {
            addData(page)
        }
    })*/





    /*var $list= $(".sct-list");
    var proData = [];
    $.get("json/product.json",function (data) {
        proData = data; //所有的商品
        addData(1)


        $("#page-rows").createPage({
            pageCount: proData.length/10,
            current: 1,
            backFn: function (page) {
                addData(page)
            }
        })

    })
    
    
    function addData(page) {
        page--;
        var str = "";
        for(var i=0;i<10;i++){

            str+='<li>' +
                '<a href="###"><img src="'+proData[page*10+i].img+'" alt=""></a>' +
                '<div class="pad5">' +
                '<p><a  href="###">'+proData[page*10+i].name+'</a></p>' +
                '<p class="ovfl">' +
                '<em class="fl font-b font14 price-color">'+proData[page*10+i].price+'</em>' +
                '<span class="fr color99">销量:'+proData[page*10+i].sellerNum+'</span>' +
                '</p>' +
                '</div>' +
                '</li>'
        }
        $list.html(str);
    }
*/

});