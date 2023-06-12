/** ------------------------------------------------------------
 * 関数名 : page_transition
 * 戻り値 : なし
 * 引数　 : なし
 * 機能　 : main.html に遷移する。aタグを使わないのはCSSが嫌いだから
 * ------------------------------------------------------------ */
function page_transition(){

    /* user_name を取得して、クエリパラメータに渡す -------------- */
    const user_name = document.getElementById("user_name").value;
    window.location.href = `start.html?user_name=${user_name}`; // 遷移したいURL

    /* 処理終了 ------------------------------------------------ */
    return ;
}



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
    if (keygraph.next(e.key)){
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
    document.getElementById("result").innerHTML = `${ans_cnt}問 正解！`;
    document.getElementById("timer").textContent = "終了！"
};



coutdownTimer( tickFunc , endFunc , 10 );
start_game();