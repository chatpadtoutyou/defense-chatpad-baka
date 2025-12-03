setTimeout(() => {
    scrollTo(500, 10000);
    const unicodeArray = Encoding.stringToCode('ダイレクトトップ'); // 文字列から文字コード値の配列に変換
    const sjisArray = Encoding.convert(unicodeArray, {
        to: 'SJIS',
        from: 'UNICODE'
    });
    const str = Encoding.codeToString(sjisArray); // 文字コード値の配列から文字列に変換
    $(`a:contains("${str}")`).trigger('click');
}, 500);
