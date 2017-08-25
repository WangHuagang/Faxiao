/**
 * Created by Mr.Wang on 2016/12/8.
 */
function time(){
    var date=new Date();
    var y, m, d, h, min,s;
    y=date.getFullYear();
    m=date.getMonth()+1;
    d=date.getDate();
    h=date.getHours();
    min=date.getMinutes();
    s=date.getSeconds();
    h=h<10?"0"+String(h):h;
    min=min<10?"0"+String(min):min;
    s=s<10?"0"+String(s):s;
    d=d<10?"0"+String(d):d;
    document.getElementById("time").innerHTML=y+"年"+m+"月"+d+"日"+h+":"+min+":"+s;
}
$(function(){
    setInterval(time,1000);
})
$(function(){
    $("#exit").on("click",function(){
        if(confirm("你确定要退出登录吗？")){
            window.open("shop-login.html","_parent");
        }else{
            alert("取消退出登录成功！");
        }

    })
})