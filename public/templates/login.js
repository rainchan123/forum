
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
      "\r\n\r\n\r\n<div class=\"row\">\r\n\t" + 
      (guard(context && context['allowLocalLogin']) ?
        "\r\n\t<div class=\"" + 
          (guard(context && context['alternate_logins']) ?
            "col-md-6" :
            "col-md-12") + 
          "\">\r\n\t\t<div class=\"login-block\">\r\n\t\t\t<div class=\"alert alert-danger\" id=\"login-error-notify\" " + 
          (guard(context && context['error']) ?
            "style=\"display:block\"" :
            "style=\"display: none;\"") + 
          ">\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n\t\t\t\t<strong>[[login:failed_login_attempt]]</strong>\r\n\t\t\t\t<p>" + 
          __escape(guard(context && context['error'])) + 
          "</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<form class=\"form-horizontal\" role=\"form\" method=\"post\" id=\"login-form\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"username\" class=\"col-lg-2 control-label\">" + 
          __escape(guard(context && context['allowLoginWith'])) + 
          "</label>\r\n\t\t\t\t\t<div class=\"col-lg-10\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"" + 
          __escape(guard(context && context['allowLoginWith'])) + 
          "\" name=\"username\" id=\"username\" autocorrect=\"off\" autocapitalize=\"off\" value=\"" + 
          __escape(guard(context && context['username'])) + 
          "\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"password\" class=\"col-lg-2 control-label\">[[user:password]]</label>\r\n\t\t\t\t\t<div class=\"col-lg-10\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[user:password]]\" name=\"password\" id=\"password\" " + 
          (guard(context && context['username']) ?
            "autocomplete=\"off\"" :
            "") + 
          "/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-lg-offset-2 col-lg-10\">\r\n\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"remember\" id=\"remember\" checked /> [[login:remember_me]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t" + 
          compiled.blocks['loginFormEntry'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
          __escape(guard(context && context['config'] && context['config']['csrf_token'])) + 
          "\" />\r\n\t\t\t\t<input type=\"hidden\" name=\"noscript\" id=\"noscript\" value=\"true\" />\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-lg-offset-2 col-lg-10\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg btn-block\" id=\"login\" type=\"submit\">[[global:login]]</button>\r\n\t\t\t\t\t\t" + 
          (guard(context && context['allowRegistration']) ?
            "\r\n\t\t\t\t\t\t<span>[[login:dont_have_account]] <a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/register\">[[register:register]]</a></span>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t" + 
          (guard(context && context['allowPasswordReset']) ?
            "\r\n\t\t\t\t\t\t&nbsp; <a id=\"reset-link\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/reset\">[[login:forgot_password]]</a>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\r\n\t" + 
      (guard(context && context['alternate_logins']) ?
        "\r\n\t<div class=\"" + 
          (guard(context && context['allowLocalLogin']) ?
            "col-md-6" :
            "col-md-12") + 
          "\">\r\n\t\t<div class=\"alt-login-block\">\r\n\t\t\t<h4>[[login:alternative_logins]]</h4>\r\n\t\t\t<ul class=\"alt-logins\">\r\n\t\t\t\t" + 
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
    'loginFormEntry': function loginFormEntry(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['loginFormEntry']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<div class=\"form-group loginFormEntry\">\r\n\t\t\t\t\t<label for=\"login-" + 
          __escape(guard(context && context['loginFormEntry'] && context['loginFormEntry'][key0] && context['loginFormEntry'][key0]['styleName'])) + 
          "\" class=\"col-lg-4 control-label\">" + 
          __escape(guard(context && context['loginFormEntry'] && context['loginFormEntry'][key0] && context['loginFormEntry'][key0]['label'])) + 
          "</label>\r\n\t\t\t\t\t<div id=\"login-" + 
          __escape(guard(context && context['loginFormEntry'] && context['loginFormEntry'][key0] && context['loginFormEntry'][key0]['styleName'])) + 
          "\" class=\"col-lg-8\">" + 
          guard(context && context['loginFormEntry'] && context['loginFormEntry'][key0] && context['loginFormEntry'][key0]['html']) + 
          "</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t";
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
          " fa-3x\"></i></a></li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
