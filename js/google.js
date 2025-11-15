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
    remove('[jscontroller="B2qlPe"]');
}

function remove(selector) {
    var obj = $(selector);
    if (obj.length > 0) {
        obj.remove();
    }
    const iframe = $('iframe').contents();
    obj = iframe.find(selector);
    if (obj.length > 0) {
        obj.remove();
        iframe.remove();
    }
}
