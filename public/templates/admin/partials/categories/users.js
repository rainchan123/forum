
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
    return compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-uid=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
          "\">\n\t<div class=\"btn-group pull-right\">\n\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\tPrivileges <span class=\"caret\"></span>\n\t\t</button>\n\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"find\" class=\"" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['privileges'] && context['users'][key0]['privileges']['find']) ?
            "active" :
            "") + 
          "\">Find Category</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"read\" class=\"" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['privileges'] && context['users'][key0]['privileges']['read']) ?
            "active" :
            "") + 
          "\">Access Category</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"topics:read\" class=\"" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['privileges'] && context['users'][key0]['privileges']['topics:read']) ?
            "active" :
            "") + 
          "\">Access Topics</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"topics:create\" class=\"" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['privileges'] && context['users'][key0]['privileges']['topics:create']) ?
            "active" :
            "") + 
          "\">Create Topics</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"topics:reply\" class=\"" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['privileges'] && context['users'][key0]['privileges']['topics:reply']) ?
            "active" :
            "") + 
          "\">Reply to Topics</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"posts:edit\" class=\"" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['privileges'] && context['users'][key0]['privileges']['posts:edit']) ?
            "active" :
            "") + 
          "\">Edit Posts</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"posts:delete\" class=\"" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['privileges'] && context['users'][key0]['privileges']['posts:delete']) ?
            "active" :
            "") + 
          "\">Delete Posts</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"topics:delete\" class=\"" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['privileges'] && context['users'][key0]['privileges']['topics:delete']) ?
            "active" :
            "") + 
          "\">Delete Topics</a></li>\n\t\t\t<li role=\"presentation\" class=\"divider\"></li>\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"mods\" class=\"" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['privileges'] && context['users'][key0]['privileges']['mods']) ?
            "active" :
            "") + 
          "\">Moderator</a></li>\n\t\t</ul>\n\t</div>\n\t<img src=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['picture'])) + 
          "\" /> " + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          "\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
