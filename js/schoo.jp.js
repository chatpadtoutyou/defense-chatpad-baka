$(() => {
    removeAd();
});

function removeAd() {
    remove('.m_count');
    remove('.reviewCount');
}

function remove(selector) {
    const obj = $(selector);
    if (obj.length > 0) {
        obj.remove();
    }
}