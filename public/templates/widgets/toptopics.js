
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
    return "<div class=\"recent-replies\">\r\n\t<ul class=\"top_topics\">\r\n\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n</div>";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['topics']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li class=\"clearfix widget-topics\">\r\n\t<a href=\"" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug']) ?
            __escape(guard(context && context['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug'])) :
            "#") + 
          "\">\r\n\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['picture']) ?
            "\r\n\t\t<img title=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['username'])) + 
              "\" class=\"avatar avatar-sm not-responsive\" src=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['picture'])) + 
              "\" />\r\n\t\t" :
            "\r\n\t\t<div title=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['username'])) + 
              "\" class=\"avatar avatar-sm not-responsive\" style=\"background-color: " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['icon:text'])) + 
              "</div>\r\n\t\t") + 
          "\r\n\t</a>\r\n\r\n\t<p>\r\n\t\t<a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/topic/" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['slug'])) + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['title'])) + 
          "</a>\r\n\t</p>\r\n\t<span class=\"pull-right post-preview-footer\">\r\n\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['lastposttimeISO'])) + 
          "\"></span>\r\n\t</span>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
