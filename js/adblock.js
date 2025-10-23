var adblockTimeIdIndex = 0;

$(() => {
    removeAd();
    const adblockTimeId = setInterval(() => {
        if (adblockTimeIdIndex++ > 5) {
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
    remove('[class$="_pr"]');
    remove('[id$="Ad"]');
    remove('[class^="pr-"]');
    remove('.yjAdImage');
    remove('.yjAdLink');
    remove('[src*="yads"]');
    remove('#im-adv');
    remove('#im-adv');
    remove('.onetrust-pc-dark-filter.ot-fade-in');
    remove('.wp-block-image');
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
        obj.remove();
        obj[0].remove();
        iframe.remove();
        iframe[0].remove();
    }
}
