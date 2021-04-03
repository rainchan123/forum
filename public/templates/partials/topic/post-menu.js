
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
    return "<span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet " + 
      (guard(context && context['posts'] && context['posts']['display_post_menu']) ?
        "" :
        "hidden") + 
      "\">\r\n\t<a href=\"#\" data-toggle=\"dropdown\" data-ajaxify=\"false\"><i class=\"fa fa-fw fa-ellipsis-v\"></i></a>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\"></ul>\r\n</span>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
