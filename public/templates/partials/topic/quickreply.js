
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
    return (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
        "\r\n<div class=\"clearfix quick-reply\">\r\n\t<div class=\"icon pull-left hidden-xs\">\r\n\t\t<a href=\"" + 
          (guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['userslug']) ?
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['userslug'])) :
            "#") + 
          "\">\r\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['loggedInUser']), "46", guard(context && context['true']), "", "user/picture"])) + 
          "\r\n\t\t\t" + 
          (guard(context && context['loggedInUser'] && context['loggedInUser']['status']) ?
            "\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
              __escape(guard(context && context['loggedInUser'] && context['loggedInUser']['status'])) + 
              "\" title=\"[[global:" + 
              __escape(guard(context && context['loggedInUser'] && context['loggedInUser']['status'])) + 
              "]]\"></i>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</a>\r\n\t</div>\r\n\t<form method=\"post\" action=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/compose\">\r\n\t\t<input type=\"hidden\" name=\"tid\" value=\"" + 
          __escape(guard(context && context['tid'])) + 
          "\" />\r\n\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
          __escape(guard(context && context['config'] && context['config']['csrf_token'])) + 
          "\" />\r\n\t\t<div class=\"quickreply-message\">\r\n\t\t\t<textarea name=\"content\" component=\"topic/quickreply/text\" class=\"form-control\" rows=\"5\"></textarea>\r\n\t\t</div>\r\n\t\t<button type=\"submit\" component=\"topic/quickreply/button\" class=\"btn btn-primary pull-right\">[[persona:post-quick-reply]]</button>\r\n\t</form>\r\n</div>\r\n" :
        "") + 
      "\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
