$(function(){
    $("#tabs").tabs();
    $(".circle").click(function(){
        $(".order-text").slideToggle(500);
    })
    var date=new Date();
    var h, min, s, y, m,d;
    var rand=Math.floor(Math.random()*60+1);
    y=date.getFullYear();
    m=date.getMonth()+1;
    d=date.getDate();
    h=date.getHours();
    min=date.getMinutes()+rand;
    s=date.getSeconds();
    h=h<10?"0"+String(h):h;
    if(min>59){
        h=h+1;
        min=min-60;
    }
    else{
        min=min;
    }
    min=min<10?"0"+String(min):min;
    s=s<10?"0"+String(s):s;
    time=y+"年"+m+"月"+d+"日";

    $(".order-a").on("click",function(){
        if(confirm("预约信息填写正确，确定提交")){
            var select1=$('#select-barber option:selected').val();
            var select2=$('#select-hair option:selected').val();
            var select3=$('#select-money option:selected').val();
            $(this).css({
                display:"none"
            })
            $(".result").css({
                display:"block"
            })
            $(".result1").text(select1);
            $(".result2").text(select2);
            $(".result3").text(select3);
            $(".result4").text(h+":"+min+":"+s);
        }

    })
    $(".ping-a").one("click",function(){
        $("#time-mess").css({
            display:"block"
        })
        var ti=$("<span class='time'></span>").text(time);
        var me=$("<span class='mess'></span>").text($("input:radio:checked").val()+"——"+$('#textarea').val());
        $("#time-mess").prepend(me);
        $("#time-mess").prepend(ti);
        $(".ping-a").css({
            background:"#cccccc"
        })
    })

})