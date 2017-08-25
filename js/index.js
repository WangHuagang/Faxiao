$(function(){
    $(function(){
        $("#div").accordion();

    })
    $("#box-1").on("mouseover",function(){
        $("#text-1").fadeIn(100);
    })
    $("#box-1").on("mouseout",function(){
        $("#text-1").off("mouseover");
        $("#text-1").fadeOut(50);
    })
    $("#box-2").on("mouseover",function(){
        $("#text-2").fadeIn(100);
    })
    $("#box-2").on("mouseout",function(){
        $("#text-2").off("mouseover");
        $("#text-2").fadeOut(50);
    })

    $("#box-3").on("mouseover",function(){
        $("#text-3").fadeIn(100);
    })
    $("#box-3").on("mouseout",function(){
        $("#text-3").off("mouseover");
        $("#text-3").fadeOut(50);
    })

    $("#box-4").on("mouseover",function(){
        $("#text-4").fadeIn(100);
    })
    $("#box-4").on("mouseout",function(){
        $("#text-4").off("mouseover");
        $("#text-4").fadeOut(50);
    })
})
/*进度条*/
$(function(){
    $("#Progressbar-1").progressbar({
        value:25
    })
})

$(function(){
    $("#Progressbar-2").progressbar({
        value:50
    })
})
$(function(){
    $("#Progressbar-3").progressbar({
        value:75
    })
})
$(function(){
    $("#Progressbar-4").progressbar({
        value:100
    })
})


/*回到顶部*/
window.onload=function(){
    var btn=document.getElementById("btn");
    var timer=null;
    var pageloolheight=document.documentElement.clientHeight;//内容可视高度
    window.onscroll=function(){
        var backtop=document.body.scrollTop;//鼠标滑动的距离
        if(backtop>=pageloolheight/2){
            btn.style.display="block";
        }
        else{
            btn.style.display="none";
        }
    }
    btn.onclick=function(){
        timer=setInterval(function(){
            var backtop=document.body.scrollTop;
            var speedtop=backtop/5;//回到顶部的速度逐渐变慢
            document.body.scrollTop=backtop-speedtop;
            if( backtop == 0){
                clearInterval(timer);
            }
        },50)

    }
}
