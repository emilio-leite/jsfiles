window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
            googletag.pubads().disableInitialLoad();
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.enableServices();
        });

        var adUnits = [
            {
                code: '/57671086/cyclenews_first',
                mediaTypes: {banner:{sizes: [[300,250],[970,250]]}},
                bids: [
                    {bidder:'rubicon',params:{accountId:'10912',siteId:'25904',zoneId:'141306'}},
                    {bidder:'appnexus',params:{placementId:'15792792'}},
                    {bidder:'openx',params:{delDomain:'//digitalthrottle-d.openx.net',unit:'540691237'}},
                ]
            },
            {
                code: '/57671086/cyclenews_second',
                mediaTypes: {banner:{sizes: [[300,250]]}},
                bids: [
                    {bidder:'rubicon',params:{accountId:'10912',siteId:'25904',zoneId:'141306'}},
                    {bidder:'appnexus',params:{placementId:'15792792'}},
                    {bidder:'openx',params:{delDomain:'//digitalthrottle-d.openx.net',unit:'540691237'}},
                ]
            },
            {
                code: '/57671086/cyclenews_third',
                mediaTypes: {banner:{sizes: [[300,250],[300,600]]}},
                bids: [
                    {bidder:'rubicon',params:{accountId:'10912',siteId:'25904',zoneId:'141306'}},
                    {bidder:'appnexus',params:{placementId:'15792792'}},
                    {bidder:'openx',params:{delDomain:'//digitalthrottle-d.openx.net',unit:'540691237'}},
                ]
            },
            {
                code: '/57671086/cyclenews_fourth',
                mediaTypes: {banner:{sizes: [[320,50],[320,100],[300,250],[728,90]]}},
                bids: [
                    {bidder:'rubicon',params:{accountId:'10912',siteId:'25904',zoneId:'141306'}},
                    {bidder:'appnexus',params:{placementId:'15792792'}},
                    {bidder:'openx',params:{delDomain:'//digitalthrottle-d.openx.net',unit:'540691237'}},
                ]
            },
            {
                code: '/57671086/cyclenews_fifth',
                mediaTypes: {banner:{sizes: [[320,50],[320,100],[300,250],[728,90]]}},
                bids: [
                    {bidder:'rubicon',params:{accountId:'10912',siteId:'25904',zoneId:'141306'}},
                    {bidder:'appnexus',params:{placementId:'15792792'}},
                    {bidder:'openx',params:{delDomain:'//digitalthrottle-d.openx.net',unit:'540691237'}},
                ]
            },
        ];

        var pbjs = pbjs || {};
        pbjs.que = pbjs.que || [];

        pbjs.que.push(function() {
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
            googletag.cmd.push(function() {
                pbjs.que.push(function() {
                    pbjs.setTargetingForGPTAsync();
                    googletag.pubads().refresh();
                });
            });
        }

        googletag.cmd.push(function() {
            var mapping1 = googletag.sizeMapping()
                .addSize([990, 400], [[970, 250]])
                .addSize([0, 0], [[300, 250]])
                .build();

            var mapping2 = googletag.sizeMapping()
                .addSize([748, 400], [[728, 90]])
                .addSize([0, 0], [[320, 50], [320, 100], [300, 250]])
                .build();

            googletag.defineSlot('/57671086/cyclenews_first', [[300,250],[970,250]], 'div-gpt-ad-4168372-1')
                .defineSizeMapping(mapping1)
                .addService(googletag.pubads());
            googletag.defineSlot('/57671086/cyclenews_second', [[300,250]], 'div-gpt-ad-4168372-2')
                .addService(googletag.pubads());
            googletag.defineSlot('/57671086/cyclenews_third', [[300,250],[300,600]], 'div-gpt-ad-4168372-3')
                .addService(googletag.pubads());
            googletag.defineSlot('/57671086/cyclenews_fourth', [[320,50],[320,100],[300,250],[728,90]], 'div-gpt-ad-4168372-4')
                .defineSizeMapping(mapping2)
                .addService(googletag.pubads());
            googletag.defineSlot('/57671086/cyclenews_fifth', [[320,50],[320,100],[300,250],[728,90]], 'div-gpt-ad-4168372-5')
                .defineSizeMapping(mapping2)
                .addService(googletag.pubads());

            googletag.pubads().setTargeting("url", window.location.hostname);
            var pathParts = window.location.pathname.substr(0).split("/");
            googletag.pubads().setTargeting("lp", pathParts[1] ? pathParts[1] : "home");
            googletag.pubads().setTargeting("category", pathParts[2] ? pathParts[2] : "none");
            googletag.pubads().enableLazyLoad({fetchMarginPercent: 0,renderMarginPercent: 0});
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs(true);
            googletag.enableServices();
        });
