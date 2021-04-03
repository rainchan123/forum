
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
    return "<div class=\"cookie-consent\">\r\n    <button class=\"pull-right btn btn-primary\">" + 
      __escape(guard(context && context['dismiss'])) + 
      "</button>\r\n    " + 
      __escape(guard(context && context['message'])) + 
      " <a target=\"_blank\" rel=\"noopener\" href=\"" + 
      __escape(guard(context && context['link_url'])) + 
      "\">" + 
      __escape(guard(context && context['link'])) + 
      "</a>\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
