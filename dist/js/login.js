/**
 * Created by qianduan on 2017/2/28.
 */
//焦点移动到用户输入上
$('.input-hook').eq(0).focus();
//点击登陆按钮
$('.login-btn').on('click', function () {
    handler();
});
//输入后回车登陆
$('.input-hook').keydown(function (event) {
    if (event.which === 13) {
        handler();
    }
});

//*************封装函数**********************
function handler() {
    //获取输入参数
    var loginName = $('.user-name').val();
    var password = $('.password').val();
    //MD5加密
    var md5Val = md5(loginName+password).toUpperCase();
    var urlServer = 'http://192.168.2.51:65421/WebApi/Account/Login';
    var urlHref = 'http://www.baidu.com';
    //搜集数据
    var params = {
        LoginName: loginName,
        Password: password,
        Key:md5Val
    };
    //发生ajax登陆请求
    loginAjax(urlServer,urlHref,params);
}
function loginAjax(urlServer,urlHref,params) {
    $.ajax({
        url: urlServer,
        type: 'POST',
        dataType:'json',
        data: params,
        success: function (obj) {
            switch (obj.code){
                case '0':
                    window.location.href = urlHref;
                    break;
                case '2001':
                    alert("登录失败,用户不存在或为空!");
                    break;
                case '2002':
                    alert("登录失败,密码错误或为空!");
                    break;
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}