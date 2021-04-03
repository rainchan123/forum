
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
    return "<ul class=\"nav nav-pills\">\n\t<li>\n\t\t<a href=\"#trending\" data-toggle=\"tab\">\n\t\t\t[[admin/extend/plugins:trending]]\n\t\t\t<i class=\"fa fa-star\"></i>\n\t\t</a>\n\t</li>\n\t<li class=\"active\">\n\t\t<a href=\"#installed\" data-toggle=\"tab\">\n\t\t\t[[admin/extend/plugins:installed]]\n\t\t\t<span class=\"badge\">" + 
      __escape(guard(context && context['installedCount'])) + 
      "</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href=\"#active\" data-toggle=\"tab\">\n\t\t\t[[admin/extend/plugins:active]]\n\t\t\t<span class=\"badge\">" + 
      __escape(guard(context && context['activeCount'])) + 
      "</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href=\"#deactive\" data-toggle=\"tab\">\n\t\t\t[[admin/extend/plugins:inactive]]\n\t\t\t<span class=\"badge\">" + 
      __escape(guard(context && context['inactiveCount'])) + 
      "</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href=\"#upgrade\" data-toggle=\"tab\">\n\t\t\t[[admin/extend/plugins:out-of-date]]\n\t\t\t<span class=\"badge\">" + 
      __escape(guard(context && context['upgradeCount'])) + 
      "</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href=\"#download\" data-toggle=\"tab\">[[admin/extend/plugins:find-plugins]]</a>\n\t</li>\n</ul>\n<br />\n\n<div class=\"plugins row\">\n\t<div class=\"acp-sidebar col-lg-3 col-lg-push-9\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/extend/plugins:plugin-search]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<input autofocus class=\"form-control\" type=\"text\" id=\"plugin-search\" placeholder=\"[[admin/extend/plugins:plugin-search-placeholder]]\"/><br/>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t<input id=\"plugin-submit-usage\" class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"submitPluginUsage\" " + 
      (guard(context && context['submitPluginUsage']) ?
        "checked" :
        "") + 
      "/>\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/extend/plugins:submit-anonymous-usage]]</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/extend/plugins:reorder-plugins]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<button class=\"btn btn-default btn-block\" id=\"plugin-order\"><i class=\"fa fa-exchange\"></i> [[admin/extend/plugins:order-active]]</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/extend/plugins:dev-interested]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/extend/plugins:docs-info]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-lg-9 col-lg-pull-3\">\n\t\t<div class=\"tab-content\">\n\t\t\t<div class=\"tab-pane fade\" id=\"trending\">\n\t\t\t\t<ul class=\"trending\">\n\t\t\t\t\t" + 
      compiled.blocks['trending'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane fade active in\" id=\"installed\">\n\t\t\t\t<ul class=\"installed\">\n\t\t\t\t\t" + 
      compiled.blocks['installed'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane fade\" id=\"active\">\n\t\t\t\t<ul class=\"active\"></ul>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane fade\" id=\"deactive\">\n\t\t\t\t<ul class=\"deactive\"></ul>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane fade\" id=\"upgrade\">\n\t\t\t\t<ul class=\"upgrade\"></ul>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane fade\" id=\"download\">\n\t\t\t\t<ul class=\"download\">\n\t\t\t\t\t" + 
      compiled.blocks['download'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"modal fade\" id=\"order-active-plugins-modal\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">[[admin/extend/plugins:order-active]]</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t[[admin/extend/plugins:order.description]]\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t[[admin/extend/plugins:order.explanation]]\n\t\t\t\t\t</p>\n\t\t\t\t\t<ul class=\"plugin-list\"></ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">[[global:buttons.close]]</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"save-plugin-order\">[[global:save]]</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n</div>\n\n\n";
  }

  compiled.blocks = {
    'trending': function trending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['trending']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t\t" + 
          (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['error']) ?
            "" :
            "\n\t\t\t\t\t<li id=\"" + 
              __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['id'])) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['id'])) + 
              "\" data-version=\"" + 
              __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['version'])) + 
              "\" class=\"clearfix " + 
              (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['active']) ?
                "active" :
                "") + 
              "\">\n\t\t\t\t\t\t<div class=\"pull-right controls\">\n\t\t\t\t\t\t\t" + 
              (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['installed']) ?
                "\n\t\t\t\t\t\t\t\t" + 
                  (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['isTheme']) ?
                    "\n\t\t\t\t\t\t\t\t<a href=\"" + 
                      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                      "/admin/appearance/themes\" class=\"btn btn-info\">[[admin/extend/plugins:plugin-item.themes]]</a>\n\t\t\t\t\t\t\t\t" :
                    "\n\t\t\t\t\t\t\t\t<button data-action=\"toggleActive\" class=\"btn " + 
                      (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['active']) ?
                        " btn-warning" :
                        " btn-success") + 
                      "\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i> " + 
                      (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['active']) ?
                        "[[admin/extend/plugins:plugin-item.deactivate]]" :
                        "[[admin/extend/plugins:plugin-item.activate]]") + 
                      "</button>\n\t\t\t\t\t\t\t\t") + 
                  "\n\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\n\t\t\t\t\t\t\t\t" + 
                  (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['active']) ?
                    "\n\t\t\t\t\t\t\t\t" + 
                      (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['settingsRoute']) ?
                        "\n\t\t\t\t\t\t\t\t<a href=\"" + 
                          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                          __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['settingsRoute'])) + 
                          "\" class=\"btn btn-primary\"><i class=\"fa fa-wrench\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n\t\t\t\t\t\t\t\t" :
                        "") + 
                      "\n\t\t\t\t\t\t\t\t" :
                    "") + 
                  "\n\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>" + 
              __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['name'])) + 
              "</strong></h2>\n\n\t\t\t\t\t\t" + 
              (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['description']) ?
                "\n\t\t\t\t\t\t<p>" + 
                  __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['description'])) + 
                  "</p>\n\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t" + 
              (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['outdated']) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['version'])) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['latest'])) + 
              "</strong></small>\n\n\t\t\t\t\t\t" + 
              (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['outdated']) ?
                "\n\t\t\t\t\t\t<button data-action=\"upgrade\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t" + 
                  (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['isCompatible']) ?
                    "\n\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard(context && context['version'])) + 
                      "]]\n\t\t\t\t\t\t\t" :
                    "\n\t\t\t\t\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n\t\t\t\t\t\t\t") + 
                  "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t" :
                "") + 
              "\n\n\t\t\t\t\t\t" + 
              (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['url']) ?
                "\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['url'])) + 
                  "\">" + 
                  __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['url'])) + 
                  "</a></p>\n\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t</li>\n\t\t\t\t\t") + 
          "\n\t\t\t\t\t" + 
          (guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['error']) ?
            "\n\t\t\t\t\t<li data-plugin-id=\"" + 
              __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['id'])) + 
              "\" class=\"clearfix\">\n\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t\t<button class=\"btn btn-default disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>" + 
              __escape(guard(context && context['trending'] && context['trending'][key0] && context['trending'][key0]['id'])) + 
              "</strong></h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t[[admin/extend/plugins:plugin-item.unknown-explanation]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'installed': function installed(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['installed']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t\t" + 
          (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['error']) ?
            "" :
            "\n\t\t\t\t\t<li id=\"" + 
              __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['id'])) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['id'])) + 
              "\" data-version=\"" + 
              __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['version'])) + 
              "\" class=\"clearfix " + 
              (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['active']) ?
                "active" :
                "") + 
              "\">\n\t\t\t\t\t\t<div class=\"pull-right controls\">\n\t\t\t\t\t\t\t" + 
              (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['installed']) ?
                "\n\t\t\t\t\t\t\t\t" + 
                  (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['isTheme']) ?
                    "\n\t\t\t\t\t\t\t\t<a href=\"" + 
                      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                      "/admin/appearance/themes\" class=\"btn btn-info\">[[admin/extend/plugins:plugin-item.themes]]</a>\n\t\t\t\t\t\t\t\t" :
                    "\n\t\t\t\t\t\t\t\t<button data-action=\"toggleActive\" class=\"btn " + 
                      (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['active']) ?
                        " btn-warning" :
                        " btn-success") + 
                      "\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i> " + 
                      (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['active']) ?
                        "[[admin/extend/plugins:plugin-item.deactivate]]" :
                        "[[admin/extend/plugins:plugin-item.activate]]") + 
                      "</button>\n\t\t\t\t\t\t\t\t") + 
                  "\n\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\n\t\t\t\t\t\t\t\t" + 
                  (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['active']) ?
                    "\n\t\t\t\t\t\t\t\t" + 
                      (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['settingsRoute']) ?
                        "\n\t\t\t\t\t\t\t\t<a href=\"" + 
                          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                          __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['settingsRoute'])) + 
                          "\" class=\"btn btn-primary\"><i class=\"fa fa-wrench\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n\t\t\t\t\t\t\t\t" :
                        "") + 
                      "\n\t\t\t\t\t\t\t\t" :
                    "") + 
                  "\n\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>" + 
              __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['name'])) + 
              "</strong></h2>\n\n\t\t\t\t\t\t" + 
              (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['description']) ?
                "\n\t\t\t\t\t\t<p>" + 
                  __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['description'])) + 
                  "</p>\n\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t" + 
              (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['outdated']) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['version'])) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['latest'])) + 
              "</strong></small>\n\n\t\t\t\t\t\t" + 
              (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['outdated']) ?
                "\n\t\t\t\t\t\t<button data-action=\"upgrade\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t" + 
                  (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['isCompatible']) ?
                    "\n\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard(context && context['version'])) + 
                      "]]\n\t\t\t\t\t\t\t" :
                    "\n\t\t\t\t\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n\t\t\t\t\t\t\t") + 
                  "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t" :
                "") + 
              "\n\n\t\t\t\t\t\t" + 
              (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['url']) ?
                "\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['url'])) + 
                  "\">" + 
                  __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['url'])) + 
                  "</a></p>\n\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t</li>\n\t\t\t\t\t") + 
          "\n\t\t\t\t\t" + 
          (guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['error']) ?
            "\n\t\t\t\t\t<li data-plugin-id=\"" + 
              __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['id'])) + 
              "\" class=\"clearfix\">\n\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t\t<button class=\"btn btn-default disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>" + 
              __escape(guard(context && context['installed'] && context['installed'][key0] && context['installed'][key0]['id'])) + 
              "</strong></h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t[[admin/extend/plugins:plugin-item.unknown-explanation]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'download': function download(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['download']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t\t<li id=\"" + 
          __escape(guard(context && context['download'] && context['download'][key0] && context['download'][key0]['id'])) + 
          "\" data-plugin-id=\"" + 
          __escape(guard(context && context['download'] && context['download'][key0] && context['download'][key0]['id'])) + 
          "\" class=\"clearfix\">\n\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t\t<button data-action=\"toggleActive\" class=\"btn btn-success hidden\"><i class=\"fa fa-power-off\"></i> [[admin/extend/plugins:plugin-item.activate]]</button>\n\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>" + 
          __escape(guard(context && context['download'] && context['download'][key0] && context['download'][key0]['name'])) + 
          "</strong></h2>\n\n\t\t\t\t\t\t" + 
          (guard(context && context['download'] && context['download'][key0] && context['download'][key0]['description']) ?
            "\n\t\t\t\t\t\t<p>" + 
              __escape(guard(context && context['download'] && context['download'][key0] && context['download'][key0]['description'])) + 
              "</p>\n\t\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
          __escape(guard(context && context['download'] && context['download'][key0] && context['download'][key0]['latest'])) + 
          "</strong></small>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t" + 
          (guard(context && context['download'] && context['download'][key0] && context['download'][key0]['isCompatible']) ?
            "\n\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
              __escape(guard(context && context['version'])) + 
              "]]\n\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t" + 
          (guard(context && context['download'] && context['download'][key0] && context['download'][key0]['url']) ?
            "\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
              __escape(guard(context && context['download'] && context['download'][key0] && context['download'][key0]['url'])) + 
              "\">" + 
              __escape(guard(context && context['download'] && context['download'][key0] && context['download'][key0]['url'])) + 
              "</a></p>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t</li>\n\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
