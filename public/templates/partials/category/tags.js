
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
    return (guard(context && context['topics'] && context['topics']['tags'] && context['topics']['tags']['length']) ?
        "\r\n\t" + 
          compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
          "\r\n" :
        "");
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['tags']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/tags/" + 
          __escape(guard(context && context['topics'] && context['topics']['tags'] && context['topics']['tags']['value'])) + 
          "\"><span class=\"tag-item\" data-tag=\"" + 
          __escape(guard(context && context['topics'] && context['topics']['tags'] && context['topics']['tags']['value'])) + 
          "\" style=\"" + 
          (guard(context && context['topics'] && context['topics']['tags'] && context['topics']['tags']['color']) ?
            "color: " + 
              __escape(guard(context && context['topics'] && context['topics']['tags'] && context['topics']['tags']['color'])) + 
              ";" :
            "") + 
          (guard(context && context['topics'] && context['topics']['tags'] && context['topics']['tags']['bgColor']) ?
            "background-color: " + 
              __escape(guard(context && context['topics'] && context['topics']['tags'] && context['topics']['tags']['bgColor'])) + 
              ";" :
            "") + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics']['tags'] && context['topics']['tags']['value'])) + 
          "</span><span class=\"tag-topic-count human-readable-number\" title=\"" + 
          __escape(guard(context && context['topics'] && context['topics']['tags'] && context['topics']['tags']['score'])) + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics']['tags'] && context['topics']['tags']['score'])) + 
          "</span></a>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
