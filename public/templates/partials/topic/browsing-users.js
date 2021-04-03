
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
    return "<div component=\"topic/browsing-users\" class=\"inline-block hidden-xs\">\r\n\t" + 
      compiled.blocks['browsingUsers'](helpers, context, guard, iter, helper) + 
      "\r\n</div>";
  }

  compiled.blocks = {
    'browsingUsers': function browsingUsers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['browsingUsers']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div class=\"pull-left\" data-uid=\"" + 
          __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['uid'])) + 
          "\">\r\n\t\t<a href=\"" + 
          (guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['userslug']) ?
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['userslug'])) :
            "#") + 
          "\">\r\n\t\t\t" + 
          (guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['picture']) ?
            "\r\n\t\t\t<img class=\"avatar avatar-sm avatar-rounded\" component=\"user/picture\" src=\"" + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['picture'])) + 
              "\" align=\"left\" itemprop=\"image\" title=\"" + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['username'])) + 
              "\"/>\r\n\t\t\t" :
            "\r\n\t\t\t<div class=\"avatar avatar-sm avatar-rounded\" component=\"user/picture\" title=\"" + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['username'])) + 
              "\" style=\"background-color: " + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['icon:text'])) + 
              "</div>\r\n\t\t\t") + 
          "\r\n\t\t</a>\r\n\t</div>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
