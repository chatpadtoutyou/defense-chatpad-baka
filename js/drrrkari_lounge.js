$(() => {

    const re = /よしに謝罪/ig;

    $('.users li').each(function () {
        if (!re.test($(this).text())) {
            $(this).empty();
        }
    });

    $('li.name').each(function () {
        if (!re.test($(this).text())) {
            $(this).empty();
        }
    });

    $('.creater2').each(function () {
        if (!re.test($(this).text())) {
            $(this).empty();
        }
    });

    $('.rooms').show();

    setTimeout(() => {
        $('[name="login"]')[0].click();
    }, 10000);

});
