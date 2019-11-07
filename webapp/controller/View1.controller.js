sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"fdata/Formatter/format/formatter"
], function (Controller,format) {
	"use strict";
	    
	return Controller.extend("fdata.Formatter.controller.View1",{
		
		formatter:format
		
		
	});
	
});