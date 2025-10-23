$(() => {
    $('[name="Passwd"]').val('aC190500');
    setTimeout(() => {
        $('[data-identifier="bestubuntu957@gmail.com"]').click();
        $('button').find('span:contains("次へ")').click();
    }, 400);
});
