$(() => {
    $('[name="name"]').val('look-sea.xyz');
    $('[name="limit"]').val(15);
    setTimeout(() => {
        $('[name="submit"]').click();
    }, 1000);
});
