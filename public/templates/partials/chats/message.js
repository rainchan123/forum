
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
    return "<li component=\"chat/message\" class=\"chat-message clear" + 
      (guard(context && context['deleted']) ?
        " deleted" :
        "") + 
      "\" data-index=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['index'])) + 
      "\" data-mid=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['messageId'])) + 
      "\" data-uid=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['fromuid'])) + 
      "\" data-self=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['self'])) + 
      "\" data-break=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['newSet'])) + 
      "\" data-timestamp=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['timestamp'])) + 
      "\">\r\n\t<div class=\"message-header\">\r\n\t\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['messages'] && context['messages']['fromUser'] && context['messages']['fromUser']['userslug'])) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['messages'] && context['messages']['fromUser']), "md", guard(context && context['true']), "not-responsive"])) + 
      "</a>\r\n\t\t<strong><span class=\"chat-user\"><a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['messages'] && context['messages']['fromUser'] && context['messages']['fromUser']['userslug'])) + 
      "\">" + 
      __escape(guard(context && context['messages'] && context['messages']['fromUser'] && context['messages']['fromUser']['displayname'])) + 
      "</a></span></strong>\r\n\t\t" + 
      (guard(context && context['fromUser'] && context['fromUser']['banned']) ?
        "\r\n\t\t<span class=\"label label-danger\">[[user:banned]]</span>\r\n\t\t" :
        "") + 
      "\r\n\t\t" + 
      (guard(context && context['fromUser'] && context['fromUser']['deleted']) ?
        "\r\n\t\t<span class=\"label label-danger\">[[user:deleted]]</span>\r\n\t\t" :
        "") + 
      "\r\n\t\t<span class=\"chat-timestamp timeago\" title=\"" + 
      __escape(guard(context && context['messages'] && context['messages']['timestampISO'])) + 
      "\"></span>\r\n\t\t" + 
      (guard(context && context['messages'] && context['messages']['edited']) ?
        "\r\n\t\t<div class=\"text-muted pull-right\" title=\"[[global:edited]] " + 
          __escape(guard(context && context['messages'] && context['messages']['editedISO'])) + 
          "\"><i class=\"fa fa-edit\"></i></span></div>\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n\t<div class=\"message-body-wrapper\">\r\n\t\t<div component=\"chat/message/body\" class=\"message-body\">\r\n\t\t\t" + 
      __escape(guard(context && context['messages'] && context['messages']['content'])) + 
      "\r\n\t\t</div>\r\n\r\n\t\t" + 
      (guard(context && context['config'] && context['config']['disableChatMessageEditing']) ?
        "" :
        "\r\n\t\t" + 
          (guard(context && context['messages'] && context['messages']['self']) ?
            "\r\n\t\t<div class=\"btn-group controls\">\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"edit\"><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"restore\"><i class=\"fa fa-repeat\"></i></button>\r\n\t\t\t" + 
              (guard(context && context['isAdminOrGlobalMod']) ?
                "\r\n\t\t\t<button class=\"btn btn-xs btn-link chat-ip\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle chat-ip-button\"></i></button>\r\n\t\t\t" :
                "") + 
              "\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\t\t") + 
      "\r\n\t</div>\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
