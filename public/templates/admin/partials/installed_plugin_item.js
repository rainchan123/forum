
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
    return "\t\t\t\t\t" + 
      (guard(context && context['error']) ?
        "" :
        "\n\t\t\t\t\t<li id=\"" + 
          __escape(guard(context && context['id'])) + 
          "\" data-plugin-index=\"" + 
          __escape(index) + 
          "\" data-plugin-id=\"" + 
          __escape(guard(context && context['id'])) + 
          "\" data-version=\"" + 
          __escape(guard(context && context['version'])) + 
          "\" class=\"clearfix " + 
          (guard(context && context['active']) ?
            "active" :
            "") + 
          "\">\n\t\t\t\t\t\t<div class=\"pull-right controls\">\n\t\t\t\t\t\t\t" + 
          (guard(context && context['installed']) ?
            "\n\t\t\t\t\t\t\t\t" + 
              (guard(context && context['isTheme']) ?
                "\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/admin/appearance/themes\" class=\"btn btn-info\">[[admin/extend/plugins:plugin-item.themes]]</a>\n\t\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t\t<button data-action=\"toggleActive\" class=\"btn " + 
                  (guard(context && context['active']) ?
                    " btn-warning" :
                    " btn-success") + 
                  "\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i> " + 
                  (guard(context && context['active']) ?
                    "[[admin/extend/plugins:plugin-item.deactivate]]" :
                    "[[admin/extend/plugins:plugin-item.activate]]") + 
                  "</button>\n\t\t\t\t\t\t\t\t") + 
              "\n\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\n\t\t\t\t\t\t\t\t" + 
              (guard(context && context['active']) ?
                "\n\t\t\t\t\t\t\t\t" + 
                  (guard(context && context['settingsRoute']) ?
                    "\n\t\t\t\t\t\t\t\t<a href=\"" + 
                      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                      __escape(guard(context && context['settingsRoute'])) + 
                      "\" class=\"btn btn-primary\"><i class=\"fa fa-wrench\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n\t\t\t\t\t\t\t\t" :
                    "") + 
                  "\n\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>" + 
          __escape(guard(context && context['name'])) + 
          "</strong></h2>\n\n\t\t\t\t\t\t" + 
          (guard(context && context['description']) ?
            "\n\t\t\t\t\t\t<p>" + 
              __escape(guard(context && context['description'])) + 
              "</p>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t" + 
          (guard(context && context['outdated']) ?
            "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
            "") + 
          "\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
          __escape(guard(context && context['version'])) + 
          "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
          __escape(guard(context && context['latest'])) + 
          "</strong></small>\n\n\t\t\t\t\t\t" + 
          (guard(context && context['outdated']) ?
            "\n\t\t\t\t\t\t<button data-action=\"upgrade\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t" + 
              (guard(context && context['isCompatible']) ?
                "\n\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                  __escape(guard(context && context['version'])) + 
                  "]]\n\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t\t" + 
          (guard(context && context['url']) ?
            "\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
              __escape(guard(context && context['url'])) + 
              "\">" + 
              __escape(guard(context && context['url'])) + 
              "</a></p>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t</li>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t" + 
      (guard(context && context['error']) ?
        "\n\t\t\t\t\t<li data-plugin-id=\"" + 
          __escape(guard(context && context['id'])) + 
          "\" class=\"clearfix\">\n\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t\t<button class=\"btn btn-default disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>" + 
          __escape(guard(context && context['id'])) + 
          "</strong></h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t[[admin/extend/plugins:plugin-item.unknown-explanation]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
