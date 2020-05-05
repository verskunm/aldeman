
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"118",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"h2 \\x3e .code\")[0].innerHTML.match(\/[0-9]+\/)[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return parseFloat($(\"#productform \\x3e div.box \\x3e p.price \\x3e strong\")[0].innerHTML.slice(0,-3))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByClassName(\"code\"),b=[];for(i=0;i\u003Ca.length;i++)b[i]=a[i].innerHTML;return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return parseFloat(document.querySelector(\".total\\x3e.price\").innerHTML)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];for(i=0;i\u003C$(\".productdescr \\x3e p\").length;i++){var b=$(\".productdescr \\x3e p\")[i].innerHTML.trim();a[i]=b.match(\/[0-9]+\/)[0]}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return parseFloat(document.querySelectorAll(\".content.clearfix\\x3e.longlabels\\x3e.threecolumn.clearfix\\x3e.column\\x3e.finalbox.seperatorlong.shadow\\x3ep\")[15].innerHTML.replace(\/(^\\s*)|(\\s*$)|(\u003C[^\u003E]*\u003E)\/gm,\"\").match(\/^.{16}(.*).{2}\/i)[1].trim())})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",6],8,16],".split(\".\");return a[2]+\".\"+a[3]}catch(b){console.log(\"No Universal Analytics cookie found\")}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=document.getElementsByTagName(\"script\"),c=!0,d=!0,e=!1,a=len=0;if(c||d||e)for(a,len=b.length;a\u003Clen;a+=1)if(c\u0026\u0026\/www\\.google-analytics\\.com\\\/plugins\\\/ga\\\/inpage_linkid\\.js\/.test(b[a].src)||d\u0026\u0026\/www\\.google-analytics\\.com\\\/analytics\\.js\/.test(b[a].src)||e\u0026\u0026\/stats\\.g\\.doubleclick\\.net\\\/dc\\.js\/.test(b[a].src))return!0;return!1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],";switch(a){case \"start\":return\"Start playing\";case \"pause\":return\"Pause\";case \"buffering\":return\"Buffering\";case \"progress\":return\"Reached \"+",["escape",["macro",10],8,16],"+\"%\";case \"complete\":return\"Reached the end\"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 25===",["escape",["macro",12],8,16],"})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"gtm.historyChange\"===",["escape",["macro",14],8,16],"\u0026\u0026",["escape",["macro",15],8,16],"?",["escape",["macro",16],8,16],"+\"#\"+",["escape",["macro",15],8,16],":void 0})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",18],8,16],";!a.matches(\"a\")\u0026\u0026!a.matches(\"body\");)a=a.parentElement;return a.matches(\"a\")?a:void 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionId"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"user_transaction_ids"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/(,|^)",["escape",["macro",20],9],"\/.test(",["escape",["macro",21],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var b=\"\";if(",["escape",["macro",20],8,16],"){var a=new Date;a.setTime(a.getTime()+63072E6);a=\"expires\\x3d\"+a.toUTCString();",["escape",["macro",21],8,16],"\u0026\u0026(b=",["escape",["macro",21],8,16],"+\",\");document.cookie=\"user_transaction_ids\\x3d\"+b+",["escape",["macro",20],8,16],"+\"; \"+a+\"; path\\x3d\/\"}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"availability"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"==",["escape",["macro",24],8,16],"||null==",["escape",["macro",24],8,16],"?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var g=[{name:\"EMAIL\",regex:\/.{4}@.{4}\/g}],f=\"_\"+a.get(\"trackingId\")+\"_sendHitTask\",h=window[f]=window[f]||a.get(\"sendHitTask\"),b,c,d,e;a.set(\"sendHitTask\",function(a){c=a.get(\"hitPayload\").split(\"\\x26\");for(b=0;b\u003Cc.length;b++)d=c[b].split(\"\\x3d\"),e=decodeURIComponent(decodeURIComponent(d[1])),g.forEach(function(a){e=e.replace(a.regex,\"[REDACTED \"+a.name+\"]\")}),d[1]=encodeURIComponent(e),c[b]=d.join(\"\\x3d\");a.set(\"hitPayload\",c.join(\"\\x26\"),!0);h(a)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=(new Date).getTime();\"undefined\"!==typeof performance\u0026\u0026\"function\"===typeof performance.now\u0026\u0026(a+=performance.now());return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(c){var b=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"===c?b:b\u00263|8).toString(16)})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var h=4,k=5,l=7;return function(a){var m,b,g;\"number\"===typeof h\u0026\u0026a.set(\"dimension\"+h,a.get(\"clientId\"));\"number\"===typeof k\u0026\u0026a.set(\"dimension\"+k,a.get(\"hitType\"));if(\"number\"===typeof l){var c=\"_\"+a.get(\"trackingId\")+\"_sendHitTask\";var n=window[c]=window[c]||a.get(\"sendHitTask\");a.set(\"sendHitTask\",function(a){try{m=a.get(\"hitPayload\"),b=a.get(\"hitPayload\"),g=\"\\x26cd\"+l,-1\u003Cb.indexOf(g+\"\\x3d\")?console.log(\"Google Analytics error: tried to send hit payload length in an already assigned Custom Dimension\"):\n(b+=g+\"\\x3d\",b+=b.length+b.length.toString().length,a.set(\"hitPayload\",b,!0)),n(a)}catch(r){console.error(\"Error sending hit payload length to Google Analytics\"),a.set(\"hitPayload\",m,!0),n(a)}})}var p=[{name:\"EMAIL\",regex:\/.{4}@.{4}\/g}];c=\"_\"+a.get(\"trackingId\")+\"_sendHitTask\";var q=window[c]=window[c]||a.get(\"sendHitTask\"),d,e,f;a.set(\"sendHitTask\",function(a){b=a.get(\"hitPayload\").split(\"\\x26\");for(d=0;d\u003Cb.length;d++)e=b[d].split(\"\\x3d\"),f=decodeURIComponent(decodeURIComponent(e[1])),p.forEach(function(a){f=\nf.replace(a.regex,\"[REDACTED \"+a.name+\"]\")}),e[1]=encodeURIComponent(f),b[d]=e.join(\"\\x3d\");a.set(\"hitPayload\",b.join(\"\\x26\"),!0);q(a)})}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmzz"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",30],8,16],";if(a){a=a.split(\"|\");var e={utmcsr:\"source\",utmcmd:\"medium\",utmccn:\"campaign\",utmcct:\"content\",utmctr:\"keyword\"},d={},b;for(b=0;b\u003Ca.length;b++){var c=a[b].split(\"\\x3d\");var f=c[0];c=c[1];d[e[f]]=c}return d}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",32],8,16],".match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",34],8,16],"){var a=document.createElement(\"a\");a.href=",["escape",["macro",34],8,16],";return a.hostname.match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]}})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__dbg"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__j",
      "vtp_name":"document.referrer"
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"browsingBehavior.redirectCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"browsingBehavior.navigationType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"browsingBehavior.newTab"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"browsingBehavior.tabCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"browsingBehavior.tabId"
    },{
      "function":"__c",
      "vtp_value":"UA-23890501-1"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_fieldsToSet":["list",["map","fieldName","hitCallback","value",["macro",23]],["map","fieldName","userId","value",["macro",40]],["map","fieldName","customTask","value",["macro",26]],["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":"kotsovolos.blob.core.windows.net",
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",40]],["map","index","2","dimension",["macro",27]],["map","index","3","dimension",["macro",28]],["map","index","6","dimension",["macro",41]],["map","index","8","dimension",["macro",42]],["map","index","9","dimension",["macro",43]],["map","index","10","dimension",["macro",44]],["map","index","11","dimension",["macro",45]],["map","index","12","dimension",["macro",46]],["map","index","13","dimension",["macro",47]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":"kotsovolos.blob.core.windows.net",
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-23890501-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"items"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"value"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"numSearchResults"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageType"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"items.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"value"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__v",
      "vtp_name":"google_tag_params",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__e"
    },{
      "function":"__d",
      "vtp_elementSelector":"a.swogo-product-link",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sku-status"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmz"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmzzses"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",31],8,16],".campaign})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",31],8,16],".content})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",31],8,16],".keyword})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",31],8,16],".medium})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",31],8,16],".source})();"]
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension","userID"]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-139966842-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"selection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"items"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"items"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":2
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":9
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":10
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",38],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":["macro",50],
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Scroll Depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":["template",["macro",12],"%"],
      "vtp_eventLabel":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"YouTube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":["macro",11],
      "vtp_eventLabel":["template",["macro",53]," - ",["macro",54]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Hot Products Carousel Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":["template","Hot Products Carousel - ",["macro",56]],
      "vtp_eventLabel":["macro",57],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Thumb Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":"Thumb Click",
      "vtp_eventLabel":["macro",58],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-TJZX9VC",
      "vtp_gaSettings":["macro",59],
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",17]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",49],
      "vtp_trackingId":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Xmas Menu Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":["template",["macro",56]," - Xmas Menu Click"],
      "vtp_eventLabel":["macro",61],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Sales Menu Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":["template",["macro",56]," - Sales Menu Click"],
      "vtp_eventLabel":["macro",61],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Newsletter Subscription",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":["template",["macro",63]," - newsgo2 is Header Else Footer"],
      "vtp_eventLabel":["macro",61],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Telephone Click to Call",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":["macro",56],
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Form Submit - B2B",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":"B2B Form",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":27
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":34
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":37
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":39
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":40
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":41
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":42
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":44
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":45
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":47
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"My Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":"Login",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"My Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":"Logout",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"My Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":"Overview",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"My Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":"Wishlist View",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"My Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":"Contact",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"My Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":"Register Complete",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Terms - Learn More Dropdown",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":["template","Comes from - ",["macro",34]],
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Form Submission - Recycle Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",49],
      "vtp_eventAction":"Form Submission",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",64]],["map","key","ecomm_pagetype","value",["macro",65]],["map","key","ecomm_totalvalue","value",["macro",66]]],
      "vtp_conversionId":"967562616",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",67],
      "vtp_enableRdpCheckbox":false,
      "tag_id":62
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-H0NX1CRDN7",
      "vtp_enableUserProperties":true,
      "tag_id":75
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",69],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"980274539",
      "vtp_conversionLabel":"zRIJCOXS2gIQ65q30wM",
      "vtp_url":["macro",67],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":80
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",69],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"967562616",
      "vtp_conversionLabel":"H5-OCPDQ_AgQ-KqvzQM",
      "vtp_url":["macro",67],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":81
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Add to Cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Checkout Option",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Checkout",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":86
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":87
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":88
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_metric":["list",["map","index","1","metric",["macro",70]]],
      "vtp_gaSettings":["macro",59],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",71]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":89
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Product Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":90
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Promotion Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":91
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Remove from Cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":92
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":94
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",64]],["map","key","ecomm_pagetype","value",["macro",65]],["map","key","ecomm_totalvalue","value",["macro",66]]],
      "vtp_conversionId":"980274539",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",67],
      "vtp_enableRdpCheckbox":false,
      "tag_id":95
    },{
      "function":"__cl",
      "tag_id":96
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"853727_35",
      "vtp_enableTriggerStartOption":true,
      "tag_id":97
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,100",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"853727_37",
      "vtp_enableTriggerStartOption":true,
      "tag_id":98
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"853727_42",
      "tag_id":99
    },{
      "function":"__cl",
      "tag_id":100
    },{
      "function":"__cl",
      "tag_id":101
    },{
      "function":"__sdl",
      "vtp_horizontalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":false,
      "vtp_horizontalThresholdOn":true,
      "vtp_horizontalThresholdUnits":"PERCENT",
      "vtp_uniqueTriggerId":"853727_52",
      "vtp_enableTriggerStartOption":true,
      "tag_id":102
    },{
      "function":"__hl",
      "tag_id":103
    },{
      "function":"__cl",
      "tag_id":104
    },{
      "function":"__cl",
      "tag_id":105
    },{
      "function":"__cl",
      "tag_id":106
    },{
      "function":"__cl",
      "tag_id":107
    },{
      "function":"__cl",
      "tag_id":108
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"853727_69",
      "tag_id":109
    },{
      "function":"__cl",
      "tag_id":110
    },{
      "function":"__cl",
      "tag_id":111
    },{
      "function":"__cl",
      "tag_id":112
    },{
      "function":"__cl",
      "tag_id":113
    },{
      "function":"__cl",
      "tag_id":114
    },{
      "function":"__cl",
      "tag_id":115
    },{
      "function":"__cl",
      "tag_id":116
    },{
      "function":"__cl",
      "tag_id":117
    },{
      "function":"__cl",
      "tag_id":118
    },{
      "function":"__cl",
      "tag_id":119
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"853727_130",
      "tag_id":120
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.youtube.com\/iframe_api\" type=\"text\/gtmscript\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"gtm-__utmzz-cookie-replicator\" type=\"text\/gtmscript\"\u003E(function(g){function w(c){var e=[\"source\",\"medium\",\"campaign\",\"term\",\"content\"];e=new RegExp(\"(utm_(\"+e.join(\"|\")+\")|(d|g)clid)\\x3d.*?([^\\x26#]*|$)\",\"gi\");c=c.match(e);var l;if(c){var a={};var b=c.length;for(l=0;l\u003Cb;l++)(e=c[l].split(\"\\x3d\"))\u0026\u0026(a[e[0]]=e[1])}return a}function x(c){if(c){var e={\"daum.net\":{p:\"q\",n:\"daum\"},\"eniro.se\":{p:\"search_word\",n:\"eniro \"},\"naver.com\":{p:\"query\",n:\"naver \"},\"yahoo.com\":{p:\"p\",n:\"yahoo\"},\"msn.com\":{p:\"q\",n:\"msn\"},\"bing.com\":{p:\"q\",n:\"live\"},\"aol.com\":{p:\"q\",n:\"aol\"},\n\"lycos.com\":{p:\"q\",n:\"lycos\"},\"ask.com\":{p:\"q\",n:\"ask\"},\"altavista.com\":{p:\"q\",n:\"altavista\"},\"search.netscape.com\":{p:\"query\",n:\"netscape\"},\"cnn.com\":{p:\"query\",n:\"cnn\"},\"about.com\":{p:\"terms\",n:\"about\"},\"mamma.com\":{p:\"query\",n:\"mama\"},\"alltheweb.com\":{p:\"q\",n:\"alltheweb\"},\"voila.fr\":{p:\"rdata\",n:\"voila\"},\"search.virgilio.it\":{p:\"qs\",n:\"virgilio\"},\"baidu.com\":{p:\"wd\",n:\"baidu\"},\"alice.com\":{p:\"qs\",n:\"alice\"},\"yandex.com\":{p:\"text\",n:\"yandex\"},\"najdi.org.mk\":{p:\"q\",n:\"najdi\"},\"seznam.cz\":{p:\"q\",\nn:\"seznam\"},\"search.com\":{p:\"q\",n:\"search\"},\"wp.pl\":{p:\"szukaj \",n:\"wirtulana polska\"},\"online.onetcenter.org\":{p:\"qt\",n:\"o*net\"},\"szukacz.pl\":{p:\"q\",n:\"szukacz\"},\"yam.com\":{p:\"k\",n:\"yam\"},\"pchome.com\":{p:\"q\",n:\"pchome\"},\"kvasir.no\":{p:\"q\",n:\"kvasir\"},\"sesam.no\":{p:\"q\",n:\"sesam\"},\"ozu.es\":{p:\"q\",n:\"ozu \"},\"terra.com\":{p:\"query\",n:\"terra\"},\"mynet.com\":{p:\"q\",n:\"mynet\"},\"ekolay.net\":{p:\"q\",n:\"ekolay\"},\"rambler.ru\":{p:\"words\",n:\"rambler\"},google:{p:\"q\",n:\"google\"}},a=g.createElement(\"a\"),b={};a.href=\nc;-1\u003Ca.hostname.indexOf(\"google\")\u0026\u0026(m=\"google\");e[m]?(c=e[m],e=new RegExp(c.p+\"\\x3d.*?([^\\x26#]*|$)\",\"gi\"),a=a.search.match(e),b.source=c.n,b.medium=\"organic\",b.term=(a?a[0].split(\"\\x3d\")[1]:\"\")||\"(not provided)\"):m!==n\u0026\u0026(b.source=a.hostname,b.medium=\"referral\");return b}}function u(c,a,b,d,f){c=c+\"\\x3d\"+a+\";\";b\u0026\u0026(c+=\"Expires\\x3d\"+b.toGMTString()+\";\");d\u0026\u0026(c+=\"Path\\x3d\"+d+\";\");f\u0026\u0026(c+=\"Domain\\x3d\"+f+\";\");g.cookie=c}function q(a){var b=\"; \"+g.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(1\u003Ca.length)return a.pop().split(\";\")[0]}\nfunction v(a){if(a){var b=g.createElement(\"a\");b.href=a;try{return b.hostname.match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]}catch(l){}}}var p=g.referrer,b={utmcsr:\"(direct)\",utmcmd:\"(none)\",utmccn:\"(not set)\"},r=g.location.hostname,n=v(r),m=v(g.referrer),k=q(\"__utmzzses\");r=new Date(+new Date+15552E6);var a=g.location.search.replace(\"?\",\"\"),h=g.location.hash.replace(\"#\",\"\");a=w(a+\"#\"+h);var d=x(p);h=q(\"__utmz\")||q(\"__utmzz\");p=[];var t={utm_source:\"utmcsr\",utm_medium:\"utmcmd\",utm_campaign:\"utmccn\",\nutm_content:\"utmcct\",utm_term:\"utmctr\",gclid:\"utmgclid\",dclid:\"utmdclid\"},f;k\u0026\u0026m===n\u0026\u0026(d=a=null);if(a\u0026\u0026(a.utm_source||a.gclid||a.dclid)){for(f in a)\"undefined\"!==typeof a[f]\u0026\u0026(k=t[f],b[k]=a[f]);if(a.gclid||a.dclid)b.utmcsr=\"google\",b.utmcmd=b.utmgclid?\"cpc\":\"cpm\"}else if(d)b.utmcsr=d.source,b.utmcmd=d.medium,d.term\u0026\u0026(b.utmctr=d.term);else if(h)for(b={},h=h.split(\"|\"),t=h.length,d=0;d\u003Ct;d++)k=h[d].split(\"\\x3d\"),a=k[0].split(\".\").pop(),b[a]=k[1];for(f in b)\"undefined\"!==typeof b[f]\u0026\u0026p.push(f+\"\\x3d\"+\nb[f]);u(\"__utmzz\",p.join(\"|\"),r,\"\/\",n);u(\"__utmzzses\",1,null,\"\/\",n)})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/kotsovolos.blob.core.windows.net\/site\/include\/scripts\/recycling-removal.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"Cookiebot\" data-gtmsrc=\"https:\/\/consent.cookiebot.com\/uc.js?cbid=2a70d5ad-03c4-43b3-a823-92ce818bcf4b\" type=\"text\/gtmscript\" async\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction CookiebotCallback_OnAccept(){Cookiebot.consent.preferences\u0026\u0026dataLayer.push({event:\"cookieconsent_preferences\"});Cookiebot.consent.statistics\u0026\u0026dataLayer.push({event:\"cookieconsent_statistics\"});Cookiebot.consent.marketing\u0026\u0026dataLayer.push({event:\"cookieconsent_marketing\"})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1859318330853747\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1859318330853747\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{value:",["escape",["macro",74],8,16],",currency:\"EUR\",content_ids:[\"",["escape",["macro",75],7],"\"],content_type:\"product\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{value:",["escape",["macro",66],8,16],",currency:\"EUR\",content_ids:[\"",["escape",["macro",76],7],"\"],content_type:\"product\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{currency:\"EUR\",value:",["escape",["macro",77],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/kotsovolos.blob.core.windows.net\/site\/include\/scripts\/notification.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"fireRemarketingTag"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"transactionComplete"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"gaEvent"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)853727_35($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)853727_37($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)853727_42($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"bx-next|bx-prev"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",58],
      "arg1":"\/thumb.png"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"popstate"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"https:\/\/promo.kotsovolos.gr\/xmas\/"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"ΟΛΟΥΣ|ΕΜΕΝΑ|ΕΚΕΙΝΟΝ|ΕΚΕΙΝΗ|ΓΙΑ ΤΟ ΠΑΙΔΙ|TECH LOVER|GAMER|ΣΙΝΕΦΙΛ|ΛΑΤΡΕΙΣ ΤΗΣ ΜΟΥΣΙΚΗΣ|ΑΘΛΗΣΗ|ΤΑΞΙΔΙΑ ΚΑΙ ΠΕΡΙΠΕΤΕΙΑ|ΕΝΑ ΚΑΛΟ ΠΡΩΙΝΟ|ΝΑ ΓΙΝΕΙ ΣΕΦ|10€-80€|80€-200€|200€-1500€"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"list"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/site\/"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"newsgo"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"tel:2102899999"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/b2b"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"ΑΠΟΣΤΟΛΗ"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)853727_69($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"promo|blog",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"\/1"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"wishlist"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"cmsid=20982"
    },{
      "function":"_gt",
      "arg0":["macro",0],
      "arg1":"1"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"basket\/cart.*"
    },{
      "function":"_cn",
      "arg0":["macro",58],
      "arg1":"blackf\/teaser\/song"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"\/site\/basket\/cadeliverytime"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"\/login"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"\/logout"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"site\/account"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"wishlist"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"account\/wishlist"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"site\/contact"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"site\/register_results"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"terms-more drop"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)853727_130($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",68],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"checkoutOption"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"menu-navigation"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"product-clicks"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"product-sorting"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"productClick"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"promotionClick"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"removeFromCart"
    },{
      "function":"_cn",
      "arg0":["macro",72],
      "arg1":"category"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"form"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"cmsid=16242"
    },{
      "function":"_eq",
      "arg0":["macro",68],
      "arg1":"view_item"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"\/site\/login.jsp"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"\/site\/basket\/castart.jsp?p=1"
    }],
  "rules":[
    [["if",0,1],["add",0,27]],
    [["if",2],["add",1]],
    [["if",0,3],["add",2,21]],
    [["if",5],["unless",4],["add",3,24]],
    [["if",6],["add",4]],
    [["if",7,8],["add",5]],
    [["if",9,10],["add",6]],
    [["if",11,12],["add",7]],
    [["if",13,14],["add",8]],
    [["if",14,15],["add",9]],
    [["if",3],["add",10,36,37,51,77,78,80,52,53,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75]],
    [["if",16,17],["add",11]],
    [["if",14,18,19],["add",12]],
    [["if",14,20,21],["add",13]],
    [["if",14,22],["add",14]],
    [["if",14,23],["add",15]],
    [["if",14,24,25],["add",16]],
    [["if",26,27,28],["add",17]],
    [["if",0,3],["unless",29],["add",18,79]],
    [["if",14,30,31],["add",19]],
    [["if",14,32],["add",20]],
    [["if",1,33],["add",22]],
    [["if",1,34],["add",23]],
    [["if",14,35],["add",25]],
    [["if",1,36],["add",26]],
    [["if",14,37],["add",28]],
    [["if",14,38],["add",29]],
    [["if",14,39],["unless",40],["add",30]],
    [["if",14,41],["add",31]],
    [["if",14,42],["add",32]],
    [["if",14,43],["add",33]],
    [["if",14,44],["add",34]],
    [["if",11,45],["add",35]],
    [["if",1,46],["add",38,39,84]],
    [["if",47],["add",40,82]],
    [["if",48],["add",41]],
    [["if",49],["add",42]],
    [["if",50],["add",43]],
    [["if",51],["add",44]],
    [["if",52],["add",45]],
    [["if",1],["add",46,81]],
    [["if",53],["add",47]],
    [["if",54],["add",48]],
    [["if",55],["add",49]],
    [["if",1,56],["add",50]],
    [["if",3,57],["add",55]],
    [["if",3,58],["add",76]],
    [["if",1,59],["add",83]],
    [["if",3,60,61],["add",85]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ca,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={Hf:!0},ja={};try{ja.__proto__=ia;ha=ja.Hf;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=fa,la=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,na=null;var pa=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},sa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},n=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},wa=function(a,b){if(a&&sa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},xa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},za=function(a,b){for(var c=new ya,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Aa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ba=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(sa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Fa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ga=function(){return(new Date).getTime()},ya=function(){this.prefix="gtm.";this.values={}};ya.prototype.set=function(a,b){this.values[this.prefix+a]=b};ya.prototype.get=function(a){return this.values[this.prefix+a]};
var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ma=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Na=function(a){var b=
[];Aa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Oa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Pa=function(a){if(null==a)return String(a);var b=Oa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Qa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ra=function(a){if(!a||"object"!=Pa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Qa(a,"constructor")&&!Qa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Qa(a,b)},C=function(a,b){var c=b||("array"==Pa(a)?[]:{}),d;for(d in a)if(Qa(a,d)){var e=a[d];"array"==Pa(e)?("array"!=Pa(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Ra(e)?(Ra(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};
var Sa=[],Ta={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ua=function(a){return Ta[a]},Va=/[\x00\x22\x26\x27\x3c\x3e]/g;var Za=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,$a={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},db=function(a){return $a[a]};Sa[7]=function(a){return String(a).replace(Za,db)};
Sa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Za,db)+"'"}};var eb=/[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;Sa[9]=function(a){return String(a).replace(eb,db)};var lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ob=function(a){return mb[a]};Sa[16]=function(a){return a};var qb;
var rb=[],sb=[],tb=[],ub=[],vb=[],wb={},xb,yb,Ab,Bb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Cb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=wb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):qb(c,e,b)},Eb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Db(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=wb[b];return c?c.priorityOverride||0:0},Db=function(a,b,c){if(sa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Db(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=rb[f];if(!h||b.Vc(h))return;c[f]=!0;try{var k=Eb(h,b,c);k.vtp_gtmEventId=b.id;d=Cb(k,b);Ab&&(d=Ab.fg(d,k))}catch(x){b.De&&b.De(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Db(a[l],b,c)]=Db(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,q=1;q<a.length;q++){var r=Db(a[q],b,c);yb&&(m=m||r===yb.Gb);d.push(r)}return yb&&m?yb.ig(d):d.join("");case "escape":d=Db(a[1],b,c);if(yb&&sa(a[1])&&"macro"===a[1][0]&&yb.Ig(a))return yb.$g(d);d=String(d);for(var u=2;u<a.length;u++)Sa[a[u]]&&(d=Sa[a[u]](d));return d;case "tag":var p=a[1];if(!ub[p])throw Error("Unable to resolve tag reference "+p+".");return d={pe:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Gb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return xb(Eb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Hb=function(){var a=function(b){return{toString:function(){return b}}};return{yd:a("convert_case_to"),zd:a("convert_false_to"),Ad:a("convert_null_to"),Bd:a("convert_true_to"),Cd:a("convert_undefined_to"),Hh:a("debug_mode_metadata"),va:a("function"),ff:a("instance_name"),lf:a("live_only"),pf:a("malware_disabled"),qf:a("metadata"),Ih:a("original_vendor_template_id"),uf:a("once_per_event"),Jd:a("once_per_load"),Rd:a("setup_tags"),Td:a("tag_id"),Ud:a("teardown_tags")}}();var Ib=null,Lb=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];Ib=Jb(a);for(var e=0;e<sb.length;e++){var f=sb[e],h=Kb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],q=0;q<ub.length;q++)c[q]&&!d[q]&&(m[q]=!0);return m},Kb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ib(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Ib(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Jb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(tb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,E=document,gc=navigator,hc=E.currentScript&&E.currentScript.src,ic=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},jc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},kc=function(a,b,c){var d=E.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;jc(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=la.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){na=k;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=E.getElementsByTagName("script")[0]||E.body||E.head;l.parentNode.insertBefore(d,l);return d},lc=function(){if(hc){var a=hc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},mc=function(a,b){var c=E.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=E.body&&E.body.lastChild||
E.body||E.head;d.parentNode.insertBefore(c,d);jc(c,b);void 0!==a&&(c.src=a);return c},nc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},oc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},pc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},H=function(a){D.setTimeout(a,0)},qc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},rc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},sc=function(a){var b=E.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},tc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},uc=function(a){gc.sendBeacon&&gc.sendBeacon(a)||nc(a)},vc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var xc=function(a){return wc?E.querySelectorAll(a):null},yc=function(a,b){if(!wc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!E.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},zc=!1;if(E.querySelectorAll)try{var Ac=E.querySelectorAll(":root");Ac&&1==Ac.length&&Ac[0]==E.documentElement&&(zc=!0)}catch(a){}var wc=zc;var I={},Qc=null,Rc=Math.random();I.s="GTM-KGFB6F";I.Kb="4m0";I.Id="";var Sc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Tc="www.googletagmanager.com/gtm.js";
var Uc=Tc,Vc=null,Wc=null,Xc=null,Yc="//www.googletagmanager.com/a?id="+I.s+"&cv=118",Zc={},$c={},ad=function(){var a=Qc.sequence||0;Qc.sequence=a+1;return a};var bd={},J=function(a,b){bd[a]=bd[a]||[];bd[a][b]=!0},cd=function(a){for(var b=[],c=bd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var dd=function(){return"&tc="+ub.filter(function(a){return a}).length},gd=function(){ed||(ed=D.setTimeout(fd,500))},fd=function(){ed&&(D.clearTimeout(ed),ed=void 0);void 0===id||jd[id]&&!kd&&!ld||(md[id]||nd.Kg()||0>=od--?(J("GTM",1),md[id]=!0):(nd.ih(),nc(pd()),jd[id]=!0,qd=rd=ld=kd=""))},pd=function(){var a=id;if(void 0===a)return"";var b=cd("GTM"),c=cd("TAGGING");return[sd,jd[a]?"":"&es=1",td[a],b?"&u="+b:"",c?"&ut="+c:"",dd(),kd,ld,rd,qd,"&z=0"].join("")},ud=function(){return[Yc,"&v=3&t=t","&pid="+
xa(),"&rv="+I.Kb].join("")},vd="0.005000">Math.random(),sd=ud(),wd=function(){sd=ud()},jd={},kd="",ld="",qd="",rd="",id=void 0,td={},md={},ed=void 0,nd=function(a,b){var c=0,d=0;return{Kg:function(){if(c<a)return!1;Ga()-d>=b&&(c=0);return c>=a},ih:function(){Ga()-d>=b&&(c=0);c++;d=Ga()}}}(2,1E3),od=1E3,xd=function(a,b){if(vd&&!md[a]&&id!==a){fd();id=a;qd=kd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";td[a]="&e="+c+"&eid="+a;gd()}},yd=function(a,b,c){if(vd&&!md[a]&&
b){a!==id&&(fd(),id=a);var d,e=String(b[Hb.va]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;kd=kd?kd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(wb[h]?"1":"2")+d;qd=qd?qd+"."+k:"&ti="+k;gd();2022<=pd().length&&fd()}},zd=function(a,b,c){if(vd&&!md[a]){a!==id&&(fd(),id=a);var d=c+b;ld=ld?ld+
"."+d:"&epr="+d;gd();2022<=pd().length&&fd()}};var Ad={},Bd=new ya,Cd={},Dd={},Gd={name:"dataLayer",set:function(a,b){C(Ma(a,b),Cd);Ed()},get:function(a){return Fd(a,2)},reset:function(){Bd=new ya;Cd={};Ed()}},Fd=function(a,b){if(2!=b){var c=Bd.get(a);if(vd){var d=Hd(a);c!==d&&J("GTM",5)}return c}return Hd(a)},Hd=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:Id(b)},Id=function(a){for(var b=Cd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Jd=function(a,b){Dd.hasOwnProperty(a)||(Bd.set(a,b),C(Ma(a,b),Cd),Ed())},Ed=function(a){Aa(Dd,function(b,c){Bd.set(b,c);C(Ma(b,void 0),Cd);C(Ma(b,c),Cd);a&&delete Dd[b]})},Kd=function(a,b,c){Ad[a]=Ad[a]||{};var d=1!==c?Hd(b):Bd.get(b);"array"===Pa(d)||"object"===Pa(d)?Ad[a][b]=C(d):Ad[a][b]=d},Ld=function(a,b){if(Ad[a])return Ad[a][b]},Md=function(a,b){Ad[a]&&delete Ad[a][b]};var Q={ra:"_ee",Kh:"_uci",yc:"event_callback",Fb:"event_timeout",D:"gtag.config",aa:"allow_ad_personalization_signals",zc:"restricted_data_processing",Za:"allow_google_signals",ba:"cookie_expires",Eb:"cookie_update",$a:"session_duration",ja:"user_properties"};Q.ze=[Q.aa,Q.Za,Q.Eb];Q.Ce=[Q.ba,Q.Fb,Q.$a];var Pd=/[A-Z]+/,Qd=/\s/,Rd=function(a){if(g(a)&&(a=Fa(a),!Qd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Pd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],w:d}}}}},Td=function(a){for(var b={},c=0;c<a.length;++c){var d=Rd(a[c]);d&&(b[d.id]=d)}Sd(b);var e=[];Aa(b,function(f,h){e.push(h)});return e};
function Sd(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.w[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ud=function(){var a=!1;return a};var T=function(a,b,c,d){return(2===Vd()||d||"http:"!=D.location.protocol?a:b)+c},Vd=function(){var a=lc(),b;if(1===a)a:{var c=Uc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=E.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var ie=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),je={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ke={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},le="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ne=function(a){var b=Fd("gtm.whitelist");b&&J("GTM",9);var c=b&&La(Da(b),je),d=Fd("gtm.blacklist");d||(d=Fd("tagTypeBlacklist"))&&J("GTM",3);d?
J("GTM",8):d=[];me()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=n(Da(d),"google")&&J("GTM",2);var e=d&&La(Da(d),ke),f={};return function(h){var k=h&&h[Hb.va];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=$c[k]||[],m=a(k,l);if(b){var q;if(q=m)a:{if(0>n(c,k))if(l&&0<l.length)for(var r=0;r<
l.length;r++){if(0>n(c,l[r])){J("GTM",11);q=!1;break a}}else{q=!1;break a}q=!0}m=q}var u=!1;if(d){var p=0<=n(e,k);if(p)u=p;else{var t=za(e,l||[]);t&&J("GTM",10);u=t}}var v=!m||u;v||!(0<=n(l,"sandboxedScripts"))||c&&-1!==n(c,"sandboxedScripts")||(v=za(e,le));return f[k]=v}},me=function(){return ie.test(D.location&&D.location.hostname)};var oe={fg:function(a,b){b[Hb.yd]&&"string"===typeof a&&(a=1==b[Hb.yd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Hb.Ad)&&null===a&&(a=b[Hb.Ad]);b.hasOwnProperty(Hb.Cd)&&void 0===a&&(a=b[Hb.Cd]);b.hasOwnProperty(Hb.Bd)&&!0===a&&(a=b[Hb.Bd]);b.hasOwnProperty(Hb.zd)&&!1===a&&(a=b[Hb.zd]);return a}};var pe={active:!0,isWhitelisted:function(){return!0}},qe=function(a){var b=Qc.zones;!b&&a&&(b=Qc.zones=a());return b};var re=function(){};var se=!1,te=0,ue=[];function ve(a){if(!se){var b=E.createEventObject,c="complete"==E.readyState,d="interactive"==E.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){se=!0;for(var e=0;e<ue.length;e++)H(ue[e])}ue.push=function(){for(var f=0;f<arguments.length;f++)H(arguments[f]);return 0}}}function we(){if(!se&&140>te){te++;try{E.documentElement.doScroll("left"),ve()}catch(a){D.setTimeout(we,50)}}}var xe=function(a){se?a():ue.push(a)};var ye={},ze={},Ae=function(a,b,c,d){if(!ze[a]||Sc[b]||"__zone"===b)return-1;var e={};Ra(d)&&(e=C(d,e));e.id=c;e.status="timeout";return ze[a].tags.push(e)-1},Be=function(a,b,c,d){if(ze[a]){var e=ze[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ce(a){for(var b=ye[a]||[],c=0;c<b.length;c++)b[c]();ye[a]={push:function(d){d(I.s,ze[a])}}}
var Fe=function(a,b,c){ze[a]={tags:[]};qa(b)&&De(a,b);c&&D.setTimeout(function(){return Ce(a)},Number(c));return Ee(a)},De=function(a,b){ye[a]=ye[a]||[];ye[a].push(Ia(function(){return H(function(){b(I.s,ze[a])})}))};function Ee(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&Ce(a)})},Sf:function(){d=!0;b>=c&&Ce(a)}}};var Ge=function(){function a(d){return!ra(d)||0>d?0:d}if(!Qc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Gd.get("gtm.start"))?Gd.get("gtm.start"):0;Qc._li={cst:a(c-b),cbt:a(Wc-b)}}};var Ke={},Le=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Me=!1;
var Ne=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||J("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Ge();return D[b]},Oe=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Le();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Qe=function(a){},Pe=function(){return D.GoogleAnalyticsObject||"ga"};var Se=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Te=/:[0-9]+$/,Ue=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Xe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ve(a.protocol)||Ve(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Te,"").toLowerCase());return We(a,b,c,d,e)},We=function(a,b,c,d,e){var f,h=Ve(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ye(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Te,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||J("TAGGING",1);
f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=n(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ue(f,e,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ve=function(a){return a?a.replace(":","").toLowerCase():""},Ye=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},Ze=function(a){var b=E.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||J("TAGGING",1),c="/"+c);var d=b.hostname.replace(Te,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function df(a,b,c,d){var e=ub[a],f=ef(a,b,c,d);if(!f)return null;var h=Db(e[Hb.Rd],c,[]);if(h&&h.length){var k=h[0];f=df(k.index,{C:f,B:1===k.pe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ef(a,b,c,d){function e(){if(f[Hb.pf])k();else{var w=Eb(f,c,[]),x=Ae(c.id,String(f[Hb.va]),Number(f[Hb.Td]),w[Hb.qf]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=Ga()-z;yd(c.id,ub[a],"5");Be(c.id,x,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=Ga()-z;yd(c.id,ub[a],"6");Be(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;yd(c.id,f,"1");var B=function(){var A=Ga()-z;yd(c.id,f,"7");Be(c.id,x,"exception",A);y||(y=!0,k())};var z=Ga();try{Cb(w,c)}catch(A){B(A)}}}var f=ub[a],h=b.C,k=b.B,l=b.terminate;if(c.Vc(f))return null;var m=Db(f[Hb.Ud],c,[]);if(m&&m.length){var q=m[0],r=df(q.index,{C:h,B:k,terminate:l},c,d);if(!r)return null;h=r;k=2===q.pe?l:r}if(f[Hb.Jd]||f[Hb.uf]){var u=f[Hb.Jd]?vb:c.rh,p=h,t=k;if(!u[a]){e=Ia(e);var v=ff(a,u,e);h=v.C;k=v.B}return function(){u[a](p,t)}}return e}
function ff(a,b,c){var d=[],e=[];b[a]=gf(d,e,c);return{C:function(){b[a]=hf;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=jf;for(var f=0;f<e.length;f++)e[f]()}}}function gf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function hf(a){a()}function jf(a,b){b()};var mf=function(a,b){for(var c=[],d=0;d<ub.length;d++)if(a.ub[d]){var e=ub[d];var f=b.add();try{var h=df(d,{C:f,B:f,terminate:f},a,d);h?c.push({Te:d,Ne:Fb(e),qg:h}):(kf(d,a),f())}catch(l){f()}}b.Sf();c.sort(lf);for(var k=0;k<c.length;k++)c[k].qg();return 0<c.length};function lf(a,b){var c,d=b.Ne,e=a.Ne;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Te,k=b.Te;f=h>k?1:h<k?-1:0}return f}
function kf(a,b){if(!vd)return;var c=function(d){var e=b.Vc(ub[d])?"3":"4",f=Db(ub[d][Hb.Rd],b,[]);f&&f.length&&c(f[0].index);yd(b.id,ub[d],e);var h=Db(ub[d][Hb.Ud],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var nf=!1,of=function(a,b,c,d,e){if("gtm.js"==b){if(nf)return!1;nf=!0}xd(a,b);var f=Fe(a,d,e);Kd(a,"event",1);Kd(a,"ecommerce",1);Kd(a,"gtm");var h={id:a,name:b,Vc:ne(c),ub:[],rh:[],De:function(){J("GTM",6)}};h.ub=Lb(h);var k=mf(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Qe(I.s);if(!k)return k;for(var l=0;l<h.ub.length;l++)if(h.ub[l]){var m=ub[l];if(m&&!Sc[String(m[Hb.va])])return!0}return!1};var pf=[];function qf(){var a=ic("google_tag_data",{});a.ics||(a.ics={entries:{},set:rf,update:sf,addListener:tf,notifyListeners:uf,active:!1});return a.ics}function rf(a,b,c,d,e){var f=qf();f.active=!0;if(void 0!=b){var h=f.entries,k=h[a]||{},l=k.region,m=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();m!==e&&(m===d?l===e:m||l)||(h[a]={region:m,initial:"granted"===b,update:k.update})}}
function sf(a,b){var c=qf();c.active=!0;if(void 0!=b){var d=vf(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(vf(a)!==d)for(var f=0;f<pf.length;++f){var h=pf[f];sa(h.je)&&-1!==h.je.indexOf(a)&&(h.Me=!0)}}}function tf(a,b){pf.push({je:a,sg:b})}function uf(){for(var a=0;a<pf.length;++a){var b=pf[a];if(b.Me){b.Me=!1;try{b.sg.call()}catch(c){}}}}
var vf=function(a){var b=qf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},wf=function(){return qf().active},xf=function(a,b){qf().addListener(a,b)},yf=function(a,b){if(!1===vf(b)){var c=!1;xf([b],function(){!c&&vf(b)&&(a(),c=!0)})}};var zf=[Q.o,Q.J],Af=function(a){var b=a.region;b&&J("GTM",40);for(var c=sa(b)?b:[b],d=0;d<c.length;++d)for(var e=0;e<zf.length;e++){var f=zf[e],h=a[zf[e]],k=c[d];qf().set(f,h,k,"UA","UA-63")}},Bf=function(a){for(var b=0;b<zf.length;b++){var c=zf[b],d=a[zf[b]];qf().update(c,d)}qf().notifyListeners()},Cf=function(a){var b=vf(a);return void 0!=b?b:!0},Df=function(){for(var a=[],b=0;b<zf.length;b++){var c=vf(zf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")};function Ff(a,b){}function Gf(a,b){return Hf()?Ff(a,b):void 0}function Hf(){var a=!1;return a};var If=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.C=function(){};this.B=function(){};this.ie=void 0},Jf=function(a){var b=new If;b.eventModel=a;return b},Kf=function(a,b){a.targetConfig=b;return a},Lf=function(a,b){a.containerConfig=b;return a},Mf=function(a,b){a.h=b;return a},Nf=function(a,b){a.globalConfig=b;return a},Of=function(a,b){a.C=b;return a},Pf=function(a,b){a.B=b;return a};
If.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Qf=function(a){function b(e){Aa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Aa(c,function(e){d.push(e)});return d};function Rf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Sf={},Tf=function(a){return void 0==Sf[a]?!1:Sf[a]};var Vf=function(a,b,c,d){return Uf(d)?Rf(a,String(b||document.cookie),c):[]},Yf=function(a,b,c,d,e){if(Uf(e)){var f=Wf(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Xf(f,function(h){return h.Sb},b);if(1===f.length)return f[0].id;f=Xf(f,function(h){return h.vb},c);return f[0]?f[0].id:void 0}}};function Zf(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Vf(b,f,!1,d).indexOf(c)}
var cg=function(a,b,c){function d(p,t,v){if(null==v)return delete h[t],p;h[t]=v;return p+"; "+t+"="+v}function e(p,t){if(null==t)return delete h[t],p;h[t]=!0;return p+"; "+t}if(!Uf(c.Ca))return!1;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=$f(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Uh);f=d(f,"samesite",
c.$h);c.ai&&(f=e(f,"secure"));f=e(f,c.flags);var l=c.domain;if("auto"===l){for(var m=ag(),q=0;q<m.length;++q){var r="none"!==m[q]?m[q]:void 0,u=d(f,"domain",r);if(!bg(r,c.path)&&Zf(u,a,b,c.Ca))return!0}return!1}l&&"none"!==l&&(f=d(f,"domain",l));return bg(l,c.path)?!1:Zf(f,a,b,c.Ca)},dg=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return cg(a,b,c)};
function Xf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Wf(a,b,c){for(var d=[],e=Vf(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Sb:1*l[0]||1,vb:1*l[1]||1}))}}return d}
var $f=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},eg=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,fg=/(^|\.)doubleclick\.net$/i,bg=function(a,b){return fg.test(document.location.hostname)||"/"===b&&eg.test(a)},ag=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;fg.test(e)||eg.test(e)||a.push("none");
return a},Uf=function(a){if(!Tf("gtag_cs_api")||!a||!wf())return!0;var b=vf(a);return null==b?!0:!!b};var gg=function(){for(var a=gc.userAgent+(E.cookie||"")+(E.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ga()/1E3)].join(".")},jg=function(a,b,c,d,e){var f=hg(b);return Yf(a,f,ig(c),d,e)},kg=function(a,b,c,d){var e=""+hg(c),f=ig(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},hg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ig=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function lg(a,b,c){var d,e=a.tb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ga())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function mg(){for(var a=ng,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function og(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var ng,pg;function rg(a){ng=ng||og();pg=pg||mg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,q=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(q=64));b.push(ng[l],ng[m],ng[q],ng[r])}return b.join("")}
function sg(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),q=pg[m];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}ng=ng||og();pg=pg||mg();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var tg;var xg=function(){var a=ug,b=vg,c=wg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){oc(E,"mousedown",d);oc(E,"keyup",d);oc(E,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},yg=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};wg().decorators.push(f)},zg=function(a,b,c){for(var d=wg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==E.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[q])){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Ja(e,h.callback())}}return e},wg=function(){var a=ic("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ag=/(.*?)\*(.*?)\*(.*)/,Bg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Cg=/^(?:www\.|m\.|amp\.)+/,Dg=/([^?#]+)(\?[^#]*)?(#.*)?/;function Eg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Gg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(rg(String(d))))}var e=b.join("*");return["1",Fg(e),e].join("*")},Fg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=tg)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}tg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^tg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Ig=function(){return function(a){var b=Ze(D.location.href),c=b.search.replace("?",""),d=Ue(c,"_gl",!0)||"";a.query=Hg(d)||{};var e=Xe(b,"fragment").match(Eg("_gl"));a.fragment=Hg(e&&e[3]||"")||{}}},Jg=function(){var a=Ig(),b=wg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ja(c,d.query),Ja(c,d.fragment));return c},Hg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ag.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],q=0;q<b;++q)if(m===Fg(k,q)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)r[u[p]]=sg(u[p+1]);return r}}}}catch(t){}};
function Kg(a,b,c,d){function e(q){var r=q,u=Eg(a).exec(r),p=r;if(u){var t=u[2],v=u[4];p=u[1];v&&(p=p+t+v)}q=p;var w=q.charAt(q.length-1);q&&"&"!==w&&(q+="&");return q+m}d=void 0===d?!1:d;var f=Dg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Lg(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=zg(b,1,c),e=zg(b,2,c),f=zg(b,3,c);if(Ka(d)){var h=Gg(d);c?Mg("_gl",h,a):Ng("_gl",h,a,!1)}if(!c&&Ka(e)){var k=Gg(e);Ng("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,q=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Ng(m,q,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Mg(m,q,r);break a}}"string"==typeof r&&Kg(m,q,r,void 0)}}
function Ng(a,b,c,d){if(c.href){var e=Kg(a,b,c.href,void 0===d?!1:d);Se.test(e)&&(c.href=e)}}
function Mg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=E.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Kg(a,b,c.action);Se.test(m)&&(c.action=m)}}}
var ug=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Lg(e,e.hostname)}}catch(h){}},vg=function(a){try{if(a.action){var b=Xe(Ze(a.action),"host");Lg(a,b)}}catch(c){}},Og=function(a,b,c,d){xg();yg(a,b,"fragment"===c?2:1,!!d,!1)},Pg=function(a,b){xg();yg(a,[We(D.location,"host",!0)],b,!0,!0)},Qg=function(){var a=E.location.hostname,b=Bg.exec(E.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Cg,""),l=e.replace(Cg,""),m;if(!(m=k===l)){var q="."+l;m=k.substring(k.length-q.length,k.length)===q}return m},Rg=function(a,b){return!1===a?!1:a||b||Qg()};var Sg=/^\w+$/,Tg=/^[\w-]+$/,Ug=/^~?[\w-]+$/,Vg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Wg=function(){if(!Tf("gtag_cs_api")||!wf())return!0;var a=vf("ad_storage");return null==a?!0:!!a},Xg=function(a){Wg()?a():yf(a,"ad_storage")};function Yg(a){return a&&"string"==typeof a&&a.match(Sg)?a:"_gcl"}
var $g=function(){var a=Ze(D.location.href),b=Xe(a,"query",!1,void 0,"gclid"),c=Xe(a,"query",!1,void 0,"gclsrc"),d=Xe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ue(e,"gclid",void 0);c=c||Ue(e,"gclsrc",void 0)}return Zg(b,c,d)},Zg=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Tg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Tf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},bh=function(a){var b=$g();Xg(function(){return ah(b,a)})};
function ah(a,b,c){function d(m,q){var r=ch(m,e);r&&(dg(r,q,f),h=!0)}b=b||{};var e=Yg(b.prefix);c=c||Ga();var f=lg(b,c,!0);f.Ca="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.ei?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var eh=function(a,b){var c=Jg();Xg(function(){for(var d=Yg(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Vg[f]){var h=ch(f,d),k=c[h];if(k){var l=Math.min(dh(k),Ga()),m;b:{for(var q=l,r=Vf(h,E.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(dh(r[u])>q){m=!0;break b}m=!1}if(!m){var p=lg(b,l,!0);p.Ca="ad_storage";dg(h,k,p)}}}}ah(Zg(c.gclid,c.gclsrc),b)})},ch=function(a,b){var c=Vg[a];if(void 0!==c)return b+c},dh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function fh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var gh=function(a,b,c,d,e){if(sa(b)){var f=Yg(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=ch(a[l],f);if(m){var q=Vf(m,E.cookie,void 0,"ad_storage");q.length&&(k[m]=q.sort()[q.length-1])}}return k};Xg(function(){Og(h,b,c,d)})}},hh=function(a){return a.filter(function(b){return Ug.test(b)})},ih=function(a,b){for(var c=Yg(b.prefix),d={},e=0;e<a.length;e++)Vg[a[e]]&&(d[a[e]]=Vg[a[e]]);Xg(function(){Aa(d,function(f,h){var k=Vf(c+h,E.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=dh(l),
q={};q[f]=[fh(l)];ah(q,b,m)}})})};function jh(a){for(var b=["aw","dc"],c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var kh=function(){function a(d,e,f){f&&(d[e]=f)}var b=$g();if(jh(b)){var c={};a(c,"gclid",b.gclid);a(c,"dclid",b.dclid);a(c,"gclsrc",b.gclsrc);Pg(function(){return c},3);Pg(function(){var d={};return d._up="1",d},1)}},lh=function(){var a;if(Wg()){for(var b=[],c=E.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({nd:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&
(h[b[k].nd]||(h[b[k].nd]=[]),h[b[k].nd].push({timestamp:l[1],vg:l[2]}))}a=h}else a={};return a};function mh(){var a=!1;return a}
function nh(a){function b(l){var m;Qc.reported_gclid||(Qc.reported_gclid={});m=Qc.reported_gclid;var q=d+(l?"gcu":"gcs");if(!m[q]){m[q]=!0;var r=[],u=function(v,w){w&&r.push(v+"="+encodeURIComponent(w))},p=d;u("gclid",p);u("gclsrc",e);var t="https://www.google.com/pagead/landing?"+r.join("&");uc(t)}}var c=$g(),d=c.gclid||"",e=c.gclsrc,
f=!a&&(!d||e&&"aw.ds"!==e?!1:!0),h=mh();if(f||h){var k=""+gg();b();}};var oh;if(3===I.Kb.length)oh="g";else{var ph="G";oh=ph}
var qh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:oh,OPT:"o"},rh=function(a){var b=I.s.split("-"),c=b[0].toUpperCase(),d=qh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===I.Kb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+I.Kb+e};var Bh=["1"],Ch={},Gh=function(a){var b=Dh(a.prefix);Ch[b]||Eh(b,a.path,a.domain)||(Fh(b,gg(),a),Eh(b,a.path,a.domain))};function Fh(a,b,c){var d=kg(b,"1",c.domain,c.path),e=lg(c);e.Ca="ad_storage";dg(a,d,e)}function Eh(a,b,c){var d=jg(a,b,c,Bh,"ad_storage");d&&(Ch[a]=d);return d}function Dh(a){return(a||"_gcl")+"_au"};var Hh=/^\d+\.fls\.doubleclick\.net$/;function Ih(a){Cf("ad_storage")?a():yf(a,"ad_storage")}function Jh(a){var b=Ze(D.location.href),c=Xe(b,"host",!1);if(c&&c.match(Hh)){var d=Xe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Kh(a,b){if("aw"==a||"dc"==a){var c=Jh("gcl"+a);if(c)return c.split(".")}var d=Yg(b);if(Cf("ad_storage")&&"_gcl"==d){var e;e=$g()[a]||[];if(0<e.length)return e}var f=ch(a,d),h;if(f){var k=[];if(E.cookie){var l=Vf(f,E.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var q=fh(l[m]);q&&-1===n(k,q)&&k.push(q)}h=hh(k)}else h=k}else h=k}else h=[];return h}
var Lh=function(){var a=Jh("gac");if(a)return decodeURIComponent(a);var b=lh(),c=[];Aa(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].vg);f=hh(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},Mh=function(a,b){var c=$g().dc||[];Ih(function(){Gh(b);var d=Ch[Dh(b.prefix)],e=!1;if(d&&0<c.length){var f=Qc.joined_au=Qc.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;uc(l);e=f[h]=!0}}null==a&&
(a=e);if(a&&d){var m=Dh(b.prefix),q=Ch[m];q&&Fh(m,q,b)}})};var Gi={},Hi=["G","GP"];Gi.Ve="";var Ii=Gi.Ve.split(",");function Ji(){var a=Qc;return a.gcq=a.gcq||new Ki}
var Li=function(a,b,c){Ji().register(a,b,c)},Mi=function(a,b,c,d){Ji().push("event",[b,a],c,d)},Ni=function(a,b){Ji().push("config",[a],b)},Oi={},Pi=function(a){return!0},Qi=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Ri=function(a,b,c,d,e){this.type=a;this.m=b;this.Y=c||"";
this.h=d;this.i=e},Ki=function(){this.m={};this.i={};this.h=[]},Si=function(a,b){var c=Rd(b);return a.m[c.containerId]=a.m[c.containerId]||new Qi},Ti=function(a,b,c){if(b){var d=Rd(b);if(d&&1===Si(a,b).status&&Pi(d.prefix)){Si(a,b).status=2;var e={};vd&&(e.timeoutId=D.setTimeout(function(){J("GTM",38);gd()},3E3));a.push("require",[e],d.containerId);Oi[d.containerId]=Ga();if(Ud()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=D.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=Gf(c,h)||k;kc(l)}}}},Ui=function(a,b,c,d){if(d.Y){var e=Si(a,d.Y),
f=e.m;if(f){var h=C(c),k=C(e.targetConfig[d.Y]),l=C(e.containerConfig),m=C(e.i),q=C(a.i),r=Fd("gtm.uniqueEventId"),u=Rd(d.Y).prefix,p=Pf(Of(Nf(Mf(Lf(Kf(Jf(h),k),l),m),q),function(){zd(r,u,"2");}),function(){zd(r,u,"3");});try{zd(r,u,"1");f(d.Y,b,d.m,p)}catch(t){
zd(r,u,"4");}}}};
Ki.prototype.register=function(a,b,c){if(3!==Si(this,a).status){Si(this,a).m=b;Si(this,a).status=3;c&&(Si(this,a).i=c);var d=Rd(a),e=Oi[d.containerId];if(void 0!==e){var f=Qc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Qc[d.containerId]._spx&&(h=h.toLowerCase());var k=Fd("gtm.uniqueEventId"),l=h,m=Ga()-f;if(vd&&!md[k]){k!==id&&(fd(),id=k);var q=l+"."+Math.floor(f-e)+"."+Math.floor(m);rd=rd?rd+","+q:"&cl="+q}delete Oi[d.containerId]}this.flush()}};
Ki.prototype.push=function(a,b,c,d){var e=Math.floor(Ga()/1E3);Ti(this,c,b[0][Q.xa]||this.i[Q.xa]);this.h.push(new Ri(a,e,c,b,d));d||this.flush()};
Ki.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Si(this,c.Y).status&&!a)return;vd&&D.clearTimeout(c.h[0].timeoutId);break;case "set":Aa(c.h[0],function(l,m){C(Ma(l,m),b.i)});break;case "config":var d=c.h[0],e=!!d[Q.bc];delete d[Q.bc];var f=Si(this,c.Y),h=Rd(c.Y),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.Y]={});f.h&&e||Ui(this,Q.D,d,c);f.h=!0;delete d[Q.ra];k?C(d,f.containerConfig):
C(d,f.targetConfig[c.Y]);break;case "event":Ui(this,c.h[1],c.h[0],c)}this.h.shift()}};var Vi=["GP","G"],Wi="G".split(/,/);Wi.push("GF");Wi.push("HA");var Xi=!1;Xi=!0;var Yi=null,Zi={},$i={},aj;function bj(a,b){var c={event:a};b&&(c.eventModel=C(b),b[Q.yc]&&(c.eventCallback=b[Q.yc]),b[Q.Fb]&&(c.eventTimeout=b[Q.Fb]));return c}
var hj={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ra(a[2])&&void 0!=a[2])return;c=a[2]}var d=bj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ra(a[1])?b=C(a[1]):3==a.length&&
g(a[1])&&(b={},Ra(a[2])||sa(a[2])?b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var ij={policy:!0};var jj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},lj=function(a){var b=kj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var mj=!1,nj=[];function oj(){if(!mj){mj=!0;for(var a=0;a<nj.length;a++)H(nj[a])}}var pj=function(a){mj?H(a):nj.push(a)};var Hj=function(a){if(Gj(a))return a;this.h=a};Hj.prototype.zg=function(){return this.h};var Gj=function(a){return!a||"object"!==Pa(a)||Ra(a)?!1:"getUntrustedUpdateValue"in a};Hj.prototype.getUntrustedUpdateValue=Hj.prototype.zg;var Ij=[],Jj=!1,Kj=function(a){return D["dataLayer"].push(a)},Lj=function(a){var b=Qc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Mj(a){var b=a._clear;Aa(a,function(f,h){"_clear"!==f&&(b&&Jd(f,void 0),Jd(f,h))});Vc||(Vc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=ad(),a["gtm.uniqueEventId"]=d,Jd("gtm.uniqueEventId",d));Xc=c;var e=Nj(a);Xc=null;switch(c){case "gtm.init":J("GTM",19),e&&J("GTM",20)}return e}
function Nj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Qc.zones;d=e?e.checkState(I.s,c):pe;return d.active?of(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Oj(){for(var a=!1;!Jj&&0<Ij.length;){Jj=!0;delete Cd.eventModel;Ed();var b=Ij.shift();if(null!=b){var c=Gj(b);if(c){var d=b;b=Gj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Fd(h,1);if(sa(k)||Ra(k))k=C(k);Dd[h]=k}}try{if(qa(b))try{b.call(Gd)}catch(v){}else if(sa(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),q=m.pop(),r=l.slice(1),u=Fd(m.join("."),2);if(void 0!==u&&null!==u)try{u[q].apply(u,r)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=hj[b[0]];if(t&&(!c||!ij[b[0]])){b=t(b);break a}}b=void 0}if(!b){Jj=!1;continue}}a=Mj(b)||a}}finally{c&&Ed(!0)}}Jj=!1}
return!a}function Pj(){var a=Oj();try{jj(D["dataLayer"],I.s)}catch(b){}return a}
var Rj=function(){var a=ic("dataLayer",[]),b=ic("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};xe(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});pj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Qc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Hj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Ij.push.apply(Ij,d);if(300<
this.length)for(J("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Oj()&&h};Ij.push.apply(Ij,a.slice(0));Qj()&&H(Pj)},Qj=function(){var a=!0;return a};var Sj={};Sj.Gb=new String("undefined");
var Tj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Sj.Gb?b:a[d]);return c.join("")}};Tj.prototype.toString=function(){return this.h("undefined")};Tj.prototype.valueOf=Tj.prototype.toString;Sj.Df=Tj;Sj.Hc={};Sj.ig=function(a){return new Tj(a)};var Uj={};Sj.jh=function(a,b){var c=ad();Uj[c]=[a,b];return c};Sj.ke=function(a){var b=a?0:1;return function(c){var d=Uj[c];if(d&&"function"===typeof d[b])d[b]();Uj[c]=void 0}};Sj.Ig=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Sj.$g=function(a){if(a===Sj.Gb)return a;var b=ad();Sj.Hc[b]=a;return'google_tag_manager["'+I.s+'"].macro('+b+")"};Sj.Sg=function(a,b,c){a instanceof Sj.Df&&(a=a.h(Sj.jh(b,c)),b=pa);return{Tc:a,C:b}};var Vj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||qc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Wj=function(a){Qc.hasOwnProperty("autoEventsSettings")||(Qc.autoEventsSettings={});var b=Qc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Xj=function(a,b,c){Wj(a)[b]=c},Yj=function(a,b,c,d){var e=Wj(a),f=Ha(e,b,d);e[b]=c(f)},Zj=function(a,b,c){var d=Wj(a);return Ha(d,b,c)};var ak=["input","select","textarea"],bk=["button","hidden","image","reset","submit"],ck=function(a){var b=a.tagName.toLowerCase();return!wa(ak,function(c){return c===b})||"input"===b&&wa(bk,function(c){return c===a.type.toLowerCase()})?!1:!0},dk=function(a){return a.form?a.form.tagName?a.form:E.getElementById(a.form):tc(a,["form"],100)},ek=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(ck(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var fk=!!D.MutationObserver,gk=void 0,hk=function(a){if(!gk){var b=function(){var c=E.body;if(c)if(fk)(new MutationObserver(function(){for(var e=0;e<gk.length;e++)H(gk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;oc(c,"DOMNodeInserted",function(){d||(d=!0,H(function(){d=!1;for(var e=0;e<gk.length;e++)H(gk[e])}))})}};gk=[];E.body?b():H(b)}gk.push(a)};
var sk=function(){var a=E.body,b=E.documentElement||a&&a.parentElement,c,d;if(E.compatMode&&"BackCompat"!==E.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};J("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},tk=function(a){var b=sk(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},uk=function(a){if(E.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};
var Bk=function(a,b,c){function d(){var h=a();f+=e?(Ga()-e)*h.playbackRate/1E3:0;e=Ga()}var e=0,f=0;return{Tb:function(h,k,l){var m=a(),q=m.me,r=void 0!==l?Math.round(l):void 0!==k?Math.round(m.me*k):Math.round(m.jg),u=void 0!==k?Math.round(100*k):0>=q?0:Math.round(r/q*100),p=E.hidden?!1:.5<=tk(c);d();var t=Vj(c,"gtm.video",[b]);t["gtm.videoProvider"]="youtube";t["gtm.videoStatus"]=h;t["gtm.videoUrl"]=m.url;t["gtm.videoTitle"]=m.title;t["gtm.videoDuration"]=Math.round(q);t["gtm.videoCurrentTime"]=
Math.round(r);t["gtm.videoElapsedTime"]=Math.round(f);t["gtm.videoPercent"]=u;t["gtm.videoVisible"]=p;Kj(t)},lh:function(){e=Ga()},Ic:function(){d()}}};var Ck=D.clearTimeout,Dk=D.setTimeout,U=function(a,b,c){if(Ud()){b&&H(b)}else return kc(a,b,c)},Ek=function(){return D.location.href},Fk=function(a){return Xe(Ze(a),"fragment")},Gk=function(a){return Ye(Ze(a))},V=function(a,b){return Fd(a,b||2)},Hk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Kj(a)):d=Kj(a);return d},Ik=function(a,b){D[a]=b},W=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},Jk=function(a,b,c){return Vf(a,b,void 0===c?!0:!!c)},Kk=function(a,b){if(Ud()){b&&H(b)}else mc(a,b)},Lk=function(a){return!!Zj(a,"init",!1)},Mk=function(a){Xj(a,"init",!0)},Nk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Uc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";U(T("https://","http://",c))},Ok=function(a,b){var c=a[b];return c};
var Pk=Sj.Sg;var ll=new ya;function ml(a,b){function c(h){var k=Ze(h),l=Xe(k,"protocol"),m=Xe(k,"host",!0),q=Xe(k,"port"),r=Xe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==q||"https"==l&&"443"==q)l="web",q="default";return[l,m,q,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function nl(a){return ol(a)?1:0}
function ol(a){var b=a.arg0,c=a.arg1;if(a.any_of&&sa(c)){for(var d=0;d<c.length;d++)if(nl({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var q;q=String(b).split(",");return 0<=n(q,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=ll.get(p);t||(t=new RegExp(c,u),ll.set(p,t));r=t.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ml(b,
c)}return!1};var pl=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ql={},rl=encodeURI,X=encodeURIComponent,sl=nc;var tl=function(a,b){if(!a)return!1;var c=Xe(Ze(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var ul=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};ql.Jg=function(){var a=!1;return a};var Im=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||xa();return a.hid};var Tm=window,Um=document,Vm=function(a){var b=Tm._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Tm["ga-disable-"+a])return!0;try{var c=Tm.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Rf("AMP_TOKEN",String(Um.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Um.getElementById("__gaOptOutExtension")?!0:!1};
var Ym=function(a){Aa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[Q.ja]||{};Aa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var bn=function(a,b,c){Mi(b,c,a)},cn=function(a,b,c){Mi(b,c,a,!0)},en=function(a,b){};
function dn(a,b){}var Y={a:{}};
Y.a.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Y.__gaawc=b;Y.__gaawc.b="gaawc";Y.__gaawc.g=!0;Y.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=ul(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(Q.ja)||b.vtp_userProperties){var e=d[Q.ja]||{};C(ul(b.vtp_userProperties,"name","value"),e);d[Q.ja]=e}a(d,Q.ze,function(f){return Ca(f)});a(d,Q.Ce,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;Ni(d,c);H(b.vtp_gtmOnSuccess)})}();

Y.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(y){for(var B=[],z=y.split(","),A=0;A<z.length;A++){var F=Number(z[A]);if(isNaN(F))return[];q.test(z[A])||B.push(F)}return B}function c(){var y=0,B=0;return function(){var z=sk(),A=z.height;y=Math.max(v.scrollLeft+z.width,y);B=Math.max(v.scrollTop+A,B);return{lg:y,mg:B}}}function d(){p=W("self");
t=p.document;v=t.scrollingElement||t.body&&t.body.parentNode;x=c()}function e(y,B,z,A){var F=l(B),G={},L;for(L in F){G.Ga=L;if(F.hasOwnProperty(G.Ga)){var R=Number(G.Ga);y<R||(Hk({event:"gtm.scrollDepth","gtm.scrollThreshold":R,"gtm.scrollUnits":z.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":F[G.Ga].join(",")}),Yj("sdl",B,function(aa){return function(ba){delete ba[aa.Ga];return ba}}(G),{}))}G={Ga:G.Ga}}}function f(){var y=x(),B=y.lg,z=y.mg,A=B/v.scrollWidth*100,F=z/v.scrollHeight*100;e(B,
"horiz.pix",r.Ib,u.Ed);e(A,"horiz.pct",r.Hb,u.Ed);e(z,"vert.pix",r.Ib,u.Yd);e(F,"vert.pct",r.Hb,u.Yd);Xj("sdl","pending",!1)}function h(){var y=250,B=!1;t.scrollingElement&&t.documentElement&&p.addEventListener&&(y=50,B=!0);var z=0,A=!1,F=function(){A?z=Dk(F,y):(z=0,f(),Lk("sdl")&&!a()&&(pc(p,"scroll",G),pc(p,"resize",G),Xj("sdl","init",!1)));A=!1},G=function(){B&&x();z?A=!0:(z=Dk(F,y),Xj("sdl","pending",!0))};return G}function k(y,B,z){if(B){var A=b(String(y));Yj("sdl",z,function(F){for(var G=0;G<
A.length;G++){var L=String(A[G]);F.hasOwnProperty(L)||(F[L]=[]);F[L].push(B)}return F},{})}}function l(y){return Zj("sdl",y,{})}function m(y){H(y.vtp_gtmOnSuccess);var B=y.vtp_uniqueTriggerId,z=y.vtp_horizontalThresholdsPixels,A=y.vtp_horizontalThresholdsPercent,F=y.vtp_verticalThresholdUnits,G=y.vtp_verticalThresholdsPixels,L=y.vtp_verticalThresholdsPercent;switch(y.vtp_horizontalThresholdUnits){case r.Ib:k(z,B,"horiz.pix");break;case r.Hb:k(A,B,"horiz.pct")}switch(F){case r.Ib:k(G,B,"vert.pix");
break;case r.Hb:k(L,B,"vert.pct")}Lk("sdl")?Zj("sdl","pending")||(w||(d(),w=!0),H(function(){return f()})):(d(),w=!0,v&&(Mk("sdl"),Xj("sdl","pending",!0),H(function(){f();if(a()){var R=h();oc(p,"scroll",R);oc(p,"resize",R)}else Xj("sdl","init",!1)})))}var q=/^\s*$/,r={Hb:"PERCENT",Ib:"PIXELS"},u={Yd:"vertical",Ed:"horizontal"},p,t,v,w=!1,x;(function(y){Y.__sdl=y;Y.__sdl.b="sdl";Y.__sdl.g=!0;Y.__sdl.priorityOverride=0})(function(y){y.vtp_triggerStartOption?m(y):pj(function(){m(y)})})}();

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.b="sp";Y.__sp.g=!0;Y.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;Ge();U(b,function(){var d=W("google_trackConversion");if(qa(d)){var e=
{};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=ul(a.vtp_customParams,"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,
google_gtm:rh()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=a.vtp_userId);d(h)||c()}else c()},c)})}();Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.b="c";Y.__c.g=!0;Y.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Y.a.d=["google"],function(){(function(a){Y.__d=a;Y.__d.b="d";Y.__d.g=!0;Y.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=xc(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=E.getElementById(a.vtp_elementId);b&&(d?c=qc(b,d):c=rc(b));return Fa(String(b&&c))})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0;Y.__e.priorityOverride=0})(function(a){return String(Ld(a.vtp_gtmEventId,"event"))})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0;Y.__f.priorityOverride=0})(function(a){var b=V("gtm.referrer",1)||E.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Xe(Ze(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Gk(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Vj(c,"gtm.click");Hk(d)}}(function(b){Y.__cl=b;Y.__cl.b="cl";Y.__cl.g=!0;Y.__cl.priorityOverride=0})(function(b){if(!Lk("cl")){var c=W("document");oc(c,"click",a,!0);Mk("cl")}H(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0;Y.__k.priorityOverride=0})(function(a){return Jk(a.vtp_name,V("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.b="u";Y.__u.g=!0;Y.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=V("gtm.url",1);c=c||Ek();var d=b[a("vtp_component")];if(!d||"URL"==d)return Gk(String(c));var e=Ze(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?sa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var q=0;q<m.length;q++){var r=Xe(e,"QUERY",void 0,void 0,m[q]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Xe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var q=d.vtp_gaSettings;C(ul(q.vtp_fieldsToSet,"fieldName","value"),f);C(ul(q.vtp_contentGroup,"index","group"),h);C(ul(q.vtp_dimension,"index","dimension"),k);C(ul(q.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;q.vtp_fieldsToSet=void 0;q.vtp_contentGroup=void 0;q.vtp_dimension=void 0;q.vtp_metric=void 0;var r=C(q);d=C(d,r)}C(ul(d.vtp_fieldsToSet,"fieldName","value"),f);C(ul(d.vtp_contentGroup,
"index","group"),h);C(ul(d.vtp_dimension,"index","dimension"),k);C(ul(d.vtp_metric,"index","metric"),l);var u=Ne(d.vtp_functionName);if(qa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+ad(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
x=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},y=function(O,K){return void 0===K?K:O(K)},B=function(O,K){if(K)for(var ua in K)K.hasOwnProperty(ua)&&x("set",O+ua,K[ua])},z=function(){var O=function(jn,uj,kn){if(!Ra(uj))return!1;for(var hd=Ha(Object(uj),kn,[]),qg=0;hd&&qg<hd.length;qg++)x(jn,hd[qg]);return!!hd&&0<hd.length},K;if(d.vtp_useEcommerceDataLayer){var ua=!1;ua||(K=V("ecommerce",1))}else d.vtp_ecommerceMacroData&&(K=d.vtp_ecommerceMacroData.ecommerce);if(!Ra(K))return;K=Object(K);var Qb=Ha(f,"currencyCode",K.currencyCode);void 0!==Qb&&x("set","&cu",Qb);O("ec:addImpression",K,"impressions");if(O("ec:addPromo",K[K.promoClick?"promoClick":"promoView"],"promotions")&&K.promoClick){x("ec:setAction","promo_click",K.promoClick.actionField);return}for(var Ea="detail checkout checkout_option click add remove purchase refund".split(" "),
ab="refund purchase remove checkout checkout_option add click detail".split(" "),bb=0;bb<Ea.length;bb++){var nb=K[Ea[bb]];if(nb){O("ec:addProduct",nb,"products");x("ec:setAction",Ea[bb],nb.actionField);if(vd)for(var zb=0;zb<ab.length;zb++){var Bc=K[ab[zb]];if(Bc){Bc!==nb&&J("GTM",13);break}}break}}},A=function(O,K,ua){var Qb=0;if(O)for(var Ea in O)if(O.hasOwnProperty(Ea)&&(ua&&v[Ea]||!ua&&void 0===v[Ea])){var ab=w[Ea]?Ca(O[Ea]):O[Ea];
"anonymizeIp"!=Ea||ab||(ab=void 0);K[Ea]=ab;Qb++}return Qb},F={name:t};A(f,F,!0);u("create",d.vtp_trackingId||e.trackingId,F);x("set","&gtm",rh(!0));
d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&x("set",O,d[K])})("nonInteraction","vtp_nonInteraction");B("contentGroup",h);B("dimension",k);B("metric",l);var G={};A(f,G,!1)&&x("set",G);var L;d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var O=
f&&f.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());var R={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(Ba,d.vtp_eventValue||e.value)};A(L,R,!1);x("send",R);}else if("TRACK_SOCIAL"==
d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var ta="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require",
"displayfeatures",void 0,{cookieName:ta})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var oa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:oa})}L?x("send","pageview",L):x("send","pageview");d.vtp_autoLinkDomains&&Oe(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);}if(!a){var va=
d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(va="internal/"+va);a=!0;var cb=T("https:","http:","//www.google-analytics.com/"+va,f&&f.forceSSL);U(cb,function(){var O=Le();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else H(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.b="ua";Y.__ua.g=!0;Y.__ua.priorityOverride=0}();



Y.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return E.getElementById(w)?a():w}function b(w,x){if(!w)return!1;for(var y=0;y<u.length;y++)if(0<=w.indexOf("//"+u[y]+"/"+x))return!0;return!1}function c(w){var x=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+x+"enablejsapi=1";if(!t){var y=W("document");t=y.location.protocol+"//"+y.location.hostname;y.location.port&&(t+=":"+y.location.port)}return w+x+"enablejsapi=1&origin="+encodeURIComponent(t)}function d(w,
x){var y=w.getAttribute("src");if(b(y,"embed/")){if(0<y.indexOf("enablejsapi=1"))return!0;if(x)return w.setAttribute("src",c(y)),!0}return!1}function e(w,x){if(!w.getAttribute("data-gtm-yt-inspected-"+x.od)&&(w.setAttribute("data-gtm-yt-inspected-"+x.od,"true"),d(w,x.te))){w.id||(w.id=a());var y=W("YT"),B=y.get(w.id);B||(B=new y.Player(w.id));var z=h(B,x),A={},F;for(F in z)A.Xa=F,z.hasOwnProperty(A.Xa)&&B.addEventListener(A.Xa,function(G){return function(L){return z[G.Xa](L.data)}}(A)),A={Xa:A.Xa}}}
function f(w){H(function(){function x(){for(var B=y.getElementsByTagName("iframe"),z=B.length,A=0;A<z;A++)e(B[A],w)}var y=W("document");x();hk(x)})}function h(w,x){var y,B;function z(){Z=Bk(function(){return{url:P,title:S,me:N,jg:w.getCurrentTime(),playbackRate:ta}},x.od,w.getIframe());N=0;S=P="";ta=1;return A}function A(O){switch(O){case p.PLAYING:N=Math.round(w.getDuration());P=w.getVideoUrl();if(w.getVideoData){var K=w.getVideoData();S=K?K.title:""}ta=w.getPlaybackRate();x.dg?Z.Tb("start"):Z.Ic();
M=m(x.bh,x.ah,w.getDuration());return F(O);default:return A}}function F(){oa=w.getCurrentTime();va=(new Date).getTime();Z.lh();ea();return G}function G(O){var K;switch(O){case p.ENDED:return R(O);case p.PAUSED:K="pause";case p.BUFFERING:var ua=w.getCurrentTime()-oa;K=1<Math.abs(((new Date).getTime()-va)/1E3*ta-ua)?"seek":K||"buffering";w.getCurrentTime()&&(x.cg?Z.Tb(K):Z.Ic());ba();return L;case p.UNSTARTED:return z(O);default:return G}}function L(O){switch(O){case p.ENDED:return R(O);case p.PLAYING:return F(O);
case p.UNSTARTED:return z(O);default:return L}}function R(){for(;B;){var O=y;Ck(B);O()}x.bg&&Z.Tb("complete",1);return z(p.UNSTARTED)}function aa(){}function ba(){B&&(Ck(B),B=0,y=aa)}function ea(){if(M.length&&0!==ta){var O=-1,K;do{K=M[0];if(K.Da>w.getDuration())return;O=(K.Da-w.getCurrentTime())/ta;if(0>O&&(M.shift(),0===M.length))return}while(0>O);y=function(){B=0;y=aa;0<M.length&&M[0].Da===K.Da&&(M.shift(),Z.Tb("progress",K.Le,K.Qe));ea()};B=Dk(y,1E3*O)}}var Z,M=[],N,P,S,ta,oa,va,cb=z(p.UNSTARTED);
B=0;y=aa;return{onStateChange:function(O){cb=cb(O)},onPlaybackRateChange:function(O){oa=w.getCurrentTime();va=(new Date).getTime();Z.Ic();ta=O;ba();ea()}}}function k(w){for(var x=w.split(","),y=x.length,B=[],z=0;z<y;z++){var A=parseInt(x[z],10);isNaN(A)||100<A||0>A||B.push(A/100)}B.sort(function(F,G){return F-G});return B}function l(w){for(var x=w.split(","),y=x.length,B=[],z=0;z<y;z++){var A=parseInt(x[z],10);isNaN(A)||0>A||B.push(A)}B.sort(function(F,G){return F-G});return B}function m(w,x,y){var B=
w.map(function(F){return{Da:F,Qe:F,Le:void 0}});if(!x.length)return B;var z=x.map(function(F){return{Da:F*y,Qe:void 0,Le:F}});if(!B.length)return z;var A=B.concat(z);A.sort(function(F,G){return F.Da-G.Da});return A}function q(w){w.vtp_triggerStartOption?r(w):xe(function(){r(w)})}function r(w){var x=!!w.vtp_captureStart,y=!!w.vtp_captureComplete,B=!!w.vtp_capturePause,z=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),F=!!w.vtp_fixMissingApi;if(x||y||B||z.length||
A.length){var G={dg:x,bg:y,cg:B,ah:z,bh:A,te:F,od:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},L=W("YT"),R=function(){f(G)};H(w.vtp_gtmOnSuccess);if(L)L.ready&&L.ready(R);else{var aa=W("onYouTubeIframeAPIReady");Ik("onYouTubeIframeAPIReady",function(){aa&&aa();R()});H(function(){for(var ba=W("document"),ea=ba.getElementsByTagName("script"),Z=ea.length,M=0;M<Z;M++){var N=ea[M].getAttribute("src");if(b(N,"iframe_api")||b(N,"player_api"))return}for(var P=ba.getElementsByTagName("iframe"),
S=P.length,ta=0;ta<S;ta++)if(!v&&d(P[ta],G.te)){U("https://www.youtube.com/iframe_api");v=!0;break}})}}else H(w.vtp_gtmOnSuccess)}var u=["www.youtube.com","www.youtube-nocookie.com"],p={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},t,v=!1;Y.__ytl=q;Y.__ytl.b="ytl";Y.__ytl.g=!0;Y.__ytl.priorityOverride=0}();
Y.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;C(ul(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=C(e);c=C(c,f)||{}}C(ul(c.vtp_fieldsToSet,"fieldName","value"),d);var h=Ne(c.vtp_functionName);if(qa(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+ad(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},q={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},r=function(x,y,B){var z=0,A;for(A in x)if(x.hasOwnProperty(A)&&
(B&&m[A]||!B&&void 0===m[A])){var F=q[A]?Ca(x[A]):x[A];"anonymizeIp"!==A||F||(F=void 0);y[A]=F;z++}return z},u={name:l};r(d,u,!0);var p={"&gtm":rh(!0)};r(d,p,!1);var t=encodeURI(T("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,u);h(k+"set",p);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,U(t,function(){return Le().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=W("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else H(c.vtp_gtmOnFailure)};Y.__opt=b;Y.__opt.b="opt";Y.__opt.g=!0;Y.__opt.priorityOverride=0}();
Y.a.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.b="cid";Y.__cid.g=!0;Y.__cid.priorityOverride=0})(function(){return I.s})}();


Y.a.aev=["google"],function(){function a(p,t){var v=Ld(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var x=p+"."+t,y;if(q.hasOwnProperty(x))y=q[x];else{var B=a(p,w);if(B&&(y=v(B),q[x]=y,r.push(x),35<r.length)){var z=r.shift();delete q[z]}}return y}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e(Ek());sa(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<t.length;x++)if(t[x]instanceof RegExp){if(t[x].test(p))return!1}else{var y=
t[x];if(0!=y.length){if(0<=e(p).indexOf(y))return!1;w.push(e(y))}}return!tl(p,w)}function e(p){m.test(p)||(p="http://"+p);return Xe(Ze(p),"HOST",!0)}function f(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(t,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(t,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return qc(p,"value");case "button":return rc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)ck(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&qc(w,t)||v}var m=/^https?:\/\//i,q={},r=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Y.__aev=p;Y.__aev.b="aev";Y.__aev.g=!0;Y.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var x=a(t,"element");return x&&x.tagName||
v;case "TEXT":return b(t,w,rc)||v;case "URL":var y;a:{var B=String(a(t,"elementUrl")||v||""),z=Ze(B),A=String(p.vtp_component||"URL");switch(A){case "URL":y=B;break a;case "IS_OUTBOUND":y=d(B,p.vtp_affiliatedDomains);break a;default:y=Xe(z,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return y;case "ATTRIBUTE":var F;if(void 0===p.vtp_attribute)F=c(t,w,v);else{var G=p.vtp_attribute,L=a(t,"element");F=L&&qc(L,G)||v||""}return F;case "MD":var R=p.vtp_mdValue,aa=b(t,"MD",ok);return R&&aa?rk(aa,
R)||v:aa||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();
Y.a.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Y.__gas=b;Y.__gas.b="gas";Y.__gas.g=!0;Y.__gas.priorityOverride=0})(function(b){var c=C(b),d=c;d[Hb.va]=null;d[Hb.ff]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();


Y.a.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:Ek()}function b(f,h){oc(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Gk(l),L:Fk(l)})})}function c(f,h){oc(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Gk(l),L:Fk(l)})})}function d(f,h,k){var l=h.history,m=l[f];if(qa(m))try{l[f]=function(q,r,u){m.apply(l,[].slice.call(arguments,0));k({source:f,state:q,url:Gk(Ek()),
L:Fk(Ek())})}}catch(q){}}function e(){var f={source:null,state:W("history").state||null,url:Gk(Ek()),L:Fk(Ek())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.L!=h.L){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.L,"gtm.newUrlFragment":h.L,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=h.url;
f=h;Hk(m)}}}(function(f){Y.__hl=f;Y.__hl.b="hl";Y.__hl.g=!0;Y.__hl.priorityOverride=0})(function(f){var h=W("self");if(!Lk("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Mk("hl")}H(f.vtp_gtmOnSuccess)})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){Ge();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:rh()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(w){return function(x,y,B){var z="DATA_LAYER"==w?V(B):k[y];z&&(l[x]=z)}},q=m("JSON");q("google_conversion_currency","vtp_currencyCode");q("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(q=m(k.vtp_productReportingDataSource),q("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),q("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),q("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),q("google_basket_discount","vtp_discount","discount"),q("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(w){return{value:w.price,quantity:w.quantity,item_id:w.id}})));var r=function(w,x){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[w]=x},u=function(w){return function(x,y,B,z){var A="DATA_LAYER"==w?V(B):k[y];z(A)&&r(x,A)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";
k.vtp_enableNewCustomerReporting&&(q=u(k.vtp_newCustomerReportingDataSource),q("vdnc","vtp_awNewCustomer","new_customer",function(w){return void 0!=w&&""!==w}),q("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(w){return void 0!=w&&""!==w}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var v=
!0;v&&b.push(l);a||(a=!0,U(p,f(),e(p)))};
Y.__awct=h;Y.__awct.b="awct";Y.__awct.g=!0;Y.__awct.priorityOverride=0}();
Y.a.fsl=[],function(){function a(){var e=W("document"),f=c(),h=HTMLFormElement.prototype.submit;oc(e,"click",function(k){var l=k.target;if(l&&(l=tc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&qc(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=E.getElementById(l.form):m=tc(l,["form"],100);m&&f.store(m,l)}},!1);oc(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,q=b(l)&&!m,r=f.get(l),u=!0;if(d(l,function(){if(u){var p;
r&&(p=e.createElement("input"),p.type="hidden",p.name=r.name,p.value=r.value,l.appendChild(p));h.call(l);p&&l.removeChild(p)}},m,q,r))u=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return wa(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var m=Zj("fsl",h?"nv.mwt":"mwt",0),q;q=h?Zj("fsl","nv.ids",[]):Zj("fsl","ids",[]);if(!q.length)return!0;var r=Vj(e,"gtm.formSubmit",q),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);r["gtm.elementUrl"]=u;l&&(r["gtm.formSubmitElement"]=l);if(k&&m){if(!Hk(r,Lj(f),m))return!1}else Hk(r,function(){},m||2E3);return!0}(function(e){Y.__fsl=e;Y.__fsl.b=
"fsl";Y.__fsl.g=!0;Y.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,r)};Yj("fsl","mwt",m,0);h||Yj("fsl","nv.mwt",m,0)}var q=function(r){r.push(l);return r};Yj("fsl","ids",q,[]);h||Yj("fsl","nv.ids",q,[]);Lk("fsl")||(a(),Mk("fsl"));H(e.vtp_gtmOnSuccess)})}();




Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.b="paused";Y.__paused.g=!0;Y.__paused.priorityOverride=0})(function(a){H(a.vtp_gtmOnFailure)})}();Y.a.hid=["google"],function(){(function(a){Y.__hid=a;Y.__hid.b="hid";Y.__hid.g=!0;Y.__hid.priorityOverride=0})(function(){return Sj.Gb})}();
Y.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=E.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var q=k.getAttribute("data-gtmsrc");q&&(m.src=q,jc(m,l));d.insertBefore(m,null);q||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){H(h)}}}var c=function(d){if(E.body){var e=
d.vtp_gtmOnFailure,f=Pk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Tc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(E.body,sc(h),k,e)()}else Dk(function(){c(d)},
200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0;Y.__html.priorityOverride=0}();

Y.a.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.b="dbg";Y.__dbg.g=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();




Y.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Hg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=tc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=Zj("lcl",k?"nv.mwt":"mwt",0),m;m=k?Zj("lcl","nv.ids",[]):Zj("lcl","ids",[]);if(m.length){var q=Vj(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var r=String(Ok(h,"rel")||""),u=!!wa(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
u&&J("GTM",36);var p=W((Ok(h,"target")||"_self").substring(1)),t=!0;if(Hk(q,Lj(function(){var v;if(v=t&&p){var w;a:if(u){var x;try{x=new MouseEvent(f.type)}catch(y){if(!c.createEvent){w=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.Hg=!0;f.target.dispatchEvent(x);w=!0}else w=!1;v=!w}v&&(p.location.href=Ok(h,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Hk(q,function(){},l||2E3);return!0}}};oc(c,"click",e,!1);oc(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Ok(d,"href"),h=f.indexOf("#"),k=Ok(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Gk(f),m=Gk(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.b="lcl";Y.__lcl.g=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};Yj("lcl","mwt",k,0);e||Yj("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Yj("lcl","ids",l,[]);e||Yj("lcl","nv.ids",l,[]);Lk("lcl")||(a(),Mk("lcl"));H(c.vtp_gtmOnSuccess)})}();


var fn={};fn.macro=function(a){if(Sj.Hc.hasOwnProperty(a))return Sj.Hc[a]},fn.onHtmlSuccess=Sj.ke(!0),fn.onHtmlFailure=Sj.ke(!1);fn.dataLayer=Gd;fn.callback=function(a){Zc.hasOwnProperty(a)&&qa(Zc[a])&&Zc[a]();delete Zc[a]};function gn(){Qc[I.s]=fn;Ja($c,Y.a);yb=yb||Sj;Ab=oe}
function hn(){Sf.gtm_3pds=!0;Qc=D.google_tag_manager=D.google_tag_manager||{};if(Qc[I.s]){var a=Qc.zones;a&&a.unregisterChild(I.s);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)rb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)ub.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)tb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var q=l[m],r={},u=0;u<q.length;u++)r[q[u][0]]=Array.prototype.slice.call(q[u],1);sb.push(r)}wb=Y;xb=nl;gn();Rj();se=!1;te=0;if("interactive"==E.readyState&&!E.createEventObject||"complete"==E.readyState)ve();else{oc(E,
"DOMContentLoaded",ve);oc(E,"readystatechange",ve);if(E.createEventObject&&E.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(x){}p&&we()}oc(D,"load",ve)}mj=!1;"complete"===E.readyState?oj():oc(D,"load",oj);a:{if(!vd)break a;D.setInterval(wd,864E5);
}Wc=(new Date).getTime();}}
(function(a){a()})(hn);


})()
