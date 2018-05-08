
$(document).ready(function(){
    setPageHeight();
    window.onresize=setPageHeight; //浏览器窗口发生变化时同时变化DIV高度
});

function setPageHeight(){

    //获取浏览器窗口高度
    var winHeight=0;

    if (window.innerHeight){
        winHeight = window.innerHeight;
    }else if ((document.body) && (document.body.clientHeight)){
        winHeight = document.body.clientHeight;
    }

    //通过深入Document内部对body进行检测，获取浏览器窗口高度
    if (document.documentElement && document.documentElement.clientHeight){
        winHeight = document.documentElement.clientHeight;
        $("body").height(winHeight);
        $("body").css("margin", 0);
        var t_height = winHeight-84;
        if($(".set_pub_body_height").length != 0){
            $(".set_pub_body_height").height(t_height);
        }
    }
}



