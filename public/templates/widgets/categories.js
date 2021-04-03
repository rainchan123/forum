
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
    return compiled.blocks['categories'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<ul class=\"categories-list\">\r\n\t<li>\r\n\t\t" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['link']) ?
            "\r\n\t\t<h4><a href=\"" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['link'])) + 
              "\">" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
              "</a></h4>\r\n\t\t" :
            "\r\n\t\t<h4><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/category/" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['slug'])) + 
              "\">" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
              "</a></h4>\r\n\t\t") + 
          "\r\n\t\t<p>" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['descriptionParsed'])) + 
          "</p>\r\n\t</li>\r\n</ul>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
