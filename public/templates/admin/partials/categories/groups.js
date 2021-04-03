
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
    return compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['groups']), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-name=\"" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['displayName'])) + 
          "\">\n\t<div class=\"btn-group pull-right\">\n\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\tPrivileges <span class=\"caret\"></span>\n\t\t</button>\n\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:find\" class=\"" + 
          (guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['privileges'] && context['groups'][key0]['privileges']['groups:find']) ?
            "active" :
            "") + 
          "\">Find Category</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:read\" class=\"" + 
          (guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['privileges'] && context['groups'][key0]['privileges']['groups:read']) ?
            "active" :
            "") + 
          "\">Access Category</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:read\" class=\"" + 
          (guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['privileges'] && context['groups'][key0]['privileges']['groups:topics:read']) ?
            "active" :
            "") + 
          "\">Access Topics</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:create\" class=\"" + 
          (guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['privileges'] && context['groups'][key0]['privileges']['groups:topics:create']) ?
            "active" :
            "") + 
          "\">Create Topics</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:reply\" class=\"" + 
          (guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['privileges'] && context['groups'][key0]['privileges']['groups:topics:reply']) ?
            "active" :
            "") + 
          "\">Reply to Topics</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:posts:edit\" class=\"" + 
          (guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['privileges'] && context['groups'][key0]['privileges']['groups:posts:edit']) ?
            "active" :
            "") + 
          "\">Edit Posts</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:posts:delete\" class=\"" + 
          (guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['privileges'] && context['groups'][key0]['privileges']['groups:posts:delete']) ?
            "active" :
            "") + 
          "\">Delete Posts</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:delete\" class=\"" + 
          (guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['privileges'] && context['groups'][key0]['privileges']['groups:topics:delete']) ?
            "active" :
            "") + 
          "\">Delete Topics</a></li>\n\t\t</ul>\n\t</div>\n\t" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['displayName'])) + 
          "\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
