function dateCounter(){

  const timer = setInterval(function(){
    //現在日時の取得
    const currentDate = new Date();
    //カウントダウンしたい日時を設定
    const targetDate = new Date("2018/5/27 10:00:00");
    //日数の計算
    const betweenDay = (targetDate - currentDate);
    const dayCalc = Math.ceil((betweenDay)/(1000*60*60*24)-1);
    if(betweenDay>=0){
      //時間を取得
      const hour = ('0'+Math.floor(betweenDay/(60*60*1000))%24).slice(-2);
      //分を取得
      const minute = ('0'+Math.floor((betweenDay%(24*60*60*1000))/(60*1000))%60).slice(-2);
      //秒を取得
      const second = ('0'+Math.round((betweenDay%(24*60*60*1000))/1000)%60%60).slice(-2);
      //ミリ秒を取得
      const mili = ('0'+Math.floor((betweenDay%(24*60*60*1000))/10)%100).slice(-2);
      //HTML上に出力
      document.getElementById("counter").innerHTML
      ="<p class=\"counterText\">高槻キャンパス祭まで"+"<br>残り"+dayCalc+"日"+hour+"時間"+minute+"分"+second+"秒"+mili+"</p>";

      if((hour == 0)&&(minute == 0)&&(second == 0)){
        clearInterval(timer);
        document.getElementById("counter").innerHTML = "始まります";
      }
    }else{
      document.getElementById("counter").innerHTML = "始まります";
    }
  },10);
}
dateCounter();
