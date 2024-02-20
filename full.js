window.onload = function() {
    window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function () {
        googletag.pubads().disableInitialLoad();
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
    });

    var adUnits = [
        {
            code: '/57671086/cyclenews_first',
            mediaTypes: {banner: {sizes: [[300, 250], [970, 250]]}},
            bids: [
                {bidder: 'rubicon', params: {accountId: '10912', siteId: '25904', zoneId: '141306'}},
                {bidder: 'appnexus', params: {placementId: '15792792'}},
            ]
        },
    ];

    var pbjs = pbjs || {};
    pbjs.que = pbjs.que || [];

    pbjs.que.push(function () {
        pbjs.addAdUnits(adUnits);
        pbjs.setConfig({
            useBidCache: true,
        });
        pbjs.requestBids({
            timeout: 1500,
            bidsBackHandler: initAdserver
        });
    });

    function initAdserver() {
        if (pbjs.initAdserverSet) return;
        pbjs.initAdserverSet = true;
        googletag.cmd.push(function () {
            pbjs.que.push(function () {
                pbjs.setTargetingForGPTAsync();
                googletag.pubads().refresh();
            });
        });
    }

    googletag.cmd.push(function () {
        var mapping1 = googletag.sizeMapping()
            .addSize([990, 400], [[970, 250]])
            .addSize([0, 0], [[300, 250]])
            .build();

        googletag.defineSlot('/57671086/cyclenews_first', [[300, 250], [970, 250]], 'div-gpt-ad-4168372-1')
            .defineSizeMapping(mapping1)
            .addService(googletag.pubads());

        googletag.pubads().setTargeting("url", window.location.hostname);
        var pathParts = window.location.pathname.substr(0).split("/");
        googletag.pubads().setTargeting("lp", pathParts[1] ? pathParts[1] : "home");
        googletag.pubads().setTargeting("category", pathParts[2] ? pathParts[2] : "none");
        googletag.pubads().enableLazyLoad({fetchMarginPercent: 0, renderMarginPercent: 0});
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs(true);
        googletag.enableServices();

        googletag.display('div-gpt-ad-4168372-1');
    });

    !function (a9, a, p, s, t, A, g) {
        if (a[a9]) return;

        function q(c, r) {
            a[a9]._Q.push([c, r])
        }

        a[a9] = {
            init: function () {
                q("i", arguments)
            }, fetchBids: function () {
                q("f", arguments)
            }, setDisplayBids: function () {
            }, targetingKeys: function () {
                return []
            }, _Q: []
        };
        A = p.createElement(s);
        A.async = !0;
        A.src = t;
        g = p.getElementsByTagName(s)[0];
        g.parentNode.insertBefore(A, g)
    }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

    // initialize apstag and have apstag set bids on the googletag slots when they are returned to the page
    apstag.init({
        pubID: '605afddd-eb51-4e15-8fb5-80cab8388a37',
        adServer: 'googletag',
        bidTimeout: 2e3
    });

    // request the bids for the four googletag slots
    apstag.fetchBids({
        slots: [
            {
                slotID: 'div-gpt-ad-4168372-1',
                slotName: '/57671086/cyclenews_first',
                sizes: [[300, 250], [970, 250]]
            },
        ]
    }, function (bids) {
        // set apstag bids, then trigger the first request to GAM
        googletag.cmd.push(function () {
            apstag.setDisplayBids();
            googletag.pubads().refresh();
        });
    });
};
