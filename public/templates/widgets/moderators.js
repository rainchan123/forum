
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
    return "<div class=\"moderators\">\r\n\t" + 
      compiled.blocks['moderators'](helpers, context, guard, iter, helper) + 
      "\r\n</div>";
  }

  compiled.blocks = {
    'moderators': function moderators(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['moderators']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<a data-uid=\"" + 
          __escape(guard(context && context['moderators'] && context['moderators'][key0] && context['moderators'][key0]['uid'])) + 
          "\" href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['moderators'] && context['moderators'][key0] && context['moderators'][key0]['userslug'])) + 
          "\">\r\n\t\t" + 
          (guard(context && context['moderators'] && context['moderators'][key0] && context['moderators'][key0]['picture']) ?
            "\r\n\t\t<img title=\"" + 
              __escape(guard(context && context['moderators'] && context['moderators'][key0] && context['moderators'][key0]['username'])) + 
              "\" src=\"" + 
              __escape(guard(context && context['moderators'] && context['moderators'][key0] && context['moderators'][key0]['picture'])) + 
              "\" class=\"avatar avatar-sm not-responsive\" />\r\n\t\t" :
            "\r\n\t\t<div title=\"" + 
              __escape(guard(context && context['moderators'] && context['moderators'][key0] && context['moderators'][key0]['username'])) + 
              "\" class=\"avatar avatar-sm not-responsive\" style=\"background-color: " + 
              __escape(guard(context && context['moderators'] && context['moderators'][key0] && context['moderators'][key0]['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['moderators'] && context['moderators'][key0] && context['moderators'][key0]['icon:text'])) + 
              "</div>\r\n\t\t") + 
          "\r\n\t</a>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
