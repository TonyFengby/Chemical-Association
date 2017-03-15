$(document).ready(function(){
     $(".cur>span").click(function(){
     	$(this).addClass("active").siblings().removeClass("active");
     	console.log($(this).index())
     	$(".imga").eq($(this).index()).addClass("select").siblings().removeClass("select")
     })
})
			