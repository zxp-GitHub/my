     $(function(){   var timer=setInterval(function(){    if($(".banner li:last").is(":hidden")){     $(".banner li:visible").addClass("on"); 
    $(".banner li[class=on]").next().fadeIn("slow");     $(".banner li[class=on]").hide().removeClass("on");    }else{ 
    $(".banner li:last").hide(); 
    $(".banner li:first").fadeIn("slow"); 
   
} 
  
},2000) 
   $(".banner li").hover(function(){    clearInterval(timer); 
  },function(){    timer=setInterval(function(){ 
   if($(".banner li:last").is(":hidden")){     $(".banner li:visible").addClass("on"); 
    $(".banner li[class=on]").next().fadeIn("slow");     $(".banner li[class=on]").hide().removeClass("on");    }else{ 
    $(".banner li:last").hide(); 
    $(".banner li:first").fadeIn("slow"); 
 
 
 
}

