var videoPlayer = {};
var readyIndex = 0;

setInterval(() => {

    const ytpProgressBar = $('.ytp-progress-bar');
    const ariaValuemax = ytpProgressBar.attr('aria-valuemax');
    const ariaValuenow = ytpProgressBar.attr('aria-valuenow');
    const nextbutton = $('.ytp-next-button.ytp-button');
    const wcEndpoint = $('#wc-endpoint');

    if (readyIndex == 0) {
        ytpProgressBar.attr('aria-valuenow', ariaValuemax);
        ++readyIndex;
    }

    if (Number(ariaValuenow) > Number(ariaValuemax)) {
        //ytpProgressBar.attr('aria-valuenow', ariaValuemax);
        //readyIndex = 0;
    }

    $(document).on('click mouseup', nextbutton, (e) => {
        //ytpProgressBar.attr('aria-valuenow', ariaValuemax);
        //readyIndex = 0;
    });

    $(document).on('click mouseup', wcEndpoint, (e) => {
        //ytpProgressBar.attr('aria-valuenow', ariaValuemax);
        //readyIndex = 0;
    });

    videoPlayer = $('.html5-video-player');

    if (videoPlayer.hasClass('ad-showing')) {
        ytpProgressBar.attr('aria-valuenow', ariaValuemax);
        readyIndex = 0;
        location.reload();
    }

}, 10);

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
