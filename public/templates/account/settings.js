
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
      "\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 col-md-6\">\r\n\t\t\t" + 
      (guard(context && context['disableCustomUserSkins']) ?
        "" :
        "\r\n\t\t\t<h4>[[user:select-skin]]</h4>\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t<select class=\"form-control\" id=\"bootswatchSkin\" data-property=\"bootswatchSkin\">\r\n\t\t\t\t\t" + 
          compiled.blocks['bootswatchSkinOptions'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t") + 
      "\r\n\r\n\t\t\t" + 
      (guard(context && context['allowUserHomePage']) ?
        "\r\n\t\t\t<h4>[[user:select-homepage]]</h4>\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"dailyDigestFreq\">[[user:homepage]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" data-property=\"homePageRoute\">\r\n\t\t\t\t\t\t<option value=\"none\">None</option>\r\n\t\t\t\t\t\t" + 
          compiled.blocks['homePageRoutes'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<p class=\"help-block\">[[user:homepage_description]]</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"homePageCustom\" class=\"form-group\" style=\"display: none;\">\r\n\t\t\t\t\t<label for=\"homePageCustom\">[[user:custom_route]]</label>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" data-property=\"homePageCustom\" id=\"homePageCustom\" value=\"" + 
          __escape(guard(context && context['settings'] && context['settings']['homePageRoute'])) + 
          "\"/>\r\n\t\t\t\t\t<p class=\"help-block\">[[user:custom_route_help]]</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t<h4>[[global:privacy]]</h4>\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t" + 
      (guard(context && context['hideEmail']) ?
        "" :
        "\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"showemail\" " + 
          (guard(context && context['settings'] && context['settings']['showemail']) ?
            "checked " :
            "") + 
          "/> <strong>[[user:show_email]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t") + 
      "\r\n\r\n\t\t\t\t" + 
      (guard(context && context['hideFullname']) ?
        "" :
        "\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"showfullname\" " + 
          (guard(context && context['settings'] && context['settings']['showfullname']) ?
            "checked" :
            "") + 
          "/> <strong>[[user:show_fullname]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t") + 
      "\r\n\t\t\t\t" + 
      (guard(context && context['config'] && context['config']['disableChat']) ?
        "" :
        "\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"restrictChat\" " + 
          (guard(context && context['settings'] && context['settings']['restrictChat']) ?
            "checked" :
            "") + 
          "/> <strong>[[user:restrict_chats]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t") + 
      "\r\n\t\t\t</div>\r\n\r\n\t\t\t<h4>[[user:browsing]]</h4>\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"openOutgoingLinksInNewTab\" " + 
      (guard(context && context['settings'] && context['settings']['openOutgoingLinksInNewTab']) ?
        "checked" :
        "") + 
      "/> <strong>[[user:open_links_in_new_tab]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t" + 
      (guard(context && context['inTopicSearchAvailable']) ?
        "\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"topicSearchEnabled\" " + 
          (guard(context && context['settings'] && context['settings']['topicSearchEnabled']) ?
            "checked" :
            "") + 
          "/> <strong>[[user:enable_topic_searching]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<p class=\"help-block\">[[user:topic_search_help]]</p>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"updateUrlWithPostIndex\" " + 
      (guard(context && context['settings'] && context['settings']['updateUrlWithPostIndex']) ?
        "checked" :
        "") + 
      "/> <strong>[[user:update_url_with_post_index]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"scrollToMyPost\" " + 
      (guard(context && context['settings'] && context['settings']['scrollToMyPost']) ?
        "checked" :
        "") + 
      "/> <strong>[[user:scroll_to_my_post]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<h4>[[global:pagination]]</h4>\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"usePagination\" " + 
      (guard(context && context['settings'] && context['settings']['usePagination']) ?
        "checked" :
        "") + 
      "> <strong>[[user:paginate_description]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<strong>[[user:topics_per_page]] ([[user:max_items_per_page, " + 
      __escape(guard(context && context['maxTopicsPerPage'])) + 
      "]])</strong><br /> <input type=\"text\" class=\"form-control\" data-property=\"topicsPerPage\" value=\"" + 
      __escape(guard(context && context['settings'] && context['settings']['topicsPerPage'])) + 
      "\"><br />\r\n\t\t\t\t<strong>[[user:posts_per_page]] ([[user:max_items_per_page, " + 
      __escape(guard(context && context['maxPostsPerPage'])) + 
      "]])</strong><br /> <input type=\"text\" class=\"form-control\" data-property=\"postsPerPage\" value=\"" + 
      __escape(guard(context && context['settings'] && context['settings']['postsPerPage'])) + 
      "\"><br />\r\n\t\t\t</div>\r\n\r\n\t\t\t" + 
      (guard(context && context['disableEmailSubscriptions']) ?
        "" :
        "\r\n\t\t\t<h4>[[global:email]]</h4>\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"dailyDigestFreq\">[[user:digest_label]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"dailyDigestFreq\" data-property=\"dailyDigestFreq\" autocomplete=\"off\">\r\n\t\t\t\t\t\t" + 
          compiled.blocks['dailyDigestFreqOptions'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<p class=\"help-block\">[[user:digest_description]]</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t") + 
      "\r\n\r\n\t\t\t" + 
      compiled.blocks['customSettings'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-xs-12 col-md-6\">\r\n\t\t\t<h4>[[global:language]]</h4>\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"form-group col-lg-12\">\r\n\t\t\t\t\t\t<select data-property=\"userLang\" class=\"form-control\">\r\n\t\t\t\t\t\t\t" + 
      compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t" + 
      (guard(context && context['isAdmin']) ?
        "\r\n\t\t\t\t" + 
          (guard(context && context['isSelf']) ?
            "\r\n\t\t\t\t<label>[[user:acp_language]]</label>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"form-group col-lg-12\">\r\n\t\t\t\t\t\t<select data-property=\"acpLang\" class=\"form-control\">\r\n\t\t\t\t\t\t\t" + 
              compiled.blocks['acpLanguages'](helpers, context, guard, iter, helper) + 
              "\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t</div>\r\n\r\n\t\t\t<h4>[[topic:watch]]</h4>\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"followTopicsOnCreate\" " + 
      (guard(context && context['settings'] && context['settings']['followTopicsOnCreate']) ?
        "checked " :
        "") + 
      "/> <strong>[[user:follow_topics_you_create]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"followTopicsOnReply\" " + 
      (guard(context && context['settings'] && context['settings']['followTopicsOnReply']) ?
        "checked" :
        "") + 
      "/> <strong>[[user:follow_topics_you_reply_to]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label>[[user:default-category-watch-state]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" data-property=\"categoryWatchState\">\r\n\t\t\t\t\t\t<option value=\"watching\" " + 
      (guard(context && context['categoryWatchState'] && context['categoryWatchState']['watching']) ?
        "selected" :
        "") + 
      ">[[category:watching]]</option>\r\n\t\t\t\t\t\t<option value=\"notwatching\" " + 
      (guard(context && context['categoryWatchState'] && context['categoryWatchState']['notwatching']) ?
        "selected" :
        "") + 
      ">[[category:not-watching]]</option>\r\n\t\t\t\t\t\t<option value=\"ignoring\" " + 
      (guard(context && context['categoryWatchState'] && context['categoryWatchState']['ignoring']) ?
        "selected" :
        "") + 
      ">[[category:ignoring]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<h4>[[user:notifications]]</h4>\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t" + 
      compiled.blocks['notificationSettings'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t\t\t<label for=\"upvote-notif-freq\">[[user:upvote-notif-freq]]</label>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"form-group col-xs-9\">\r\n\t\t\t\t\t\t<select class=\"form-control\" id=\"upvote-notif-freq\" name=\"upvote-notif-freq\" data-property=\"upvoteNotifFreq\">\r\n\t\t\t\t\t\t\t" + 
      compiled.blocks['upvoteNotifFreq'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"form-actions\">\r\n\t\t<a id=\"submitBtn\" href=\"#\" class=\"btn btn-primary\">[[global:save_changes]]</a>\r\n\t</div>\r\n</div>\r\n\r\n";
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
    'bootswatchSkinOptions': function bootswatchSkinOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['bootswatchSkinOptions']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['bootswatchSkinOptions'] && context['bootswatchSkinOptions'][key0] && context['bootswatchSkinOptions'][key0]['value'])) + 
          "\" " + 
          (guard(context && context['bootswatchSkinOptions'] && context['bootswatchSkinOptions'][key0] && context['bootswatchSkinOptions'][key0]['selected']) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard(context && context['bootswatchSkinOptions'] && context['bootswatchSkinOptions'][key0] && context['bootswatchSkinOptions'][key0]['name'])) + 
          "</option>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'homePageRoutes': function homePageRoutes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['homePageRoutes']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['homePageRoutes'] && context['homePageRoutes'][key0] && context['homePageRoutes'][key0]['route'])) + 
          "\" " + 
          (guard(context && context['homePageRoutes'] && context['homePageRoutes'][key0] && context['homePageRoutes'][key0]['selected']) ?
            "selected=\"1\"" :
            "") + 
          ">" + 
          __escape(guard(context && context['homePageRoutes'] && context['homePageRoutes'][key0] && context['homePageRoutes'][key0]['name'])) + 
          "</option>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'dailyDigestFreqOptions': function dailyDigestFreqOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['dailyDigestFreqOptions']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['dailyDigestFreqOptions'] && context['dailyDigestFreqOptions'][key0] && context['dailyDigestFreqOptions'][key0]['value'])) + 
          "\" " + 
          (guard(context && context['dailyDigestFreqOptions'] && context['dailyDigestFreqOptions'][key0] && context['dailyDigestFreqOptions'][key0]['selected']) ?
            "selected=\"1\"" :
            "") + 
          ">" + 
          __escape(guard(context && context['dailyDigestFreqOptions'] && context['dailyDigestFreqOptions'][key0] && context['dailyDigestFreqOptions'][key0]['name'])) + 
          "</option>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'customSettings': function customSettings(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['customSettings']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<h4>" + 
          __escape(guard(context && context['customSettings'] && context['customSettings'][key0] && context['customSettings'][key0]['title'])) + 
          "</h4>\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t" + 
          __escape(guard(context && context['customSettings'] && context['customSettings'][key0] && context['customSettings'][key0]['content'])) + 
          "\r\n\t\t\t</div>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['languages']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['languages'] && context['languages'][key0] && context['languages'][key0]['code'])) + 
          "\" " + 
          (guard(context && context['languages'] && context['languages'][key0] && context['languages'][key0]['selected']) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard(context && context['languages'] && context['languages'][key0] && context['languages'][key0]['name'])) + 
          " (" + 
          __escape(guard(context && context['languages'] && context['languages'][key0] && context['languages'][key0]['code'])) + 
          ")</option>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'acpLanguages': function acpLanguages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['acpLanguages']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['acpLanguages'] && context['acpLanguages'][key0] && context['acpLanguages'][key0]['code'])) + 
          "\" " + 
          (guard(context && context['acpLanguages'] && context['acpLanguages'][key0] && context['acpLanguages'][key0]['selected']) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard(context && context['acpLanguages'] && context['acpLanguages'][key0] && context['acpLanguages'][key0]['name'])) + 
          " (" + 
          __escape(guard(context && context['acpLanguages'] && context['acpLanguages'][key0] && context['acpLanguages'][key0]['code'])) + 
          ")</option>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'notificationSettings': function notificationSettings(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['notificationSettings']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"form-group col-xs-7\">\r\n\t\t\t\t\t\t<label>" + 
          __escape(guard(context && context['notificationSettings'] && context['notificationSettings'][key0] && context['notificationSettings'][key0]['label'])) + 
          "</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group col-xs-5\">\r\n\t\t\t\t\t\t<select class=\"form-control\" data-property=\"" + 
          __escape(guard(context && context['notificationSettings'] && context['notificationSettings'][key0] && context['notificationSettings'][key0]['name'])) + 
          "\">\r\n\t\t\t\t\t\t\t<option value=\"none\" " + 
          (guard(context && context['notificationSettings'] && context['notificationSettings'][key0] && context['notificationSettings'][key0]['none']) ?
            "selected" :
            "") + 
          ">[[notifications:none]]</option>\r\n\t\t\t\t\t\t\t<option value=\"notification\" " + 
          (guard(context && context['notificationSettings'] && context['notificationSettings'][key0] && context['notificationSettings'][key0]['notification']) ?
            "selected" :
            "") + 
          ">[[notifications:notification_only]]</option>\r\n\t\t\t\t\t\t\t<option value=\"email\" " + 
          (guard(context && context['notificationSettings'] && context['notificationSettings'][key0] && context['notificationSettings'][key0]['email']) ?
            "selected" :
            "") + 
          ">[[notifications:email_only]]</option>\r\n\t\t\t\t\t\t\t<option value=\"notificationemail\" " + 
          (guard(context && context['notificationSettings'] && context['notificationSettings'][key0] && context['notificationSettings'][key0]['notificationemail']) ?
            "selected" :
            "") + 
          ">[[notifications:notification_and_email]]</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'upvoteNotifFreq': function upvoteNotifFreq(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['upvoteNotifFreq']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['upvoteNotifFreq'] && context['upvoteNotifFreq'][key0] && context['upvoteNotifFreq'][key0]['name'])) + 
          "\" " + 
          (guard(context && context['upvoteNotifFreq'] && context['upvoteNotifFreq'][key0] && context['upvoteNotifFreq'][key0]['selected']) ?
            "selected" :
            "") + 
          ">\r\n\t\t\t\t\t\t\t\t[[user:upvote-notif-freq." + 
          __escape(guard(context && context['upvoteNotifFreq'] && context['upvoteNotifFreq'][key0] && context['upvoteNotifFreq'][key0]['name'])) + 
          "]]\r\n\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
