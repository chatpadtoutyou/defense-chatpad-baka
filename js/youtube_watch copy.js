var videoPlayer = {};
var currentTime = 0;
var video = null;
var src = null;
var durationchange = false;
var loadedmetadata = false;
var loadeddata = false;
var canplay = false;
var ended = false;

setInterval(() => {
    videoPlayer = $('.html5-video-player');
    if ($('#error-screen').is(":visible") || $(".ytp-error").is(":visible")) {
        location.reload();
        //$('#error-screen').remove();
        //videoPlayer.removeClass('ytp-autonav-endscreen-cancelled-state');
        //videoPlayer.removeClass('unstarted-mode');
        //videoPlayer.removeClass('ytp-hide-controls');
    }
    video = document.querySelector("video");
    if (video != null) {
        video.preload = 'metadata';
        if (videoPlayer.hasClass('ad-showing')) {
            video.muted = true;
        }
        if (!durationchange) {
            video.addEventListener("durationchange", () => {
                console.log("durationchange");
                console.log(video.currentTime);
                if (videoPlayer.hasClass('ad-showing')) {
                    console.log('durationchange-ad-showing');
                    video.muted = true;
                    if (src != null) {
                        console.log('durationchange-ad-showing-src');
                        video.src = src;
                        src = null;
                    }
                    //location.reload();
                }
                durationchange = false;
            }, { "once": true });
            durationchange = true;
        }
        if (!loadedmetadata) {
            video.addEventListener("loadedmetadata", () => {
                console.log("loadedmetadata");
                console.log(video.currentTime);
                if (videoPlayer.hasClass('ad-showing')) {
                    console.log('loadedmetadata-ad-showing');
                    video.muted = true;
                    video.currentTime = 180;
                }
                loadedmetadata = false;
            }, { "once": true });
            loadedmetadata = true;
        }
        if (!loadeddata) {
            video.addEventListener("loadeddata", () => {
                console.log("loadeddata");
                console.log(video.currentTime);
                if (videoPlayer.hasClass('ad-showing')) {
                    console.log('loadeddata-ad-showing');
                    video.muted = true;
                } else {
                    video.currentTime = 0;
                }
                loadeddata = false;
            }, { "once": true });
            loadeddata = true;
        }
        if (!canplay) {
            video.addEventListener("canplay", () => {
                console.log("canplay");
                console.log(video.currentTime);
                if (videoPlayer.hasClass('ad-showing')) {
                    console.log('canplay-ad-showing');
                    video.muted = true;
                } else {
                    console.log('canplay-src');
                    src = video.src;
                }
                canplay = false;
            }, { "once": true });
            canplay = true;
        }
        if (!ended) {
            video.addEventListener("ended", () => {
                console.log("ended");
                console.log(video.currentTime);
                if (videoPlayer.hasClass('ad-showing')) {
                    console.log('ended-ad-showing');
                }
            });
            ended = true;
        }
    /* 
        if (readyIndex == 0) {
            ytpProgressBar.attr('aria-valuenow', ariaValuemax);
            if (video != null) {
                video.preload = 'metadata';
                video.muted = true;
                video.currentTime = 9999;
            }
            ++readyIndex;
        }
    */

        const ytpProgressBar = $('.ytp-progress-bar');
        const ariaValuemax = ytpProgressBar.attr('aria-valuemax');
        const ariaValuenow = ytpProgressBar.attr('aria-valuenow');
        console.log(ytpProgressBar.attr('aria-valuemax'));
        console.log(ytpProgressBar.attr('aria-valuenow'));

        if (Number(ariaValuenow) > Number(ariaValuemax)) {
            ytpProgressBar.attr('aria-valuenow', ariaValuemax);
        }

        const nextbutton = $('.ytp-next-button.ytp-button');
        
        $(document).on('click', nextbutton, (e) => {
            ytpProgressBar.attr('aria-valuenow', ariaValuemax);
        });

        /*
        const prevbutton = $('.ytp-prev-button.ytp-button');

        $(document).on('click', prevbutton, (e) => {
            ytpProgressBar.attr('aria-valuenow', ariaValuemax);
        });

        if (videoPlayer.hasClass('ad-showing')) {
            console.log(video.currentTime);
            //alert(video.currentTime);
            video.muted = true;
            //video.playbackRate = 5;
            if (video.currentTime < 2) {
                video.preload = 'meta';
                video.currentTime = 30;
            } else {
                video.preload = 'auto';
                //video.src = src;
                location.href = `${location.href}&t=${video.currentTime}`;
            }
        } else {
            video.preload = 'auto';
            video.muted = false;
            //.playbackRate = 1;
            //src = video.src;
        }
        */
    }
}, 100);

const timerId = setInterval(() => {
    const setting = $('button[title="設定"]');
    if (setting.length > 0) {
        setting.trigger('click');
        setTimeout(() => {
            const qualitySetting = $('.ytp-menuitem:contains("画質")');
            if (qualitySetting.length > 0) {
                qualitySetting.trigger('click');
                setTimeout(() => {
                    const premium = $('.ytp-menuitem:contains("Premium")');
                    if (premium.length > 0) {
                        $('.ytp-menuitem:nth-child(2)').trigger('click');
                    } else {
                        $('.ytp-menuitem:nth-child(1)').trigger('click');
                    }
                    clearInterval(timerId);
                }, 600);
                setTimeout(() => {
                    //$('button[data-title-no-tooltip="全画面"]').trigger('click');
                }, 1000);
            }
        }, 600);
    }
}, 1000);

/*
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
*/