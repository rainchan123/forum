
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
    return "<div class=\"row\">\n\t<div class=\"col-xs-6\">\n\t\t<div class=\"text-center\">\n\t\t\t<img src=\"" + 
      __escape(guard(context && context['qr'])) + 
      "\" />\n\t\t</div>\n\t</div>\n\t<div class=\"col-xs-6\">\n\t\t<p>\n\t\t\t[[2factor:generate.text]]\n\t\t</p>\n\t\t<form role=\"form\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control input-lg 2fa-confirm\" />\n\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-primary btn-lg\" type=\"button\" data-action=\"confirm\">Confirm</button>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n<div class=\"text-center\">\n\t<br />\n\t<strong>[[2factor:generate.safety.title]]</strong>\n\t<p class=\"help-block\">\n\t\t[[2factor:generate.safety.text]]\n\t</p>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
