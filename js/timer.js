const coutdownTimer =  ( tickCallBack , endCallBack,
    daysOrSeconds , hours = null , minutes  = null , seconds = null ) => {

    // 秒を日数・時間・分・秒に変換
    const calcTime = sec =>{
        const days = Math.floor(sec / 86400);
        const hours = Math.floor( (sec-=days*86400) / 3600);
        const minutes = Math.floor( (sec-=hours*3600) / 60);
        sec-=minutes*60;
        return [days,hours,minutes,sec];
    };

    // 引数を秒数に変換
    let sec = (hours===null) ? daysOrSeconds
        : seconds + minutes * 60 + hours * 3600 + daysOrSeconds * 86400;

    // スタートのタイムスタンプ取得
    const startTime = Date.now();

    // 初回の残り時間通知
    tickCallBack( calcTime(sec) );

    // タイマースタート（1秒間隔)
    const timer = setInterval(() => {
        // 残り時間を秒で計算
        let nowSec= sec - Math.floor( (Date.now() - startTime) / 1000 );
        if( nowSec <= 0 ) { // 残り時間なし
            clearInterval(timer); // タイマー停止
            endCallBack(); // 終了通知
        }else{
            tickCallBack( calcTime(nowSec) ); // 残り時間通知
        }},1000
    )
};


// 残り時間通知受け取り関数
const tickFunc = ( time  )=>{
    const p = document.getElementById("timer");
    p.textContent = `残り${ time[3] }秒`;
};
