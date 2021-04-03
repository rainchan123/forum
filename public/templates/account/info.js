
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
    return "<div class=\"account\">\r\n\t" + 
      (guard(context && context['breadcrumbs'] && context['breadcrumbs']['length']) ?
        "\r\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n\r\n<div data-widget-area=\"header\">\r\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n\r\n<div class=\"cover\" component=\"account/cover\" style=\"background-image: url(" + 
      __escape(guard(context && context['cover:url'])) + 
      "); background-position: " + 
      __escape(guard(context && context['cover:position'])) + 
      ";\">\r\n\t<div class=\"avatar-wrapper\" data-uid=\"" + 
      __escape(guard(context && context['uid'])) + 
      "\">\r\n\t\t" + 
      (guard(context && context['picture']) ?
        "\r\n\t\t<img src=\"" + 
          __escape(guard(context && context['picture'])) + 
          "\" class=\"avatar avatar-xl avatar-rounded\" />\r\n\t\t" :
        "\r\n\t\t<div class=\"avatar avatar-xl avatar-rounded\" style=\"background-color: " + 
          __escape(guard(context && context['icon:bgColor'])) + 
          ";\" title=\"" + 
          __escape(guard(context && context['username'])) + 
          "\">" + 
          __escape(guard(context && context['icon:text'])) + 
          "</div>\r\n\t\t") + 
      "\r\n\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
      __escape(guard(context && context['status'])) + 
      "\" title=\"[[global:" + 
      __escape(guard(context && context['status'])) + 
      "]]\"></i>\r\n\r\n\t\t" + 
      (guard(context && context['loggedIn']) ?
        "\r\n\t\t" + 
          (guard(context && context['isSelf']) ?
            "" :
            "\r\n\t\t<button class=\"btn-morph fab " + 
              (guard(context && context['isFollowing']) ?
                "heart" :
                "plus") + 
              "\" title=\"" + 
              (guard(context && context['isFollowing']) ?
                "[[global:unfollow]]" :
                "[[global:follow]]") + 
              "\">\r\n\t\t\t<span>\r\n\t\t\t\t<span class=\"s1\"></span>\r\n\t\t\t\t<span class=\"s2\"></span>\r\n\t\t\t\t<span class=\"s3\"></span>\r\n\t\t\t</span>\r\n\t\t</button>\r\n\t\t") + 
          "\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n\r\n\t<div class=\"container\">\r\n\t\t<div class=\"btn-group account-fab bottom-sheet\">\r\n\t<button type=\"button\" class=\"fab dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t<i class=\"fa fa-ellipsis-v\"></i>\r\n\t</button>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t" + 
      (guard(context && context['loggedIn']) ?
        "\r\n\t\t" + 
          (guard(context && context['isSelf']) ?
            "" :
            "\r\n\t\t" + 
              (guard(context && context['banned']) ?
                "" :
                "\r\n\t\t" + 
                  (guard(context && context['config'] && context['config']['disableChat']) ?
                    "" :
                    "\r\n\t\t<li class=\"" + 
                      (guard(context && context['hasPrivateChat']) ?
                        "" :
                        "hidden") + 
                      "\">\r\n\t\t\t<a component=\"account/chat\" href=\"#\">[[user:chat_with, " + 
                      __escape(guard(context && context['username'])) + 
                      "]]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"account/new-chat\" href=\"#\">[[user:new_chat_with, " + 
                      __escape(guard(context && context['username'])) + 
                      "]]</a>\r\n\t\t</li>\r\n\t\t") + 
                  "\r\n\t\t<li>\r\n\t\t\t<a component=\"account/flag\" href=\"#\">[[user:flag-profile]]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"account/block\" href=\"#\">" + 
                  (guard(context && context['isBlocked']) ?
                    "[[user:unblock_user]]" :
                    "[[user:block_user]]") + 
                  "</a>\r\n\t\t</li>\r\n\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t") + 
              "\r\n\t\t") + 
          "\r\n\t\t" :
        "") + 
      "\r\n\t\t<li>\r\n\t\t\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['userslug'])) + 
      "\" class=\"inline-block\" id=\"profile\">[[user:profile]]</a>\r\n\t\t</li>\r\n\t\t" + 
      (guard(context && context['showHidden']) ?
        "\r\n\t\t<li><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['userslug'])) + 
          "/edit\">[[user:edit]]</a></li>\r\n\t\t<li><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['userslug'])) + 
          "/settings\">[[user:settings]]</a></li>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard(context && context['isSelf']) ?
        "" :
        "\r\n\t\t" + 
          (guard(context && context['canBan']) ?
            "\r\n\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t<li class=\"dropdown-header\">[[user:admin_actions_label]]</li>\r\n\t\t<li class=\"" + 
              (guard(context && context['banned']) ?
                "hide" :
                "") + 
              "\">\r\n\t\t\t<a component=\"account/ban\" href=\"#\">[[user:ban_account]]</a>\r\n\t\t</li>\r\n\t\t<li class=\"" + 
              (guard(context && context['banned']) ?
                "" :
                "hide") + 
              "\">\r\n\t\t\t<a component=\"account/unban\" href=\"#\">[[user:unban_account]]</a>\r\n\t\t</li>\r\n\t\t" :
            "") + 
          "\r\n\t\t" + 
          (guard(context && context['isAdmin']) ?
            "\r\n\t\t<li>\r\n\t\t\t<a component=\"account/delete-account\" href=\"#\" class=\"\">[[user:delete_account_as_admin]]</a>\r\n\t\t\t<a component=\"account/delete-content\" href=\"#\" class=\"\">[[user:delete_content]]</a>\r\n\t\t\t<a component=\"account/delete-all\" href=\"#\" class=\"\">[[user:delete_all]]</a>\r\n\t\t</li>\r\n\t\t" :
            "") + 
          "\r\n\t\t") + 
      "\r\n\r\n\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t<li><a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['userslug'])) + 
      "/following\">[[user:following]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard(context && context['counts'] && context['counts']['following'])) + 
      "\">" + 
      __escape(guard(context && context['counts'] && context['counts']['following'])) + 
      "</span></a></li>\r\n\t\t<li><a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['userslug'])) + 
      "/followers\">[[user:followers]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard(context && context['counts'] && context['counts']['followers'])) + 
      "\">" + 
      __escape(guard(context && context['counts'] && context['counts']['followers'])) + 
      "</span></a></li>\r\n\t\t" + 
      (guard(context && context['showHidden']) ?
        "\r\n\t\t<li><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['userslug'])) + 
          "/blocks\">[[user:blocks]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard(context && context['counts'] && context['counts']['blocks'])) + 
          "\">" + 
          __escape(guard(context && context['counts'] && context['counts']['blocks'])) + 
          "</span></a></li>\r\n\t\t" :
        "") + 
      "\r\n\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t<li><a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['userslug'])) + 
      "/topics\">[[global:topics]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard(context && context['counts'] && context['counts']['topics'])) + 
      "\">" + 
      __escape(guard(context && context['counts'] && context['counts']['topics'])) + 
      "</span></a></li>\r\n\t\t<li><a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['userslug'])) + 
      "/posts\">[[global:posts]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard(context && context['counts'] && context['counts']['posts'])) + 
      "\">" + 
      __escape(guard(context && context['counts'] && context['counts']['posts'])) + 
      "</span></a></li>\r\n\t\t" + 
      (guard(context && context['reputation:disabled']) ?
        "" :
        "\r\n\t\t<li><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['userslug'])) + 
          "/best\">[[global:best]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard(context && context['counts'] && context['counts']['best'])) + 
          "\">" + 
          __escape(guard(context && context['counts'] && context['counts']['best'])) + 
          "</span></a></li>\r\n\t\t") + 
      "\r\n\t\t<li><a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['userslug'])) + 
      "/groups\">[[global:header.groups]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard(context && context['counts'] && context['counts']['groups'])) + 
      "\">" + 
      __escape(guard(context && context['counts'] && context['counts']['groups'])) + 
      "</span></a></li>\r\n\r\n\t\t" + 
      (guard(context && context['showHidden']) ?
        "\r\n\t\t<li><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['userslug'])) + 
          "/categories\">[[user:watched_categories]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard(context && context['counts'] && context['counts']['categoriesWatched'])) + 
          "\">" + 
          __escape(guard(context && context['counts'] && context['counts']['categoriesWatched'])) + 
          "</span></a></li>\r\n\t\t<li><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['userslug'])) + 
          "/bookmarks\">[[user:bookmarks]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard(context && context['counts'] && context['counts']['bookmarks'])) + 
          "\">" + 
          __escape(guard(context && context['counts'] && context['counts']['bookmarks'])) + 
          "</span></a></li>\r\n\t\t<li><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['userslug'])) + 
          "/watched\">[[user:watched]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard(context && context['counts'] && context['counts']['watched'])) + 
          "\">" + 
          __escape(guard(context && context['counts'] && context['counts']['watched'])) + 
          "</span></a></li>\r\n\t\t<li><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['userslug'])) + 
          "/ignored\">[[user:ignored]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard(context && context['counts'] && context['counts']['ignored'])) + 
          "\">" + 
          __escape(guard(context && context['counts'] && context['counts']['ignored'])) + 
          "</span></a></li>\r\n\t\t" + 
          (guard(context && context['reputation:disabled']) ?
            "" :
            "\r\n\t\t<li><a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['userslug'])) + 
              "/upvoted\">[[global:upvoted]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
              __escape(guard(context && context['counts'] && context['counts']['upvoted'])) + 
              "\">" + 
              __escape(guard(context && context['counts'] && context['counts']['upvoted'])) + 
              "</span></a></li>\r\n\t\t" + 
              (guard(context && context['downvote:disabled']) ?
                "" :
                "\r\n\t\t<li><a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['userslug'])) + 
                  "/downvoted\">[[global:downvoted]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
                  __escape(guard(context && context['counts'] && context['counts']['downvoted'])) + 
                  "\">" + 
                  __escape(guard(context && context['counts'] && context['counts']['downvoted'])) + 
                  "</span></a></li>\r\n\t\t") + 
              "\r\n\t\t") + 
          "\r\n\t\t<li><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['userslug'])) + 
          "/uploads\">[[global:uploads]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard(context && context['counts'] && context['counts']['uploaded'])) + 
          "\">" + 
          __escape(guard(context && context['counts'] && context['counts']['uploaded'])) + 
          "</span></a></li>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n</div>\r\n\r\n\r\n\t\t" + 
      (guard(context && context['allowCoverPicture']) ?
        "\r\n\t\t" + 
          (guard(context && context['canEdit']) ?
            "\r\n\t\t<div class=\"controls\">\r\n\t\t\t<span class=\"upload\"><i class=\"fa fa-fw fa-4x fa-upload\"></i></span>\r\n\t\t\t<span class=\"resize\"><i class=\"fa fa-fw fa-4x fa-arrows\"></i></span>\r\n\t\t\t<span class=\"remove\"><i class=\"fa fa-fw fa-4x fa-times\"></i></span>\r\n\t\t</div>\r\n\t\t<div class=\"save\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\r\n\t\t<div class=\"indicator\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\r\n\t\t" :
            "") + 
          "\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t" + 
      (guard(context && context['sessions'] && context['sessions']['length']) ?
        "\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 col-md-12\">\r\n\t\t\t<h4>[[global:sessions]]</h4>\r\n\t\t\t<ul class=\"list-group\" component=\"user/sessions\">\r\n\t\t\t\t" + 
          compiled.blocks['sessions'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-6\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">[[global:recentips]]</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t" + 
      compiled.blocks['ips'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">[[user:info.username-history]]</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t" + 
      compiled.blocks['usernames'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">[[user:info.email-history]]</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t" + 
      compiled.blocks['emails'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-6\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">[[user:info.latest-flags]]</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t" + 
      (guard(context && context['history'] && context['history']['flags'] && context['history']['flags']['length']) ?
        "\r\n\t\t\t\t\t<ul class=\"recent-flags\">\r\n\t\t\t\t\t\t" + 
          compiled.blocks['history.flags'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t" :
        "\r\n\t\t\t\t\t<div class=\"alert alert-success\">[[user:info.no-flags]]</div>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\r\n\t\t\t\t\t\t[[user:info.ban-history]]\r\n\r\n\t\t\t\t\t\t" + 
      (guard(context && context['banned']) ?
        "\r\n\t\t\t\t\t\t" + 
          (guard(context && context['isSelf']) ?
            "" :
            "\r\n\t\t\t\t\t\t<button class=\"btn btn-xs pull-right btn-success\" component=\"account/unban\">[[user:unban_account]]</button>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t" :
        "\r\n\t\t\t\t\t\t" + 
          (guard(context && context['isSelf']) ?
            "" :
            "\r\n\t\t\t\t\t\t<button class=\"btn btn-xs pull-right btn-danger\" component=\"account/ban\">[[user:ban_account]]</button>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t" + 
      (guard(context && context['history'] && context['history']['bans'] && context['history']['bans']['length']) ?
        "\r\n\t\t\t\t\t<ul class=\"ban-history\">\r\n\t\t\t\t\t\t" + 
          compiled.blocks['history.bans'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t" :
        "\r\n\t\t\t\t\t<div class=\"alert alert-success\">[[user:info.no-ban-history]]</div>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t" + 
      (guard(context && context['isAdminOrGlobalModerator']) ?
        "\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">[[user:info.moderation-note]]</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<textarea component=\"account/moderation-note\" class=\"form-control\"></textarea>\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t<button class=\"btn btn-sm pull-right btn-success\" component=\"account/save-moderation-note\">[[user:info.moderation-note.add]]</button>\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t<div component=\"account/moderation-note/list\">\r\n\t\t\t\t\t\t" + 
          compiled.blocks['moderationNotes'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
          (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages']['length']) ?
            "" :
            " hidden") + 
          "\">\r\n\t<ul class=\"pagination hidden-xs\">\r\n\t\t<li class=\"previous pull-left" + 
          (guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + 
          "\" data-page=\"" + 
          __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t" + 
          compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
          "\r\n\r\n\t\t<li class=\"next pull-right" + 
          (guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + 
          "\" data-page=\"" + 
          __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class=\"pagination hidden-sm hidden-md hidden-lg\">\r\n\t\t<li class=\"first" + 
          (guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard(context && context['pagination'] && context['pagination']['first'] && context['pagination']['first']['qs'])) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"previous" + 
          (guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + 
          "\" data-page=\"" + 
          __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t<a href=\"#\">" + 
          __escape(guard(context && context['pagination'] && context['pagination']['currentPage'])) + 
          " / " + 
          __escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + 
          "</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"next" + 
          (guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + 
          "\" data-page=\"" + 
          __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"last" + 
          (guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard(context && context['pagination'] && context['pagination']['last'] && context['pagination']['last']['qs'])) + 
          "\" data-page=\"" + 
          __escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['breadcrumbs']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\r\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "<a href=\"" + 
              __escape(guard(context && context['breadcrumbs'] && context['breadcrumbs'][key0] && context['breadcrumbs'][key0]['url'])) + 
              "\" itemprop=\"item\">") + 
          "\r\n\t\t\t<span itemprop=\"name\">\r\n\t\t\t\t" + 
          __escape(guard(context && context['breadcrumbs'] && context['breadcrumbs'][key0] && context['breadcrumbs'][key0]['text'])) + 
          "\r\n\t\t\t\t" + 
          (index === length - 1 ?
            "\r\n\t\t\t\t" + 
              (guard(context && context['feeds:disableRSS']) ?
                "" :
                "\r\n\t\t\t\t" + 
                  (guard(context && context['rssFeedUrl']) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard(context && context['rssFeedUrl'])) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</span>\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "</a>") + 
          "\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['widgets'] && context['widgets']['header']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          guard(context && context['widgets'] && context['widgets']['header'] && context['widgets']['header'][key0] && context['widgets']['header'][key0]['html']) + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['profile_links']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t" + 
          (index === 0 ?
            "\r\n\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t" :
            "") + 
          "\r\n\t\t<li id=\"" + 
          __escape(guard(context && context['profile_links'] && context['profile_links'][key0] && context['profile_links'][key0]['id'])) + 
          "\" class=\"plugin-link " + 
          (guard(context && context['profile_links'] && context['profile_links'][key0] && context['profile_links'][key0]['public']) ?
            "public" :
            "private") + 
          "\"><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['userslug'])) + 
          "/" + 
          __escape(guard(context && context['profile_links'] && context['profile_links'][key0] && context['profile_links'][key0]['route'])) + 
          "\">" + 
          (guard(context && context['profile_links'] && context['profile_links'][key0] && context['profile_links'][key0]['icon']) ?
            "<i class=\"fa fa-fw " + 
              __escape(guard(context && context['profile_links'] && context['profile_links'][key0] && context['profile_links'][key0]['icon'])) + 
              "\"></i> " :
            "") + 
          __escape(guard(context && context['profile_links'] && context['profile_links'][key0] && context['profile_links'][key0]['name'])) + 
          "</a></li>\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'sessions': function sessions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['sessions']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li class=\"list-group-item\" data-uuid=\"" + 
          __escape(guard(context && context['sessions'] && context['sessions'][key0] && context['sessions'][key0]['uuid'])) + 
          "\">\r\n\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t" + 
          (guard(context && context['isSelfOrAdminOrGlobalModerator']) ?
            "\r\n\t\t\t\t\t\t" + 
              (guard(context && context['sessions'] && context['sessions'][key0] && context['sessions'][key0]['current']) ?
                "" :
                "\r\n\t\t\t\t\t\t<button class=\"btn btn-xs btn-default\" type=\"button\" data-action=\"revokeSession\">Revoke Session</button>\r\n\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'userAgentIcons', [guard(value)])) + 
          "\r\n\t\t\t\t\t\t<i class=\"fa fa-circle text-" + 
          (guard(context && context['sessions'] && context['sessions'][key0] && context['sessions'][key0]['current']) ?
            "success" :
            "muted") + 
          "\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t" + 
          __escape(guard(context && context['sessions'] && context['sessions'][key0] && context['sessions'][key0]['browser'])) + 
          " " + 
          __escape(guard(context && context['sessions'] && context['sessions'][key0] && context['sessions'][key0]['version'])) + 
          " on " + 
          __escape(guard(context && context['sessions'] && context['sessions'][key0] && context['sessions'][key0]['platform'])) + 
          "<br />\r\n\t\t\t\t\t<small class=\"timeago text-muted\" title=\"" + 
          __escape(guard(context && context['sessions'] && context['sessions'][key0] && context['sessions'][key0]['datetimeISO'])) + 
          "\"></small>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><strong>[[global:ip_address]]</strong>: " + 
          __escape(guard(context && context['sessions'] && context['sessions'][key0] && context['sessions'][key0]['ip'])) + 
          "</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'ips': function ips(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['ips']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<li>" + 
          __escape(guard(value)) + 
          "</li>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'usernames': function usernames(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['usernames']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t" + 
          __escape(guard(context && context['usernames'] && context['usernames'][key0] && context['usernames'][key0]['value'])) + 
          "\r\n\t\t\t\t\t\t\t<small class=\"pull-right\"><span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['usernames'] && context['usernames'][key0] && context['usernames'][key0]['timestampISO'])) + 
          "\"></span></small>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'emails': function emails(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['emails']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t" + 
          __escape(guard(context && context['emails'] && context['emails'][key0] && context['emails'][key0]['value'])) + 
          "\r\n\t\t\t\t\t\t\t<small class=\"pull-right\"><span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['emails'] && context['emails'][key0] && context['emails'][key0]['timestampISO'])) + 
          "\"></span></small>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'history.flags': function historyflags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['history'] && context['history']['flags']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['history'] && context['history']['flags'] && context['history']['flags'][key0] && context['history']['flags'][key0]['targetPurged']) ?
            "\r\n\t\t\t\t\t\t\t\t<div>[[flags:target-purged]]</div>\r\n\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t<a class=\"title\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/post/" + 
              __escape(guard(context && context['history'] && context['history']['flags'] && context['history']['flags'][key0] && context['history']['flags'][key0]['pid'])) + 
              "\">" + 
              __escape(guard(context && context['history'] && context['history']['flags'] && context['history']['flags'][key0] && context['history']['flags'][key0]['title'])) + 
              "</a><br />\r\n\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t<span class=\"timestamp\">[[flags:flagged-timeago-readable, " + 
          __escape(guard(context && context['history'] && context['history']['flags'] && context['history']['flags'][key0] && context['history']['flags'][key0]['timestampISO'])) + 
          ", " + 
          __escape(guard(context && context['history'] && context['history']['flags'] && context['history']['flags'][key0] && context['history']['flags'][key0]['timestampReadable'])) + 
          "]]</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'history.bans': function historybans(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['history'] && context['history']['bans']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['user'] && context['history']['bans'][key0]['user']['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['user']), "sm", guard(context && context['true'])])) + 
          "</a>\r\n\t\t\t\t\t\t\t\t<strong>\r\n\t\t\t\t\t\t\t\t\t<a href=\"" + 
          (guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['user'] && context['history']['bans'][key0]['user']['userslug']) ?
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['user'] && context['history']['bans'][key0]['user']['userslug'])) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['user'] && context['history']['bans'][key0]['user']['username'])) + 
          "\" data-uid=\"" + 
          __escape(guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['user'] && context['history']['bans'][key0]['user']['uid'])) + 
          "\">" + 
          __escape(guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['user'] && context['history']['bans'][key0]['user']['username'])) + 
          "</a>\r\n\t\t\t\t\t\t\t\t</strong>\r\n\t\t\t\t\t\t\t\t<span class=\"timestamp timeago\" title=\"" + 
          __escape(guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['timestampISO'])) + 
          "\"></span> &mdash; " + 
          __escape(guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['timestampReadable'])) + 
          "<br />\r\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['until']) ?
            "\r\n\t\t\t\t\t\t\t\t<span class=\"expiry\">[[user:info.banned-until, " + 
              __escape(guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['untilReadable'])) + 
              "]]</span><br />\r\n\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t<span class=\"expiry\">[[user:info.banned-permanently]]</span><br />\r\n\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t<span class=\"reason\"><strong>[[user:info.banned-reason-label]]</strong>: " + 
          __escape(guard(context && context['history'] && context['history']['bans'] && context['history']['bans'][key0] && context['history']['bans'][key0]['reason'])) + 
          "</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'moderationNotes': function moderationNotes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['moderationNotes']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<hr/>\r\n\r\n\t\t\t\t\t\t<div class=\"clearfix\">\r\n\t\t\t\t\t\t\t<div class=\"pull-left\">\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
          (guard(context && context['moderationNotes'] && context['moderationNotes'][key0] && context['moderationNotes'][key0]['user'] && context['moderationNotes'][key0]['user']['userslug']) ?
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['moderationNotes'] && context['moderationNotes'][key0] && context['moderationNotes'][key0]['user'] && context['moderationNotes'][key0]['user']['userslug'])) :
            "#") + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['moderationNotes'] && context['moderationNotes'][key0] && context['moderationNotes'][key0]['user']), "sm", guard(context && context['true'])])) + 
          "</a>\r\n\t\t\t\t\t\t\t\t<strong>\r\n\t\t\t\t\t\t\t\t\t<a href=\"" + 
          (guard(context && context['moderationNotes'] && context['moderationNotes'][key0] && context['moderationNotes'][key0]['user'] && context['moderationNotes'][key0]['user']['userslug']) ?
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['moderationNotes'] && context['moderationNotes'][key0] && context['moderationNotes'][key0]['user'] && context['moderationNotes'][key0]['user']['userslug'])) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard(context && context['moderationNotes'] && context['moderationNotes'][key0] && context['moderationNotes'][key0]['user'] && context['moderationNotes'][key0]['user']['username'])) + 
          "\" data-uid=\"" + 
          __escape(guard(context && context['moderationNotes'] && context['moderationNotes'][key0] && context['moderationNotes'][key0]['user'] && context['moderationNotes'][key0]['user']['uid'])) + 
          "\">" + 
          __escape(guard(context && context['moderationNotes'] && context['moderationNotes'][key0] && context['moderationNotes'][key0]['user'] && context['moderationNotes'][key0]['user']['username'])) + 
          "</a>\r\n\t\t\t\t\t\t\t\t</strong>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['moderationNotes'] && context['moderationNotes'][key0] && context['moderationNotes'][key0]['timestampISO'])) + 
          "\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<br />\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t" + 
          __escape(guard(context && context['moderationNotes'] && context['moderationNotes'][key0] && context['moderationNotes'][key0]['note'])) + 
          "\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['pagination'] && context['pagination']['pages']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['separator']) ?
            "\r\n\t\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\r\n\t\t\t</li>\r\n\t\t\t" :
            "\r\n\t\t\t<li class=\"page" + 
              (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['active']) ?
                " active" :
                "") + 
              "\" >\r\n\t\t\t\t<a href=\"?" + 
              __escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['qs'])) + 
              "\" data-page=\"" + 
              __escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['page'])) + 
              "\">" + 
              __escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['page'])) + 
              "</a>\r\n\t\t\t</li>\r\n\t\t\t") + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
