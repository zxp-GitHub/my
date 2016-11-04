$(function() {
	$('.log_name').val("");
	$('.log_pass').val("");
	$('.log_name').on('focus blur', function(event) {
		if(event.type == 'focus') {
			$('.log_false').css('display', 'none');
			$('.log_name').css('box-shadow', ' 0 0 0 1px deepskyblue');
		} else {
			$('.log_name').css('box-shadow', ' 0 0 0 0px deepskyblue');
			var mobileReg = /^[1]{1}[3|5|7|8]{1}\d{9}$/;
			var mobileStr = $('.log_name').val();
			var result = mobileReg.test(mobileStr);
			//			console.log(result)
			if(result == false) {
				$('.log_false').css('display', 'block');
			}
		}
	});

	$('#form2').on('submit', function() { //不一定用form  可以用onclick事件
		if($('.log_name').val() != "" && $('.log_pass').val() != "") {
			var oDate = new Date(); //
			var userName = $('.log_name').val();
			var passWord = $('.log_pass').val();
			oDate.setDate(oDate.getDate() + 30); //
			document.cookie = 'username=' + userName + ';path=/;expires=' + oDate; //每个用分号分开，最后的分号可以不用引起来
			document.cookie = 'password=' + passWord + ';path=/;expires=' + oDate;
		} else {
			return false;
		}
	});
});