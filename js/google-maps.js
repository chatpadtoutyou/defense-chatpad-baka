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
    $('[aria-label="スポンサー"]').parents('.Nv2PK.THOPZb').remove();
}

function remove(selector) {
    const obj = $(selector);
    if (obj.length > 0) {
        obj.remove();
    }
}