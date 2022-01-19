/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["ui/MyProjectTwo/secondproject/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
