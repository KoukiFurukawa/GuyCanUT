/** ------------------------------------------------------------
 * 関数名 : getRandomInt
 * 戻り値 : randomInt
 * 引数　 : min, max -> int
 * 機能　 : ランダムな整数を返す関数
 * ------------------------------------------------------------ */
function getRandomInt(mn, mx) {
    let min = Math.ceil(mn);
    let max = Math.floor(mx);
    const res = Math.floor(Math.random() * (max - min) + min);
    return res;
}
  


/** ------------------------------------------------------------
 * 関数名 : show_text
 * 戻り値 : なし
 * 引数　 : なし
 * 機能　 : ユーザーに入力してもらうテキストを表示する。
 * ------------------------------------------------------------ */
function start_game(){

    
    /* 入力するテキストを選択 -------------------------------- */
    randInt = getRandomInt(0,texts.length);
    let text = texts[randInt];

    /* テキストをセットし、アルファベットを取得 ---------------- */
    keygraph.build(text);
    tmp = keygraph.key_candidate();

    /* 取得したテキストを反映 */
    document.getElementById("text").innerHTML = text;
    document.getElementById("future").innerHTML = tmp;

    return ;
}


function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



/* 変数宣言 ----------------------------------------------- */
let ans_cnt = 0;
let randInt, query, tmp;
const END = 3;
const texts = [
    "こんにちは","さようなら","おはようございます",
    "ありがとう","しねやかす","いいあさですね",
    "きょうもぷろぐらみんぐ","たにんのかねでくうやきにくがうまい"
]


document.addEventListener("keydown", e => {
    if (keygraph.next(e.key) && document.getElementById("timer").textContent != "終了！"){
        if (keygraph.is_finished()){
            ans_cnt++;
            keygraph.reset()
            start_game();
        }
        document.getElementById("future").innerHTML = keygraph.key_candidate()
        document.getElementById("past").innerHTML = keygraph.key_done()
    }
})

// 終了通知受け取り関数
const endFunc = ()=>{
    const user_name = getParam("user_name");
    document.getElementById("result").innerHTML = `${user_name}さんの成績 \n ${ans_cnt}問 正解！`;
    document.getElementById("timer").textContent = "終了！"
};



coutdownTimer( tickFunc , endFunc , 10 );
start_game();