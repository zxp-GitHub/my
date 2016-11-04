$(function() {
	$('.btn').val("");
	
	$('.btn1').on('focus blur', function(event) {
		if(event.type == 'focus') {
			$('.item_input1').css( 'box-shadow',' 0 0 0 1px deepskyblue');
			$('.btnImg1').attr("src", "pic/register_03.png");
			$('.mobile').css('display', 'block');
			$('.mobile>p').html("请输入邮箱/手机号");
			//判断有没有写字，没写，就清空默认value，写了就保持字不变
			if($('.btn1').val() == "请输入手机号") {
				$(this).val("");
				//$('.mobile').css('display', 'none');
			} else {
				$(this).val();
			}
			
			

		} else {
			$('.item_input1').css('box-shadow',' 0 0 0 0px deepskyblue');
			var mobileReg = /^[1]{1}[3|5|7|8]{1}\d{9}$/;
			var mobileStr = $('.btn1').val();
			var result = mobileReg.test(mobileStr);
			console.log(result)

			if($('.btn1').val().length < 6) { //html()
				//				console.log($('.btn2').val().length)
				$('.mobile>p').html("长度只能在6-20位字符之间");
			} else {

				if(result == true) {
					$('.btnImg1').attr("src", "pic/register.png");
					$('.mobile').css('display', 'none');
					//				$('.btn').css('border','1px solid red');
				} else {
					$('.mobile>p').html("用户名不能是纯数字，请确认输入的是手机号或者重新输入");
				}

			}

			if($('.btn1').val().length == 0) {
				$('.mobile').css('display', 'none');
				$('.btn1').val("请输入手机号");
			}
			
		}
	});

	$('.btn2').on('focus blur', function(event) {
		if(event.type == 'focus') {
			$('.safe').css('display', 'none');
			$('.btnImg2').attr("src", "pic/register_06.png");
			$('.item_input2').css( 'box-shadow',' 0 0 0 1px deepskyblue');
//			$(this).val("");
			$('.mobile2').css('display', 'block');
			$('.mobile2>p').html("6-20位字符，可使用字母，数字或符号的组合，不建议使用纯数字，纯字母，纯符号");
			if($('.btn2').val().length != 0) {
                $(this).val();
			}
			
		} else {
$('.item_input2').css('box-shadow',' 0 0 0 0px deepskyblue');
			if($('.btn2').val().length >= 6) { //html()
				$('.btnImg2').attr("src", "pic/register.png");
				//				$('.mobile2').css('display','none');
				$('.mobile2>p').html("该密码比较简单，有被盗风险，建议您更改为复杂密码，如字母+数字的组合");
				$('.safe').css('display', 'block');

			} else {
				$('.mobile2>p').html("长度只能在6-20位字符之间");
			}

			if($('.btn2').val().length == 0) {
				$('.mobile2').css('display', 'none');
			}

		}
	});

	$('.btn3').on('focus blur', function(event) {
		if(event.type == 'focus') {
			$('.btnImg3').attr("src", "pic/register_06.png");
			$('.item_input3').css( 'box-shadow',' 0 0 0 1px deepskyblue');
//			$(this).val("");
			$('.mobile3').css('display', 'block');
			$('.mobile3>p').html("请再次输入密码");
             if($('.btn2').val().length != 0) {
                $(this).val();
			}
		} else {
$('.item_input3').css('box-shadow',' 0 0 0 0px deepskyblue');
			if($('.btn3').val().length < 6) { //html()    val() --可能是因为用了$
				//				console.log($('.btn2').val().length)
				$('.mobile3>p').html("长度只能在6-20位字符之间");
			} else {

				if($('.btn3').val() != $('.btn2').val()) {
					//('.btn3').val--可能是因为没用$，事实证明我是对的哟。
					$('.mobile3>p').html("两次输入密码不一致");
				} else {

					$('.btnImg3').attr("src", "pic/register.png");
					$('.mobile3').css('display', 'none');
				}//判断密码值是否相等

			}//判断长度
			if($('.btn3').val().length == 0) {
				$('.mobile3').css('display', 'none');
			}//判断是否写东西了，没写就让红色提示框消失
		}//判断选中focus
	})



//表单中cookie的使用
$('#form1').on('submit',function(){//不一定用form  可以用onclick事件
	if($('.btn1').val()!=""&&$('.btn2').val()!=""){
		var oDate = new Date();//
		var userName = $('.btn1').val();
		var passWord =  $('.btn2').val();
		oDate.setDate(oDate.getDate()+30);//
		document.cookie = 'username='+userName+';path=/;expires='+oDate;//每个用分号分开，最后的分号可以不用引起来
		document.cookie = 'password='+passWord+';path=/;expires='+oDate;
	}else{
		return false;
	}
})
    
    
    
});