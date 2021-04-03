
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
    return (guard(context && context['posts'] && context['posts']['display_moderator_tools']) ?
        "\r\n<li class=\"dropdown-header\">[[topic:tools]]</li>\r\n<li>\r\n\t<a component=\"post/edit\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">\r\n\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw fa-pencil\"></i></span> [[topic:edit]]\r\n\t</a>\r\n</li>\r\n<li " + 
          (guard(context && context['posts'] && context['posts']['deleted']) ?
            "hidden" :
            "") + 
          ">\r\n\t<a component=\"post/delete\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" class=\"" + 
          (guard(context && context['posts'] && context['posts']['deleted']) ?
            "hidden" :
            "") + 
          "\">\r\n\t\t<div class=\"inline menu-icon\"><i class=\"fa fa-fw fa-trash-o\"></i></div> <span>[[topic:delete]]</span>\r\n\t</a>\r\n</li>\r\n<li " + 
          (guard(context && context['posts'] && context['posts']['deleted']) ?
            "" :
            "hidden") + 
          ">\r\n\t<a component=\"post/restore\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" class=\"" + 
          (guard(context && context['posts'] && context['posts']['deleted']) ?
            "" :
            "hidden") + 
          "\">\r\n\t\t<div class=\"inline menu-icon\"><i class=\"fa fa-fw fa-history\"></i></div> <span>[[topic:restore]]</span>\r\n\t</a>\r\n</li>\r\n" + 
          (guard(context && context['posts'] && context['posts']['display_purge_tools']) ?
            "\r\n<li " + 
              (guard(context && context['posts'] && context['posts']['deleted']) ?
                "" :
                "hidden") + 
              ">\r\n\t<a component=\"post/purge\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" class=\"" + 
              (guard(context && context['posts'] && context['posts']['deleted']) ?
                "" :
                "hidden") + 
              "\">\r\n\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw fa-eraser\"></i></span> [[topic:purge]]\r\n\t</a>\r\n</li>\r\n" :
            "") + 
          "\r\n\r\n" + 
          (guard(context && context['posts'] && context['posts']['display_move_tools']) ?
            "\r\n<li>\r\n\t<a component=\"post/move\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">\r\n\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw fa-arrows\"></i></span> [[topic:move]]\r\n\t</a>\r\n</li>\r\n" :
            "") + 
          "\r\n\r\n" + 
          (guard(context && context['posts'] && context['posts']['display_change_owner_tools']) ?
            "\r\n<li>\r\n\t<a component=\"post/change-owner\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">\r\n\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw fa-user\"></i></span> [[topic:change-owner]]\r\n\t</a>\r\n</li>\r\n" :
            "") + 
          "\r\n\r\n" + 
          (guard(context && context['posts'] && context['posts']['ip']) ?
            "\r\n<li>\r\n\t<a component=\"post/copy-ip\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" data-clipboard-text=\"" + 
              __escape(guard(context && context['posts'] && context['posts']['ip'])) + 
              "\">\r\n\t\t<span class=\"menu-icon\" ><i class=\"fa fa-fw fa-copy\"></i></span> [[topic:copy-ip]] " + 
              __escape(guard(context && context['posts'] && context['posts']['ip'])) + 
              "\r\n\t</a>\r\n</li>\r\n" + 
              (guard(context && context['posts'] && context['posts']['display_ip_ban']) ?
                "\r\n<li>\r\n\t<a component=\"post/ban-ip\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" data-ip=\"" + 
                  __escape(guard(context && context['posts'] && context['posts']['ip'])) + 
                  "\">\r\n\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw fa-ban\"></i></span> [[topic:ban-ip]] " + 
                  __escape(guard(context && context['posts'] && context['posts']['ip'])) + 
                  "\r\n\t</a>\r\n</li>\r\n" :
                "") + 
              "\r\n" :
            "") + 
          "\r\n" :
        "") + 
      "\r\n\r\n" + 
      compiled.blocks['posts.tools'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n" + 
      (guard(context && context['posts'] && context['posts']['deleted']) ?
        "" :
        "\r\n\t" + 
          (guard(context && context['posts'] && context['posts']['display_history']) ?
            "\r\n\t<li>\r\n\t\t<a component=\"post/view-history\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">\r\n\t\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw fa-history\"></i></span> [[topic:view-history]]\r\n\t\t</a>\r\n\t</li>\r\n\t" :
            "") + 
          "\r\n\r\n\t" + 
          (guard(context && context['config'] && context['config']['loggedIn']) ?
            "\r\n\t<li>\r\n\t\t<a component=\"post/bookmark\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" data-bookmarked=\"" + 
              __escape(guard(context && context['posts'] && context['posts']['bookmarked'])) + 
              "\">\r\n\t\t\t<span class=\"menu-icon\">\r\n\t\t\t\t<i component=\"post/bookmark/on\" class=\"fa fa-fw fa-heart " + 
              (guard(context && context['posts'] && context['posts']['bookmarked']) ?
                "" :
                "hidden") + 
              "\"></i>\r\n\t\t\t\t<i component=\"post/bookmark/off\" class=\"fa fa-fw fa-heart-o " + 
              (guard(context && context['posts'] && context['posts']['bookmarked']) ?
                "hidden" :
                "") + 
              "\"></i>\r\n\t\t\t</span>\r\n\t\t\t<span class=\"bookmark-text\">[[topic:bookmark]]</span>\r\n\t\t\t<span component=\"post/bookmark-count\" class=\"bookmarkCount badge\" data-bookmarks=\"" + 
              __escape(guard(context && context['posts'] && context['posts']['bookmarks'])) + 
              "\">" + 
              __escape(guard(context && context['posts'] && context['posts']['bookmarks'])) + 
              "</span>&nbsp;\r\n\t\t</a>\r\n\t</li>\r\n\t" :
            "") + 
          "\r\n\r\n\t" + 
          (guard(context && context['postSharing'] && context['postSharing']['length']) ?
            "\r\n\t" + 
              (guard(context && context['config'] && context['config']['loggedIn']) ?
                "<li class=\"divider\"></li>" :
                "") + 
              "\r\n\t<li class=\"dropdown-header\">[[topic:share_this_post]]</li>\r\n\t" :
            "") + 
          "\r\n\t" + 
          compiled.blocks['postSharing'](helpers, context, guard, iter, helper) + 
          "\r\n") + 
      "\r\n\r\n" + 
      (guard(context && context['posts'] && context['posts']['display_flag_tools']) ?
        "\r\n<li class=\"divider\"></li>\r\n" + 
          (guard(context && context['posts'] && context['posts']['flags'] && context['posts']['flags']['flagged']) ?
            "\r\n<li class=\"disabled text-muted\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\"><i class=\"fa fa-fw fa-flag\"></i> [[topic:already-flagged]]</li>\r\n" :
            "\r\n<li><a component=\"post/flag\" role=\"menuitem\" tabindex=\"-1\" href=\"#\"><i class=\"fa fa-fw fa-flag\"></i> [[topic:flag-post]]</a></li>\r\n" + 
              (guard(context && context['posts'] && context['posts']['selfPost']) ?
                "" :
                "\r\n<li><a component=\"post/flagUser\" role=\"menuitem\" tabindex=\"-1\" href=\"#\"><i class=\"fa fa-fw fa-flag\"></i> [[topic:flag-user]]</a></li>\r\n") + 
              "\r\n") + 
          "\r\n" :
        "") + 
      "\r\n" + 
      (guard(context && context['posts'] && context['posts']['display_moderator_tools']) ?
        "\r\n" + 
          (guard(context && context['posts'] && context['posts']['flags'] && context['posts']['flags']['exists']) ?
            "\r\n<li><a role=\"menuitem\" tabindex=\"-1\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/flags/" + 
              __escape(guard(context && context['posts'] && context['posts']['flags'] && context['posts']['flags']['flagId'])) + 
              "\"><i class=\"fa fa-fw fa-exclamation-circle\"></i> [[topic:view-flag-report]]</a></li>\r\n" :
            "") + 
          "\r\n" :
        "");
  }

  compiled.blocks = {
    'posts.tools': function poststools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts'] && context['posts']['tools']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li " + 
          (guard(context && context['posts'] && context['posts']['tools'] && context['posts']['tools'][key0] && context['posts']['tools'][key0]['disabled']) ?
            "class=\"disabled\" " :
            "") + 
          ">\r\n\t<a component=\"" + 
          __escape(guard(context && context['posts'] && context['posts']['tools'] && context['posts']['tools'][key0] && context['posts']['tools'][key0]['action'])) + 
          "\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">\r\n\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw " + 
          __escape(guard(context && context['posts'] && context['posts']['tools'] && context['posts']['tools'][key0] && context['posts']['tools'][key0]['icon'])) + 
          "\"></i></span> " + 
          guard(context && context['posts'] && context['posts']['tools'] && context['posts']['tools'][key0] && context['posts']['tools'][key0]['html']) + 
          "\r\n\t</a>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    },
    'postSharing': function postSharing(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['postSharing']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li>\r\n\t\t\t<a role=\"menuitem\" component=\"share/" + 
          __escape(guard(context && context['postSharing'] && context['postSharing'][key0] && context['postSharing'][key0]['id'])) + 
          "\" tabindex=\"-1\" href=\"#\"><span class=\"menu-icon\"><i class=\"fa fa-fw " + 
          __escape(guard(context && context['postSharing'] && context['postSharing'][key0] && context['postSharing'][key0]['class'])) + 
          "\"></i></span> " + 
          __escape(guard(context && context['postSharing'] && context['postSharing'][key0] && context['postSharing'][key0]['name'])) + 
          "</a>\r\n\t\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
