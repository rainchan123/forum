(function(e){if(typeof define==="function"&&define.amd){define(["jquery","./version"],e)}else{e(jQuery)}})(function(e){return e.fn.extend({disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});
//# sourceMappingURL=disable-selection.js.map