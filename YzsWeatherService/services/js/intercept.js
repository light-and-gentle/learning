$(function(){
	var usertype=document.cookie.split(";")[0].split("=")[1];
	if(usertype==""){
		window.location="login.html";
	}
	
	if(usertype==1){
		$("#menu").html('<a class="menu-nav-active" href="javascript:void (0);" target="_self" data-whatever="clzz">产品制作</a> <a href="javascript:void (0);" target="_self" data-whatever="cpfw">产品服务</a><a href="javascript:void (0);" target="_self" data-whatever="zqsh">灾情审核</a>');
		$("#clzz").html('<li class="s-menu-sidebar-active" data-whatever="zz-compile"> <i class="icon-zx"></i><a href="javascript:void (0);">撰&nbsp;写</a></li><li class="facility" data-whatever="zz-issue"><i class="icon-fb"></i><a href="javascript:void (0);">发&nbsp;布</a></li><li data-whatever="zz-consult"><i class="icon-dy"></i><a href="javascript:void (0);">调&nbsp;阅</a></li>');
	
	}else if(usertype==0){
		$("#menu").html('<a class="menu-nav-active" href="javascript:void (0);" target="_self" data-whatever="clzz">产品制作</a> <a href="javascript:void (0);" target="_self" data-whatever="cpfw">产品服务</a>');
		$("#clzz").html('<li class="s-menu-sidebar-active" data-whatever="zz-compile"> <i class="icon-zx"></i><a href="javascript:void (0);">撰&nbsp;写</a></li>');
	}
	
});