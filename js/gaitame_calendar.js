$(() => {
    setInterval(() => {
        const iframe = $('iframe').contents();
        obj = iframe.find('.reload-btn');
        if (obj.length > 0) {
            obj.click();
        }
    }, 2000);
});
