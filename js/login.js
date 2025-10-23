$(() => {
    $('[name="email"]').val('bestubuntu957@gmail.com');
    $('[name="password"]').val('aA190500');
    setTimeout(() => {
        clickLink('.a-button-input');
    }, 500);
    setTimeout(() => {
        clickLink('.loginBtn.google');
        clickLink('[data-qa="find_your_workspace"]');
        clickLink('[data-dd-action-name="Continue with Google"]');
        clickLink('[data-qa="base_google_login_button"]');
    }, 1000);
    setTimeout(() => {
        clickLink('[data-qa="signedin_workspace_link_1"]');
        clickLink('[data-testid="welcome-login-button"]');
        clickLink('[data-name="switch_account_request"]');
        clickLink('[data-qa="current_workspaces_open_link"]');
    }, 2000);
    setTimeout(() => {
        clickLink('[data-clog-ui-component="inc_workspaces_list"]');
        clickLink('[aria-describedby="apptime-develop"]');
        clickLink('[data-qa="error_reload"]');
        clickLink('button:contains("ログイン")');
        clickLink('[value="ログイン"]');
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
