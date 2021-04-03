
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
    return "<ul id=\"quick-search-results\" class=\"quick-search-results\">\r\n" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n" + 
      (guard(context && context['multiplePages']) ?
        "\r\n<div class=\"text-center\">\r\n\t<a href=\"" + 
          __escape(guard(context && context['url'])) + 
          "\">\r\n\t\t[[search:see-more-results, " + 
          __escape(guard(context && context['matchCount'])) + 
          "]]\r\n\t</a>\r\n</div>\r\n" :
        "") + 
      "\r\n" + 
      (guard(context && context['posts'] && context['posts']['length']) ?
        "" :
        "\r\n<div class=\"text-center no-results\">[[search:no-matches]]</li>\r\n");
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li data-tid=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['topic'] && context['posts'][key0]['topic']['tid'])) + 
          "\" data-pid=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['pid'])) + 
          "\">\r\n\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/post/" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['pid'])) + 
          "\">\r\n\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user']), "sm", guard(context && context['true'])])) + 
          "\r\n\t\t<span class=\"quick-search-title\">" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['topic'] && context['posts'][key0]['topic']['title'])) + 
          "</span>\r\n\t\t<br/>\r\n\t\t<p class=\"snippet\">\r\n\t\t" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['snippet'])) + 
          "\r\n\t\t</p>\r\n\t\t<small class=\"post-info pull-right\">\r\n\t\t\t<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'])])) + 
          "\"><i style=\"color:" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['color'])) + 
          ";\" class=\"fa " + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['icon'])) + 
          " fa-stack-1x\"></i></span> " + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['name'])) + 
          " &bull;\r\n\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['timestampISO'])) + 
          "\"></span>\r\n\t\t</small>\r\n\t </a>\r\n</li>\r\n" + 
          (index === length - 1 ?
            "" :
            "\r\n<li role=\"separator\" class=\"divider\"></li>\r\n") + 
          "\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
