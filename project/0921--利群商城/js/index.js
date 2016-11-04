        focusPic({
            btnLi:$("#mian1-banner").find("#flash-cont li"),
            picLi:$("#mian1-banner").find("#mian1-banner-pic li"),
            wrap:$("#mian1-banner"),
            autoPlay:true
        });
     $(".slideBox").each(function () {
        focusPic({
            btnLi:$(this).find(".hd ul li"),
            picLi:$(this).find(".bd ul li"),
            wrap:$(this),
            autoPlay:true
        })
    });
    

$(".main2-banner").each(function () {
        slidePic({
            wrap:$(this),
            list:$(this).find(".main2-banner-ul"),
            btn: $(this).find(".main2-banner-ul li"),
            prev:$(this).find("#main2-left"),
            next: $(this).find("#main2-right"),
            autoPlay:true,
        })
    });

$(".main3-banner").each(function () {

        slidePic2({
            wrap:$(this),
            list:$(this).find(".main3-banner-ul"),
            btn: $(this).find(".main3-banner-ul li"),
            prev:$(this).find("#main3-left"),
            next: $(this).find("#main3-right"),
            autoPlay:true,
        })
    });


$(".foor_ad").each(function () {
        focusPic({
            btnLi:$(this).find(".hd ul li"),
            picLi:$(this).find(".bd ul li"),
            wrap:$(this),
//          autoPlay:true
        })
    });
/*F1*/

$(".floor_center").each(function () {
        focusPic({
            btnLi:$(this).find(".floor_title ul li"),
            picLi:$(this).find(".floor_center_ul li"),
            wrap:$(this),
            autoPlay:false
        })
    });


