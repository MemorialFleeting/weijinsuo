function id(sId){
		return document.getElementById(sId);
	}
function tag(oParent,sTag){
	return oParent.getElementsByTagName(sTag);
}
function css(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
window.onload = function(){
	var Omain = id("main");	//首页显示
	var Oside = id("side");	//进入
	var Ohide = id("hide"); //进入显示
	var Oexit = id("exit"); //退出
	var Ocorp = id("corp"); //导航
	var icorpLi =tag(Ocorp,"li"); //导航列表
	var OName = id("Name");
	var iName =tag(OName,"li"); //公司名称
	var Ooffside = id("offside");
	var iUl =tag(Ooffside,"ul"); //ul列表
	var iLi =iUl[0];
	//导航选项卡
	for(var i=0;i<icorpLi.length;i++){
		icorpLi[i].index = i;
		icorpLi[i].onclick = function(){
			for(var j=0;j<icorpLi.length;j++){
				icorpLi[j].className ="";
				iLi.children[j].style.display ="none";
			}
			this.className ="activeCl";
			//console.log(this.index,iLi);
			iLi.children[this.index].style.display ="block";
		}
	}
	//点击公司名称
	for(var i=0;i<iName.length;i++){
		iName[i].index =i;
		iName[i].onclick = function(){
			for(var j=0;j<icorpLi.length;j++){
				icorpLi[j].className ="";
				iLi.children[j].style.display ="none";
			}
			for(var j=0;j<iName.length;j++){
				iName[j].className ="";
				iUl[j].style.display ="none";
			}
			this.className ="activeL";
			iUl[this.index].style.display ="block";
			iLi = iUl[this.index];
			iLi.children[0].style.display ="block";
			icorpLi[0].className ="activeCl";
			huadong();
		}
	}
	//滑动事件
	function huadong(){
		oTouch=m$(iLi);
		nub=0;
		oTouch.slideLeft(function(){
			icorpLi[nub].className ="";
			iLi.children[nub].style.display ="none";
			nub++;
			if(nub>icorpLi.length-1){
				nub=icorpLi.length-1;
			}
			icorpLi[nub].className ="activeCl";
			iLi.children[nub].style.display ="block";
		});
		oTouch.slideRight(function(){
			icorpLi[nub].className ="";
			iLi.children[nub].style.display ="none";
			nub--;
			if(nub<0){
				nub=0;
			}
			icorpLi[nub].className ="activeCl";
			iLi.children[nub].style.display ="block";
		});		
	}
	//函数调用
	huadong();
	
	
	//进入展示区
	Oside.onclick = function(){
		Omain.style.display ="none";
		Ohide.style.display ="block";
	}
	//返回首页
	Oexit.onclick = function(){
		Omain.style.display ="block";
		Ohide.style.display ="none";
	}
}