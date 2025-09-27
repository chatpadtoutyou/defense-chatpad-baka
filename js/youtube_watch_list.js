setTimeout(() => {
    const tag = '.yt-simple-endpoint.style-scope.ytd-playlist-panel-video-renderer';
    const items = $(tag);
    if (items.length == 0) {
        location.reload();
    }
}, 3000);
