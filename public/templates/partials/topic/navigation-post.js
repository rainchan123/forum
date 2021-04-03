
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
    return "<div class=\"clearfix\">\r\n\t<div class=\"icon pull-left\">\r\n\t\t<a href=\"" + 
      (guard(context && context['post'] && context['post']['user'] && context['post']['user']['userslug']) ?
        __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['post'] && context['post']['user'] && context['post']['user']['userslug'])) :
        "#") + 
      "\">\r\n\t\t\t" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['post'] && context['post']['user']), "sm", guard(context && context['true']), "", "user/picture"])) + 
      " " + 
      __escape(guard(context && context['post'] && context['post']['user'] && context['post']['user']['username'])) + 
      "\r\n\t\t</a>\r\n\t</div>\r\n\t<small class=\"pull-right\">\r\n\t\t<span class=\"timeago\" title=\"" + 
      __escape(guard(context && context['post'] && context['post']['timestampISO'])) + 
      "\"></span>\r\n\t</small>\r\n</div>\r\n\r\n<div>" + 
      __escape(guard(context && context['post'] && context['post']['content'])) + 
      "</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
