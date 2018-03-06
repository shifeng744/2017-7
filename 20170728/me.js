//获取对象
function $(ele){return document.querySelector(ele)}
//获取滚动距离
function scroll(){
    if (document.body.scrollTop || document.body.scrollLeft) //正常浏览器
       {
            return {
                 top:document.body.scrollTop,
                 left:document.body.scrollLeft
            }
}
    else
        {
           return {
                top:document.documentElement.scrollTop,
                 left:document.documentElement.scrollLeft
            }
         }
}
//获取屏幕宽高
function client(){
    if (document.body.clientWidth || document.body.clientHeight){
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
    else{
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
}

//显示隐藏
function show(id){
	$(id).style.display="block";
}
function hide(id){
	$(id).style.display="none";
}
//获取css
function getStyle(obj,attr){
				if(obj.currentStyle){
					//ie
					return obj.currentStyle[attr];
				}
				else{
					return getComputedStyle(obj,null)[attr];
				}
			}
//运动框架(多个属性)：移动距离，宽高，透明度(兼容ie)，z-Index
    function animate(obj,json,fn){
        clearInterval(obj.timer);
        obj.timer=setInterval(function () {
            var off=true;
            var current=0;
            for (var attr in json){
                //var current = parseInt(getStyle(obj,attr));
                if (attr == "opacity"){
                    current=json[attr]
                }
                else{
                    var current = parseInt(getStyle(obj,attr));
                }
                speed = (json[attr] - current) / 10;
                speed= speed >0 ? Math.ceil(speed) : Math.floor(speed);
                if (attr == "opacity"){
                    obj.style.opacity=json[attr] / 100;
                    obj.style.filter= "alpha(opacity="+json[attr]+")";
                }
                else if(attr == "zIndex"){
                    obj.style.zIndex=json[attr]
                }
                else
                {
                    obj.style[attr]=current + speed + "px"
                }


                /*if (!speed){
                    clearInterval(obj.timer);
                    alert("到位置了")
                }*/
                if (current != json[attr]) {
                    off = false;
                }
            }

            if (off){
                clearInterval(obj.timer);
                //alert("到位置了")
                if (fn){
                    fn();
                }
            }

            console.log(1)


        },30)

    }


