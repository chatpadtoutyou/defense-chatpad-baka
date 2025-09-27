var tag = null;
var items = null;
var itemsIndex = 0;
const loop = 80;
const background = ['e8c3c3', 'e8d3c3', 'e8e5c3', 'd9e8c3', 'c3e8cd', 'c3e8e4', 'c3d9e8', 'c3cae8', 'cfc3e8', 'e4c3e8'];
var backgroundIndex = 0;
const widths = ['100%', '99.9936px'];

setTimeout(() => {

    tag = '.yt-simple-endpoint.style-scope.ytd-playlist-panel-video-renderer';
    items = $(tag);
    if (items.length == 0) {
        location.reload();
    }

    if (itemsIndex < loop) {
        $('#full-bleed-container').hide();
        $('#player').hide();
        setInterval(() => {
            video = document.querySelector("video");
            if (video != null) {
                video.muted = true;
                video.pause();
            }
        }, 100);
    }

    const youtubeWatchListTimeId = setInterval(() => {
        if (itemsIndex >= loop) {
            clearInterval(youtubeWatchListTimeId);
            return;
        }
        const item = items[itemsIndex++];
        const jItem = $(item);
        const progress = jItem.find('.style-scope.ytd-thumbnail-overlay-resume-playback-renderer');
        if (progress.length > 0 && widths.includes($(progress[0]).css('width'))) {
            return;
        }
        const href = jItem.attr('href');
        if (href == null) {
            return;
        }
        const match = href.match(/\/watch\?v=(.+?)&(.+?)/);
        const url = `https://www.youtube.com/watch?v=${match[1]}`;
        const title = jItem.find('#video-title').text();
        const targetTag = $('#above-the-fold.style-scope.ytd-watch-metadata');
        targetTag.before(`<a href="${url}" id="youtube_watch${itemsIndex}" target="_blank" style="color:black;font-size:19px;background:#${background[backgroundIndex++]}">${itemsIndex}.${title}</a><br>`);
        targetTag
        if (backgroundIndex >= background.length) {
            backgroundIndex = 0;
        }
        $(`#youtube_watch${itemsIndex}`)[0].dispatchEvent(new MouseEvent("click", { ctrlKey: true }));
    }, 100);

}, 3000);
