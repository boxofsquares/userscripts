// ==UserScript==
// @name         SPIEGEL Remove AdBlock Warning
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
// @include      http://www.spiegel.de*
// @include      https://www.spiegel.de*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ==UserScript==a
    var homeAnchor = document.getElementsByTagName('body')[0];
    //observer.observe(homeAnchor, config);
    homeAnchor.removeChild(document.getElementsByClassName('ua-default')[0]);

})();
