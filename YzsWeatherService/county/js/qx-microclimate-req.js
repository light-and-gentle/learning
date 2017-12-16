
$(function(){
	getSetup();
});

/**
 * 加载视频
 */
function getSetup(){
	SewisePlayer.setup({
		server: "live",
		type: "rtmp",
		autostart: "true",
		buffer: 1,
		streamurl: 'rtmp://27.221.103.12:1935/live/B159736252_0_1?token=cV3Kg4fbfcLoQJDhyPVAZ1b3mEhJemEcw2Z1NZ17Gii0Hh7NNvlm6IhINRrCg8CGFJn9am9ps3qfyvPCevXQtNsnEZ1wreMq2rZ1kZ2RdSmATTiDcZ3',  
        skin: "liveWhite",
        poster: "http://jackzhang1204.github.io/materials/poster.png",
        claritybutton: "disable",
		title: "智慧园丁demo",
        fallbackurls:{
    		m3u8: "http://219.232.161.204:80/hls/vk5nx2cj.m3u8"
		}
	}, "player");
}

function getSurfaceData(obj){
    console.log("++++++++++++++++++++++++++++++++++++++++++++++")
    var a=null;
    $.ajax({
        url: base + "/smart/query-by-mac",
        data: "mac=" + obj + "&token=c372adf83d67bb21b8e7767e923ec0fc",
        //type:"post",
        dataType: "JSON",
        success: function (data) {
            console.log(data)
            //温度
            //temp(data.temp/10,1);
            a=data;
            if (data) {
                if (data.temp || data.temp == 0) {
                    temp(data.temp / 10, 1);
                } else {
                    temp(data.temp / 10, 0);
                }
                //空气湿度
                if (data.rh || data.rh == 0) {
                    rh(data.rh, 1);
                } else {
                    rh(data.rh, 0);
                }
                //1小时降雨量
                if (data.fainfall || data.fainfall == 0) {
                    fainFall(data.fainfall, 1);
                } else {
                    fainFall(data.fainfall, 0);
                }
                //气压
                if (data.pressure || data.pressure == 0) {
                    pre(data.pressure / 10, 1);
                } else {
                    pre(data.pressure / 10, 0);
                }
                //风速
                if (data.windspecd || data.windspecd == 0) {
                    winds(data.windspecd / 10, 1);
                } else {
                    winds(data.windspecd / 10, 0);
                }
                //风向
                var a = data.winddir / 3.6;
                if (a || a == 0) {
                    windDir(a, 1);
                } else {
                    windDir(a, 0);
                }
                if (data.st10 || data.st10 == 0) {
                    st(data.st10, 1);
                } else {
                    st(34, 0);
                }
                if (data.sh10 || data.sh10 == 0) {
                    sh(data.sh10, 1);
                } else {
                    sh(40, 0);
                }
                if (data.effradiation || data.effradiation == 0) {
                    eff(data.effradiation, 1);
                } else {
                    eff(data.effradiation, 0);
                }

                //设置传感器
                if (data.updateTime) {
                    $(".device-name").html(data.station);
                    //数据入库时间
                    var date = new Date(data.updateTime);
                    var s = "" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
                    $(".update-time span").html(s);
                } else {
                    $(".device-content").html("暂无设备");
                }
            }
        }
    });
    console.log(a);
    if(a==null){

        temp(1, 0);
        rh(1, 0);
        fainFall(1, 0);
        pre(1 / 10, 0);
        winds(1 / 10, 0);
        st(34, 0);
        sh(40, 0);
        eff(1, 0);
        windDir(0, 0);
        $(".device-content").html("暂无设备");
    }
}
