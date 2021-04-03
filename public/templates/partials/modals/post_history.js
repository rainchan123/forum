
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
    return "<p>\r\n\t" + 
      (guard(context && context['numDiffs']) ?
        "\r\n\t[[topic:diffs.description, " + 
          __escape(guard(context && context['numDiffs'])) + 
          "]]\r\n\t" :
        "\r\n\t[[topic:diffs.no-revisions-description, " + 
          __escape(guard(context && context['numDiffs'])) + 
          "]]\r\n\t") + 
      "\r\n</p>\r\n" + 
      (guard(context && context['numDiffs']) ?
        "\r\n<div class=\"form-group\">\r\n\t<select class=\"form-control\">\r\n\t\t" + 
          compiled.blocks['diffs'](helpers, context, guard, iter, helper) + 
          "\r\n\t</select>\r\n\r\n\t<hr />\r\n\r\n\t<ul class=\"posts-list diffs\"></ul>\r\n\r\n\t" + 
          (guard(context && context['editable']) ?
            "\r\n\t<button class=\"btn btn-primary\" data-action=\"restore\">[[topic:diffs.restore]]</button>\r\n\t<p class=\"help-block\">[[topic:diffs.restore-description]]</p>\r\n\t" :
            "") + 
          "\r\n</div>\r\n" :
        "");
  }

  compiled.blocks = {
    'diffs': function diffs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['diffs']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<option value=\"" + 
          __escape(guard(context && context['diffs'] && context['diffs'][key0] && context['diffs'][key0]['timestamp'])) + 
          "\">\r\n\t\t\t" + 
          __escape(guard(context && context['diffs'] && context['diffs'][key0] && context['diffs'][key0]['pretty'])) + 
          "\r\n\t\t\t" + 
          (guard(context && context['diffs'] && context['diffs'][key0] && context['diffs'][key0]['username']) ?
            "[" + 
              __escape(guard(context && context['diffs'] && context['diffs'][key0] && context['diffs'][key0]['username'])) + 
              "]" :
            "") + 
          "\r\n\t\t\t" + 
          (index === 0 ?
            "([[topic:diffs.current-revision]])" :
            "") + 
          "\r\n\t\t\t" + 
          (index === length - 1 ?
            "([[topic:diffs.original-revision]])" :
            "") + 
          "\r\n\t\t</option>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
