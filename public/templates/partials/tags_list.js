
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
    return compiled.blocks['tags'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['tags']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<h3 class=\"pull-left tag-container\">\r\n\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/tags/" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "\" data-value=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "\"><span class=\"tag-item\" data-tag=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "\" style=\"" + 
          (guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['color']) ?
            "color: " + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['color'])) + 
              ";" :
            "") + 
          (guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['bgColor']) ?
            "background-color: " + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['bgColor'])) + 
              ";" :
            "") + 
          "\">" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "</span><span class=\"tag-topic-count human-readable-number\" title=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['score'])) + 
          "\">" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['score'])) + 
          "</span></a>\r\n</h3>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
