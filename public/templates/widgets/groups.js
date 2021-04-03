
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
    return "\r\n<div class=\"groups-list\">\r\n" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['groups']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<div class=\"groups-list-item clearfix\">\r\n\t<img src=\"" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['cover:url'])) + 
          "\" class=\"pull-left\" />\r\n\t<a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/groups/" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['slug'])) + 
          "\"><strong>" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['displayName'])) + 
          "</strong></a>\r\n</div>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
