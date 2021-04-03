
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
    return "<div id=\"" + 
      __escape(guard(context && context['alert_id'])) + 
      "\" class=\"alert alert-dismissable alert-" + 
      __escape(guard(context && context['type'])) + 
      " clearfix\" component=\"toaster/toast\">\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\r\n\r\n\t" + 
      (guard(context && context['image']) ?
        "\r\n\t<img src=\"" + 
          __escape(guard(context && context['image'])) + 
          "\">\r\n\t" :
        "") + 
      "\r\n\r\n\t" + 
      (guard(context && context['title']) ?
        "\r\n\t<strong>" + 
          __escape(guard(context && context['title'])) + 
          "</strong>\r\n\t" :
        "") + 
      "\r\n\r\n\t" + 
      (guard(context && context['message']) ?
        "\r\n\t<p>" + 
          __escape(guard(context && context['message'])) + 
          "</p>\r\n\t" :
        "") + 
      "\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
