
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
    return "<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['rooms'] && context['rooms']['users'] && context['rooms']['users']['userslug'])) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['rooms'] && context['rooms']['users']), "sm", guard(context && context['true'])])) + 
      "</a>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
