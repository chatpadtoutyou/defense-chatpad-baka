$(() => {

    $('#room_name').remove();
    $('#members').remove();
    $('#setting_pannel').remove();
    $('#setting_pannel2').remove();
    $('.sound.sound_on').click();
    $('.member.member_on').click();
    
    const messages = [
        'A-21-10941 関東 株式会社モノリス。',
        'ChatPad(チャットパッド)の管理会社。',
        '電話番号も法人番号も載せていない。',
        'メールだけで問い合わせできることにしている。',
        'サクラを使った出会い系を運営していた詐欺業者。',
        'そのことを指摘したためにyoutube、twitterなど様々なSNSで誹謗中傷やなりすましなどの嫌がらせを受けています。',
        'PCやネットワークのクラッキング、ドメインの削除、転送によるWebやメールの妨害など様々な嫌がらせ行為を行っています。',
        '卑猥画像、個人情報を使った嫌がらせなどとんでもないクズ野郎です。',
        '〒105-0003東京都港区西新橋2-4-3プロス西新橋ビル6Fは月額4,400円のバーチャルオフィス。',
        'https://ofnavi.com/area/shinbashi',
        '自分は棚に上げて人のことばかり言います。',
        'すべてが嘘っぱち詐欺師。本当のことを言うとキレる☆',
        '負け惜しみ、腹いせの嫌がらせ。',
        '素直に罪を認めて出頭しましょう。',
    ]

    const $postFlag = true;
    const message = $('[name="message"]');
    const post = $('[name="post"]');
    const limit = messages.length;
    var index = 0;

    if ($postFlag) {
        setInterval(() => {
            index = index < limit ? ++index : 0;
            message.val(messages[index]);
            post.click();
        }, 1000);
    }
    /*
        const re = /@|w|ｗ|W|Ｗ|V|v|Ｖ|ｖ|カッ|カカ|爆笑|童貞|女/ig;
    
        setInterval(() => {
            $('dl').each(function (i, e) {
                if (!re.test($(e).find('p.body').text()) && $(e).find('dd img').length == 0) {
                    const dt = $(e).find('dt');
                    dt.empty();
                    dt.css('background', 'none');
                    const p = $(e).find('.bubble p');
                    $(e).find('.bubble div').css('background', 'none');
                    p.css('background', 'none');
                    p.css('width', 'max-content');
                    p.css('height', 'max-content');
                    $(e).show();
                }
            });
        }, 100);
    */

    setInterval(() => {
        $('#change').click();
    }, 1000);

    setTimeout(() => {
        location.href = location.href;
    }, 20000);

});
