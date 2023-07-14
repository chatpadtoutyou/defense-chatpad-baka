
const settingsButtonTime = 4000;

setTimeout(() => {
    $('button[title="設定"]').click();
}, settingsButtonTime);

setTimeout(() => {
    $('.ytp-menuitem-label:contains("画質")').click();
}, settingsButtonTime + 400);

setTimeout(() => {
    $('.ytp-menuitem:nth-child(1)').click();
}, settingsButtonTime + 1000);

const showNames = [];
const buttonSelector = 'div#expander button.yt-spec-button-shape-next.yt-spec-button-shape-next--text.yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--size-m';
const removeFlags = {
    'content': false,
};

showNames.push($('span[itemprop="author"] [itemprop="name"]').attr('content'));
doHideChatNames();

$(document).on('scroll', () => {
    const myName = $('div#placeholder-area').siblings('#author-thumbnail').find('img').attr('alt');
    if (myName !== void 0 && !showNames.includes(myName)) {
        showNames.push(myName);
    }
    doTreatCommentRenderer($('div #comment'));
    doTreatCommentRenderer($('div#expander-contents'));
});

$(document).on('click', buttonSelector, (e) => {
    doTreatCommentRenderer($('div#expander-contents'));
});

function doTreatCommentRenderer(jObject, limit = 99999999) {

    var clearIndex = 0;

    const timerId = setInterval(() => {

        if (clearIndex++ >= limit) {
            clearInterval(timerId);
        }

        treatCommentRenderer(jObject);

    }, 800);

}

function doHideChatNames(limit = 99999999) {

    var clearIndex = 0;

    const timerId = setInterval(() => {

        if (clearIndex++ >= limit) {
            clearInterval(timerId);
        }

        hideChatNames();

    }, 80);

}

function treatCommentRenderer(jObject) {
    jObject.each(function (i, commentRenderer) {
        $(commentRenderer).find('a#author-text span').each(function (i, authorText) {
            const commentAuthor = authorText.innerText.trim();
            if (!showNames.includes(commentAuthor)) {
                $(authorText).empty();
                $(commentRenderer).find('div#author-thumbnail img').remove();
                $(commentRenderer).on('click', 'button', () => {
                    $(commentRenderer).find('div#contenteditable-root').empty();
                });
                $(commentRenderer).find('a.yt-simple-endpoint.style-scope.yt-formatted-string').empty();
                if (removeFlags['content']) {
                    treatContent(commentRenderer);
                }
            }
        });
        $(commentRenderer).show();
    });
}

function treatContent(commentRenderer) {
    $(commentRenderer).find('div#content').each(function (i, content) {
        $(content).empty();
    });
}

function hideChatNames() {
    const chatframe = $('#chatframe').contents();
    chatframe.find('span#author-name:not(.owner)').hide();
    chatframe.find('#author-photo img').hide();
    chatframe.find('.style-scope.yt-live-chat-item-list-renderer').hide();
}
