$(() => {
    $('[name="email"]').val('bestubuntu957@gmail.com');
    $('[name="password"]').val('aA190500');
    setTimeout(() => {
        clickLink('.a-button-input');
        clickLink('.loginBtn.google');
    }, 1000);
    setTimeout(() => {
        clickLink('[data-qa="base_google_login_button"]');
        clickLink('[data-qa="signedin_workspace_link_1"]');
        clickLink('[data-testid="welcome-login-button"]');
        clickLink('[data-testid="welcome-login-button"]');
        clickLink('[data-dd-action-name="Continue with Google"]');
        clickLink('[data-name="switch_account_request"]');
    }, 2000);
    setTimeout(() => {
        clickLink('[data-qa="error_reload"]');
    }, 3000);
    setTimeout(() => {
        clickLink('[data-qa="ssb_redirect_open_in_browser"]');
        clickLink('button:contains("通知を有効にする")');
    }, 6000);
});

function clickLink(selector) {
    var link = $(selector);
    if (link.length > 0) {
        link[0].click();
    }
}
