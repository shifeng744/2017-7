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
//显示隐藏
function show(id){
	$(id).style.display="block";
}
function hide(id){
	$(id).style.display="none";
}
