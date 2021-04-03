
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
    return (guard(context && context['isSection']) ?
        "\r\n" + 
          __escape(guard(context && context['name'])) + 
          "\r\n" :
        "\r\n" + 
          (guard(context && context['link']) ?
            "\r\n<a href=\"" + 
              __escape(guard(context && context['link'])) + 
              "\" itemprop=\"url\">\r\n" :
            "\r\n<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/category/" + 
              __escape(guard(context && context['slug'])) + 
              "\" itemprop=\"url\">\r\n") + 
          "\r\n" + 
          __escape(guard(context && context['name'])) + 
          "\r\n</a>\r\n");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
