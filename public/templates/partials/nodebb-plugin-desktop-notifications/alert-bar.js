
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
    return "<div class=\"desktop-notification-permission visible-lg-block visible-md-block\">\r\n\t<div class=\"container\">\r\n\t\t<strong>" + 
      __escape(guard(context && context['config'] && context['config']['siteTitle'])) + 
      "</strong> needs your permission to activate desktop notifications. <strong class=\"activate-notifications\">Click here to activate them.</strong>\r\n\t\t<span class=\"pull-right deactivate-notifications\"><i class=\"fa fa-times-circle\"></i></span>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
