var adblockTimeIdIndex = 0;

$(() => {
    removeAd();
    const adblockTimeId = setInterval(() => {
        if (adblockTimeIdIndex++ > 4) {
            clearInterval(adblockTimeId);
            return;
        }
        removeAd();
    }, 200);
});

function removeAd() {
    remove('.amzn-safe-frame-container');
    remove('.leaderboard-wrapper');
    remove('.leaderboard-container');
    remove('.style-5h0vi8');
    remove('#recover');
    remove('#ss_pptag');
    remove('#ss_pptag__script');
    remove('.rad');
    remove('#brand_panel');
    remove('.style-1fz8org');
    remove('[id^="yjdad"]');
    remove('[class^="yjAd"]');
    remove('[class^="yjdad"]');
    remove('[class^="yads"]');
    remove('[id^="yads"]');
    remove('[class="adLink"]');
    //remove('[class*="ad-content"]'); //chatgpt
    remove('.gptAd');
    remove('[data-i-url^="https://ads-"]');
    remove('[id="adLink"]');
    remove('[id^="google_ads"]');
    remove('[name^="google_ads"]');
    remove('[src^="https://ad."]');
    remove('[src^="https://ad-"]');
    remove('[href^="https://ads."]');
    remove('[id="google-center-div"]');
    remove('.adsbygoogle');
    remove('.AdHolder');
    remove('[class*="banner"]');
    remove('[class*="Banner"]');
    remove('[class^="ad-"]');
    remove('[id*="banner"]');
    remove('[id*="Banner"]');
    remove('[class$="Ad"]');
    remove('[id$="Ad"]');
    remove('[id$="-ad"]');
    remove('.yjAdImage');
    remove('.yjAdLink');
    remove('[src*="yads"]');
    remove('#im-adv');
    remove('.onetrust-pc-dark-filter.ot-fade-in');
    remove('.wp-block-image');
    remove('.wtv-dialog__overlay');
}

function remove(selector) {
    var obj = $(selector);
    if (obj.length > 0) {
        obj[0].remove();
    }
    const iframe = $('iframe');
    if (iframe.length > 0) {
        obj = iframe.contents().find(selector);
        if (obj.length > 0) {
            obj[0].remove();
        }
    }
}
