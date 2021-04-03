
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
    return compiled.blocks['messages'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
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
