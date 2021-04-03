
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
    return "<div class=\"row logger\">\n\t<div class=\"col-lg-9\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/development/logger:logger-settings]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/development/logger:description]]\n\t\t\t\t</p>\n\t\t\t\t<br/>\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/development/logger:explanation]]\n\t\t\t\t</p>\n\t\t\t\t<br/>\n\n\t\t\t\t<form>\n\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type=\"checkbox\" data-field=\"loggerStatus\"> <strong>[[admin/development/logger:enable-http]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<br/>\n\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type=\"checkbox\" data-field=\"loggerIOStatus\"> <strong>[[admin/development/logger:enable-socket]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<br/>\n\n\t\t\t\t\t<label>[[admin/development/logger:file-path]]</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"[[admin/development/logger:file-path-placeholder]]\" data-field=\"loggerPath\" />\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"col-lg-3 acp-sidebar\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/development/logger:control-panel]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<button class=\"btn btn-primary\" id=\"save\">[[admin/development/logger:update-settings]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<script>\n\trequire(['admin/settings'], function(Settings) {\n\t\tSettings.prepare();\n\t});\n</script>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
