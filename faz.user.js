// ==UserScript==

let homediv = document.getElementsByClassName('Home')[0];
let children = homediv.children;

//Disable Wrapper
let all = homediv.getElementsByTagName('*');
for (i = 0; i < all.length; i ++) {
	all[i].style.cssText = "";
}
children[children.length - 1].style.cssText = "display: none;";


