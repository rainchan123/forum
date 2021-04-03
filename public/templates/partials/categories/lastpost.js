
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
    return "<div class=\"card background-link-container\" style=\"border-color: " + 
      __escape(guard(context && context['bgColor'])) + 
      "\">\r\n\t" + 
      compiled.blocks['./posts'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t" + 
      (guard(context && context['posts'] && context['posts']['length']) ?
        "" :
        "\r\n\t<div component=\"category/posts\">\r\n\t\t<div class=\"post-content\">\r\n\t\t\t[[category:no_new_posts]]\r\n\t\t</div>\r\n\t</div>\r\n\t") + 
      "\r\n</div>\r\n";
  }

  compiled.blocks = {
    './posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          (index === 0 ?
            "\r\n\t<div component=\"category/posts\">\r\n\t\t<a class=\"background-link\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/topic/" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['topic'] && context['posts'][key0]['topic']['slug'])) + 
              (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['index']) ?
                "/" + 
                  __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['index'])) :
                "") + 
              "\"></a>\r\n\t\t<p>\r\n\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug'])) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user']), "sm", guard(context && context['true'])])) + 
              "</a>\r\n\t\t\t<a class=\"permalink\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/topic/" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['topic'] && context['posts'][key0]['topic']['slug'])) + 
              (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['index']) ?
                "/" + 
                  __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['index'])) :
                "") + 
              "\">\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['timestampISO'])) + 
              "\"></small>\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t\t<div class=\"post-content\">\r\n\t\t\t" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['content'])) + 
              "\r\n\t\t</div>\r\n\t</div>\r\n\t" :
            "") + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
