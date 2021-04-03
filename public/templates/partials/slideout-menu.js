
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
    return "<div class=\"menu-profile\">\r\n\t" + 
      (guard(context && context['user'] && context['user']['uid']) ?
        "\r\n\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['user']), "lg", guard(context && context['true']), "user-icon"])) + 
          "\r\n\t<i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
          __escape(guard(context && context['user'] && context['user']['status'])) + 
          "\"></i>\r\n\t" :
        "") + 
      "\r\n</div>\r\n\r\n<section class=\"menu-section\" data-section=\"navigation\">\r\n\t<h3 class=\"menu-section-title\">[[global:header.navigation]]</h3>\r\n\t<ul class=\"menu-section-list\"></ul>\r\n</section>\r\n\r\n" + 
      (guard(context && context['config'] && context['config']['loggedIn']) ?
        "\r\n<section class=\"menu-section\" data-section=\"profile\">\r\n\t<h3 class=\"menu-section-title\">[[global:header.profile]]</h3>\r\n\t<ul class=\"menu-section-list\" component=\"header/usercontrol\"></ul>\r\n</section>\r\n\r\n<section class=\"menu-section\" data-section=\"notifications\">\r\n\t<h3 class=\"menu-section-title\">\r\n\t\t[[global:header.notifications]]\r\n\t\t<span class=\"counter unread-count\" component=\"notifications/icon\" data-content=\"" + 
          __escape(guard(context && context['unreadCount'] && context['unreadCount']['notification'])) + 
          "\"></span>\r\n\t</h3>\r\n\t<ul class=\"menu-section-list notification-list-mobile\" component=\"notifications/list\"></ul>\r\n\t<p class=\"menu-section-list\"><a href=\"" + 
          __escape(guard(context && context['relative_path'])) + 
          "/notifications\">[[notifications:see_all]]</a></p>\r\n</section>\r\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
