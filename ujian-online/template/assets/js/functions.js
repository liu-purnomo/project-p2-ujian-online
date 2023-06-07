/**
* Social - Network, Community and Event Theme
*
* @author Webestica (https://www.webestica.com/)
* @version 1.1.0
**/


/* ===================
Table Of Content
======================
01 PRELOADER
02 NAVBAR DROPDOWN HOVER
03 TINY SLIDER
04 TOOLTIP
05 POPOVER
06 VIDEO PLAYER
07 GLIGHTBOX
08 SIDEBAR TOGGLE START
09 SIDEBAR TOGGLE END
10 CHOICES
11 AUTO RESIZE TEXTAREA
12 DROP ZONE
13 FLAT PICKER
14 AVATAR IMAGE
15 CUSTOM SCROLLBAR
16 TOASTS
17 PSWMETER
18 FAKE PASSWORD
====================== */

"use strict";
!function () {

	window.Element.prototype.removeClass = function () {
		let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
			selectors = this;
		if (!(selectors instanceof HTMLElement) && selectors !== null) {
			selectors = document.querySelector(selectors);
		}
		if (this.isVariableDefined(selectors) && className) {
			selectors.classList.remove(className);
		}
		return this;
	}, window.Element.prototype.addClass = function () {
		let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
			selectors = this;
		if (!(selectors instanceof HTMLElement) && selectors !== null) {
			selectors = document.querySelector(selectors);
		}
		if (this.isVariableDefined(selectors) && className) {
			selectors.classList.add(className);
		}
		return this;
	}, window.Element.prototype.toggleClass = function () {
		let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
			selectors = this;
		if (!(selectors instanceof HTMLElement) && selectors !== null) {
			selectors = document.querySelector(selectors);
		}
		if (this.isVariableDefined(selectors) && className) {
			selectors.classList.toggle(className);
		}
		return this;
	}, window.Element.prototype.isVariableDefined = function () {
		return !!this && typeof (this) != 'undefined' && this != null;
	}
}();


var e = {
	init: function () {
		e.preLoader(),
			e.navbarDropdownHover(),
			e.tinySlider(),
			e.toolTipFunc(),
			e.popOverFunc(),
			e.videoPlyr(),
			e.lightBox(),
			e.sidebarToggleStart(),
			e.sidebarToggleEnd(),
			e.choicesSelect(),
			e.autoResize(),
			e.DropZone(),
			e.flatPicker(),
			e.avatarImg(),
			e.customScrollbar(),
			e.toasts(),
			e.pswMeter(),
			e.fakePwd();
	},
	isVariableDefined: function (el) {
		return typeof !!el && (el) != 'undefined' && el != null;
	},

	// START: 17 pswMeter
	pswMeter: function () {
		if (e.isVariableDefined(e.select('#pswmeter'))) {
			const myPassMeter = passwordStrengthMeter({
				containerElement: '#pswmeter',
				passwordInput: '#psw-input',
				showMessage: true,
				messageContainer: '#pswmeter-message',
				messagesList: [
					'Write your password...',
					'Easy peasy!',
					'That is a simple one',
					'That is better',
					'Yeah! that password rocks ;)'
				],
				height: 8,
				borderRadius: 4,
				pswMinLength: 8,
				colorScore1: '#dc3545',
				colorScore2: '#f7c32e',
				colorScore3: '#4f9ef8',
				colorScore4: '#0cbc87'
			});
		}
	},
	// END: pswMeter

};
e.init();
