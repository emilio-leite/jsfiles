!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

        // initialize apstag and have apstag set bids on the googletag slots when they are returned to the page
        apstag.init({
            pubID: '605afddd-eb51-4e15-8fb5-80cab8388a37',
            adServer: 'googletag',
            bidTimeout: 2e3
        });

        // request the bids for the four googletag slots
        apstag.fetchBids({
            slots: [{
                slotID: 'div-gpt-ad-4168372-1', 
                slotName: '/57671086/cyclenews_first', 
                sizes: [[300,250],[970,250]]
            },
            {
                slotID: 'div-gpt-ad-4168372-2',
                slotName: '/57671086/cyclenews_second', 
                sizes: [[300,250]]
            },
            {
                slotID: 'div-gpt-ad-4168372-3',
                slotName: '/57671086/cyclenews_third', 
                sizes: [[300,250],[300,600]]
            },
            {
                slotID: 'div-gpt-ad-4168372-4',
                slotName: '/57671086/cyclenews_fourth', 
                sizes: [[320,50],[320,100],[300,250],[728,90]]
            },
            {
                slotID: 'div-gpt-ad-4168372-5',
                slotName: '/57671086/cyclenews_fifth', 
                sizes: [[320,50],[320,100],[300,250],[728,90]]
            }
            ]
        }, function(bids) {
            // set apstag bids, then trigger the first request to GAM
            googletag.cmd.push(function() {
                apstag.setDisplayBids();
                googletag.pubads().refresh();
            });
        });
