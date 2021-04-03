
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
    return "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>" + 
      __escape(guard(context && context['title'])) + 
      "</title>\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"" + 
      __escape(guard(context && context['relative_path'])) + 
      "/assets/admin.css?" + 
      __escape(guard(context && context['cache-buster'])) + 
      "\" />\n\t\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n\n\t\t<script>\n\t\t\tvar config = JSON.parse('" + 
      guard(context && context['configJSON']) + 
      "');\n\t\t\tvar app = {\n\t\t\t\tuser: JSON.parse('" + 
      guard(context && context['userJSON']) + 
      "'),\n\t\t\t\tconfig: JSON.parse(decodeURIComponent(\"" + 
      guard(context && context['adminConfigJSON']) + 
      "\")),\n\t\t\t\tflags: {},\n\t\t\t\tinAdmin: true\n\t\t\t};\n\t\t</script>\n\n\t\t<script type=\"text/javascript\" src=\"" + 
      __escape(guard(context && context['relative_path'])) + 
      "/assets/acp.min.js?" + 
      __escape(guard(context && context['cache-buster'])) + 
      "\"></script>\n\n\t\t" + 
      compiled.blocks['scripts'](helpers, context, guard, iter, helper) + 
      "\n\t</head>\n\n\t<body class=\"admin " + 
      __escape(guard(context && context['bodyClass'])) + 
      "\">\n\t\t<nav id=\"menu\" class=\"hidden-md hidden-lg\">\n\t<section class=\"menu-section quick-actions\">\n\t\t<ul class=\"menu-section-list\">\n\t\t\t" + 
      (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['superadmin']) ?
        "\n\t\t\t<div class=\"button-group\">\n\t\t\t\t<li component=\"logout\">\n\t<a href=\"#\" title=\"[[admin/menu:logout]]\" data-placement=\"bottom\" data-toggle=\"tooltip\">\n\t\t<i class=\"fa fw-fw fa-sign-out\"></i>\n\t</a>\n</li>\n\n" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['superadmin']) ?
            "\n<li>\n\t<a href=\"#\" class=\"restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:restart-forum]]\">\n\t\t<i class=\"fa fa-fw fa-repeat\"></i>\n\t</a>\n</li>\n<li>\n\t<a href=\"#\" class=\"rebuild-and-restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:rebuild-and-restart-forum]]\">\n\t\t<i class=\"fa fa-fw fa-refresh\"></i>\n\t</a>\n</li>\n" :
            "") + 
          "\n\n<li>\n\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:view-forum]]\">\n\t\t<i class=\"fa fa-fw fa-home\"></i>\n\t</a>\n</li>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t<div class=\"alert " + 
      (guard(context && context['upgradeAvailable']) ?
        "alert-warning" :
        "alert-info") + 
      " well-sm\">\n\t<span>[[admin/menu:alerts.version, " + 
      __escape(guard(context && context['version'])) + 
      "]]</span>\n\t" + 
      (guard(context && context['upgradeAvailable']) ?
        "\n\t<span style=\"margin-left: 10px\">\n\t\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n\t\t\t<u>[[admin/menu:alerts.upgrade, " + 
          __escape(guard(context && context['latestVersion'])) + 
          "]]</u>\n\t\t</a>\n\t</span>\n\t" :
        "") + 
      "\n</div>\n\t\t</ul>\n\t</section>\n\n\t" + 
      (guard(context && context['showManageMenu']) ?
        "\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-manage]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:categories']) ?
            "<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:privileges']) ?
            "<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:users']) ?
            "<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:groups']) ?
            "<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:admins-mods']) ?
            "<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:tags']) ?
            "<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['superadmin']) ?
            "\n\t\t\t<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a></li>\n\t\t\t<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a></li>\n\t\t\t<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a></li>\n\n\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a></li>\n\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a></li>\n\t\t\t" :
            "") + 
          "\n\t\t</ul>\n\t</section>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:settings']) ?
        "\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-settings]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/homepage\">[[admin/menu:settings/homepage]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/guest\">[[admin/menu:settings/guest]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/languages\">[[admin/menu:settings/languages]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/social\">[[admin/menu:settings/social]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a></li>\n\t\t</ul>\n\t</section>\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-appearance]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-extend]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t" + 
          (guard(context && context['plugins'] && context['plugins']['length']) ?
            "\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-plugins]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t" + 
              compiled.blocks['plugins'](helpers, context, guard, iter, helper) + 
              "\n\t\t</ul>\n\t</section>\n\t" :
            "") + 
          "\n\n\t" + 
          (guard(context && context['authentication'] && context['authentication']['length']) ?
            "\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-social-auth]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t" + 
              compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
              "\n\t\t</ul>\n\t</section>\n\t" :
            "") + 
          "\n\t" :
        "") + 
      "\n\n\t" + 
      (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['superadmin']) ?
        "\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-advanced]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a></li>\n\t\t\t" + 
          (guard(context && context['env']) ?
            "\n\t\t\t<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a></li>\n\t\t\t" :
            "") + 
          "\n\t\t</ul>\n\t</section>\n\t" :
        "") + 
      "\n</nav>\n\n<main id=\"panel\">\n\t<nav class=\"header\" id=\"header\">\n\t\t<div class=\"pull-left\">\n\t\t\t<div id=\"mobile-menu\">\n\t\t\t\t<div class=\"bar\"></div>\n\t\t\t\t<div class=\"bar\"></div>\n\t\t\t\t<div class=\"bar\"></div>\n\t\t\t</div>\n\t\t\t<h1 id=\"main-page-title\"></h1>\n\t\t</div>\n\n\t\t<ul class=\"quick-actions hidden-xs hidden-sm\">\n\t\t\t<li component=\"logout\">\n\t<a href=\"#\" title=\"[[admin/menu:logout]]\" data-placement=\"bottom\" data-toggle=\"tooltip\">\n\t\t<i class=\"fa fw-fw fa-sign-out\"></i>\n\t</a>\n</li>\n\n" + 
      (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['superadmin']) ?
        "\n<li>\n\t<a href=\"#\" class=\"restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:restart-forum]]\">\n\t\t<i class=\"fa fa-fw fa-repeat\"></i>\n\t</a>\n</li>\n<li>\n\t<a href=\"#\" class=\"rebuild-and-restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:rebuild-and-restart-forum]]\">\n\t\t<i class=\"fa fa-fw fa-refresh\"></i>\n\t</a>\n</li>\n" :
        "") + 
      "\n\n<li>\n\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:view-forum]]\">\n\t\t<i class=\"fa fa-fw fa-home\"></i>\n\t</a>\n</li>\n\n\t\t\t" + 
      (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:settings']) ?
        "\n\t\t\t<form role=\"search\">\n\t\t\t\t<div id=\"acp-search\" >\n\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t<input type=\"text\" data-toggle=\"dropdown\" class=\"form-control\" placeholder=\"[[admin/menu:search.placeholder]]\">\n\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right state-start-typing\" role=\"menu\">\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"no-results\">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.no-results]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider search-forum\"></li>\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"search-forum\">\n\t\t\t\t\t\t\t\t<a role=\"menuitem\" target=\"_top\" href=\"#\">\n\t\t\t\t\t\t\t\t\t[[admin/menu:search.search-forum]]\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"keep-typing\">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.keep-typing]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"start-typing\">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.start-typing]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['superadmin']) ?
        "\n\t\t\t<div class=\"alert " + 
          (guard(context && context['upgradeAvailable']) ?
            "alert-warning" :
            "alert-info") + 
          " well-sm\">\n\t<span>[[admin/menu:alerts.version, " + 
          __escape(guard(context && context['version'])) + 
          "]]</span>\n\t" + 
          (guard(context && context['upgradeAvailable']) ?
            "\n\t<span style=\"margin-left: 10px\">\n\t\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n\t\t\t<u>[[admin/menu:alerts.upgrade, " + 
              __escape(guard(context && context['latestVersion'])) + 
              "]]</u>\n\t\t</a>\n\t</span>\n\t" :
            "") + 
          "\n</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t<li class=\"reconnect-spinner\">\n\t\t\t\t<a href=\"#\" id=\"reconnect\" class=\"hide\" title=\"[[admin/menu:connection-lost, " + 
      __escape(guard(context && context['title'])) + 
      "]]\">\n\t\t\t\t\t<i class=\"fa fa-check\"></i>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\n\n\t\t<ul id=\"main-menu\">\n\t\t\t" + 
      (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:dashboard']) ?
        "\n\t\t\t<li class=\"menu-item\">\n\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/dashboard\">[[admin/menu:dashboard]]</a>\n\t\t\t</li>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard(context && context['showManageMenu']) ?
        "\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a id=\"manage-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-manage]]</a>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:categories']) ?
            "<li><a id=\"manage-categories\" href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:privileges']) ?
            "<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:users']) ?
            "<li><a id=\"manage-users\" href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:groups']) ?
            "<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:admins-mods']) ?
            "<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:tags']) ?
            "<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['superadmin']) ?
            "\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a></li>\n\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\n\t\t\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a></li>\n\t\t\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a></li>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['admin:settings']) ?
        "\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a id=\"settings-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-settings]]</a>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t<li><a id=\"settings-general\" href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/homepage\">[[admin/menu:settings/homepage]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/guest\">[[admin/menu:settings/guest]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/languages\">[[admin/menu:settings/languages]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/social\">[[admin/menu:settings/social]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a id=\"appearance-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-appearance]]</a>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t<li><a id=\"appearance-themes\" href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a></li>\n\t\t\t\t\t<li><a id=\"appearance-skins\" href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a></li>\n\t\t\t\t\t<li><a id=\"appearance-customise\" href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-extend]]</a>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" + 
          (guard(context && context['plugins'] && context['plugins']['length']) ?
            "\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-plugins]]</a>\n\t\t\t\t<ul class=\"dropdown-menu plugins-menu\" role=\"menu\">\n\t\t\t\t\t<li class=\"dropdown-header\">[[admin/menu:section-plugins]]</li>\n\t\t\t\t\t" + 
              iter(guard(context && context['plugins']), function each(key0, index, length, value) {
                var key = key0;
                return "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['relative_path'])) + 
                  "/admin" + 
                  __escape(guard(context && context['plugins'] && context['plugins'][key0] && context['plugins'][key0]['route'])) + 
                  "\">" + 
                  __escape(guard(context && context['plugins'] && context['plugins'][key0] && context['plugins'][key0]['name'])) + 
                  "</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t\t\t" + 
              (guard(context && context['authentication'] && context['authentication']['length']) ?
                "\n\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t" + 
                  (guard(context && context['authentication'] && context['authentication']['length']) ?
                    "\n\t\t\t\t\t<li class=\"dropdown-header\">[[admin/menu:section-social-auth]]</li>\n\t\t\t\t\t" + 
                      iter(guard(context && context['authentication']), function each(key0, index, length, value) {
                        var key = key0;
                        return "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"" + 
                          __escape(guard(context && context['relative_path'])) + 
                          "/admin" + 
                          __escape(guard(context && context['authentication'] && context['authentication'][key0] && context['authentication'][key0]['route'])) + 
                          "\">" + 
                          __escape(guard(context && context['authentication'] && context['authentication'][key0] && context['authentication'][key0]['name'])) + 
                          "</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t";
                      }, function alt() {
                        return "";
                      }) + 
                      "\n\t\t\t\t\t" :
                    "") + 
                  "\n\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t<li data-link=\"1\">\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/extend/plugins#download\">[[admin/menu:extend/plugins.install]]</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" :
            "") + 
          "\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard(context && context['user'] && context['user']['privileges'] && context['user']['privileges']['superadmin']) ?
        "\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-advanced]]</a>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a></li>\n\t\t\t\t\t" + 
          (guard(context && context['env']) ?
            "\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a></li>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" :
        "") + 
      "\n\t\t</ul>\n\t</nav>\n\t\t<div class=\"container\" id=\"content\">";
  }

  compiled.blocks = {
    'scripts': function scripts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['scripts']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<script type=\"text/javascript\" src=\"" + 
          __escape(guard(context && context['scripts'] && context['scripts'][key0] && context['scripts'][key0]['src'])) + 
          "\"></script>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'plugins': function plugins(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['plugins']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li>\n\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin" + 
          __escape(guard(context && context['plugins'] && context['plugins'][key0] && context['plugins'][key0]['route'])) + 
          "\">" + 
          __escape(guard(context && context['plugins'] && context['plugins'][key0] && context['plugins'][key0]['name'])) + 
          "</a>\n\t\t\t</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['authentication']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li>\n\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/admin" + 
          __escape(guard(context && context['authentication'] && context['authentication'][key0] && context['authentication'][key0]['route'])) + 
          "\">" + 
          __escape(guard(context && context['authentication'] && context['authentication'][key0] && context['authentication'][key0]['name'])) + 
          "</a>\n\t\t\t</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
