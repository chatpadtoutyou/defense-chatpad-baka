var itemsIndex = 0;

const youtubeTvtokyobizFeaturedId = setInterval(() => {

    const items = $(document).find(`a[aria-label="すべて再生"]`);
    console.log(items);
    if (items.length > 0) {
        const item = items[itemsIndex++];
        item.click();
        items.shift();
        if (items.length <= 0) {
            clearInterval(youtubeTvtokyobizFeaturedId);
            return;
        }
    }

}, 1000);
