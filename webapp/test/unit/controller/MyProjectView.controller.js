/*global QUnit*/

sap.ui.define([
	"uiMyProjectTwo./second_project/controller/MyProjectView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyProjectView Controller");

	QUnit.test("I should test the MyProjectView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
