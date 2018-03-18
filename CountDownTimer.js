function dateCounter(){

  var timer = setInterval(function(){
    //現在日時の取得
    var currentDate = new Date();
    //カウントダウンしたい日時を設定
    var targetDate = new Date("2018/5/27 10:00:00");
    //日数の計算
    var dayCalc = Math.ceil((targetDate - currentDate)/(1000*60*60*24)-1);
    var ms = (targetDate - currentDate);
    if(ms >= 0){
      //時間を取得
      var hour = Math.floor(ms /3600000);
      var hour24 = hour % 24;
      //分を取得
      var minute = Math.floor((ms - hour * 3600000) / 60000);
      //廟を取得
      var second = Math.round((ms - hour * 3600000 - minute * 60000) / 1000);

      //HTML上に出力
      document.getElementById("counter").innerHTML ="<p class=\"counterText\">高槻キャンパス祭まで"+ "<br>残り" + dayCalc + "日" + hour24 + "時間" + minute + "分" + second + "秒</p>";

      if((hour24 == 0)&&(minute == 0)&&(second == 0)){
        clearInterval(timer);
        document.getElementById("counter").innerHTML = "始まります";
      }
    }else{
      document.getElementById("counter").innerHTML = "始まります";
    }
  },1000);
}
dateCounter();
