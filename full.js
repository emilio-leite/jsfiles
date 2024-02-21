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
    e.src = (t ? "https:" : "http:") + "//securepubads.g.doubleclick.net/tag/js/gpt.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(e, s)
}
(), (googletag = googletag || {}).cmd = googletag.cmd || [], googletag.cmd.push(function () {
    googletag.defineSlot("/57671086/PU176365_ST322712_PL12431898_SZ728x90_APN", [970, 90], "PU176365_ST322712_PL12431898_SZ728x90_APN").addService(googletag.pubads()), googletag.pubads().enableSingleRequest(), googletag.pubads().disableInitialLoad(), googletag.enableServices(), document.getElementById("dt_12431898").innerHTML = "<div id='PU176365_ST322712_PL12431898_SZ728x90_APN'></div>";
    var e = document.createElement("script"), t = document.getElementById("dt_12431898");
    e.text = "googletag.cmd.push(function() {  googletag.display('PU176365_ST322712_PL12431898_SZ728x90_APN');})", t.parentNode.insertBefore(e, t)
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
var sizesDesktop = [[970, 90], [970, 66], [728, 90], [300, 600], [300, 250], [970, 250]], sizesTablet = [[970, 90], [300, 600], [300, 250]], sizesPhone = [[300, 250], [320, 50]], adUnits = [{
    code: "PU176365_ST322712_PL12431898_SZ728x90_APN",
    mediaTypes: {banner: {sizes: [[970, 90]]}},
    labelAny: ["desktop", "tablet", "phone"],
    bids: [{bidder: "appnexus", params: {placementId: "12431898"}}, {bidder: "sovrn", params: {tagid: "533565", sizes: [970, 90]}}, {
        bidder: "rubicon",
        params: {accountId: "10912", siteId: "25904", zoneId: "141366", sizes: [43], keywords: ["98"]}
    }]
}];
apstag.init({pubID: "605afddd-eb51-4e15-8fb5-80cab8388a37", adServer: "googletag"});
var apstagSlots = [{slotID: "", slotName: "/57671086/PU176365_ST322712_PL12431898_SZ728x90_APN", sizes: [[970, 90]]}];

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
            priceGranularity: "high",
            sizeConfig: [{mediaQuery: "(min-width: 1px)", sizesSupported: sizesDesktop, labels: ["desktop"]}, {
                mediaQuery: "(min-width: 768px) and (max-width: 1024px)",
                sizesSupported: sizesTablet,
                labels: ["tablet"]
            }, {mediaQuery: "(min-width: 20px) and (max-width: 768px)", sizesSupported: sizesPhone, labels: ["phone"]}],
            userSync: {iframeEnabled: !0, filterSettings: {iframe: {bidders: "*", filter: "include"}}}
        }), pbjs.requestBids({
            bidsBackHandler: function (e) {
                n("prebid")
            }
        }), pbjs.bidderSettings = {
            rubicon: {
                bidCpmAdjustment: function (e) {
                    return console.log("Rubicon bid adjust: " + .85 * e), .85 * e
                }
            }
        }
    }), apstag.fetchBids({slots: a.apstagSlots}, function (e) {
        n("a9")
    }), window.setTimeout(function () {
        i()
    }, 2e3)
}

fetchHeaderBids(apstagSlots, adUnits);
