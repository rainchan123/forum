
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
    return "<div class=\"popular-tags\">\r\n" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n";
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['tags']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<span class=\"inline-block\">\r\n\t<a href=\"" + 
          (guard(context && context['template'] && context['template']['category']) ?
            "?tag=" + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['value'])) :
            __escape(guard(context && context['relative_path'])) + 
              "/tags/" + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['value']))) + 
          "\"><span class=\"tag-item tag-" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['value'])) + 
          "\" style=\"" + 
          (guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['color']) ?
            "color: " + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['color'])) + 
              ";" :
            "") + 
          " " + 
          (guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['bgColor']) ?
            "background-color: " + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['bgColor'])) + 
              ";" :
            "") + 
          "\">" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['value'])) + 
          "</span><span class=\"tag-topic-count\">" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['score'])) + 
          "</span></a>\r\n\t</span>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
