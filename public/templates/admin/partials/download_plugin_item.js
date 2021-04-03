
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
    return "\t\t\t\t\t<li id=\"" + 
      __escape(guard(context && context['id'])) + 
      "\" data-plugin-id=\"" + 
      __escape(guard(context && context['id'])) + 
      "\" class=\"clearfix\">\n\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t\t<button data-action=\"toggleActive\" class=\"btn btn-success hidden\"><i class=\"fa fa-power-off\"></i> [[admin/extend/plugins:plugin-item.activate]]</button>\n\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>" + 
      __escape(guard(context && context['name'])) + 
      "</strong></h2>\n\n\t\t\t\t\t\t" + 
      (guard(context && context['description']) ?
        "\n\t\t\t\t\t\t<p>" + 
          __escape(guard(context && context['description'])) + 
          "</p>\n\t\t\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
      __escape(guard(context && context['latest'])) + 
      "</strong></small>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t" + 
      (guard(context && context['isCompatible']) ?
        "\n\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
          __escape(guard(context && context['version'])) + 
          "]]\n\t\t\t\t\t\t\t" :
        "\n\t\t\t\t\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n\t\t\t\t\t\t\t") + 
      "\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t" + 
      (guard(context && context['url']) ?
        "\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
          __escape(guard(context && context['url'])) + 
          "\">" + 
          __escape(guard(context && context['url'])) + 
          "</a></p>\n\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t</li>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
