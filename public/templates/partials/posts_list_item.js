
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
    return "<li component=\"post\" class=\"posts-list-item row" + 
      (guard(context && context['deleted']) ?
        " deleted" :
        (guard(context && context['topic'] && context['topic']['deleted']) ?
            " deleted" :
            "")) + 
      "\" data-pid=\"" + 
      __escape(guard(context && context['pid'])) + 
      "\" data-uid=\"" + 
      __escape(guard(context && context['uid'])) + 
      "\">\r\n    <div class=\"col-lg-11 col-sm-10 col-xs-9 post-body\">\r\n        <a class=\"topic-title\" href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/post/" + 
      __escape(guard(context && context['pid'])) + 
      "\">\r\n            " + 
      (guard(context && context['isMainPost']) ?
        "" :
        "RE: ") + 
      __escape(guard(context && context['topic'] && context['topic']['title'])) + 
      "\r\n        </a>\r\n\r\n        <div component=\"post/content\" class=\"content\">\r\n            " + 
      __escape(guard(context && context['content'])) + 
      "\r\n        </div>\r\n\r\n        <small class=\"topic-category\"><a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/category/" + 
      __escape(guard(context && context['category'] && context['category']['slug'])) + 
      "\">[[global:posted_in, " + 
      __escape(guard(context && context['category'] && context['category']['name'])) + 
      "]]</a></small>\r\n\r\n        <div class=\"post-info\">\r\n            <a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['user'] && context['user']['userslug'])) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['user']), "md", guard(context && context['true']), "user-img"])) + 
      "</a>\r\n\r\n            <div class=\"post-author\">\r\n                <a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['user'] && context['user']['userslug'])) + 
      "\">" + 
      __escape(guard(context && context['user'] && context['user']['displayname'])) + 
      "</a><br />\r\n                <span class=\"timeago\" title=\"" + 
      __escape(guard(context && context['timestampISO'])) + 
      "\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
