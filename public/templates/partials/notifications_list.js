
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
    return "\r\n" + 
      (guard(context && context['notifications'] && context['notifications']['length']) ?
        "" :
        "\r\n<li class=\"no-notifs\"><a href=\"#\">[[notifications:no_notifs]]</a></li>\r\n") + 
      "\r\n\r\n" + 
      compiled.blocks['notifications'](helpers, context, guard, iter, helper) + 
      "\r\n";
  }

  compiled.blocks = {
    'notifications': function notifications(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['notifications']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li class=\"" + 
          __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['readClass'])) + 
          "\" data-nid=\"" + 
          __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['nid'])) + 
          "\" data-path=\"" + 
          __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['path'])) + 
          "\" " + 
          (guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['pid']) ?
            " data-pid=\"" + 
              __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['pid'])) + 
              "\"" :
            "") + 
          (guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['tid']) ?
            " data-tid=\"" + 
              __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['tid'])) + 
              "\"" :
            "") + 
          ">\r\n\t" + 
          (guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['image']) ?
            "\r\n\t" + 
              (guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['from']) ?
                "\r\n\t<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['user'] && context['notifications'][key0]['user']['userslug'])) + 
                  "\"><img class=\"pull-left user-img avatar avatar-md avatar-rounded\"src=\"" + 
                  __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['image'])) + 
                  "\" /></a>\r\n\t" :
                "") + 
              "\r\n\t" :
            "\r\n\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['user'] && context['notifications'][key0]['user']['userslug'])) + 
              "\"><div class=\"pull-left avatar avatar-md avatar-rounded\" style=\"background-color: " + 
              __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['user'] && context['notifications'][key0]['user']['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['user'] && context['notifications'][key0]['user']['icon:text'])) + 
              "</div></a>\r\n\t") + 
          "\r\n\r\n\t<div class=\"pull-right mark-read\" aria-label=\"Mark Read\"></div>\r\n\t<a href=\"" + 
          __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['path'])) + 
          "\">\r\n\t\t<span class=\"pull-right relTime\">" + 
          __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['timeago'])) + 
          "</span>\r\n\t\t<span class=\"text\">" + 
          __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['bodyShort'])) + 
          "</span>\r\n\t</a>\r\n\t<div class=\"clear\"></div>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
