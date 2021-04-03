
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
    return compiled.blocks['users'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li class=\"users-box registered-user\" data-uid=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
          "\">\r\n\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['users'] && context['users'][key0]), "lg", guard(context && context['true'])])) + 
          "</a>\r\n\t<br/>\r\n\t<div class=\"user-info\">\r\n\t\t<span>\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['status'])) + 
          "\" title=\"[[global:" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['status'])) + 
          "]]\"></i>\r\n\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['userslug'])) + 
          "\">" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          "</a>\r\n\t\t</span>\r\n\t\t<br/>\r\n\r\n\t\t" + 
          (guard(context && context['section_joindate']) ?
            "\r\n\t\t<div title=\"joindate\" class=\"joindate\">\r\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['joindateISO'])) + 
              "\"></span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard(context && context['section_sort-reputation']) ?
            "\r\n\t\t<div title=\"reputation\" class=\"reputation\">\r\n\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t<span class=\"formatted-number\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['reputation'])) + 
              "</span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard(context && context['section_sort-posts']) ?
            "\r\n\t\t<div title=\"post count\" class=\"post-count\">\r\n\t\t\t<i class=\"fa fa-pencil\"></i>\r\n\t\t\t<span class=\"formatted-number\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['postcount'])) + 
              "</span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard(context && context['section_flagged']) ?
            "\r\n\t\t<div title=\"flag count\" class=\"flag-count\">\r\n\t\t\t<i class=\"fa fa-flag\"></i>\r\n\t\t\t<span><a class=\"formatted-number\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/flags?targetUid=" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
              "\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['flags'])) + 
              "</a></span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\t</div>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
