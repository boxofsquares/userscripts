// ==UserScript==
// @name         FAZ Remove AdBlock Warning
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
// @include      http://www.faz.net*
// @include      https://www.faz.net*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	// ==UserScript==

    // select the target node
    let target = document.getElementsByClassName('Home')[0];
    // create an observer instance
    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            console.log("Recorded mutation event " + mutation.type);
        });
        observer.disconnect();

        let addedNodes = mutations[0].addedNodes;
        for (i = 0; i < addedNodes.length; i++) {
          target.removeChild(addedNodes[i]);
        }

        let targetChildren = mutations[0].target.getElementsByTagName('*');
        for (i = 0; i < targetChildren.length; i++) {
           targetChildren[i].style.cssText = "";
        }

        // disconnect observer when removed
    });

    // configuration of the observer:
    let config = { attributes: true, childList: true, characterData: true };

    // pass in the target node, as well as the observer options
    observer.observe(target, config);

})();