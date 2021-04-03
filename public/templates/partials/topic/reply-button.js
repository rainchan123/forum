
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
    return "<div component=\"topic/reply/container\" class=\"btn-group action-bar bottom-sheet " + 
      (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
        "" :
        "hidden") + 
      "\">\r\n\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/compose?tid=" + 
      __escape(guard(context && context['tid'])) + 
      "&title=" + 
      __escape(guard(context && context['title'])) + 
      "\" class=\"btn btn-sm btn-primary\" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-reply visible-xs-inline\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[topic:reply]]</span></a>\r\n\t<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t<span class=\"caret\"></span>\r\n\t</button>\r\n\t<ul class=\"dropdown-menu pull-right\" role=\"menu\">\r\n\t\t<li><a href=\"#\" component=\"topic/reply-as-topic\">[[topic:reply-as-topic]]</a></li>\r\n\t</ul>\r\n</div>\r\n\r\n" + 
      (guard(context && context['loggedIn']) ?
        "\r\n" + 
          (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
            "" :
            "\r\n" + 
              (guard(context && context['locked']) ?
                "\r\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\r\n" :
                "") + 
              "\r\n") + 
          "\r\n\r\n" + 
          (guard(context && context['locked']) ?
            "" :
            "\r\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary hidden\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\r\n") + 
          "\r\n\r\n" :
        "\r\n\r\n" + 
          (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
            "" :
            "\r\n<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/login\" class=\"btn btn-sm btn-primary\">[[topic:guest-login-reply]]</a>\r\n") + 
          "\r\n");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
