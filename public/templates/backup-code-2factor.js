
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
    return "<div class=\"row\">\n\t<div class=\"col-sm-4 col-sm-offset-4\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-mobile-phone\"></i> [[2factor:title]]</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<p>\n\t\t\t\t\t[[2factor:backup.text]]\n\t\t\t\t</p>\n\t\t\t\t" + 
      (guard(context && context['error']) ?
        "\n\t\t\t\t<div class=\"alert alert-danger\">\n\t\t\t\t" + 
          __escape(guard(context && context['error'])) + 
          "\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t<form role=\"form\" method=\"post\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-lg text-center\" id=\"code\" name=\"code\" autocomplete=\"off\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type=\"hidden\" id=\"csrf\" name=\"csrf\" value=\"" + 
      __escape(guard(context && context['config'] && context['config']['csrf_token'])) + 
      "\" />\n\t\t\t\t\t<button class=\"btn btn-block btn-primary text-center\" type=\"submit\">[[2factor:login.verify]]</button>\n\t\t\t\t\t<hr />\n\t\t\t\t\t<p class=\"text-center\">\n\t\t\t\t\t\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/login/2fa\"><i class=\"fa fa-history\"></i> [[2factor:backup.use_code]]</a>\n\t\t\t\t\t</p>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
