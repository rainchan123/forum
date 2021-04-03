
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
    return "<li component=\"logout\">\n\t<a href=\"#\" title=\"[[admin/menu:logout]]\" data-placement=\"bottom\" data-toggle=\"tooltip\">\n\t\t<i class=\"fa fw-fw fa-sign-out\"></i>\n\t</a>\n</li>\n\n" + 
      (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['superadmin']) ?
        "\n<li>\n\t<a href=\"#\" class=\"restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:restart-forum]]\">\n\t\t<i class=\"fa fa-fw fa-repeat\"></i>\n\t</a>\n</li>\n<li>\n\t<a href=\"#\" class=\"rebuild-and-restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:rebuild-and-restart-forum]]\">\n\t\t<i class=\"fa fa-fw fa-refresh\"></i>\n\t</a>\n</li>\n" :
        "") + 
      "\n\n<li>\n\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:view-forum]]\">\n\t\t<i class=\"fa fa-fw fa-home\"></i>\n\t</a>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
