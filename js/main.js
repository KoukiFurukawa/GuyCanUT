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
function show_text(){

    /**表示するテキスト ---------------------------------------- */
    const texts = {
        "こんにちは" : ["konnnitiha", "konnnichiha"],
        "さようなら" : ["sayounara"]
    }

    /* 表示テキストをランダムに選ぶ ----------------------------- */
    const randInt = getRandomInt(0,Object.keys(texts).length);
    const text = Object.keys(texts)[randInt];
    let alphabet = texts[text][0];

    /* HTMLに反映する ----------------------------------------- */
    document.getElementById("text").innerHTML = text;
    document.getElementById("text").value = alphabet;
    document.getElementById("alphabet").innerHTML = alphabet

    return ;
}


window.addEventListener("keypress",keypress);
function keypress(e){

    console.log(e.key);
    let text = document.getElementById("text").value;

    if (e.key == text[0]){

        if (text.length == 1){
            ans_cnt++;
            show_text();
        }else{
            text = text.slice(1,text.length)
            document.getElementById("text").value = text;
        }
    }

    if (ans_cnt == END){
        alert("終わり");
        ans_cnt = 0;
    }
}

/* 変数宣言 ----------------------------------------------- */
let ans_cnt = 0;
const END = 3

show_text();