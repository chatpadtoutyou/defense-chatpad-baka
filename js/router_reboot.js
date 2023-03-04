const password = $('input[type="password"]');
if (password.length > 0) {
    password.val('password');
    setTimeout(() => { $('.button_login').click(); }, 200);
    setTimeout(() => { location.href = 'http://192.168.1.1/cgi-bin/cgi?req=twz&reboot=1' }, 250);
}
const panel_advanced = $('.panel_advanced');
if (panel_advanced.length > 0) {
    setTimeout(() => { $('.panel_advanced').click(); }, 1000);
    setTimeout(() => { location.href = 'http://192.168.1.1/cgi-bin/cgi?req=frm&frm=advanced.html&CAT=DIAG&ITEM=SYSTEM&reboot=1' }, 1050);
}
