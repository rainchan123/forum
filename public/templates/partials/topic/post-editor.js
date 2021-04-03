
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
    return "<small data-editor=\"" + 
      __escape(guard(context && context['editor'] && context['editor']['userslug'])) + 
      "\" component=\"post/editor\" class=\"hidden\">[[global:last_edited_by, " + 
      __escape(guard(context && context['editor'] && context['editor']['username'])) + 
      "]] <span class=\"timeago\" title=\"" + 
      __escape(guard(context && context['editedISO'])) + 
      "\"></span></small>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
