
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
    return "<li component=\"chat/recent/room\" data-roomid=\"" + 
      __escape(guard(context && context['rooms'] && context['rooms']['roomId'])) + 
      "\" class=\"" + 
      (guard(context && context['rooms'] && context['rooms']['unread']) ?
        "unread" :
        "") + 
      "\">\r\n\t<strong class=\"room-name\">\r\n\t\t" + 
      (guard(context && context['rooms'] && context['rooms']['lastUser'] && context['rooms']['lastUser']['uid']) ?
        "\r\n\t\t<span component=\"chat/title\">" + 
          (guard(context && context['rooms'] && context['rooms']['roomName']) ?
            __escape(guard(context && context['rooms'] && context['rooms']['roomName'])) :
            __escape(guard(context && context['rooms'] && context['rooms']['usernames']))) + 
          "</span>\r\n\t\t" :
        "\r\n\t\t<span>[[modules:chat.no-users-in-room]]</span>\r\n\t\t") + 
      "\r\n\t</strong>\r\n\t<div class=\"avatar-placeholder\"></div>\r\n\t" + 
      compiled.blocks['rooms.users'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t<ul class=\"members\">\r\n\t\t" + 
      iter(guard(context && context['rooms'] && context['rooms']['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li>\r\n\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['rooms'] && context['rooms']['users'] && context['rooms']['users'][key0] && context['rooms']['users'][key0]['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['rooms'] && context['rooms']['users'] && context['rooms']['users'][key0]), "sm", guard(context && context['true'])])) + 
          "</a>\r\n\t\t</li>\r\n\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t</ul>\r\n</li>";
  }

  compiled.blocks = {
    'rooms.users': function roomsusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['rooms'] && context['rooms']['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          (index === 0 ?
            "\r\n\t<div class=\"main-avatar\">\r\n\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['rooms'] && context['rooms']['users'] && context['rooms']['users'][key0] && context['rooms']['users'][key0]['userslug'])) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['rooms'] && context['rooms']['users'] && context['rooms']['users'][key0]), "sm", guard(context && context['true'])])) + 
              "</a>\r\n\t</div>\r\n\t" :
            "") + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
