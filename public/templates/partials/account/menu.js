
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
    return "<div class=\"btn-group account-fab bottom-sheet\">\r\n\t<button type=\"button\" class=\"fab dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t<i class=\"fa fa-ellipsis-v\"></i>\r\n\t</button>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t" + 
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
      "\r\n\t</ul>\r\n</div>\r\n";
  }

  compiled.blocks = {
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
    }
  };

  return compiled;
})
