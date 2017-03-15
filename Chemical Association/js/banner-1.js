
var banner=document.getElementById('banner');
var imgList=banner.getElementsByClassName('banner_img');
var ban=document.getElementsByClassName('main_ban')[0];
var imgWid=imgList[0].offsetWidth;
var allWid=imgWid*(imgList.length-2);
var time = setInterval(function(){
	if(ban.scrollLeft>=allWid){
		ban.scrollLeft=0;
	}else{
		ban.scrollLeft+=1000; 
	}
},2000)
        

