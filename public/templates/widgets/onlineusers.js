
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
    return "<div class=\"active-users\">\r\n\t" + 
      compiled.blocks['online_users'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n";
  }

  compiled.blocks = {
    'online_users': function online_users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['online_users']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<a data-uid=\"" + 
          __escape(guard(context && context['online_users'] && context['online_users'][key0] && context['online_users'][key0]['uid'])) + 
          "\" href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['online_users'] && context['online_users'][key0] && context['online_users'][key0]['userslug'])) + 
          "\">\r\n\t\t" + 
          (guard(context && context['online_users'] && context['online_users'][key0] && context['online_users'][key0]['picture']) ?
            "\r\n\t\t<img title=\"" + 
              __escape(guard(context && context['online_users'] && context['online_users'][key0] && context['online_users'][key0]['username'])) + 
              "\" src=\"" + 
              __escape(guard(context && context['online_users'] && context['online_users'][key0] && context['online_users'][key0]['picture'])) + 
              "\" class=\"avatar avatar-sm avatar-rounded not-responsive\" />\r\n\t\t" :
            "\r\n\t\t<div title=\"" + 
              __escape(guard(context && context['online_users'] && context['online_users'][key0] && context['online_users'][key0]['username'])) + 
              "\" class=\"avatar avatar-sm avatar-rounded not-responsive\" style=\"background-color: " + 
              __escape(guard(context && context['online_users'] && context['online_users'][key0] && context['online_users'][key0]['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['online_users'] && context['online_users'][key0] && context['online_users'][key0]['icon:text'])) + 
              "</div>\r\n\t\t") + 
          "\r\n\t</a>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
