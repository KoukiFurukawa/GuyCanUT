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
 * 関数名 : start_game
 * 戻り値 : なし
 * 引数　 : なし
 * 機能　 : ユーザーに入力してもらうテキストを表示する。
 * ------------------------------------------------------------ */
function start_game(){

    
    /* 入力するテキストを選択 -------------------------------- */
    while (true){
        randInt = getRandomInt(0,texts.length);
        if (randInt != back){
            back = randInt;
            break;
        }
    }
    let text = texts[randInt];

    /* テキストをセットし、アルファベットを取得 ---------------- */
    keygraph.build(text.key);
    tmp = keygraph.key_candidate();

    /* 取得したテキストを反映 */
    document.getElementById("hiragana").innerHTML = text.key
    document.getElementById("text").innerHTML = text.char;
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
let randInt, query, tmp, back;
let point = 0;

const texts = [
    {char : "ナンパが多いuka先生", key : "なんぱがおおいうかせんせい"},
    {char : "小さき命イヴァンちゃん", key : "ちいさきいのちいヴぁんちゃん"},
    {char : "かわいいね", key : "かわいいね"},
    {char : "愛してるよ", key : "あいしてるよ"},
    {char : "Kiss...", key : "Kiss..."},
    {char : "みんなの後輩イヴァン君", key : "みんなのこうはいいヴぁんくん"},
    {char : "今日も人間を超越していきましょう", key : "きょうもにんげんをちょうえつしていきましょう"},
    {char : "ほむほむゆんゆ", key : "ほむほむゆんゆ"},
    {char : "てんしそ", key : "てんしそ"},
    {char : "あくまそ", key : "あくまそ"},
    {char : "オーブンでブン", key : "おーぶんでぶん"},
    {char : "りょーさんの賞賛を量産", key : "りょーさんのしょうさんをりょうさん"},
    {char : "Ivan定期メルメル", key : "Ivanていきめるめる"},
    {char : "お腹ヘリコプター", key : "おなかへりこぷたー"},
    {char : "タコだから実質8又じゃん", key : "たこだからじっしつはちまたじゃん"},
    {char : "うかさんは約60又って事?", key : "うかさんはやくろくじゅうまたってこと?"},
    {char : "無敵のおしそ", key : "むてきのおしそ"},
    {char : "おつかれサンダー", key : "おつかれさんだー"},
    {char : "邪神たこと邪龍たこ", key : "じゃしんたことじゃりゅうたこ"},
    {char : "お大事にインターネットやめろ", key : "おだいじにいんたーねっとやめろ"},
    {char : "毎週火曜日火事パーティ", key : "まいしゅうかようびかじぱーてぃ"},
    {char : "サバカンピスピス", key : "さばかんぴすぴす"},
    
    {char : "🦭", key : "U+1f9ad"},
    {char : "梟のいる森", key : "ふくろうのいるもり"},
    {char : "88ドデカゴージャスハウス88", key : "88どでかごーじゃすはうす88"},
    {char : "白身魚の遊覧船", key : "しろみざかなのゆうらんせん"},
    {char : "ふろーるのばするーむ", key : "ふろーるのばするーむ"},
    {char : "イロちゃんの色々日記", key : "いろちゃんのいろいろにっき"},
    {char : "湊印の簾内*煩め", key : "みなとじるしのれんない*うるさめ"},
    {char : "イチケン村", key : "いちけんむら"},
    {char : "桜楼神社あそびば分社", key : "おうろうじんじゃあそびばぶんしゃ"},
    {char : "羊さんは今日も迷子", key : "ひつじさんはきょうもまいご"},
    {char : "秘密基地の中には正義も常識もない", key : "ひみつきちのなかにはせいぎもじょうしきもない"},
    {char : "<-ここにお兄様がいます", key : "<-ここにおにいさまがいます"},
    {char : "22gの躑躅畑", key : "22gのつつじばたけ"},
    {char : "音ゲーマーりりかの部屋", key : "おとげーまーりりかのへや"},
    {char : "おせきのま", key : "おせきのま"},
    {char : "質問してくるbotあど", key : "しつもんしてくるbotあど"},
    {char : "雅懐を謳う人間x", key : "がかいをうたうにんげんx"},
    {char : "38号線のaroha", key : "38ごうせんのaroha"},
    {char : "個体名【おしそ】に関する生体報告書", key : "こたいめいおしそにかんするせいたいほうこくしょ"},
    {char : "決闘呪霊ふかひれ-~不定期行動~", key : "けっとうじゅれいふかひれ-~ふていきこうどう~"},
    {char : "百合のお花畑", key : "ゆりのおはなばたけ"},
    {char : "イヴァン実験体管理所_サイト16", key : "いヴぁんじっけんたいかんりしょ_さいと16"},
    {char : "kurosaki-exe", key : "kurosaki-exe"},
    {char : "スケベ寺", key : "すけべでら"},
    {char : "ファ医者・クラブ", key : "ふぁいしゃ・くらぶ"},

    // {char : "", key : ""},
]


document.addEventListener("keydown", e => {
    if (keygraph.next(e.key) && document.getElementById("timer").textContent != "終了！"){
        point++;
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
    document.getElementById("result").innerHTML = `${user_name}さんの成績 \n ${ans_cnt}問 正解！`+
    `<br> ${point} ポイント！`;

    const button = document.getElementById("again");
    button.style.display = "block";
    button.style.textAlign = "center"
    document.getElementById("timer").textContent = "終了！";
};


function main(){

    document.getElementById("text").textContent = "開始まで..."
    // coutdownTimer(firstCountDown, firstEndCountDown, 3);

    setTimeout(start_game, 3000);
    setTimeout(coutdownTimer( tickFunc , endFunc , 63 ),3000);
}

main();