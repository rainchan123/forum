
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
    return "data-index=\"" + 
      __escape(guard(context && context['posts'] && context['posts']['index'])) + 
      "\" data-pid=\"" + 
      __escape(guard(context && context['posts'] && context['posts']['pid'])) + 
      "\" data-uid=\"" + 
      __escape(guard(context && context['posts'] && context['posts']['uid'])) + 
      "\" data-timestamp=\"" + 
      __escape(guard(context && context['posts'] && context['posts']['timestamp'])) + 
      "\" data-username=\"" + 
      __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['username'])) + 
      "\" data-userslug=\"" + 
      __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['userslug'])) + 
      "\" itemscope itemtype=\"http://schema.org/Comment\"";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
