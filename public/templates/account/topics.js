
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
      "\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<h1>" + 
      __escape(guard(context && context['title'])) + 
      "</h1>\r\n\t\t" + 
      (guard(context && context['showSort']) ?
        "\r\n\t\t<div class=\"row clearfix\">\r\n\t\t\t<div class=\"pull-right btn-group bottom-sheet\" component=\"thread/sort\">\r\n\t\t\t\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"><span>[[topic:sort_by]]</span> <span class=\"caret\"></span></button>\r\n\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t" + 
          compiled.blocks['sortOptions'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard(context && context['topics'] && context['topics']['length']) ?
        "" :
        "\r\n\t\t\t<div class=\"alert alert-warning text-center\">" + 
          __escape(guard(context && context['noItemsFoundKey'])) + 
          "</div>\r\n\t\t") + 
      "\r\n\r\n\t\t<div class=\"category\">\r\n\t\t\t<ul component=\"category\" class=\"topic-list\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
      __escape(guard(context && context['nextStart'])) + 
      "\" data-set=\"" + 
      __escape(guard(context && context['set'])) + 
      "\">\r\n\t<meta itemprop=\"itemListOrder\" content=\"descending\">\r\n\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n\r\n\t\t\t" + 
      (guard(context && context['config'] && context['config']['usePagination']) ?
        "\r\n\t\t\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
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
    'sortOptions': function sortOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['sortOptions']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          __escape(guard(context && context['sortOptions'] && context['sortOptions'][key0] && context['sortOptions'][key0]['url'])) + 
          "\"><i class=\"fa fa-fw " + 
          (guard(context && context['sortOptions'] && context['sortOptions'][key0] && context['sortOptions'][key0]['selected']) ?
            "fa-check" :
            "") + 
          "\"></i>" + 
          __escape(guard(context && context['sortOptions'] && context['sortOptions'][key0] && context['sortOptions'][key0]['name'])) + 
          "</a></li>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['topics']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li component=\"category/topic\" class=\"row clearfix category-item " + 
          __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
          "\" data-tid=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tid'])) + 
          "\" data-index=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['index'])) + 
          "\" data-cid=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['cid'])) + 
          "\" itemprop=\"itemListElement\">\r\n\t\t<a id=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['index'])) + 
          "\" data-index=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['index'])) + 
          "\" component=\"topic/anchor\"></a>\r\n\t\t<meta itemprop=\"name\" content=\"" + 
          __escape(helper(context, helpers, 'stripTags', [guard(context && context['title'])])) + 
          "\">\r\n\r\n\t\t<div class=\"col-md-6 col-sm-9 col-xs-10 content\">\r\n\t\t\t<div class=\"avatar pull-left\">\r\n\t\t\t\t" + 
          (guard(context && context['showSelect']) ?
            "\r\n\t\t\t\t<div class=\"select\" component=\"topic/select\">\r\n\t\t\t\t\t" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb']) ?
                "\r\n\t\t\t\t\t<img src=\"" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb'])) + 
                  "\" class=\"user-img not-responsive\" />\r\n\t\t\t\t\t" :
                "\r\n\t\t\t\t\t" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user']), "46", guard(context && context['true']), "not-responsive"])) + 
                  "\r\n\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t<i class=\"fa fa-check\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t" + 
          (guard(context && context['showSelect']) ?
            "" :
            "\r\n\t\t\t\t<a href=\"" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug']) ?
                __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug'])) :
                "#") + 
              "\" class=\"pull-left\">\r\n\t\t\t\t\t" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb']) ?
                "\r\n\t\t\t\t\t<img src=\"" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb'])) + 
                  "\" class=\"user-img not-responsive\" />\r\n\t\t\t\t\t" :
                "\r\n\t\t\t\t\t" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user']), "46", guard(context && context['true']), "not-responsive"])) + 
                  "\r\n\t\t\t\t\t") + 
              "\r\n\t\t\t\t</a>\r\n\t\t\t\t") + 
          "\r\n\t\t\t</div>\r\n\r\n\t\t\t<h2 component=\"topic/header\" class=\"title\">\r\n\t\t\t\t<i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['pinned']) ?
            "" :
            "hide") + 
          "\" title=\"" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['pinExpiry']) ?
            "[[topic:pinned-with-expiry, " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['pinExpiryISO'])) + 
              "]]" :
            "[[topic:pinned]]") + 
          "\"></i>\r\n\t\t\t\t<i component=\"topic/locked\" class=\"fa fa-lock " + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['locked']) ?
            "" :
            "hide") + 
          "\" title=\"[[topic:locked]]\"></i>\r\n\t\t\t\t<i component=\"topic/moved\" class=\"fa fa-arrow-circle-right " + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['oldCid']) ?
            "" :
            "hide") + 
          "\" title=\"[[topic:moved]]\"></i>\r\n\t\t\t\t" + 
          iter(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['icons']), function each(key1, index, length, value) {
            var key = key1;
            return __escape(guard(value));
          }, function alt() {
            return "";
          }) + 
          "\r\n\r\n\r\n\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['noAnchor']) ?
            "\r\n\t\t\t\t<span>" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['title'])) + 
              "</span><br />\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/topic/" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['slug'])) + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['bookmark']) ?
                "/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['bookmark'])) :
                "") + 
              "\" itemprop=\"url\">" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['title'])) + 
              "</a><br />\r\n\t\t\t\t") + 
          "\r\n\r\n\t\t\t\t" + 
          (guard(context && context['template'] && context['template']['category']) ?
            "" :
            "\r\n\t\t\t\t<small>\r\n\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/category/" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['slug'])) + 
              "\"><span class=\"fa-stack fa-lg\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'])])) + 
              "\"><i style=\"color:" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['color'])) + 
              ";\" class=\"fa " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['icon'])) + 
              " fa-stack-1x\"></i></span> " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['name'])) + 
              "</a> &bull;\r\n\t\t\t\t</small>\r\n\t\t\t\t") + 
          "\r\n\r\n\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags']['length']) ?
            "\r\n\t\t\t\t<span class=\"tag-list hidden-xs\">\r\n\t\t\t\t\t" + 
              iter(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags']), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/tags/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['valueEscaped'])) + 
                  "\"><span class=\"tag\" style=\"" + 
                  (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['color']) ?
                    "color: " + 
                      __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['color'])) + 
                      ";" :
                    "") + 
                  (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['bgColor']) ?
                    "background-color: " + 
                      __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['bgColor'])) + 
                      ";" :
                    "") + 
                  "\">" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['valueEscaped'])) + 
                  "</span></a>\r\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\r\n\t\t\t\t\t<small>&bull;</small>\r\n\t\t\t\t</span>\r\n\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t<small class=\"hidden-xs\"><span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['timestampISO'])) + 
          "\"></span> &bull; <a href=\"" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug']) ?
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug'])) :
            "#") + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['displayname'])) + 
          "</a></small>\r\n\t\t\t\t<small class=\"visible-xs-inline\">\r\n\t\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['timestamp']) ?
            "\r\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['timestampISO'])) + 
              "\"></span>\r\n\t\t\t\t\t" :
            "\r\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['timestampISO'])) + 
              "\"></span>\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t</small>\r\n\t\t\t</h2>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"mobile-stat col-xs-2 visible-xs text-right\">\r\n\t\t\t<span class=\"human-readable-number\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['postcount'])) + 
          "</span> <a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/topic/" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['slug'])) + 
          "/" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['index'])) + 
          "\"><i class=\"fa fa-arrow-circle-right\"></i></a>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-votes\">\r\n\t\t\t" + 
          (guard(context && context['reputation:disabled']) ?
            "" :
            "\r\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['votes'])) + 
              "\">" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['votes'])) + 
              "</span><br />\r\n\t\t\t<small>[[global:votes]]</small>\r\n\t\t\t") + 
          "\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-postcount\">\r\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['postcount'])) + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['postcount'])) + 
          "</span><br />\r\n\t\t\t<small>[[global:posts]]</small>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-viewcount\">\r\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['viewcount'])) + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['viewcount'])) + 
          "</span><br />\r\n\t\t\t<small>[[global:views]]</small>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\r\n\t\t\t<div class=\"card\" style=\"border-color: " + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['bgColor'])) + 
          "\">\r\n\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['unreplied']) ?
            "\r\n\t\t\t\t<p>\r\n\t\t\t\t\t[[category:no_replies]]\r\n\t\t\t\t</p>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['pid']) ?
                "\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['user'] && context['topics'][key0]['teaser']['user']['userslug'])) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['user']), "24", guard(context && context['true']), "not-responsive"])) + 
                  "</a>\r\n\t\t\t\t\t<a class=\"permalink\" href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/topic/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['slug'])) + 
                  "/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['index'])) + 
                  "\">\r\n\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['timestampISO'])) + 
                  "\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"post-content\">\r\n\t\t\t\t\t" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['content'])) + 
                  "\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t") + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</li>\r\n\t";
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
