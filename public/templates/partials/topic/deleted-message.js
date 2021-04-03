
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
    return "<div component=\"topic/deleted/message\" class=\"alert alert-warning" + 
      (guard(context && context['deleted']) ?
        "" :
        " hidden") + 
      " clearfix\">\r\n    <span class=\"pull-left\">[[topic:deleted_message]]</span>\r\n    <span class=\"pull-right\">\r\n        " + 
      (guard(context && context['deleter']) ?
        "\r\n        <a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['deleter'] && context['deleter']['userslug'])) + 
          "\">\r\n            <strong>" + 
          __escape(guard(context && context['deleter'] && context['deleter']['username'])) + 
          "</strong>\r\n        </a>\r\n        <small class=\"timeago\" title=\"" + 
          __escape(guard(context && context['deletedTimestampISO'])) + 
          "\"></small>\r\n        " :
        "") + 
      "\r\n    </span>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
