$(() => {

    var max_login_num = 1;

    setTimeout(() => {
        chrome.storage.local.get(['drrrkari_login_num'], data => {
            if ($('.header:contains("多重ログイン")').length > 0) {
                var login_num = max_login_num > data['drrrkari_login_num'] ? ++data['drrrkari_login_num'] : max_login_num;
                data = { 'drrrkari_login_num': login_num };
            } else {
                data = { 'drrrkari_login_num': 0 };
            }
            chrome.storage.local.set(data);
        });
    }, 500);

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
        'その女々しい特徴',
        '①自分は棚に上げて人のことばかり言います。',
        '②いろいろ言われると気にします。',
        '③昔のことをぐちぐち根に持ちます。',
        '④ゲームで負けると打つタイプです。',
        '⑤強がった物言いや画像を用いますが、内心はものすごいビビり野郎です。',
        '⑥便乗嫌がらせ野郎です。',
        '⑦ハゲが嫌いらしいです。',
        '⑧話の前後を理解しておらず痴呆レベルのコミュニケーション能力です。',
        '⑨大した事ないのにえらいと思っている尊大君です。',
        '痴呆社員を抱えたとても恥ずかしい会社です。',
        '頭が悪く日本語を理解していません。',
        '腹いせや負け惜しみなど人間としてダメな会社です。',
        'また金融機関のサイトをブロックしてお金を使えなくしてきます！！',
        '訴えても表に出られないのでなんでも良いので理由をつけて民事訴訟を起こして賠償金ふんだくってやりましょう！',
        '掲示板の書き込みがうざいとか何でもよいので理由をつけて訴えられれば勝ちです！',
        'またこのサイトで未成年に手を出しています！',
        '必死で妨害してきます！！',

    ];
    const $postFlag = true;
    //const messages = ['https://look-sea.xyz/'];
    const limit = messages.length;
    var index = 0;
    const dummyMessages = [Math.random()];
    const dummyLimit = dummyMessages.length;
    var dummyIndex = 0;

    if ($postFlag) {
        setInterval(() => {
            $('[name="message"]').val(messages[index] + " " + Math.random());
            $('[name="post"]').click();
            if (index++ > limit) {
                index = 0;
            }
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
    }, 500);

    setTimeout(() => {
        $('[name="logout"]').click();
    }, 1000000);

    /*
    setTimeout(() => {
        location.href = location.href;
    }, 300000);
    */

});
