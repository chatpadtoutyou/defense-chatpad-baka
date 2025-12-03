$(() => {
    removeAd();
});

clickLink('[aria-label="検索"]', 'click mousedown mouseup mouseenter mouseleave');

function clickLink(selector, events) {
    $(selector).on(events, (e) => {
        removeAd();
    });
}

function removeAd() {
    $('[aria-label="スポンサー"]').parents().eq(3).remove();
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
