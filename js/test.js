/**
 * Created by Mr.Wang on 2016/12/1.
 */
function save(){
    var data=new Object;
    data.name=document.getElementById("name").value;
    data.tel=document.getElementById("tel").value;
    data.email=document.getElementById("email").value;
    var str=JSON.stringify(data);
    localStorage.setItem(data.name,str);
    alert("数据已经保存");
}

function find(){
    var find=document.getElementById("find").value;
    var str=localStorage.getItem(find);
    var data=JSON.parse(str);
    var result="<br>"+"姓名："+data.name+"<br>";
        result+="电话："+data.tel+"<br>";
        result+="邮件："+data.email+"<br>";
    var target=document.getElementById("show");
    target.innerHTML=result;
}