setTimeout(() => {
    $('[name="telno"]').val("07044964019");
    $('[name="postCode1"]').val("640");
    $('[name="postCode2"]').val("8432");
    $('[name="birth"]').val("19810315");
    scrollTo(0, 100);
    setTimeout(() => {
        $('.login_btn').click();
        $('.login_btn').parent().click();
    }, 200);
}, 500);
