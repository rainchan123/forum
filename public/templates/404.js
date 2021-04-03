
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
    return "<div class=\"alert alert-danger\">\n\t<strong>" + 
      __escape(guard(context && context['path'])) + 
      " [[global:404.title]]</strong>\n\t" + 
      (guard(context && context['error']) ?
        "\n\t<p>" + 
          __escape(guard(context && context['error'])) + 
          "</p>\n\t" :
        "\n\t<p>[[global:404.message, " + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "]]</p>\n\t") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
