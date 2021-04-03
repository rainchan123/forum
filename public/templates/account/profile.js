
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
      "\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class=\"profile row\">\r\n\t\t<h1 class=\"fullname\">" + 
      (guard(context && context['fullname']) ?
        __escape(guard(context && context['fullname'])) :
        __escape(guard(context && context['username']))) + 
      "</h1>\r\n\t\t<h2 class=\"username\">" + 
      (guard(context && context['banned']) ?
        "[[user:banned]]" :
        "@" + 
          __escape(guard(context && context['username']))) + 
      "</h2>\r\n\t\t" + 
      (guard(context && context['isAdminOrGlobalModeratorOrModerator']) ?
        "\r\n\t\t" + 
          (guard(context && context['banned']) ?
            "\r\n\t\t<div class=\"text-center\">\r\n\t\t" + 
              (guard(context && context['banned_until']) ?
                "\r\n\t\t[[user:info.banned-until, " + 
                  __escape(guard(context && context['banned_until_readable'])) + 
                  "]]\r\n\t\t" :
                "\r\n\t\t[[user:info.banned-permanently]]\r\n\t\t") + 
              "\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard(context && context['selectedGroup'] && context['selectedGroup']['length']) ?
        "\r\n\t\t<div class=\"text-center\">\r\n\t\t" + 
          compiled.blocks['selectedGroup'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t</div>\r\n\t\t<br/>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard(context && context['aboutme']) ?
        "\r\n\t\t<span component=\"aboutme\" class=\"text-center aboutme\">" + 
          __escape(guard(context && context['aboutmeParsed'])) + 
          "</span>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t<div class=\"account-stats\">\r\n\t\t\t" + 
      (guard(context && context['reputation:disabled']) ?
        "" :
        "\r\n\t\t\t<div class=\"stat\">\r\n\t\t\t\t<div class=\"human-readable-number\" title=\"" + 
          __escape(guard(context && context['reputation'])) + 
          "\">" + 
          __escape(guard(context && context['reputation'])) + 
          "</div>\r\n\t\t\t\t<span class=\"stat-label\">[[global:reputation]]</span>\r\n\t\t\t</div>\r\n\t\t\t") + 
      "\r\n\r\n\t\t\t<div class=\"stat\">\r\n\t\t\t\t<div class=\"human-readable-number\" title=\"" + 
      __escape(guard(context && context['profileviews'])) + 
      "\">" + 
      __escape(guard(context && context['profileviews'])) + 
      "</div>\r\n\t\t\t\t<span class=\"stat-label\">[[user:profile_views]]</span>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"stat\">\r\n\t\t\t\t<div><a class=\"human-readable-number\" title=\"" + 
      __escape(guard(context && context['counts'] && context['counts']['posts'])) + 
      "\" href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['userslug'])) + 
      "/posts\">" + 
      __escape(guard(context && context['counts'] && context['counts']['posts'])) + 
      "</a></div>\r\n\t\t\t\t<span class=\"stat-label\">[[global:posts]]</span>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"stat\">\r\n\t\t\t\t<div><a class=\"human-readable-number\" title=\"" + 
      __escape(guard(context && context['counts'] && context['counts']['followers'])) + 
      "\" href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['userslug'])) + 
      "/followers\">" + 
      __escape(guard(context && context['counts'] && context['counts']['followers'])) + 
      "</a></div>\r\n\t\t\t\t<span class=\"stat-label\">[[user:followers]]</span>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"stat\">\r\n\t\t\t\t<div><a class=\"human-readable-number\" title=\"" + 
      __escape(guard(context && context['counts'] && context['counts']['following'])) + 
      "\" href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['userslug'])) + 
      "/following\">" + 
      __escape(guard(context && context['counts'] && context['counts']['following'])) + 
      "</a></div>\r\n\t\t\t\t<span class=\"stat-label\">[[user:following]]</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"text-center profile-meta\">\r\n\t\t\t<span>[[user:joined]]</span>\r\n\t\t\t<strong class=\"timeago\" title=\"" + 
      __escape(guard(context && context['joindateISO'])) + 
      "\"></strong>\r\n\r\n\t\t\t<span>[[user:lastonline]]</span>\r\n\t\t\t<strong class=\"timeago\" title=\"" + 
      __escape(guard(context && context['lastonlineISO'])) + 
      "\"></strong><br />\r\n\r\n\t\t\t" + 
      (guard(context && context['email']) ?
        "\r\n\t\t\t<span>[[user:email]]</span>\r\n\t\t\t<strong><i class=\"fa fa-eye-slash " + 
          __escape(guard(context && context['emailClass'])) + 
          "\" title=\"[[user:email_hidden]]\"></i> " + 
          __escape(guard(context && context['email'])) + 
          "</strong>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      (guard(context && context['websiteName']) ?
        "\r\n\t\t\t<span>[[user:website]]</span>\r\n\t\t\t<strong><a href=\"" + 
          __escape(guard(context && context['websiteLink'])) + 
          "\" rel=\"nofollow noopener noreferrer\">" + 
          __escape(guard(context && context['websiteName'])) + 
          "</a></strong>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      (guard(context && context['location']) ?
        "\r\n\t\t\t<span>[[user:location]]</span>\r\n\t\t\t<strong>" + 
          __escape(guard(context && context['location'])) + 
          "</strong>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      (guard(context && context['age']) ?
        "\r\n\t\t\t<span>[[user:age]]</span>\r\n\t\t\t<strong>" + 
          __escape(guard(context && context['age'])) + 
          "</strong>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<hr />\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 account-block hidden\">\r\n\t\t\t<div class=\"account-picture-block text-center\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<span class=\"account-username\"> " + 
      __escape(guard(context && context['username'])) + 
      "</span>\r\n\t\t\t\t</span>\r\n\r\n\t\t\t\t" + 
      (guard(context && context['isSelf']) ?
        "" :
        "\r\n\t\t\t\t" + 
          (guard(context && context['isFollowing']) ?
            "\r\n\t\t\t\t<a component=\"account/unfollow\" href=\"#\" class=\"btn btn-warning btn-sm\">[[user:unfollow]]</a>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<a component=\"account/follow\" href=\"#\" class=\"btn btn-success btn-sm\">[[user:follow]]</a>\r\n\t\t\t\t") + 
          "\r\n\t\t\t\t") + 
      "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t" + 
      (guard(context && context['groups'] && context['groups']['length']) ?
        "\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 hidden\">\r\n\t\t\t" + 
          compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t</div>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\r\n\t" + 
      (guard(context && context['ips'] && context['ips']['length']) ?
        "\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 hidden\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h3 class=\"panel-title\">[[global:recentips]]</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t" + 
          compiled.blocks['ips'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\r\n\t<div class=\"row\">\r\n\t\t" + 
      (guard(context && context['bestPosts'] && context['bestPosts']['length']) ?
        "\r\n\t\t<div class=\"col-lg-12 col-xs-12\">\r\n\t\t\t<h1>[[pages:account/best, " + 
          __escape(guard(context && context['username'])) + 
          "]]</h1>\r\n\r\n\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t<ul component=\"posts\" class=\"posts-list\">\r\n\t\t\t\t" + 
          compiled.blocks['bestPosts'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\t\t" + 
      (guard(context && context['latestPosts'] && context['latestPosts']['length']) ?
        "\r\n\t\t<div class=\"col-lg-12 col-xs-12\">\r\n\t\t\t<h1>[[pages:account/latest-posts, " + 
          __escape(guard(context && context['username'])) + 
          "]]</h1>\r\n\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t<ul component=\"posts\" class=\"posts-list\">\r\n\t\t\t\t" + 
          compiled.blocks['latestPosts'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n\r\n\t<div id=\"user-action-alert\" class=\"alert alert-success hide\"></div>\r\n</div>\r\n";
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
    'selectedGroup': function selectedGroup(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['selectedGroup']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t" + 
          (guard(context && context['selectedGroup'] && context['selectedGroup'][key0] && context['selectedGroup'][key0]['slug']) ?
            "\r\n\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/groups/" + 
              __escape(guard(context && context['selectedGroup'] && context['selectedGroup'][key0] && context['selectedGroup'][key0]['slug'])) + 
              "\"><small class=\"label group-label inline-block\" style=\"color:" + 
              __escape(guard(context && context['selectedGroup'] && context['selectedGroup'][key0] && context['selectedGroup'][key0]['textColor'])) + 
              ";background-color: " + 
              __escape(guard(context && context['selectedGroup'] && context['selectedGroup'][key0] && context['selectedGroup'][key0]['labelColor'])) + 
              ";\">" + 
              (guard(context && context['selectedGroup'] && context['selectedGroup'][key0] && context['selectedGroup'][key0]['icon']) ?
                "<i class=\"fa " + 
                  __escape(guard(context && context['selectedGroup'] && context['selectedGroup'][key0] && context['selectedGroup'][key0]['icon'])) + 
                  "\"></i> " :
                "") + 
              __escape(guard(context && context['selectedGroup'] && context['selectedGroup'][key0] && context['selectedGroup'][key0]['userTitle'])) + 
              "</small></a>\r\n\t\t" :
            "") + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['groups']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/groups/" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['slug'])) + 
          "\"><span class=\"label group-label inline-block\" style=\"background-color: " + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['labelColor'])) + 
          ";\">" + 
          (guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['icon']) ?
            "<i class=\"fa " + 
              __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['icon'])) + 
              "\"></i> " :
            "") + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['userTitle'])) + 
          "</span></a>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'ips': function ips(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['ips']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<div>" + 
          __escape(guard(context && context['ips'] && context['ips'][key0])) + 
          "</div>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'bestPosts': function bestPosts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['bestPosts']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li component=\"post\" class=\"posts-list-item row" + 
          (guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['deleted']) ?
            " deleted" :
            (guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['topic'] && context['bestPosts'][key0]['topic']['deleted']) ?
                " deleted" :
                "")) + 
          "\" data-pid=\"" + 
          __escape(guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['pid'])) + 
          "\" data-uid=\"" + 
          __escape(guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['uid'])) + 
          "\">\r\n    <div class=\"col-lg-11 col-sm-10 col-xs-9 post-body\">\r\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/post/" + 
          __escape(guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['pid'])) + 
          "\">\r\n            " + 
          (guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['isMainPost']) ?
            "" :
            "RE: ") + 
          __escape(guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['topic'] && context['bestPosts'][key0]['topic']['title'])) + 
          "\r\n        </a>\r\n\r\n        <div component=\"post/content\" class=\"content\">\r\n            " + 
          __escape(guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['content'])) + 
          "\r\n        </div>\r\n\r\n        <small class=\"topic-category\"><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/category/" + 
          __escape(guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['category'] && context['bestPosts'][key0]['category']['slug'])) + 
          "\">[[global:posted_in, " + 
          __escape(guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['category'] && context['bestPosts'][key0]['category']['name'])) + 
          "]]</a></small>\r\n\r\n        <div class=\"post-info\">\r\n            <a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['user'] && context['bestPosts'][key0]['user']['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['user']), "md", guard(context && context['true']), "user-img"])) + 
          "</a>\r\n\r\n            <div class=\"post-author\">\r\n                <a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['user'] && context['bestPosts'][key0]['user']['userslug'])) + 
          "\">" + 
          __escape(guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['user'] && context['bestPosts'][key0]['user']['displayname'])) + 
          "</a><br />\r\n                <span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['bestPosts'] && context['bestPosts'][key0] && context['bestPosts'][key0]['timestampISO'])) + 
          "\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'latestPosts': function latestPosts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['latestPosts']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li component=\"post\" class=\"posts-list-item row" + 
          (guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['deleted']) ?
            " deleted" :
            (guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['topic'] && context['latestPosts'][key0]['topic']['deleted']) ?
                " deleted" :
                "")) + 
          "\" data-pid=\"" + 
          __escape(guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['pid'])) + 
          "\" data-uid=\"" + 
          __escape(guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['uid'])) + 
          "\">\r\n    <div class=\"col-lg-11 col-sm-10 col-xs-9 post-body\">\r\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/post/" + 
          __escape(guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['pid'])) + 
          "\">\r\n            " + 
          (guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['isMainPost']) ?
            "" :
            "RE: ") + 
          __escape(guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['topic'] && context['latestPosts'][key0]['topic']['title'])) + 
          "\r\n        </a>\r\n\r\n        <div component=\"post/content\" class=\"content\">\r\n            " + 
          __escape(guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['content'])) + 
          "\r\n        </div>\r\n\r\n        <small class=\"topic-category\"><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/category/" + 
          __escape(guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['category'] && context['latestPosts'][key0]['category']['slug'])) + 
          "\">[[global:posted_in, " + 
          __escape(guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['category'] && context['latestPosts'][key0]['category']['name'])) + 
          "]]</a></small>\r\n\r\n        <div class=\"post-info\">\r\n            <a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['user'] && context['latestPosts'][key0]['user']['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['user']), "md", guard(context && context['true']), "user-img"])) + 
          "</a>\r\n\r\n            <div class=\"post-author\">\r\n                <a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['user'] && context['latestPosts'][key0]['user']['userslug'])) + 
          "\">" + 
          __escape(guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['user'] && context['latestPosts'][key0]['user']['displayname'])) + 
          "</a><br />\r\n                <span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['latestPosts'] && context['latestPosts'][key0] && context['latestPosts'][key0]['timestampISO'])) + 
          "\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
