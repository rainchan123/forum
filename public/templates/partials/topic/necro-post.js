
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
    return "<li component=\"topic/necro-post\" class=\"necro-post\">\r\n\t<span>" + 
      __escape(guard(context && context['text'])) + 
      "</span>\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
