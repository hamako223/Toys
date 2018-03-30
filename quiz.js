//ここに来てこれを見ているあなたは知識をお持ちの方ですね。
//
//ゲームに参加するのであればできればこの先は見ないでいただきたいです。
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
let quizzes = [
  {q : "1+1は？", a : "2"},
  {q : "256バイトは何ビット？", a : "2048"},
  {q : "PCといえば？", a : "Mac"}
];

let quiz;

window.onload = function(){
  init();
};

function init(){
    for(let r = 0; r < 3; r++){

      quiz = quizzes[r];

      //問題用のフォームに表示する
      const questionForm = document.querySelector("#question"+r);
      questionForm.value = quiz.q;
  }
}
function doAnswer(){
  for(let s=0;s<3;s++){
      //回答用のフォームに入力した値を取得
      const answerForm = document.querySelector("#answer"+s);
      const answer = answerForm.value;

      //回答用フォームで入力した内容を削除する
      //answerForm.value = "";

      //入力した内容が正しいか調べる
      if (answer == quizzes[s].a) {
          //入力した内容が正解の時
          right();
      } else {
          //入力した内容が不正解の時
          wrong();
      }
      //正解の時に実行する関数

    function right(){
        document.getElementById("quiz_result"+s).innerHTML="<p>正解です</p>"
    }

      //不正解の時に実行する関数
    function wrong(){
        document.getElementById("quiz_result"+s).innerHTML="<p>不正解です</p>"
    }

  }
}
