var ytpProgressBar = {};
var ariaValuemax = {};
var ariaValuenow = {};
var videoPlayer = {};
var href = "";
var errorScreen = 0;
var unstartedMode = 0;

$(() => {
    setInterval(() => {
        removeAd();
        ytpProgressBar = $('.ytp-progress-bar');
        ariaValuemax = Number(ytpProgressBar.attr('aria-valuemax'));
        ariaValuenow = Number(ytpProgressBar.attr('aria-valuenow'));
        videoPlayer = $('.html5-video-player');
        video = document.querySelector("video");
        videoPlayer.removeClass('ytp-fullscreen-grid-active');
        videoPlayer.removeClass('ytp-grid-scrolling');

        if ($('span:contains("広告ブロッカー")').is(":visible") ||
            $('#player-error-message-container').is(":visible") ||
            $('#error-screen').is(":visible") ||
            $('.yt-playability-error-supported-renderers').is(":visible") ||
            videoPlayer.hasClass('ad-showing')) {
            ++errorScreen;
            if (video != null) {
                video.muted = true;
                //video.currentTime = 300;
            } else {
                //ytpProgressBar.attr('aria-valuenow', ariaValuemax);
            }
            //location.reload();
        } else {
            if (errorScreen > 0) {
                --errorScreen;
                //$('.ytp-prev-button.ytp-button').click();
                if (video != null) {
                    video.muted = false;
                }
            }
        }

        if ($('.ytp-autonav-endscreen-cancelled-state').is(":visible") || videoPlayer.hasClass('ad-showing')) {
            ++errorScreen;
            if (errorScreen > 10) {
                location.reload();
            }
        }

        if (href != location.href) {
            ytpProgressBar.attr('aria-valuenow', 0);
            href = location.href;
        }
        if (ariaValuenow > ariaValuemax) {
            ytpProgressBar.attr('aria-valuenow', ariaValuemax);
        }
        if (ariaValuenow < 0) {
            ytpProgressBar.attr('aria-valuenow', 0);
        }
    }, 100);
    const timerId = setInterval(() => {
        const setting = $('[data-tooltip-title="設定"]');
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
                }
            }, 600);
        }
    }, 1000);
});

function removeAd() {
    remove('.ytp-fullscreen-grid');
}

function remove(selector) {
    var obj = $(selector);
    if (obj.length > 0) {
        obj[0].remove();
        obj.remove();
    }
    const iframe = $('iframe').contents();
    obj = iframe.find(selector);
    if (obj.length > 0) {
        obj[0].remove();
        iframe[0].remove();
        obj.remove();
        iframe.remove();
    }
}