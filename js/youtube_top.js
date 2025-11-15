$(() => {
    hideAd();
    setInterval(() => {
        hideAd();
    }, 100);
});

function hideAd() {
    hide('#contents');
}

function hide(selector) {
    const obj = $(selector);
    if (obj.is(":visible") > 0) {
        obj.hide();
    }
}