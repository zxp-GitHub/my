$(function () {//$ 或者是  zepto  都行
//	alert(2)
$.ajax({
			url: "http://datainfo.duapp.com/lottery/getsuerfr.php",
			type:"get",
			// data:
			dataType:"jsonp",
			success:function(data){
//				console.log(typeof JSON.parse(data[0].code));

				var result = JSON.parse(data[0].code);
		      	$(".present").click(function () {
		       	$(".second_footer_ul").html('');
		       	
		var date = new Date();
       var year = date.getFullYear();
       var year1=year.toString();
       var year2 = year1.slice(2);
	   var month = date.getMonth();
	   var day = date.getDate(); 
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var sec = date.getSeconds();
      var millisec = date.getMilliseconds();
		       	
       	for (var i = 0; i < 3; i++) {
			var s = ['一','二','三'];
            var ss = Math.floor(Math.random()*3);//必须Math.floor；；math.random不可以；
//          var m = s[ss];
			var a = Math.round(Math.random()*1130);
//			$li = $("<li><span>"+data[a].timer+"</span><p>"+s[ss]+"等奖 "+data[a].userID+"</p></li>");
			$li = $("<li><span>"+year2+"-"+month+"-"+day+"&nbsp;&nbsp;"+hours+":"+minutes+":"+sec+"</span><p>"+s[ss]+"等奖 "+data[a].userID+"</p></li>");
			$(".second_footer_ul").append($li);
				}
                });//present
			    }//success
		        });//ajax
       });//end

/*
 $li = $("<li><img src='"+result[0]+"' /><h3>"+data[0].goodsName+"</h3><div><span>$"+data[0][0]+"</span><span>$"+data[0][1]+"</span></div></li>");
                    
//                   for (var i = 0; i < 3; i++) {
//                   	
//                    var a = Math.round(Math.random()*1130);
//                   	console.log(a);
//                   	
////                   }
//for (var i = 0; i < data.length; i++) {
//	var sum = 0;
//	sum +=i;
//	console.log(sum)
//}
//var s = ['一','二','三'];
//var ss = Math.round(Math.random()*3);
//var m = s[ss];
//console.log(m);
// console.log(a);










//     var date = new Date();
//     var year = date.getFullYear();
//     var year1=year.toString();
//     var year2 = year1.slice(2)
//	   var month = date.getMonth();
//	   var day = date.getDate(); 
//    var hours = date.getHours();
//    var minutes = date.getMinutes();
//    var sec = date.getSeconds();
//    var millisec = date.getMilliseconds();
//		       	console.log(""+year2+"-"+month+"-"+day+"  "+hours+"："+minutes+":"+sec+":"+millisec+"");
 */