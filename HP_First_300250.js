function sendAdserverRequest() {
    pbjs.adserverRequestSent || (pbjs.adserverRequestSent = !0, googletag.cmd.push(function () {
        pbjs.que.push(function () {
            pbjs.setTargetingForGPTAsync(), googletag.pubads().refresh()
        })
    }))
}

var googletag;
(googletag = googletag || {}).cmd = googletag.cmd || [], function () {
    var e = document.createElement("script");
    e.async = !0, e.type = "text/javascript";
    var t = "https:" == document.location.protocol;
    e.src = (t ? "https:" : "http:") + "//pagead2.googlesyndication.com/tag/js/gpt.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(e, s)
}
(), (googletag = googletag || {}).cmd = googletag.cmd || [], googletag.cmd.push(function () {
    googletag.defineSlot("/2927662/HP_First", [[300, 250]], "div-gpt-ad-5048753-1").addService(googletag.pubads()), googletag.pubads().enableSingleRequest(), googletag.pubads().disableInitialLoad(), googletag.enableServices();
    var e = document.createElement("script"), t = document.getElementById("div-gpt-ad-5048753-1");
    e.text = "googletag.cmd.push(function() {  googletag.display('div-gpt-ad-5048753-1');})", t.parentNode.insertBefore(e, t)
});
var imported = document.createElement("script");
imported.src = "//cdn.digitalthrottle.com/pub/dtpbid.js", document.head.appendChild(imported), function (e, t, s, a, n, i, o) {
    function d(s, a) {
        t[e]._Q.push([s, a])
    }

    t[e] || (t[e] = {
        init: function () {
            d("i", arguments)
        }, fetchBids: function () {
            d("f", arguments)
        }, setDisplayBids: function () {
        }, targetingKeys: function () {
            return []
        }, _Q: []
    }, (i = s.createElement(a)).async = !0, i.src = "//c.amazon-adsystem.com/aax2/apstag.js", (o = s.getElementsByTagName(a)[0]).parentNode.insertBefore(i, o))
}
("apstag", window, document, "script");
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
var adUnits = [{
    code: '/2927662/HP_First',
    mediaTypes: {banner: {sizes: [[300, 250]]}},
    bids: [
        {bidder: 'rubicon', params: {accountId: '10912', siteId: '25904', zoneId: '141306'}},
        {bidder: 'appnexus', params: {placementId: '15792792'}},
    ]
}];
apstag.init({
    pubID: '605afddd-eb51-4e15-8fb5-80cab8388a37',
    adServer: 'googletag',
    bidTimeout: 2e3
});
var apstagSlots = [{slotID: "-1", slotName: "/2927662/HP_First", sizes: [[300, 250]]}];

function fetchHeaderBids(e, t) {
    var s = ["a9", "prebid"], a = {adserverRequestSent: !1, apstagSlots: e, adUnits: t};

    function n(e) {
        !0 !== a.adserverRequestSent && ("a9" === e ? a.a9 = !0 : "prebid" === e && (a.prebid = !0), s.map(function (e) {
            return a[e]
        }).filter(Boolean).length === s.length && i())
    }

    function i() {
        !0 !== a.adserverRequestSent && (a.adserverRequestSent = !0, googletag.cmd.push(function () {
            apstag.setDisplayBids(), pbjs.setTargetingForGPTAsync(), googletag.pubads().refresh()
        }))
    }

    s.forEach(function (e) {
        a[e] = !1
    }), pbjs.que.push(function () {
        pbjs.addAdUnits(a.adUnits), pbjs.setConfig({
            useBidCache: true,
        }), pbjs.requestBids({
            timeout: 1500,
            bidsBackHandler: initAdserver
        })
    }), apstag.fetchBids({slots: a.apstagSlots}, function (e) {
        n("a9")
    }), window.setTimeout(function () {
        i()
    }, 2e3)
}

fetchHeaderBids(apstagSlots, adUnits);