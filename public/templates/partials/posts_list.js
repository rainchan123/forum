
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
    return "<ul component=\"posts\" class=\"posts-list\" data-nextstart=\"" + 
      __escape(guard(context && context['nextStart'])) + 
      "\">\r\n\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n<div component=\"posts/loading\" class=\"loading-indicator text-center hidden\">\r\n\t<i class=\"fa fa-refresh fa-spin\"></i>\r\n</div>";
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li component=\"post\" class=\"posts-list-item row" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['deleted']) ?
            " deleted" :
            (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['topic'] && context['posts'][key0]['topic']['deleted']) ?
                " deleted" :
                "")) + 
          "\" data-pid=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['pid'])) + 
          "\" data-uid=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['uid'])) + 
          "\">\r\n    <div class=\"col-lg-11 col-sm-10 col-xs-9 post-body\">\r\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/post/" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['pid'])) + 
          "\">\r\n            " + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['isMainPost']) ?
            "" :
            "RE: ") + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['topic'] && context['posts'][key0]['topic']['title'])) + 
          "\r\n        </a>\r\n\r\n        <div component=\"post/content\" class=\"content\">\r\n            " + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['content'])) + 
          "\r\n        </div>\r\n\r\n        <small class=\"topic-category\"><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/category/" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['slug'])) + 
          "\">[[global:posted_in, " + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['name'])) + 
          "]]</a></small>\r\n\r\n        <div class=\"post-info\">\r\n            <a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user']), "md", guard(context && context['true']), "user-img"])) + 
          "</a>\r\n\r\n            <div class=\"post-author\">\r\n                <a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug'])) + 
          "\">" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['displayname'])) + 
          "</a><br />\r\n                <span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['timestampISO'])) + 
          "\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
