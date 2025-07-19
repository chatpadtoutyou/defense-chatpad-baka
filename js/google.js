$(() => {
    removeAd();
});

setTimeout(() => {
    removeAd();
}, 1000);

function removeAd() {
    remove('.ADHj4e');
}

function remove(selector) {
    const obj = $(selector);
    if (obj.length > 0) {
        obj.remove();
    }
}