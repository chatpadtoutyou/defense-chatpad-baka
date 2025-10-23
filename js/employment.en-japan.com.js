var adblockTimeIdIndex = 0;

$(() => {
    removeAd();
    const adblockTimeId = setInterval(() => {
        if (adblockTimeIdIndex++ > 0) {
            clearInterval(adblockTimeId);
            return;
        }
        removeAd();
    }, 300);
});

function removeAd() {
    remove('#favoriteCountArea');
}

function remove(selector) {
    const obj = $(selector);
    if (obj.length > 0) {
        obj.remove();
    }
}