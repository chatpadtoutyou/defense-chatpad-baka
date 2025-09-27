const followerData = [];
var stopGetFollowers = false;

$(document).on('keypress', (e) => {

    if (e.key === 'd') {

        stopGetFollowers = false;
        var coordinate = 0;
        const plusCoordinate = 40000;

        const timerId = setInterval(() => {

            if (stopGetFollowers) {
                clearInterval(timerId);
            }

            doGetFollowers();
            coordinate += plusCoordinate;
            window.scrollTo(0, coordinate);

        }, 2000);

    }

    if (e.key === 's') {
        stopGetFollowers = true;
    }

    if (e.key === 'e') {
        stopGetFollowers = true;
        endGetFollowers();
    }

});

$(document).on('mousewheel', () => {
    stopGetFollowers = true;
});

function doGetFollowers() {

    $('span:contains("@")').each(function (i, e) {
        const id = $(e).text().trim();
        if (id.startsWith('@') && !followerData.includes(id)) {
            followerData.push(id);
        }
    });

}

function endGetFollowers() {

    const locationRe = /^(.+?)(following)$/ig;
    var data = {};

    if (locationRe.test(location.href)) {
        data = { 'twitter_following': followerData };
    } else {
        data = { 'twitter_followers': followerData };
    }

    chrome.storage.local.set(data);

    location.href = 'https://twitter.com/';

}