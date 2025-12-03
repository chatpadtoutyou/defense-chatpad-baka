var followerData = ['@Yt0yyqBRWLmDCFe'];

$(() => {
    chrome.storage.local.get(['twitter_following', 'twitter_followers'], data => {
        followerData = followerData.concat(data['twitter_following']);
        followerData = followerData.concat(data['twitter_followers']);
        doRemoveContents();
    });
});

$(document).on('click', 'span', (e) => {
    const re = /(フォロー中|フォロワー)/ig;
    if (re.test($(e.target).text())) {
        location.href = $(e.target).parents('a').attr('href');
    }
});

function doRemoveContents(limit = 9999999999999) {

    var clearIndex = 0;

    const timerId = setInterval(() => {

        if (clearIndex++ >= limit) {
            clearInterval(timerId);
        }

        removeContents();

    }, 700);

}

function removeContents() {

    $('span:contains("@")').each(function (i, e) {
        const text = $(e).text().trim();
        if (text.startsWith('@')) {
            const id = text.replace('·', '');
            if (!followerData.includes(id)) {
                const embedTweet = $(e).parents('.css-1dbjc4n.r-15ma8z.r-1867qdf.r-rs99b7.r-1loqt21.r-1d7vcsw.r-1ny4l3l.r-1udh08x.r-o7ynqc.r-6416eg');
                if (embedTweet.length > 0) {
                    removeEmbedTweet(embedTweet);
                } else {
                    removeTweet($(e));
                }
                removeUserCell($(e));
                $(e).empty();
                removeUserAvatar($(`[data-testid="UserAvatar-Container-${id.substring(1)}"] img`));
            }
        }
    });

}

function removeTweet(self) {
    const parent = self.parents('[data-testid="tweet"]');
    parent.find('[data-testid="User-Names"]:first span').empty();
    removeUserAvatar(parent.find(`[data-testid="UserAvatar-Container-unknown"] img`));
    //commentSubstring(parent.find('[data-testid="tweetText"]:first span'));
}

function removeEmbedTweet(parent) {
    removeUserAvatar(parent.find(`[data-testid="UserAvatar-Container-unknown"] img`));
    parent.find('[data-testid="UserAvatar-Container-unknown"]:first').siblings('div').find('span').empty();
    //commentSubstring(parent.find('[data-testid="tweetText"]:first span'));
}

function removeUserCell(self) {
    const parent = self.parents('[data-testid="UserCell"]');
    parent.find('a span').empty();
    const comment = parent.find('.css-901oao.r-igjf4l.r-37j5jr.r-1i10wst.r-16dba41.r-135wba7.r-bcqeeo.r-glunga.r-1jeg54m.r-qvutc0');
    comment.find('span').empty();
    comment.find('img').remove();
}

function removeUserAvatar(img) {
    img.prev('div').css('background-image', 'none');
    img.remove();
}

function commentSubstring(tweetTextSpan) {

    tweetTextSpan.each(function () {

        const originText = $(this).text();
        const length = originText.length;
        var startPlus = getRandom(0, 10);
        var endPlus = getRandom(5, 10);
        var intervalPlus = getRandom(1, 5);
        var start = getRandom(0, startPlus);
        var end = getRandom(start + endPlus, start + endPlus + intervalPlus);
        var destText = originText.substring(start, end);

        while (end <= length) {
            startPlus = getRandom(10, 15);
            endPlus = getRandom(3, 5);
            intervalPlus = getRandom(1, 5);
            start = getRandom(end + startPlus, end + startPlus + intervalPlus);
            end = getRandom(start + endPlus, start + endPlus + intervalPlus);
            destText += originText.substring(start, end);
        }

        $(this).text(destText);

    });

}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
