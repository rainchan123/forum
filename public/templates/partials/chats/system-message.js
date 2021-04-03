
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
    return "<li component=\"chat/system-message\" class=\"system-message clear\" data-index=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['index'])) + 
      "\" data-mid=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['messageId'])) + 
      "\" data-uid=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['fromuid'])) + 
      "\" data-self=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['self'])) + 
      "\" data-break=\"0\" data-timestamp=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['timestamp'])) + 
      "\">\r\n\t[[modules:chat.system." + 
      __escape(guard(context && context['messages'] && context['messages']['content'])) + 
      ", " + 
      __escape(guard(context && context['messages'] && context['messages']['fromUser'] && context['messages']['fromUser']['username'])) + 
      "]]\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
