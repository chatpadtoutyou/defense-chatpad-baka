$(() => {
    removeAd();
});

setInterval(() => {
    removeAd();
}, 2000);

clickLink('[aria-label="検索"]', 'click mousedown mouseup mouseenter mouseleave');

function clickLink(selector, events) {
    $(selector).on(events, (e) => {
        removeAd();
    });
}

function removeAd() {
    remove('.dmRWX');
    $('[aria-label="スポンサー"]').parents('.Ppzolf').remove();
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
