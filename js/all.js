$(() => {
    $('body').css('overflow', 'auto');
});

clickLink('a');
clickLink('button');
clickLink('input');
clickLink('div');

function clickLink(selector) {
    $(selector).on('click mousedown', (e) => {
        const target = $(e.target);
        removeDisable(target);
        removeDisable(target.find('a'));
        removeDisable(target.find('button'));
        removeDisable(target.find('input'));
    });
}

function removeDisable(target) {
    target.removeAttr('disable');
    target.removeAttr('disabled');
    target.removeAttr('data-disabled');
    target.removeClass('disable');
    target.removeClass('disabled');
    target.removeClass('data-disabled');
}