/**
 * 登陆
 * @returns {Boolean}
 */
function login(){
	var username=$("#username").val();
	var password=$("#password").val();
	if(username==""){
		alert("请输入用户名!");
		return false;
	}
	if(password==""){
		alert("请输入密码!");
		return false;
	}
	$.ajax({
		type : "post",
		async:false,
		url : base+"user/login",
		data:{'username':username,'password':password},
		success : function(result) { 
			if(result!=""){
				document.cookie="usertype="+result.type;
				window.location="zz-main.html";
			}else{
				alert("输入的用户名或密码不正确!");
			}
		}
	});
}

