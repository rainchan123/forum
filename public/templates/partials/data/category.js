
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
    return "data-tid=\"" + 
      __escape(guard(context && context['topics'] && context['topics']['tid'])) + 
      "\" data-index=\"" + 
      __escape(guard(context && context['topics'] && context['topics']['index'])) + 
      "\" data-cid=\"" + 
      __escape(guard(context && context['topics'] && context['topics']['cid'])) + 
      "\" itemprop=\"itemListElement\"";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
