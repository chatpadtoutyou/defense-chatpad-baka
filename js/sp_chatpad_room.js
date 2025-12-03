const messages = [
    'A-21-10941関東株式会社モノリス。',
    'ChatPad(チャットパッド)の管理会社。',
    '電話番号も法人番号も載せていない。',
    'メールだけで問い合わせできることにしている。',
    'サクラを使った出会い系を運営していた詐欺業者。',
    'youtube、ツイッターなどでなりすまし誹謗中傷など嫌がらせ。',
    'スパチャ500円の貧乏企業',
    '〒105-0003東京都港区西新橋2-4-3プロス西新橋ビル6Fは月額4,400円のバーチャルオフィス',
    'https://ofnavi.com/area/shinbashi',
    'もういいよが口癖←がきんちょ、根性無し、ネガティブ',
    '自分は棚に上げて人のことばかり言う',
    'すべてが嘘っぱち詐欺師。本当のことを言うとキレる☆',
    '負け惜しみ、腹いせの嫌がらせ',
    '素直に罪を認めて出頭しましょう',
];
const limit = messages.length;
var index = 0;
const startRe = /見つかったよ|相手はオンライン/ig;
const endRe = /チャットを終了|途絶/ig;

setInterval(() => {
    if (startRe.test($('.text').text()) && $('#sayField').length > 0) {
        if (index < limit) {
            $('#sayField').val(messages[index++]);
            setTimeout(() => { $('#sayButton').click(); }, 100);
        } else {
            endChat();
        }
    }
    if (endRe.test($('.text').text())) {
        endChat();
    }
    newChat();
}, 1000);

setInterval(() => {
    $('.companionMessage').empty();
}, 100);

function endChat() {
    if ($('.showSweetAlert').length == 0) {
        $('#closeButton').click();
        setTimeout(() => { $('.confirm').click(); }, 500);
        setTimeout(() => { newChat(); }, 1000);
    }
}

function newChat() {
    const chatNewButton = $('#chatNewButton');
    if (chatNewButton.css('display') == 'block') {
        $('#chatNewButton input').click();
        index = 0;
    }
}
