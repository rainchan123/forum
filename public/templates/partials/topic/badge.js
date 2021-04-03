
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
    return compiled.blocks['posts.user.selectedGroups'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'posts.user.selectedGroups': function postsuserselectedGroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n" + 
          (guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['slug']) ?
            "\r\n<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/groups/" + 
              __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['slug'])) + 
              "\"><small class=\"label group-label inline-block\" style=\"color:" + 
              __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['textColor'])) + 
              ";background-color: " + 
              __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['labelColor'])) + 
              ";\">" + 
              (guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['icon']) ?
                "<i class=\"fa " + 
                  __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['icon'])) + 
                  "\"></i> " :
                "") + 
              __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['userTitle'])) + 
              "</small></a>\r\n" :
            "") + 
          "\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
