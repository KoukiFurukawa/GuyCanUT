/** ------------------------------------------------------------
 * 関数名 : page_transition
 * 戻り値 : なし
 * 引数　 : なし
 * 機能　 : main.html に遷移する。aタグを使わないのはCSSが嫌いだから
 * ------------------------------------------------------------ */
function page_transition(){

    /* user_name を取得して、クエリパラメータに渡す -------------- */
    user_name = document.getElementById("user_name").value;
    window.location.href = `main.html?user_name=${user_name}`; // 遷移したいURL

    /* 処理終了 ------------------------------------------------ */
    return ;
}