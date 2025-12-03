var ytpProgressBar = {};
var ariaValuemax = {};
var ariaValuenow = {};
chrome.storage.local.set({ 'youtube_watch': 0 });

skipAd();

$(document).on('click mouseup', '.ytp-next-button.ytp-button', (e) => {
    console.log('next-button');
    chrome.storage.local.set({ 'youtube_watch': 0 });
    skipAd();
});

$(document).on('click mouseup', '#wc-endpoint', (e) => {
    console.log('wc-endpoint');
    chrome.storage.local.set({ 'youtube_watch': 0 });
    skipAd();
});

function skipAd() {

    ytpProgressBar = $('.ytp-progress-bar');
    ariaValuemax = ytpProgressBar.attr('aria-valuemax');
    ariaValuenow = ytpProgressBar.attr('aria-valuenow');

    const youtubeWatchTimeId = setTimeout(() => {
        chrome.storage.local.get('youtube_watch', data => {
            console.log(data);
            if (data !== undefined && data > 0) {
                clearInterval(youtubeWatchTimeId);
                return;
            } else {
                chrome.storage.local.set({ 'youtube_watch': 1 });
                ytpProgressBar.attr('aria-valuenow', ariaValuemax);
            }
        });
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
