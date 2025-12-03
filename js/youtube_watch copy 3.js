var readyIndex = 0;
var ytpProgressBar = {};
var ariaValuemax = {};
var ariaValuenow = {};
var videoPlayer = {};
var video = { muted: true, currentTime: 0 };

const youtubeWatchTimeId = setInterval(() => {
    console.log(readyIndex);

    if (readyIndex++ >= 100) {
        clearInterval(youtubeWatchTimeId);
        return;
    }

    ytpProgressBar = $('.ytp-progress-bar');
    ariaValuemax = ytpProgressBar.attr('aria-valuemax');
    ariaValuenow = ytpProgressBar.attr('aria-valuenow');
    videoPlayer = $('.html5-video-player');
    video = document.querySelector("video");

    checkAdShowing();

}, 1);

setInterval(() => {

    ytpProgressBar = $('.ytp-progress-bar');
    ariaValuemax = ytpProgressBar.attr('aria-valuemax');
    ariaValuenow = ytpProgressBar.attr('aria-valuenow');
    videoPlayer = $('.html5-video-player');
    video = document.querySelector("video");

    if (Number(ariaValuenow) > Number(ariaValuemax)) {
        setCurrentTime();
    }

}, 3000);

function checkAdShowing() {
    if (videoPlayer.hasClass('ad-showing')) {
        setCurrentTime();
        video.muted = true;
        $('.ytp-mute-button.ytp-button[title="ミュート（消音）（m）"]').click();
    } else {
        video.muted = false;
        $('.ytp-mute-button.ytp-button[title="ミュート解除（m）"]').click();
    }
}

function setCurrentTime() {
    video.preload = 'none';
    video.currentTime = 9999;
    ytpProgressBar.attr('aria-valuenow', ariaValuemax);
    location.reload();
}

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
