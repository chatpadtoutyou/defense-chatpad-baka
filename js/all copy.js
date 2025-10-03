clickLink('a', 'click mouseup');
clickLink('button', 'click mouseup');
clickLink('input', 'click mouseup');

function clickLink(selector, events) {
    $(selector).on(events, (e) => {
        const target = $(e.target);
        console.log(target);
        setTimeout(() => {
            target.removeAttr('disabled');
            target.removeClass('disable');
            target.removeClass('disabled');
        }, 100);
        target.click();
    });
}
