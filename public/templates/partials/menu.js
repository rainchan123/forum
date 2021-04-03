
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
    return "\t\t\t<div class=\"navbar-header\">\r\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle pull-left\" id=\"mobile-menu\">\r\n\t\t\t\t\t<span component=\"notifications/icon\" class=\"notification-icon fa fa-fw fa-bell-o unread-count\" data-content=\"" + 
      __escape(guard(context && context['unreadCount'] && context['unreadCount']['notification'])) + 
      "\"></span>\r\n\t\t\t\t\t<i class=\"fa fa-lg fa-fw fa-bars\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle hidden\" id=\"mobile-chats\">\r\n\t\t\t\t\t<span component=\"chat/icon\" class=\"notification-icon fa fa-fw fa-comments unread-count\" data-content=\"" + 
      __escape(guard(context && context['unreadCount'] && context['unreadCount']['chat'])) + 
      "\"></span>\r\n\t\t\t\t\t<i class=\"fa fa-lg fa-comment-o\"></i>\r\n\t\t\t\t</button>\r\n\r\n\t\t\t\t" + 
      (guard(context && context['brand:logo']) ?
        "\r\n\t\t\t\t<a href=\"" + 
          (guard(context && context['brand:logo:url']) ?
            __escape(guard(context && context['brand:logo:url'])) :
            __escape(guard(context && context['relative_path'])) + 
              "/") + 
          "\">\r\n\t\t\t\t\t<img alt=\"" + 
          __escape(guard(context && context['brand:logo:alt'])) + 
          "\" class=\"" + 
          __escape(guard(context && context['brand:logo:display'])) + 
          " forum-logo\" src=\"" + 
          __escape(guard(context && context['brand:logo'])) + 
          "?" + 
          __escape(guard(context && context['config'] && context['config']['cache-buster'])) + 
          "\" />\r\n\t\t\t\t</a>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t" + 
      (guard(context && context['config'] && context['config']['showSiteTitle']) ?
        "\r\n\t\t\t\t<a href=\"" + 
          (guard(context && context['title:url']) ?
            __escape(guard(context && context['title:url'])) :
            __escape(guard(context && context['relative_path'])) + 
              "/") + 
          "\">\r\n\t\t\t\t\t<h1 class=\"navbar-brand forum-title\">" + 
          __escape(guard(context && context['config'] && context['config']['siteTitle'])) + 
          "</h1>\r\n\t\t\t\t</a>\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t<div component=\"navbar/title\" class=\"visible-xs hidden\">\r\n\t\t\t\t\t<span></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id=\"nav-dropdown\" class=\"hidden-xs\">\r\n\t\t\t\t" + 
      (guard(context && context['maintenanceHeader']) ?
        "\r\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/login\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg\"></i>\r\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t" :
        "\r\n\t\t\t\t" + 
          (guard(context && context['config'] && context['config']['loggedIn']) ?
            "\r\n\r\n\t\t\t\t<ul id=\"logged-in-menu\" class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t<li class=\"notifications dropdown text-center hidden-xs\" component=\"notifications\">\r\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/notifications\" title=\"[[global:header.notifications]]\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"notif_dropdown\" data-ajaxify=\"false\" role=\"button\">\r\n\t\t\t\t\t\t\t<i component=\"notifications/icon\" class=\"fa fa-fw fa-bell-o unread-count\" data-content=\"" + 
              __escape(guard(context && context['unreadCount'] && context['unreadCount']['notification'])) + 
              "\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"notif_dropdown\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<ul component=\"notifications/list\" class=\"notification-list\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"loading-text\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:notifications.loading]]</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\"><a href=\"#\" class=\"mark-all-read\">[[notifications:mark_all_read]]</a></li>\r\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\"><a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/notifications\">[[notifications:see_all]]</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t" + 
              (guard(context && context['config'] && context['config']['disableChat']) ?
                "" :
                "\r\n\t\t\t\t\t<li class=\"chats dropdown\">\r\n\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"" + 
                  __escape(guard(context && context['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['user'] && context['user']['userslug'])) + 
                  "/chats\" title=\"[[global:header.chats]]\" id=\"chat_dropdown\" component=\"chat/dropdown\" data-ajaxify=\"false\" role=\"button\">\r\n\t\t\t\t\t\t\t<i component=\"chat/icon\" class=\"fa fa-comment-o fa-fw unread-count\" data-content=\"" + 
                  __escape(guard(context && context['unreadCount'] && context['unreadCount']['chat'])) + 
                  "\"></i> <span class=\"visible-xs-inline\">[[global:header.chats]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"chat_dropdown\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<ul component=\"chat/list\" class=\"chat-list chats-list\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"loading-text\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:chats.loading]]</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\"><a href=\"#\" class=\"mark-all-read\" component=\"chats/mark-all-read\">[[modules:chat.mark_all_read]]</a></li>\r\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\"><a href=\"" + 
                  __escape(guard(context && context['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['user'] && context['user']['userslug'])) + 
                  "/chats\">[[modules:chat.see_all]]</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t") + 
              "\r\n\r\n\t\t\t\t\t<li id=\"user_label\" class=\"dropdown\">\r\n\t\t\t\t\t\t<label for=\"user-control-list-check\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"user_dropdown\" title=\"[[global:header.profile]]\" role=\"button\">\r\n\t\t\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['user']), "md", guard(context && context['true'])])) + 
              "\r\n\t\t\t\t\t\t\t<span id=\"user-header-name\" class=\"visible-xs-inline\">" + 
              __escape(guard(context && context['user'] && context['user']['username'])) + 
              "</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"hidden\" id=\"user-control-list-check\" aria-hidden=\"true\">\r\n\t\t\t\t\t\t<ul id=\"user-control-list\" component=\"header/usercontrol\" class=\"dropdown-menu\" aria-labelledby=\"user_dropdown\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a component=\"header/profilelink\" href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['user'] && context['user']['userslug'])) + 
              "\">\r\n\t\t\t\t\t\t\t\t\t<i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
              __escape(guard(context && context['user'] && context['user']['status'])) + 
              "\"></i> <span component=\"header/username\">" + 
              __escape(guard(context && context['user'] && context['user']['username'])) + 
              "</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"online\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status online\"></i><span " + 
              (guard(context && context['user'] && context['user']['online']) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:online]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"away\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status away\"></i><span " + 
              (guard(context && context['user'] && context['user']['away']) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:away]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"dnd\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status dnd\"></i><span " + 
              (guard(context && context['user'] && context['user']['dnd']) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:dnd]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"offline\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status offline\"></i><span " + 
              (guard(context && context['user'] && context['user']['offline']) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:invisible]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a component=\"header/profilelink/edit\" href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['user'] && context['user']['userslug'])) + 
              "/edit\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-edit\"></i> <span>[[user:edit-profile]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a component=\"header/profilelink/settings\" href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['user'] && context['user']['userslug'])) + 
              "/settings\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-gear\"></i> <span>[[user:settings]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t" + 
              (guard(context && context['showModMenu']) ?
                "\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\r\n\t\t\t\t\t\t\t<li class=\"dropdown-header\">[[pages:moderator-tools]]</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['relative_path'])) + 
                  "/flags\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-flag\"></i> <span>[[pages:flagged-content]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['relative_path'])) + 
                  "/post-queue\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:post-queue]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['relative_path'])) + 
                  "/ip-blacklist\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-ban\"></i> <span>[[pages:ip-blacklist]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\r\n\t\t\t\t\t\t\t<li component=\"user/logout\">\r\n\t\t\t\t\t\t\t\t<form method=\"post\" action=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/logout\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
              __escape(guard(context && context['config'] && context['config']['csrf_token'])) + 
              "\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"noscript\" value=\"true\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-link\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-sign-out\"></i><span> [[global:logout]]</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t</ul>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<ul id=\"logged-out-menu\" class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t" + 
              (guard(context && context['allowRegistration']) ?
                "\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['relative_path'])) + 
                  "/register\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil fa-fw hidden-sm hidden-md hidden-lg\"></i>\r\n\t\t\t\t\t\t\t<span>[[global:register]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/login\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg\"></i>\r\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t") + 
          "\r\n\t\t\t\t" + 
          (guard(context && context['config'] && context['config']['searchEnabled']) ?
            "\r\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<form id=\"search-form\" class=\"navbar-form navbar-right hidden-xs\" role=\"search\" method=\"GET\">\r\n\t\t\t\t\t\t\t<button id=\"search-button\" type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-search fa-fw\" title=\"[[global:header.search]]\"></i></button>\r\n\t\t\t\t\t\t\t<div class=\"hidden\" id=\"search-fields\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<input autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-gears fa-fw advanced-search-link\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default hide\">[[global:search]]</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<div id=\"quick-search-container\" class=\"quick-search-container hidden\">\r\n\t\t\t\t\t\t\t<div class=\"checkbox filter-category\">\r\n\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked><span class=\"name\"></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\r\n\t\t\t\t\t\t\t<div class=\"quick-search-results-container\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"visible-xs\" id=\"search-menu\">\r\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['relative_path'])) + 
              "/search\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-search fa-fw\"></i> [[global:search]]\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right hidden-xs\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"#\" id=\"reconnect\" class=\"hide\" title=\"[[global:reconnecting-message, " + 
          __escape(guard(context && context['config'] && context['config']['siteTitle'])) + 
          "]]\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-check\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<ul id=\"main-nav\" class=\"nav navbar-nav\">\r\n\t\t\t\t\t" + 
          compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t") + 
      "\r\n\t\t\t</div>\r\n";
  }

  compiled.blocks = {
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['navigation']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t" + 
          (helper(context, helpers, 'displayMenuItem', [context, index]) ?
            "\r\n\t\t\t\t\t<li class=\"" + 
              __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['class'])) + 
              "\">\r\n\t\t\t\t\t\t<a class=\"navigation-link\" href=\"" + 
              __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['route'])) + 
              "\" title=\"" + 
              __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['title'])) + 
              "\" " + 
              (guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['id']) ?
                "id=\"" + 
                  __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['id'])) + 
                  "\"" :
                "") + 
              (guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['properties'] && context['navigation'][key0]['properties']['targetBlank']) ?
                " target=\"_blank\"" :
                "") + 
              ">\r\n\t\t\t\t\t\t\t" + 
              (guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['iconClass']) ?
                "\r\n\t\t\t\t\t\t\t<i class=\"fa fa-fw " + 
                  __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['iconClass'])) + 
                  "\" data-content=\"" + 
                  __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['content'])) + 
                  "\"></i>\r\n\t\t\t\t\t\t\t" :
                "") + 
              "\r\n\r\n\t\t\t\t\t\t\t" + 
              (guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['text']) ?
                "\r\n\t\t\t\t\t\t\t<span class=\"" + 
                  __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['textClass'])) + 
                  "\">" + 
                  __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['text'])) + 
                  "</span>\r\n\t\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
