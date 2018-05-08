var waterLevelState={
    "1":{name:"超汛限",startPoint:{x:74,y:90},curveStartPoint:{x1:130,y1:75,x2:190,y2:80},curveEndPoint:{x1:220,y1:90,x2:300,y2:95}},
    "2":{name:"超正常",startPoint:{x:65,y:65},curveStartPoint:{x1:130,y1:45,x2:190,y2:65},curveEndPoint:{x1:220,y1:75,x2:300,y2:55}},
    "3":{name:"超设计",startPoint:{x:52,y:30},curveStartPoint:{x1:130,y1:12,x2:190,y2:35},curveEndPoint:{x1:220,y1:45,x2:300,y2:35}},
    "4":{name:"超校核",startPoint:{x:44,y:10},curveStartPoint:{x1:130,y1:0,x2:190,y2:15},curveEndPoint:{x1:220,y1:25,x2:300,y2:15}},
    "0":{name:"正常",startPoint:{x:80,y:105},curveStartPoint:{x1:130,y1:100,x2:190,y2:100},curveEndPoint:{x1:220,y1:95,x2:300,y2:98}},
    "-1":{name:"死水位",startPoint:{x:86,y:120},curveStartPoint:{x1:130,y1:110,x2:190,y2:115},curveEndPoint:{x1:220,y1:125,x2:300,y2:115}},
    "-2":{name:"枯水",startPoint:{x:88,y:125},curveStartPoint:{x1:130,y1:130,x2:190,y2:130},curveEndPoint:{x1:220,y1:130,x2:300,y2:130}}
};

function drawCanvasContent(feature){
    var theCanvas = document.getElementById("sksw_canvas");
    var context = theCanvas.getContext("2d");
    var gr = context.createLinearGradient(135, 80, 135, 140);

    //填充颜色变化0为开始，1为结束
    //在这里开始的时候是红色，中间点为绿色，结束的时候又变回红色。
    /*设置水库水的颜色渐变*/
    gr.addColorStop(0, "#AEEEEE");
    gr.addColorStop(0.5, "#5CACEE");
    gr.addColorStop(1, "#436EEE");

    /*设置水库之外的颜色渐变*/
    context.fillStyle = "#EEE9BF";//用梯度变化值设置fillStyle样式。
    /*设置画布涉及的区域*/
    context.beginPath();    //开始画布中的一条新路径
    context.moveTo(40, 0);  //设置当前位置，并开始一条新的子路径
    context.lineTo(300, 0);
    context.lineTo(300, 130);
    context.lineTo(90, 130);
    context.fill(); //填充颜色
    context.closePath();    //路径关闭

    var data = waterLevelState[feature.data["state"]];
    var limitLevel=0;
    var obj=feature.data["swData"];
    if(obj!=null&&obj.OUTLIMIT!=null){
        limitLevel=(obj.RZ-parseFloat(obj.OUTLIMIT)).toFixed(2);
    }else{
        limitLevel="暂无";
    }

    //绘制水面
    context.beginPath();
    context.moveTo(data.startPoint.x, data.startPoint.y);
    var curveStartPoint = data.curveStartPoint;
    var curveEndPoint = data.curveEndPoint;
    context.quadraticCurveTo(curveStartPoint.x1, curveStartPoint.y1, curveStartPoint.x2, curveStartPoint.y2);
    context.quadraticCurveTo(curveEndPoint.x1, curveEndPoint.y1, curveEndPoint.x2, curveEndPoint.y2);
    context.lineTo(300, 130);
    context.lineTo(90, 130);
    context.strokeStyle = '#87CEFA';
    context.stroke();
    context.fillStyle = gr;
    context.fill();
    //显示水位刻度线
    var bark = new Image();
    bark.src = "images/sk-level1.png";
    // 图片加载完成后，将其显示在canvas上
    bark.onload = function() {
        //context.drawImage(bark,40,130,70,431,130,50,40,120);
        context.fillStyle = context.createPattern(bark, 'repeat');
        context.fillRect(175, 5, 20, 125);
        context.closePath();
    };
    //绘制文字背景框
    context.beginPath();
    context.fillStyle = "#8B4513";
    context.fillRect(195, 108, 95, 22);//死水位

    context.fillStyle = "#00CD00";
    context.fillRect(90, 78, 85, 22);//讯限

    context.fillStyle = "#0000CD";
    context.fillRect(215, 48, 83, 22);//正常

    context.fillStyle = "#EE4000";
    context.fillRect(195, 5, 85, 22);//校核

    context.fillStyle = "#9400D3";
    context.fillRect(72, 25, 83, 22);//洪高

    //水位名称
    context.font = "12px 微软雅黑";
    context.fillStyle = '#ffffff';
    context.fillText("死水位("+feature.data["ssw"]+")", 200, 124);
    context.fillText("汛限("+limitLevel+")", 97, 94);
    context.fillText("正常("+feature.data["zc"]+")", 220, 64);
    context.fillText("校核("+feature.data["jh"]+")", 200, 21);
    context.fillText("设计("+feature.data["sj"]+")", 77, 40);

    //箭头
    context.strokeStyle = "#EE0000";
    context.beginPath();
    context.moveTo(155, 36);
    context.lineTo(175, 36);
    context.stroke();
    context.beginPath();
    context.moveTo(195, 59);
    context.lineTo(215, 59);
    context.stroke();

    //文本
    context.font = "16px 微软雅黑";
    context.fillStyle = '#CD2626';
    context.fillText("总库容：", 128, 150);
    context.font = "12px 微软雅黑";
    context.fillText("主坝高", 10, 82);
    context.fillStyle = '#00008B';
    context.font = "bold 12px 微软雅黑";
    context.fillText(feature.data["bg"]+"m", 10, 97);
    context.font = "bold 16px 微软雅黑";
    context.fillText(feature.data["kr"]+"万m³", 190, 150);

    //箭头
    context.strokeStyle = "#FF3030";
    context.beginPath();
    context.moveTo(24, 0);
    context.lineTo(30, 0);
    context.lineTo(27, 0);
    context.lineTo(27, 66);
    context.lineTo(24, 63);
    context.lineTo(27, 66);
    context.lineTo(30, 63);
    context.stroke();
    context.moveTo(24, 160);
    context.lineTo(30, 160);
    context.lineTo(27, 160);
    context.lineTo(27, 104);
    context.lineTo(24, 107);
    context.lineTo(27, 104);
    context.lineTo(30, 107);
    context.stroke();
}