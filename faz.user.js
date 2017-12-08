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
    // create an observer instance
    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            console.log("Recorded mutation event " + mutation.type);
        });
        observer.disconnect();

        let addedNodes = mutations[0].addedNodes;
        for (i = 0; i < addedNodes.length; i++) {
          mutations[0].target.removeChild(addedNodes[i]);
        }

        let targetChildren = mutations[0].target.getElementsByTagName('*');
        for (i = 0; i < targetChildren.length; i++) {
           targetChildren[i].style.cssText = "";
        }
        window.dispatchEvent(new Event('resize'));
        // disconnect observer when removed
    });

    // configuration of the observer:
    let config = { attributes: true, childList: true, characterData: true };

    let targets = ['Home', 'Artikel'];

    // select the target node
    for (i = 0; i < targets.length; i++) {
		let targetNode = document.getElementsByClassName(targets[i])[0]; // assuming there is only 1
		if (targetNode) {
        	// pass in the target node, as well as the observer options
	    	observer.observe(targetNode, config);
   		}
    }

})();