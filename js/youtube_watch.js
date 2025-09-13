var ytpProgressBar = {};
var ariaValuemax = {};
var ariaValuenow = {};
var videoPlayer = {};
var href = "";
var errorScreen = 0;
var unstartedMode = 0;

$(() => {
    setInterval(() => {
        ytpProgressBar = $('.ytp-progress-bar');
        ariaValuemax = Number(ytpProgressBar.attr('aria-valuemax'));
        ariaValuenow = Number(ytpProgressBar.attr('aria-valuenow'));
        videoPlayer = $('.html5-video-player');
        video = document.querySelector("video");

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

        if ($('.ytp-autonav-endscreen-cancelled-state').is(":visible")) {
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

//skipAd();

$(document).on('click mouseup', '.ytp-next-button.ytp-button', (e) => {
    console.log('next-button');
    //skipAd();
});

$(document).on('click mouseup', '#wc-endpoint', (e) => {
    console.log('wc-endpoint');
    //skipAd();
});

function setAriaValuenow(value) {
    if (href != location.href) {
        ytpProgressBar = $('.ytp-progress-bar');
        ytpProgressBar.attr('aria-valuenow', value);
        href = location.href;
    }
}

function skipAd() {

    if (href != location.href) {

        var readyIndex = 0;

        const youtubeWatchTimeId = setInterval(() => {
            console.log(readyIndex);
            if (readyIndex++ >= 50) {
                clearInterval(youtubeWatchTimeId);
                return;
            }

            videoPlayer = $('.html5-video-player');

            if (videoPlayer.hasClass('ad-showing')) {
                location.reload();
            }

        }, 1);

        href = location.href;
    }
}

function removeAd() {
    remove('.ytp-more-videos-view.ytp-scroll-min');
    remove('.ytp-pause-overlay-container');
    remove('#yt-haven-info-box');
}

function remove(selector) {
    const obj = $(selector);
    console.log(obj);
    if (obj.length > 0) {
        obj.remove();
    }
}