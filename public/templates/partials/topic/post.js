
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
    return "<div class=\"clearfix post-header\">\r\n\t<div class=\"icon pull-left\">\r\n\t\t<a href=\"" + 
      (guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['userslug']) ?
        __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['userslug'])) :
        "#") + 
      "\">\r\n\t\t\t" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['posts'] && context['posts']['user']), "sm2x", guard(context && context['true']), "", "user/picture"])) + 
      "\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
      __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['status'])) + 
      "\" title=\"[[global:" + 
      __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['status'])) + 
      "]]\"></i>\r\n\t\t</a>\r\n\t</div>\r\n\r\n\t<small class=\"pull-left\">\r\n\t\t<strong>\r\n\t\t\t<a href=\"" + 
      (guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['userslug']) ?
        __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['userslug'])) :
        "#") + 
      "\" itemprop=\"author\" data-username=\"" + 
      __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['username'])) + 
      "\" data-uid=\"" + 
      __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['uid'])) + 
      "\">" + 
      __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['displayname'])) + 
      "</a>\r\n\t\t</strong>\r\n\r\n\t\t" + 
      compiled.blocks['posts.user.selectedGroups'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t" + 
      (guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['banned']) ?
        "\r\n\t\t<span class=\"label label-danger\">[[user:banned]]</span>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t<span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\r\n\t\t\t" + 
      (guard(context && context['posts'] && context['posts']['toPid']) ?
        "\r\n\t\t\t<a component=\"post/parent\" class=\"btn btn-xs btn-default hidden-xs\" data-topid=\"" + 
          __escape(guard(context && context['posts'] && context['posts']['toPid'])) + 
          "\" href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/post/" + 
          __escape(guard(context && context['posts'] && context['posts']['toPid'])) + 
          "\"><i class=\"fa fa-reply\"></i> @" + 
          (guard(context && context['posts'] && context['posts']['parent'] && context['posts']['parent']['username']) ?
            __escape(guard(context && context['posts'] && context['posts']['parent'] && context['posts']['parent']['username'])) :
            "[[global:guest]]") + 
          "</a>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t<span>\r\n\t\t\t\t" + 
      (guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['custom_profile_info'] && context['posts']['user']['custom_profile_info']['length']) ?
        "\r\n\t\t\t\t&#124;\r\n\t\t\t\t" + 
          compiled.blocks['posts.user.custom_profile_info'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t</span>\r\n\t\t</span>\r\n\r\n\t</small>\r\n\t<small class=\"pull-right\">\r\n\t\t<span class=\"bookmarked\"><i class=\"fa fa-bookmark-o\"></i></span>\r\n\t</small>\r\n\t<small class=\"pull-right\">\r\n\t\t<i component=\"post/edit-indicator\" class=\"fa fa-pencil-square" + 
      (guard(context && context['privileges'] && context['privileges']['posts:history']) ?
        " pointer" :
        "") + 
      " edit-icon " + 
      (guard(context && context['posts'] && context['posts']['editor'] && context['posts']['editor']['username']) ?
        "" :
        "hidden") + 
      "\"></i>\r\n\r\n\t\t<small data-editor=\"" + 
      __escape(guard(context && context['posts'] && context['posts']['editor'] && context['posts']['editor']['userslug'])) + 
      "\" component=\"post/editor\" class=\"hidden\">[[global:last_edited_by, " + 
      __escape(guard(context && context['posts'] && context['posts']['editor'] && context['posts']['editor']['username'])) + 
      "]] <span class=\"timeago\" title=\"" + 
      __escape(guard(context && context['posts'] && context['posts']['editedISO'])) + 
      "\"></span></small>\r\n\r\n\t\t<span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\r\n\t\t\t<a class=\"permalink\" href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/post/" + 
      __escape(guard(context && context['posts'] && context['posts']['pid'])) + 
      "\"><span class=\"timeago\" title=\"" + 
      __escape(guard(context && context['posts'] && context['posts']['timestampISO'])) + 
      "\"></span></a>\r\n\t\t</span>\r\n\t</small>\r\n</div>\r\n\r\n<br />\r\n\r\n<div class=\"content\" component=\"post/content\" itemprop=\"text\">\r\n\t" + 
      __escape(guard(context && context['posts'] && context['posts']['content'])) + 
      "\r\n</div>\r\n\r\n<div class=\"post-footer\">\r\n\t" + 
      (guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['signature']) ?
        "\r\n\t<div component=\"post/signature\" data-uid=\"" + 
          __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['uid'])) + 
          "\" class=\"post-signature\">" + 
          __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['signature'])) + 
          "</div>\r\n\t" :
        "") + 
      "\r\n\r\n\t<div class=\"clearfix\">\r\n\t" + 
      (guard(context && context['hideReplies']) ?
        "" :
        "\r\n\t<a component=\"post/reply-count\" data-target-component=\"post/replies/container\" href=\"#\" class=\"threaded-replies no-select pull-left " + 
          (guard(context && context['posts'] && context['posts']['replies'] && context['posts']['replies']['count']) ?
            "" :
            "hidden") + 
          "\">\r\n\t\t<span component=\"post/reply-count/avatars\" class=\"avatars " + 
          (guard(context && context['posts'] && context['posts']['replies'] && context['posts']['replies']['hasMore']) ?
            "hasMore" :
            "") + 
          "\">\r\n\t\t\t" + 
          compiled.blocks['posts.replies.users'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t</span>\r\n\r\n\t\t<span class=\"replies-count\" component=\"post/reply-count/text\" data-replies=\"" + 
          __escape(guard(context && context['posts'] && context['posts']['replies'] && context['posts']['replies']['count'])) + 
          "\">" + 
          __escape(guard(context && context['posts'] && context['posts']['replies'] && context['posts']['replies']['text'])) + 
          "</span>\r\n\t\t<span class=\"replies-last hidden-xs\">[[topic:last_reply_time]] <span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['posts'] && context['posts']['replies'] && context['posts']['replies']['timestampISO'])) + 
          "\"></span></span>\r\n\r\n\t\t<i class=\"fa fa-fw fa-chevron-right\" component=\"post/replies/open\"></i>\r\n\t\t<i class=\"fa fa-fw fa-chevron-down hidden\" component=\"post/replies/close\"></i>\r\n\t\t<i class=\"fa fa-fw fa-spin fa-spinner hidden\" component=\"post/replies/loading\"></i>\r\n\t</a>\r\n\t") + 
      "\r\n\r\n\t<small class=\"pull-right\">\r\n\t\t<span class=\"post-tools\">\r\n\t\t\t<a component=\"post/reply\" href=\"#\" class=\"no-select " + 
      (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
        "" :
        "hidden") + 
      "\">[[topic:reply]]</a>\r\n\t\t\t<a component=\"post/quote\" href=\"#\" class=\"no-select " + 
      (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
        "" :
        "hidden") + 
      "\">[[topic:quote]]</a>\r\n\t\t</span>\r\n\r\n\t\t" + 
      (guard(context && context['reputation:disabled']) ?
        "" :
        "\r\n\t\t<span class=\"votes\">\r\n\t\t\t<a component=\"post/upvote\" href=\"#\" class=\"" + 
          (guard(context && context['posts'] && context['posts']['upvoted']) ?
            "upvoted" :
            "") + 
          "\">\r\n\t\t\t\t<i class=\"fa fa-chevron-up\"></i>\r\n\t\t\t</a>\r\n\r\n\t\t\t<span component=\"post/vote-count\" data-votes=\"" + 
          __escape(guard(context && context['posts'] && context['posts']['votes'])) + 
          "\">" + 
          __escape(guard(context && context['posts'] && context['posts']['votes'])) + 
          "</span>\r\n\r\n\t\t\t" + 
          (guard(context && context['downvote:disabled']) ?
            "" :
            "\r\n\t\t\t<a component=\"post/downvote\" href=\"#\" class=\"" + 
              (guard(context && context['posts'] && context['posts']['downvoted']) ?
                "downvoted" :
                "") + 
              "\">\r\n\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\r\n\t\t\t</a>\r\n\t\t\t") + 
          "\r\n\t\t</span>\r\n\t\t") + 
      "\r\n\r\n\t\t<span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet " + 
      (guard(context && context['posts'] && context['posts']['display_post_menu']) ?
        "" :
        "hidden") + 
      "\">\r\n\t<a href=\"#\" data-toggle=\"dropdown\" data-ajaxify=\"false\"><i class=\"fa fa-fw fa-ellipsis-v\"></i></a>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\"></ul>\r\n</span>\r\n\r\n\t</small>\r\n\t</div>\r\n\t<div component=\"post/replies/container\"></div>\r\n</div>";
  }

  compiled.blocks = {
    'posts.user.selectedGroups': function postsuserselectedGroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n" + 
          (guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['slug']) ?
            "\r\n<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/groups/" + 
              __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['slug'])) + 
              "\"><small class=\"label group-label inline-block\" style=\"color:" + 
              __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['textColor'])) + 
              ";background-color: " + 
              __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['labelColor'])) + 
              ";\">" + 
              (guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['icon']) ?
                "<i class=\"fa " + 
                  __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['icon'])) + 
                  "\"></i> " :
                "") + 
              __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['selectedGroups'] && context['posts']['user']['selectedGroups'][key0] && context['posts']['user']['selectedGroups'][key0]['userTitle'])) + 
              "</small></a>\r\n" :
            "") + 
          "\r\n";
      }, function alt() {
        return "";
      });
    },
    'posts.user.custom_profile_info': function postsusercustom_profile_info(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['custom_profile_info']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t" + 
          __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['custom_profile_info'] && context['posts']['user']['custom_profile_info'][key0] && context['posts']['user']['custom_profile_info'][key0]['content'])) + 
          "\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts.replies.users': function postsrepliesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts'] && context['posts']['replies'] && context['posts']['replies']['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['posts'] && context['posts']['replies'] && context['posts']['replies']['users'] && context['posts']['replies']['users'][key0]), "xs", guard(context && context['true']), ""])) + 
          "\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
