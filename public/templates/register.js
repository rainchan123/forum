
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
    return (guard(context && context['breadcrumbs'] && context['breadcrumbs']['length']) ?
        "\r\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n\r\n<div class=\"row register\">\r\n\t<div class=\"" + 
      __escape(guard(context && context['register_window:spansize'])) + 
      "\">\r\n\t\t<div class=\"register-block\">\r\n\t\t\t<div class=\"alert alert-danger" + 
      (guard(context && context['error']) ?
        "" :
        " hidden") + 
      "\" id=\"register-error-notify\" >\r\n\t\t\t\t<strong>[[error:registration-error]]</strong>\r\n\t\t\t\t<p>" + 
      __escape(guard(context && context['error'])) + 
      "</p>\r\n\t\t\t</div>\r\n\t\t\t<form component=\"register/local\" class=\"form-horizontal\" role=\"form\" action=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/register\" method=\"post\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"email\" class=\"col-lg-4 control-label\">[[register:email_address]]</label>\r\n\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"email\" placeholder=\"[[register:email_address_placeholder]]\" name=\"email\" id=\"email\" autocorrect=\"off\" autocapitalize=\"off\" />\r\n\t\t\t\t\t\t<span class=\"register-feedback\" id=\"email-notify\"></span>\r\n\t\t\t\t\t\t<span class=\"help-block\">[[register:help.email]]</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"username\" class=\"col-lg-4 control-label\">[[register:username]]</label>\r\n\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"[[register:username_placeholder]]\" name=\"username\" id=\"username\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"off\" />\r\n\t\t\t\t\t\t<span class=\"register-feedback\" id=\"username-notify\"></span>\r\n\t\t\t\t\t\t<span class=\"help-block\">[[register:help.username_restrictions, " + 
      __escape(guard(context && context['minimumUsernameLength'])) + 
      ", " + 
      __escape(guard(context && context['maximumUsernameLength'])) + 
      "]]</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"password\" class=\"col-lg-4 control-label\">[[register:password]]</label>\r\n\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[register:password_placeholder]]\" name=\"password\" id=\"password\" />\r\n\t\t\t\t\t\t<span class=\"register-feedback\" id=\"password-notify\"></span>\r\n\t\t\t\t\t\t<span class=\"help-block\">[[register:help.minimum_password_length, " + 
      __escape(guard(context && context['minimumPasswordLength'])) + 
      "]]</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"password-confirm\" class=\"col-lg-4 control-label\">[[register:confirm_password]]</label>\r\n\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[register:confirm_password_placeholder]]\" name=\"password-confirm\" id=\"password-confirm\" />\r\n\t\t\t\t\t\t<span class=\"register-feedback\" id=\"password-confirm-notify\"></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t" + 
      compiled.blocks['regFormEntry'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-lg-offset-4 col-lg-8\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg btn-block\" id=\"register\" type=\"submit\">[[register:register_now_button]]</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<input id=\"referrer\" type=\"hidden\" name=\"referrer\" value=\"\" />\r\n\t\t\t\t<input id=\"token\" type=\"hidden\" name=\"token\" value=\"\" />\r\n\t\t\t\t<input id=\"noscript\" type=\"hidden\" name=\"noscript\" value=\"true\" />\r\n\t\t\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
      __escape(guard(context && context['config'] && context['config']['csrf_token'])) + 
      "\" />\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t" + 
      (guard(context && context['alternate_logins']) ?
        "\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"alt-register-block\">\r\n\t\t\t<h4>[[register:alternative_registration]]</h4>\r\n\t\t\t<ul class=\"alt-logins\">\r\n\t\t\t\t" + 
          compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n</div>\r\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['breadcrumbs']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\r\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "<a href=\"" + 
              __escape(guard(context && context['breadcrumbs'] && context['breadcrumbs'][key0] && context['breadcrumbs'][key0]['url'])) + 
              "\" itemprop=\"item\">") + 
          "\r\n\t\t\t<span itemprop=\"name\">\r\n\t\t\t\t" + 
          __escape(guard(context && context['breadcrumbs'] && context['breadcrumbs'][key0] && context['breadcrumbs'][key0]['text'])) + 
          "\r\n\t\t\t\t" + 
          (index === length - 1 ?
            "\r\n\t\t\t\t" + 
              (guard(context && context['feeds:disableRSS']) ?
                "" :
                "\r\n\t\t\t\t" + 
                  (guard(context && context['rssFeedUrl']) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard(context && context['rssFeedUrl'])) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</span>\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "</a>") + 
          "\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'regFormEntry': function regFormEntry(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['regFormEntry']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"register-" + 
          __escape(guard(context && context['regFormEntry'] && context['regFormEntry'][key0] && context['regFormEntry'][key0]['styleName'])) + 
          "\" class=\"col-lg-4 control-label\">" + 
          __escape(guard(context && context['regFormEntry'] && context['regFormEntry'][key0] && context['regFormEntry'][key0]['label'])) + 
          "</label>\r\n\t\t\t\t\t<div id=\"register-" + 
          __escape(guard(context && context['regFormEntry'] && context['regFormEntry'][key0] && context['regFormEntry'][key0]['styleName'])) + 
          "\" class=\"col-lg-8\">\r\n\t\t\t\t\t\t" + 
          guard(context && context['regFormEntry'] && context['regFormEntry'][key0] && context['regFormEntry'][key0]['html']) + 
          "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['authentication']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li class=\"" + 
          __escape(guard(context && context['authentication'] && context['authentication'][key0] && context['authentication'][key0]['name'])) + 
          "\"><a rel=\"nofollow noopener noreferrer\" target=\"_top\" href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          __escape(guard(context && context['authentication'] && context['authentication'][key0] && context['authentication'][key0]['url'])) + 
          "\"><i class=\"fa " + 
          __escape(guard(context && context['authentication'] && context['authentication'][key0] && context['authentication'][key0]['icon'])) + 
          " fa-3x\"></i></i></a></li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
