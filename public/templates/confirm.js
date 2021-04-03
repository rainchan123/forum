
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
    return (guard(context && context['error']) ?
        "\r\n<div class=\"alert alert-danger\">\r\n\t<strong>" + 
          __escape(guard(context && context['error'])) + 
          "</strong>\r\n\t<p>[[notifications:email-confirm-error-message]]</p>\r\n" :
        "\r\n<div class=\"alert alert-success\">\r\n\t<strong>[[notifications:email-confirmed]]</strong>\r\n\t<p>[[notifications:email-confirmed-message]]</p>\r\n") + 
      "\r\n\t<p>\r\n\t\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/\">[[notifications:back_to_home, " + 
      __escape(guard(context && context['config'] && context['config']['siteTitle'])) + 
      "]]</a>\r\n\t</p>\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
