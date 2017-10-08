const functions = require('firebase-functions');

// Edited from https://github.com/tamizuma/garbage_day
exports.get = functions.https.onRequest((request, response) => {

    const JST = 60000 * 60 * 9;

　　 var dateObj = new Date((new Date()).getTime() + JST );
　　 // Sun, Mon, ... Sat)
    var garbage = ['なし','可燃ごみ','なし','ビン/缶/プラ','可燃ごみ','なし','古紙/ペットボトル'];
    var today = garbage[dateObj.getDay()];
    var tomorrow = (dateObj.getDay() == 6) ? garbage[0] : garbage[dateObj.getDay() + 1];

    var result = `今日は${today}です。明日は${tomorrow}です。`;
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify({ "speech": result, "displayText": result }));
});
