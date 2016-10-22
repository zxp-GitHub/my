$(function(){
	var main = $(".DetailLists");
		var src = sessionStorage.getItem("aImg");
		console.log(src);
		$(".aaa").attr("src",src)
	main.html()
});
