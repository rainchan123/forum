
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
    return "<form role=\"form\" class=\"quickstart-settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">通用</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label for=\"setting-3\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"setting-3\" name=\"enable\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>启用插件</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"setting-1\">仓库地址</label>\r\n\t\t\t\t<input type=\"text\" id=\"setting-1\" name=\"loc\" title=\"Setting 1\" class=\"form-control\" >\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"setting-2\">GitHub用户名</label>\r\n\t\t\t\t<input type=\"text\" id=\"setting-2\" name=\"username\" title=\"Setting 2\" class=\"form-control\" >\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"setting-3\">token</label>\r\n\t\t\t\t<input type=\"password\" id=\"setting-3\" name=\"token\" title=\"Setting 3\" class=\"form-control\" >\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<br />\r\n\r\n</form>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
