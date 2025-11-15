var href = "";
var ad = false;
var src = "";

$(() => {
    setInterval(() => {
        //if (src != video.src && video.src != "") {
        //    src = video.src;
        //    video.src = "";
        //}
        //jVideo = $(video);
        //video.autoplay = false;
        //video.preload = "metadata";
        //jVideo.removeAttr('autoplay');
        const timer = $('.atvwebplayersdk-ad-timer-countdown');
        if (timer.length > 0 && timer.is(":visible")) {
            video = document.querySelector("video");
            console.log(video);
            if (video != null) {
                video.onplay = () => {
                    video.muted = true;
                    video.currentTime = 70;
                };
            }
            //$('.atvwebplayersdk-seekbar-range').attr('value', '100');
            ad = true;
        } else {
            if (ad) {
                video.onplay = (event) => {
                    video.currentTime = 0;
                    //$('input[type="range"]').attr('value', '0');
                    //$('[aria-label^="Seek Back"]').click();
                    video.muted = false;
                    //video.src = src;
                };
                ad = false;
            }
        }
    }, 1000);
});
