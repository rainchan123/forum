
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
    return (guard(context && context['rooms'] && context['rooms']['length']) ?
        "\r\n" + 
          compiled.blocks['rooms'](helpers, context, guard, iter, helper) + 
          "\r\n" :
        "\r\n<li class=\"no_active\"><a href=\"#\">[[modules:chat.no_active]]</a></li>\r\n");
  }

  compiled.blocks = {
    'rooms': function rooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['rooms']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li class=\"" + 
          (guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['unread']) ?
            "unread" :
            "") + 
          "\" data-roomid=\"" + 
          __escape(guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['roomId'])) + 
          "\">\r\n\t<strong class=\"room-name\">\r\n\t\t" + 
          (guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['lastUser'] && context['rooms'][key0]['lastUser']['uid']) ?
            "\r\n\t\t" + 
              (guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['roomName']) ?
                __escape(guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['roomName'])) :
                __escape(guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['usernames']))) + 
              "\r\n\t\t" :
            "\r\n\t\t<span>[[modules:chat.no-users-in-room]]</span>\r\n\t\t") + 
          "\r\n\t</strong>\r\n\t<div class=\"avatar-placeholder\"></div>\r\n\t" + 
          iter(guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['users']), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t" + 
              (index === 0 ?
                "\r\n\t<div class=\"main-avatar\">\r\n\t\t<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['users'] && context['rooms'][key0]['users'][key1] && context['rooms'][key0]['users'][key1]['userslug'])) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['users'] && context['rooms'][key0]['users'][key1]), "sm", guard(context && context['true'])])) + 
                  "</a>\r\n\t</div>\r\n\t" :
                "") + 
              "\r\n\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\r\n\t<ul class=\"members\">\r\n\t\t" + 
          iter(guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['users']), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t<li>\r\n\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['users'] && context['rooms'][key0]['users'][key1] && context['rooms'][key0]['users'][key1]['userslug'])) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['users'] && context['rooms'][key0]['users'][key1]), "sm", guard(context && context['true'])])) + 
              "</a>\r\n\t\t</li>\r\n\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t</ul>\r\n\r\n\t<span class=\"teaser-content\">" + 
          __escape(guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['teaser'] && context['rooms'][key0]['teaser']['content'])) + 
          "</span>\r\n\t<span class=\"teaser-timestamp pull-right\">" + 
          __escape(guard(context && context['rooms'] && context['rooms'][key0] && context['rooms'][key0]['teaser'] && context['rooms'][key0]['teaser']['timeago'])) + 
          "</span>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
