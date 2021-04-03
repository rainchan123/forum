
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/languages:language-settings]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<p>\n\t\t\t[[admin/settings/languages:description]]\n\t\t</p>\n\n\t\t<form class=\"row\">\n\t\t\t<div class=\"form-group col-sm-6\">\n\t\t\t\t<label for=\"defaultLang\">[[admin/settings/languages:default-language]]</label>\n\t\t\t\t<select id=\"language\" data-field=\"defaultLang\" class=\"form-control\">\n\t\t\t\t\t" + 
      compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</form>\n\n\t\t<form class=\"row\">\n\t\t\t<div class=\"form-group col-sm-6\">\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"autoDetectLang\" " + 
      (guard(context && context['autoDetectLang']) ?
        "checked" :
        "") + 
      "/>\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/languages:auto-detect]]</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n\n<script>\n\trequire(['admin/settings'], function(Settings) {\n\t\tSettings.prepare();\n\t\tSettings.populateTOC();\n\t});\n</script>\n";
  }

  compiled.blocks = {
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['languages']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['languages'] && context['languages'][key0] && context['languages'][key0]['code'])) + 
          "\" " + 
          (guard(context && context['languages'] && context['languages'][key0] && context['languages'][key0]['selected']) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard(context && context['languages'] && context['languages'][key0] && context['languages'][key0]['name'])) + 
          " (" + 
          __escape(guard(context && context['languages'] && context['languages'][key0] && context['languages'][key0]['code'])) + 
          ")</option>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
