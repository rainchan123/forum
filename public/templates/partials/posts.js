
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
    return compiled.blocks['posts'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li data-pid=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['pid'])) + 
          "\" class=\"clearfix widget-posts\">\r\n\t<a href=\"" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug']) ?
            __escape(guard(context && context['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug'])) :
            "#") + 
          "\">\r\n\r\n\t\t" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['picture']) ?
            "\r\n\t\t<img title=\"" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['username'])) + 
              "\" class=\"avatar avatar-sm not-responsive\" src=\"" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['picture'])) + 
              "\" />\r\n\t\t" :
            "\r\n\t\t<div title=\"" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['username'])) + 
              "\" class=\"avatar avatar-sm not-responsive\" style=\"background-color: " + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['icon:text'])) + 
              "</div>\r\n\t\t") + 
          "\r\n\t</a>\r\n\t<div>\r\n\t\t" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['content'])) + 
          "\r\n\t\t<p class=\"fade-out\"></p>\r\n\t</div>\r\n\t<span class=\"pull-right post-preview-footer\">\r\n\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['timestampISO'])) + 
          "\"></span> &bull;\r\n\t\t<a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/post/" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['pid'])) + 
          "\">[[global:read_more]]</a>\r\n\t</span>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
