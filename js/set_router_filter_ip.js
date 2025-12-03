setTimeout(() => {
    $('.MENU_SECURITY').css("display", "block");
}, 2000);
setTimeout(() => {
    $('[data-main="filter_ip.html"]').click();
}, 2100);
/*
const settings = [
    {
        'sel_direction': 'LAN',
        'H_sour_ip': '128.0.0.0/1',
        'H_dest_ip': '104.128.0.0/9',
    },
]
*/
const ips = [
    '104.128.0.0/9',
    '108.59.80.0/20',
    '130.211.0.0/16',
    '146.148.0.0/17',
    '162.216.0.0/13',
    '173.255.112.0/20',
    '192.158.28.0/22',
    '199.192.0.0/11',
    '23.224.0.0/11',
    '34.0.0.0/7',
    '8.34.0.0/15',
];
const sel_directions = [
    {
        "sel_direction": "LAN",
        "H_sour_ip": "128.0.0.0/1",
    }
    /*
    {
        "sel_direction": "WAN",
        "H_dest_ip": "128.0.0.0/1",
    },
    */
];

var timeOut = 3000;
setTimeout(() => {
    for (const ip of ips) {
        const contentmain = $('#content_main').contents();
        if (contentmain.find(`.AD_LIST:contains('${ip}')`).length > 0) {
            console.log(ip);
            continue;
        }
        sel_directions.forEach(element => {
            contentmain.find('[name="sel_direction"]').val(element.sel_direction);
            contentmain.find('[name="H_sour_ip"]').val(element.H_sour_ip ?? ip);
            contentmain.find('[name="H_dest_ip"]').val(element.H_dest_ip ?? ip);
            contentmain.find('[name="sela"]').val('REJECT');
            contentmain.find('#radio_proto_all').click();
            contentmain.find('[name="Do_ADDtop"]').click();
            timeOut += 3000;
            setTimeout(() => {
                location.href = location.href;
            }, timeOut);
        });
    }
}, timeOut);
