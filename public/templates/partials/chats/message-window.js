
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
    return (guard(context && context['roomId']) ?
        "\r\n<div component=\"chat/messages\" class=\"expanded-chat\" data-roomid=\"" + 
          __escape(guard(context && context['roomId'])) + 
          "\">\r\n\t<div component=\"chat/header\">\r\n\t\t<button type=\"button\" class=\"close\" data-action=\"pop-out\"><span aria-hidden=\"true\"><i class=\"fa fa-compress\"></i></span><span class=\"sr-only\">[[modules:chat.pop-out]]</span></button>\r\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" data-action=\"close\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n\t\t<div class=\"dropdown pull-right\">\r\n\t\t\t<button class=\"close\" data-toggle=\"dropdown\" component=\"chat/controlsToggle\"><i class=\"fa fa-gear\"></i></button>\r\n\t\t\t<ul class=\"dropdown-menu dropdown-menu-right pull-right\" component=\"chat/controls\">\r\n\t\t\t\t<li class=\"dropdown-header\">[[modules:chat.options]]</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" data-action=\"members\"><i class=\"fa fa-fw fa-cog\"></i> [[modules:chat.manage-room]]</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" data-action=\"rename\"><i class=\"fa fa-fw fa-edit\"></i> [[modules:chat.rename-room]]</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" data-action=\"leave\"><i class=\"fa fa-fw fa-sign-out\"></i> [[modules:chat.leave]]</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t" + 
          (guard(context && context['users'] && context['users']['length']) ?
            "\r\n\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t<li class=\"dropdown-header\">[[modules:chat.in-room]]</li>\r\n\t\t\t\t" + 
              compiled.blocks['users'](helpers, context, guard, iter, helper) + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<span class=\"members\">\r\n\t\t\t[[modules:chat.chatting_with]]:\r\n\t\t\t" + 
          iter(guard(context && context['users']), function each(key0, index, length, value) {
            var key = key0;
            return "\r\n\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/uid/" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
              "\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
              "</a>" + 
              (index === length - 1 ?
                "" :
                ",") + 
              "\r\n\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t</span>\r\n\t</div>\r\n\t<div component=\"chat/messages/scroll-up-alert\" class=\"scroll-up-alert alert alert-info\" role=\"button\">[[modules:chat.scroll-up-alert]]</div>\r\n\t<ul class=\"chat-content\">\r\n\t\t" + 
          compiled.blocks['messages'](helpers, context, guard, iter, helper) + 
          "\r\n\t</ul>\r\n\t<div component=\"chat/composer\">\r\n\t\t<textarea component=\"chat/input\" placeholder=\"[[modules:chat.placeholder]]\" class=\"form-control chat-input mousetrap\" rows=\"2\"></textarea>\r\n\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"send\"><i class=\"fa fa-fw fa-2x fa-paper-plane\"></i></button>\r\n\t\t<span component=\"chat/message/remaining\">" + 
          __escape(guard(context && context['maximumChatMessageLength'])) + 
          "</span>\r\n\t</div>\r\n</div>\r\n" :
        "\r\n<div class=\"alert alert-info\">\r\n\t[[modules:chat.no-messages]]\r\n</div>\r\n");
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/uid/" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['users'] && context['users'][key0]), "sm", guard(context && context['true'])])) + 
          " " + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          "</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'messages': function messages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['messages']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          (guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['system']) ?
            "\r\n\t<li component=\"chat/system-message\" class=\"system-message clear\" data-index=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['index'])) + 
              "\" data-mid=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['messageId'])) + 
              "\" data-uid=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['fromuid'])) + 
              "\" data-self=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['self'])) + 
              "\" data-break=\"0\" data-timestamp=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['timestamp'])) + 
              "\">\r\n\t[[modules:chat.system." + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['content'])) + 
              ", " + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['fromUser'] && context['messages'][key0]['fromUser']['username'])) + 
              "]]\r\n</li>\r\n\t" :
            "\r\n\t<li component=\"chat/message\" class=\"chat-message clear" + 
              (guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['deleted']) ?
                " deleted" :
                "") + 
              "\" data-index=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['index'])) + 
              "\" data-mid=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['messageId'])) + 
              "\" data-uid=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['fromuid'])) + 
              "\" data-self=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['self'])) + 
              "\" data-break=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['newSet'])) + 
              "\" data-timestamp=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['timestamp'])) + 
              "\">\r\n\t<div class=\"message-header\">\r\n\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['fromUser'] && context['messages'][key0]['fromUser']['userslug'])) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['fromUser']), "md", guard(context && context['true']), "not-responsive"])) + 
              "</a>\r\n\t\t<strong><span class=\"chat-user\"><a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['fromUser'] && context['messages'][key0]['fromUser']['userslug'])) + 
              "\">" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['fromUser'] && context['messages'][key0]['fromUser']['displayname'])) + 
              "</a></span></strong>\r\n\t\t" + 
              (guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['fromUser'] && context['messages'][key0]['fromUser']['banned']) ?
                "\r\n\t\t<span class=\"label label-danger\">[[user:banned]]</span>\r\n\t\t" :
                "") + 
              "\r\n\t\t" + 
              (guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['fromUser'] && context['messages'][key0]['fromUser']['deleted']) ?
                "\r\n\t\t<span class=\"label label-danger\">[[user:deleted]]</span>\r\n\t\t" :
                "") + 
              "\r\n\t\t<span class=\"chat-timestamp timeago\" title=\"" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['timestampISO'])) + 
              "\"></span>\r\n\t\t" + 
              (guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['edited']) ?
                "\r\n\t\t<div class=\"text-muted pull-right\" title=\"[[global:edited]] " + 
                  __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['editedISO'])) + 
                  "\"><i class=\"fa fa-edit\"></i></span></div>\r\n\t\t" :
                "") + 
              "\r\n\t</div>\r\n\t<div class=\"message-body-wrapper\">\r\n\t\t<div component=\"chat/message/body\" class=\"message-body\">\r\n\t\t\t" + 
              __escape(guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['content'])) + 
              "\r\n\t\t</div>\r\n\r\n\t\t" + 
              (guard(context && context['config'] && context['config']['disableChatMessageEditing']) ?
                "" :
                "\r\n\t\t" + 
                  (guard(context && context['messages'] && context['messages'][key0] && context['messages'][key0]['self']) ?
                    "\r\n\t\t<div class=\"btn-group controls\">\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"edit\"><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"restore\"><i class=\"fa fa-repeat\"></i></button>\r\n\t\t\t" + 
                      (guard(context && context['isAdminOrGlobalMod']) ?
                        "\r\n\t\t\t<button class=\"btn btn-xs btn-link chat-ip\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle chat-ip-button\"></i></button>\r\n\t\t\t" :
                        "") + 
                      "\r\n\t\t</div>\r\n\t\t" :
                    "") + 
                  "\r\n\t\t") + 
              "\r\n\t</div>\r\n</li>\r\n\t") + 
          "\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
