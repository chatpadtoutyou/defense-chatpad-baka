var ytpProgressBar = {};
var ariaValuemax = {};
var ariaValuenow = {};
var videoPlayer = {};

skipAd();

$(document).on('click mouseup', '.ytp-next-button.ytp-button', (e) => {
    console.log('next-button');
    skipAd();
});

$(document).on('click mouseup', '#wc-endpoint', (e) => {
    console.log('wc-endpoint');
    skipAd();
});

function skipAd() {

    var readyIndex = 0;

    const youtubeWatchTimeId = setInterval(() => {
        console.log(readyIndex);
        if (readyIndex++ >= 50) {
            clearInterval(youtubeWatchTimeId);
            return;
        }

        ytpProgressBar = $('.ytp-progress-bar');
        ariaValuemax = ytpProgressBar.attr('aria-valuemax');
        ariaValuenow = ytpProgressBar.attr('aria-valuenow');
        videoPlayer = $('.html5-video-player');

        if (videoPlayer.hasClass('ad-showing')) {
            $('.ytp-mute-button.ytp-button[title="ミュート（消音）（m）"]').click();
            ytpProgressBar.attr('aria-valuenow', ariaValuemax);
        } else {
            $('.ytp-mute-button.ytp-button[title="ミュート解除（m）"]').click();
        }

    }, 1);
}
setInterval(() => {

    ytpProgressBar = $('.ytp-progress-bar');
    ariaValuemax = ytpProgressBar.attr('aria-valuemax');
    ariaValuenow = ytpProgressBar.attr('aria-valuenow');

    if (Number(ariaValuenow) > Number(ariaValuemax)) {
        ytpProgressBar.attr('aria-valuenow', ariaValuemax);
    }

}, 3000);

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
                setTimeout(async () => {
                    try {
                        const primaryScreen = (await getScreenDetails()).screens.find(
                            (screen) => screen.isPrimary,
                        );
                        await document.body.requestFullscreen({ screen: primaryScreen });
                    } catch (err) {
                        console.log(err);
                    }
                }, 1500);
            }
        }, 600);
    }
}, 1000);
