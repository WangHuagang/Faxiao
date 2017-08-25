
$(function(){
    $("#sub-a").on("mouseover",function(){
        if($("#name").val()==""||$("#user").val()==""||$("#pwd").val()==""||$("#linkname").val()==""||
            $("#tel").val()==""||$("#email").val()==""||$("#select1 option:selected").val()==""||
            $("#select2 option:selected").val()==""||$("#select3 option:selected").val()==""||$("#address").val()==""
        ){
            $("#sub-a").css({
                background:"#cccccc"
            })
            alert("请把注册信息填写完整");
        }else{
            $("#sub-a").css({
                background:"#007fff"
            })
        }
    })
        $("#sub-a").on("click",function(){
            var name=$("#name").val();
            var user=$("#user").val();
            var pwd=$("#pwd").val();
            var linkname=$("#linkname").val();
            var tel=$("#tel").val();
            var email=$("#email").val();
            var select1=$('#select1 option:selected').val();
            var select2=$('#select2 option:selected').val();
            var select3=$('#select3 option:selected').val();
            var address=$("#address").val();
            $(".result1").text(name);
            $(".result2").text(user);
            $(".result3").text(pwd);
            $(".result4").text(linkname);
            $(".result5").text(tel);
            $(".result6").text(email);
            $(".result7").text(select1);
            $(".result8").text(select2);
            $(".result9").text(select3);
            $(".result10").text(address);

            $(".check").css({
                display:"block"
            })
            $(".close").on("click",function(){
                $(".check").css({
                    display:"none"
                })
            })

        })
    /*判断店铺名称*/
    $("#name").on("blur",function(){
        if($("#name").val().length<2 && $("#name").val().length>0){
          $(".test1").text("店铺名称长度不足2位！");
            $(this).css({border:"1px solid red"})
            $(".gou1").css({
                display:"none"
            })
        }
        else if($("#name").val().length>12){
            $(".test1").text("店铺名称长度超过12位！");
            $(this).css({border:"1px solid red"})
            $(".gou1").css({
                display:"none"
            })
        }else if($("#name").val().length==""){
            $(".test1").text("请输入店铺名称");
            $(this).css({border:"1px solid red"})
            $(".gou1").css({
                display:"none"
            })
        }else{
            $(this).css({border:"1px solid #ccc"})
            $(".gou1").css({
                display:"block"
            })
        }
    })
    $("#name").on("focus",function(){
        $(".test1").text("");
    })

    /*判断登录账号*/
    $("#user").on("blur",function(){
        if($("#user").val().length<3 && $("#user").val().length>0){
            $(".test2").text("账号长度不足3位！");
            $(this).css({border:"1px solid red"})
            $(".gou2").css({
                display:"none"
            })
        }
        else if($("#user").val().length==""){
            $(".test2").text("请输入账号");
            $(this).css({border:"1px solid red"})
            $(".gou2").css({
                display:"none"
            })
        }else{
            $(this).css({border:"1px solid #ccc"})
            $(".gou2").css({
                display:"block"
            })
        }
    })
    $("#user").on("focus",function(){
        $(".test2").text("");
    })

    /*判断密码*/
    $("#pwd").on("blur",function(){
        if($("#pwd").val().length<6 && $("#pwd").val().length>0){
            $(".test3").text("密码长度不足6位！");
            $(this).css({border:"1px solid red"})
            $(".gou3").css({
                display:"none"
            })
        }
        else if($("#pwd").val().length>16){
            $(".test3").text("密码长度超过16位！");
            $(this).css({border:"1px solid red"})
            $(".gou3").css({
                display:"none"
            })
        }else if($("#pwd").val().length==""){
            $(".test3").text("请输入密码");
            $(this).css({border:"1px solid red"})
            $(".gou3").css({
                display:"none"
            })
        }else{
            $(this).css({border:"1px solid #ccc"})
            $(".gou3").css({
                display:"block"
            })
        }
    })
    $("#pwd").on("focus",function(){
        $(".test3").text("");
    })

    /*确认密码*/
    $("#repwd").on("blur",function(){
        if($("#repwd").val()==$("#pwd").val()){
            $(".test4").text("");
            $(this).css({border:"1px solid #ccc"})
            $(".gou4").css({
                display:"block"
            })
        }else if($("#repwd").val().length==0){
            $(this).css({border:"1px solid #ccc"})
            $(".gou4").css({
                display:"none"
            })
        }else{
            $(".test4").text("两次密码不一致");
            $("#repwd").css({border:"1px solid red"})
            $(".gou4").css({
                display:"none"
            })
        }
    })
    $("#repwd").on("blur",function(){
        $(".test4").text("");
    })

    /*判断联系人*/
    $("#linkname").on("blur",function(){
        if($(this).val()!==""){
            $(".test5").text("");
            $(this).css({border:"1px solid #ccc"})
            $(".gou5").css({
                display:"block"
            })
        }else{
            $(".test5").text("请输入联系人姓名！");
            $(this).css({border:"1px solid red"})
            $(".gou5").css({
                display:"none"
            })
        }
    })

    /*判断电话*/
    $("#tel").on("blur",function(){
        if($(this).val().length!==11){
            $(".test6").text("手机号码输入错误！");
            $(this).css({border:"1px solid red"})
            $(".gou6").css({
                display:"none"
            })
        }else{
            $(".test6").text("");
            $(this).css({border:"1px solid #ccc"})
            $(".gou6").css({
                display:"block"
            })
        }
    })

    /*判断邮箱*/
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    $("#email").on("blur",function(){
        if(!reg.test($("#email").val()))
        {
            $(".test7").text("邮箱格式输入错误！");
            $(this).css({border:"1px solid red"})
            $(".gou7").css({
                display:"none"
            })
        }else{
            $(".test7").text("");
            $(this).css({border:"1px solid #ccc"})
            $(".gou7").css({
                display:"block"
            })
        }
    })
    /*判断地址*/
    $("#address").on("blur",function(){
        if( $("#address").val().length==""){
            $(".test8").text("请输入店铺详细地址");
            $(this).css({border:"1px solid red"})
            $(".gou8").css({
                display:"none"
            })
        }else{
            $(".test8").text("");
            $(this).css({border:"1px solid #ccc"})
            $(".gou8").css({
                display:"block"
            })
        }
    })
    $("#address").on("focus",function(){
        $(".test8").text("");
    })
})



