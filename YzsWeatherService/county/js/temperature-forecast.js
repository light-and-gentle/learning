
//date是日期，type是天气类型，0代表晴天，1代表多云，2代表阴雨
function getTheHutsForecast(date,type, outside) {
    //获取查询的月份，根据月份进行天气判断
    //console.log(date);
    var month = date.substr(4,2);
    //console.log(month)
    //console.log("温度"+outside);
    if (month == 12||month==1||month==2){
        //console.log("冬天")
        if (type == 0){
            return -1.843+(0.750*outside);
        }else if (type==1){
            return -0.134+(0.782*outside);
        }else {

            return 2.262+(0.661*outside);
        }
    }else if (month==3|| month==4 ||month == 5){
        if (type == 0){
            return -1.645+1.118*outside;
        }else if (type==1){
            return -1.201+1.157*outside;
        }else {
            return -1.333+1.035*outside;
        }
    }else if (month == 6||month==7 || month==8){
        if (type == 0){
            return -16.318+1.563*outside- 192712.1*Math.pow(outside,11)*Math.pow(10,-22);
        }else if (type==1){
            return 1293.006-71.623*outside+0.0428*Math.pow(outside,3)-1.1103*Math.pow(10,-5)*Math.pow(outside,5);
        }else {
            return 18.864+4.758*Math.pow(10,-4)*Math.pow(outside,3);
        }
    }else {
        if (type == 0){
            return -1.645+1.118*outside;
        }else if (type==1){
            return -1.201+1.157*outside;
        }else {
            return -1.333+1.035*outside;
        }
    }
}