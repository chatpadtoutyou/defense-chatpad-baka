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

    $('li.member').each(function () {
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
        location.href = 'https://drrrkari.com/create_room/';
    }, 3000);

    /*
    setTimeout(() => {
        chrome.storage.local.get(['drrrkari_login_num'], data => {

            var login = $('[name="login"]');

            if (data.hasOwnProperty('drrrkari_login_num')) {
                login[data['drrrkari_login_num']].click();
            } else {
                chrome.storage.local.set({ 'drrrkari_login_num': 0 });
                //login[0].click();
            }

        });
    }, 10000);
   */

});
