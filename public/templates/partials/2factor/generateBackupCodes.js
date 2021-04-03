
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
    return "<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<p class=\"lead\">\n\t\t\t[[2factor:backup.generate.one]]\n\t\t</p>\n\t\t<p>\n\t\t\t[[2factor:backup.generate.two]]\n\t\t</p>\n\t\t<ul class=\"list-group text-center\">\n\t\t\t" + 
      compiled.blocks['codes'](helpers, context, guard, iter, helper) + 
      "\n\t\t</ul>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'codes': function codes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['codes']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li class=\"list-group-item\">" + 
          __escape(guard(value)) + 
          "</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
