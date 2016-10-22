$(function () {
	
			var name = $("#name");
			var pass = $("#pass");
			name.val("z");//如果写成name.val(" ");下面会产生问题
			pass.val("");
	
			var Name = "";
			var Pass = "";
		$(".log_log").click(function(){
			Name = name.val();
		 	Pass = pass.val();
			$.ajax({
				url: "http://datainfo.duapp.com/shopdata/userinfo.php",  //注册地址
				type:"get",
				data:{
					status:"login",
					userID: Name,
					passWord: Pass,
				},    
				//data 传递的参数以一个对象形式
				success:function(data){
					var result = JSON.parse(data);
					//1.如果本地存在这个userID，且用户名密码输入正确，那么就登录入home；--OK
					//2.如果存在这个userID，但是  name 或者 pass填写错误，那么就提醒用户重写
					//3.如果不存在这个userID，那么就提醒用户去注册
					
//					如果不存在就提示用户去注册，
//Name==localStorage.getItem("userID")&&Pass==localStorage.getItem("passWord")
//如果写成name.val(" ");会产生问题，Name的最前面会有一个空格，并不只是输入的值，console一下就会看出来。

					if(localStorage.getItem("userID")&&Name==localStorage.getItem("userID")&&Pass==localStorage.getItem("passWord")){
//						localStorage.clear()
//						console.log(Name);
//						console.log(localStorage.getItem("userID"));
//						console.log(Pass);
//						console.log(localStorage.getItem("passWord"));
						console.log("跳转到home~~")
						//存在用户，  1.写错名    写对密码  2.写对名  写错密码   3.写错名，写错密码
					}else if(localStorage.getItem("userID")){
						if(Name!=localStorage.getItem("userID")&&Pass==localStorage.getItem("passWord")){console.log("亲，名字填错喽~~");
						}else if(Name==localStorage.getItem("userID")&&Pass!=localStorage.getItem("passWord")){
							console.log("亲，密码填错喽~~");
						}else if(Name!=localStorage.getItem("userID")&&Pass!=localStorage.getItem("passWord")){
							console.log("亲，名字和密码填错喽~~");
						}
					}else if(!localStorage.getItem("userID")){
						console.log("亲，还没注册哦，去注册吧~~");
					}
					
					
					
					
					
					
					
					
//					console.log(result.userID);
//                  localStorage.setItem("userID",result.userID);
//                  console.log(localStorage.getItem("userID"));
//                  window.location.href = "first.html";
				}

			})
		})
	
	
	
	
	
	
});