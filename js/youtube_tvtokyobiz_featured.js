const items = ['経済', 'マーケット', '国際', '政治'];
var itemsIndex = 0;
const background = ['e8c3c3', 'e8d3c3', 'e8e5c3', 'd9e8c3', 'c3e8cd', 'c3e8e4', 'c3d9e8', 'c3cae8', 'cfc3e8', 'e4c3e8'];
var backgroundIndex = 0;
const youtubeTvtokyonews = setInterval(() => {

    const item = items[itemsIndex];
    const tag = $(document).find(`.yt-simple-endpoint.style-scope.ytd-shelf-renderer[title="${item}"]`);
    console.log(tag);

    if (tag.length > 0) {
        const href = tag.attr('href');
        const url = `https://www.youtube.com${href}`;
        const title = item;
        const targetTag = $('#contents');

        targetTag.before(`<a href="${url}" id="youtube_link${itemsIndex}" target="_blank" style="color:black;font-size:19px;background:#${background[backgroundIndex++]}">${title}</a> `);
        if (backgroundIndex >= background.length) {
            backgroundIndex = 0;
        }

        $(`#youtube_link${itemsIndex}`)[0].dispatchEvent(new MouseEvent("click", { ctrlKey: true }));
        ++itemsIndex;

        if (itemsIndex == items.length) {
            clearInterval(youtubeTvtokyonews);
            return;
        }
    }

}, 500);
