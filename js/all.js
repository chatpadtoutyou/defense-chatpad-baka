clickLink('a', 'click mousedown mouseup mouseenter mouseleave touchstart touchmove touchend touchcancel');
clickLink('button', 'click mousedown mouseup mouseenter mouseleave touchstart touchmove touchend touchcancel');
clickLink('input', 'click mousedown mouseup mouseenter mouseleave touchstart touchmove touchend touchcancel');
clickLink('div', 'click mousedown mouseup mouseenter mouseleave touchstart touchmove touchend touchcancel');

function clickLink(selector, events) {
    $(selector).on(events, (e) => {
        const target = $(e.target);
        console.log(target);
        target.removeAttr('disable');
        target.removeAttr('disabled');
        target.removeAttr('data-disabled');
        target.removeClass('disable');
        target.removeClass('disabled');
        target.removeClass('data-disabled');
    });
}

