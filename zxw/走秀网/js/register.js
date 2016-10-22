$(function() { //$ 或者是  zepto  都行
	//	alert(2)
	var name = $("#name");
	var pass = $("#pass");
	var passOK = $("#passOK");
	var val = $("#val");

	$("#name").on("focus blur", function(ev) {
//		if(ev.type == 'focus') {
//			val.val("");
//		} else {
//           
//		}
	})

	$("#pass").on("focus blur", function(ev) {

	})

	$("#passOK").on("focus blur", function(ev) {
		if(ev.type == 'focus') {
			val.val("");
		} else {

		}
	})

	$(".registerOK").tap(function() {
		if(name.val() == '' || pass.val() == '' || passOK.val() == '') {
			val.val("亲，每项都要填的哟~");
//alert(2)
		}
	});

	var Name = "";
	var Pass = "";
	
	$(".registerOK").click(function() {
//		console.log(1);
		// 少了本地验证：.正则验证
		Name = name.val();
		Pass = pass.val();
		var PassOK = passOK.val();
		$.ajax({
			url: "http://datainfo.duapp.com/shopdata/userinfo.php",  //注册地址
				type:"get",
				data:{
					status:"register",
					userID: Name,
					passWord: Pass,
				},    //data 传递的参数以一个对象形式
				// dataType:"jsonp",
				success:function(data){
					//将名字和密码存入localstory
					localStorage.setItem("userID",Name);
					localStorage.setItem("passWord",Pass);
//					localStorage.clear();
//1.如果本地有这个userID了，那么提示已经注册了，然后重新注册姓名
//（判断用户名存在与否一定要在name的blur方法里，否则在写完密码之后再点击确定提交之后再改姓名，用户体验度不好）
//2.如果本地没有这个userID，那么就在本地存储上；

	//（下面的操作在ajax外面操作即可，用blur与focus方法
	//如果没有这个ID，但是，1.密码没写 确定密码没写  2.密码没写  ，确定密码写了  3，密码写了     确定密码没写   4.密码写了  ，确定密码写了） 
				
		//还有一点需要注意：当点击注册时，
		//1.如果没写其中一项，2.或者账户名已经存在3.用户名不存在，也都填了，但是密码与确认码不一样，都不可以向本地存储数据。
				
				
				
				
				//下面的操作是已经注册完了的操作
					if (data==0) {
						console.log("用户已存在")
					}else if(data==1&&Pass!=''&&PassOK==Pass){
						console.log("亲，注册成功了~~")
					}
                       





				}

		})
	})

});
//功能：
/*1.名字的长度
2.不能为空
3.密码的限制
4.重复密码必须一样*/