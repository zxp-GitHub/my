/**
 * Created by Administrator on 2016/8/22.
 */
function getCookie(name) {
    var str = document.cookie; //获取到所有的cookie
    var arr = str.split("; "); //["a=5","b=10","user=sdsd"]
    for(var i=0;i<arr.length;i++){
        // arr[i]  //"a=5" "b=10"  "user=sdsd"
        var arr2 = arr[i].split("="); //"a=5" => ["a","5"]
        //"a=5"
        if(arr2[0] == name){ //对比，看看等号前面的值是否等于name
            return arr2[1] ;  ///如果等于name就返回等号后面的值
        }
    }
}

function setCookie(name,value,path,time) {
    var oDate=new Date();
    oDate.setDate(oDate.getDate()-1);
    var str=""+name+"="+value+";path"+";expires="+oDate;
    document.cookie=str;
}

function removeCookie(name) {
    var oDate=new Date();
    oDate.setDate(oDate.getDate()-1);
    document.cookie=name+"123;expires="+oDate;
}