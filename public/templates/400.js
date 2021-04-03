
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
    return "<div class=\"alert alert-danger\">\n\t<strong>[[global:400.title]]</strong>\n\t" + 
      (guard(context && context['error']) ?
        "\n\t<p>" + 
          __escape(guard(context && context['error'])) + 
          "</p>\n\t" :
        "\n\t<p>[[global:400.message, " + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "]]</p>\n\t") + 
      "\n\n\t" + 
      (guard(context && context['returnLink']) ?
        "\n\t<p>[[error:goback]]</p>\n\t" :
        "") + 
      "\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
