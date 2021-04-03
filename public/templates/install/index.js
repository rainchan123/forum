
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
    return "<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t<title>NodeBB Web Installer</title>\n\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"bootstrap.min.css\">\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"installer.css\">\n\n\t<script type=\"text/javascript\" async defer src=\"installer.min.js\"></script>\n</head>\n\n<body>\n\t<nav class=\"navbar navbar-default\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<a class=\"navbar-brand\" href=\"#\">NodeBB</a>\n\t\t\t</div>\n\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li class=\"active\"><a href=\"/\">Installer</a></li>\n\t\t\t\t<li><a href=\"https://docs.nodebb.org\" target=\"_blank\">Get Help</a></li>\n\t\t\t\t<li><a href=\"https://community.nodebb.org\" target=\"_blank\">Community</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n\t" + 
      (guard(context && context['installing']) ?
        "" :
        "\n\t<div class=\"container " + 
          (guard(context && context['success']) ?
            "hide" :
            "") + 
          "\">\n\t\t<p>\n\t\t\t<h1>Welcome to the NodeBB Installer</h1>\n\t\t\tYou are just a few steps away from launching your own NodeBB forum!\n\t\t</p>\n\t\t<form id=\"install\" action=\"/\" method=\"post\">\n\t\t\t" + 
          (guard(context && context['skipGeneralSetup']) ?
            "" :
            "\n\t\t\t<div class=\"general\">\n\t\t\t\t<p>\n\t\t\t\t\t<h1><small>General Instance Setup</small></h1>\n\t\t\t\t\t<hr />\n\t\t\t\t</p>\n\n\t\t\t\t<div class=\"row input-row\">\n\t\t\t\t\t<div class=\"col-sm-7 col-xs-12 input-field\">\n\t\t\t\t\t\t<label for=\"url\">Web Address (URL)</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"url\" value=\"" + 
              (guard(context && context['url']) ?
                __escape(guard(context && context['url'])) :
                "") + 
              "\" placeholder=\"http://localhost:4567\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-5 help-text\" data-help=\"This is the address that resolves to your NodeBB forum. If no port is specified, <code>4567</code> will be used.\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t") + 
          "\n\t\t\t<div class=\"admin\">\n\t\t\t\t<p>\n\t\t\t\t\t<h1><small>Create an Administrator account</small></h1>\n\t\t\t\t\t<hr />\n\t\t\t\t</p>\n\n\t\t\t\t<div class=\"row input-row\">\n\t\t\t\t\t<div class=\"col-sm-7 col-xs-12 input-field\">\n\t\t\t\t\t\t<label for=\"admin:username\">Username</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"admin:username\" value=\"" + 
          (guard(context && context['admin:username']) ?
            __escape(guard(context && context['admin:username'])) :
            "") + 
          "\" placeholder=\"Username\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-5 help-text\" data-help=\"Enter an <strong>alphanumeric username</strong>. Spaces between words are allowed. You can always change your username later on your profile page.\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row input-row\">\n\t\t\t\t\t<div class=\"col-sm-7 col-xs-12 input-field\">\n\t\t\t\t\t\t<label for=\"admin:email\">Email Address</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"admin:email\" value=\"" + 
          (guard(context && context['admin:email']) ?
            __escape(guard(context && context['admin:email'])) :
            "") + 
          "\" placeholder=\"Email Address\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-5 help-text\" data-help=\"Please enter your email address.\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row input-row\">\n\t\t\t\t\t<div class=\"col-sm-7 col-xs-12 input-field\">\n\t\t\t\t\t\t<label for=\"admin:password\">Password</label>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"admin:password\" value=\"" + 
          (guard(context && context['admin:password']) ?
            __escape(guard(context && context['admin:password'])) :
            "") + 
          "\" placeholder=\"Password\" data-minimum-strength=\"" + 
          __escape(guard(context && context['minimumPasswordStrength'])) + 
          "\" data-minimum-length=\"" + 
          __escape(guard(context && context['minimumPasswordLength'])) + 
          "\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-5 help-text\" data-help=\"Use a combination of numbers, symbols, and different cases. You can change the strictness of password creation in the Admin Control Panel. Minimum " + 
          __escape(guard(context && context['minimumPasswordLength'])) + 
          " characters.\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row input-row\">\n\t\t\t\t\t<div class=\"col-sm-7 col-xs-12 input-field\">\n\t\t\t\t\t\t<label for=\"admin:passwordConfirm\">Confirm Password</label>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"admin:passwordConfirm\" value=\"" + 
          (guard(context && context['admin:passwordConfirm']) ?
            __escape(guard(context && context['admin:passwordConfirm'])) :
            "") + 
          "\" placeholder=\"Confirm Password\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-5 help-text\" data-help=\"Please confirm your password.\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t" + 
          (guard(context && context['error']) ?
            "\n\t\t\t<a id=\"database-error\"></a>\n\t\t\t" :
            "") + 
          "\n\n\t\t\t" + 
          (guard(context && context['skipDatabaseSetup']) ?
            "" :
            "\n\t\t\t<div class=\"database\">\n\t\t\t\t<p>\n\t\t\t\t\t<h1><small>Configure your database</small></h1>\n\t\t\t\t\t<hr />\n\t\t\t\t</p>\n\n\t\t\t\t<div class=\"row input-row\">\n\t\t\t\t\t<div class=\"col-sm-7 col-xs-12 input-field\">\n\t\t\t\t\t\t<label for=\"database\">Database Type</label>\n\t\t\t\t\t\t<select class=\"form-control\" name=\"database\">\n\t\t\t\t\t\t\t<option value=\"redis\">Redis</option>\n\t\t\t\t\t\t\t<option value=\"mongo\">MongoDB</option>\n\t\t\t\t\t\t\t<option value=\"postgres\">PostgreSQL</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-5 help-text\" data-help=\"Leave the fields blank to use the default settings.\">" + 
              (guard(context && context['error']) ?
                "There was an error connecting to your database. Please try again." :
                "") + 
              "</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id=\"database-config\"></div>\n\t\t\t</div>\n\t\t\t") + 
          "\n\n\t\t\t<button id=\"submit\" type=\"submit\" class=\"btn btn-lg btn-success\">Install NodeBB <i class=\"working hide\"></i></button>\n\t\t</form>\n\t</div>\n\t") + 
      "\n\n\t" + 
      (guard(context && context['installing']) ?
        "\n\t<div id=\"installing\" class=\"container\">\n\t\t<p>\n\t\t\t<h1>Hang tight! Your NodeBB is being installed.</h1>\n\t\t</p>\n\t</div>\n\t" :
        "") + 
      "\n\n\t<div class=\"container " + 
      (guard(context && context['success']) ?
        "" :
        "hide") + 
      "\">\n\t\t<p>\n\t\t\t<h1>Congratulations! Your NodeBB has been set-up.</h1>\n\n\t\t\t<button id=\"launch\" data-url=\"" + 
      __escape(guard(context && context['launchUrl'])) + 
      "\" class=\"btn btn-lg btn-success\">Launch NodeBB <i class=\"working hide\"></i></button>\n\t\t</p>\n\t</div>\n\n\t<div class=\"hide\">\n\t\t" + 
      compiled.blocks['databases'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n</body>\n</html>";
  }

  compiled.blocks = {
    'databases': function databases(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['databases']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<div data-database=\"" + 
          __escape(guard(context && context['databases'] && context['databases'][key0] && context['databases'][key0]['name'])) + 
          "\">\n\t\t\t " + 
          iter(guard(context && context['databases'] && context['databases'][key0] && context['databases'][key0]['questions']), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t<div class=\"row input-row\">\n\t\t\t\t\t<div class=\"col-sm-7 col-xs-12 input-field\">\n\t\t\t\t\t\t<label for=\"" + 
              __escape(guard(context && context['databases'] && context['databases'][key0] && context['databases'][key0]['questions'] && context['databases'][key0]['questions'][key1] && context['databases'][key0]['questions'][key1]['name'])) + 
              "\">" + 
              __escape(guard(context && context['databases'] && context['databases'][key0] && context['databases'][key0]['questions'] && context['databases'][key0]['questions'][key1] && context['databases'][key0]['questions'][key1]['description'])) + 
              "</label>\n\t\t\t\t\t\t<input type=\"" + 
              (guard(context && context['hidden']) ?
                "password" :
                "text") + 
              "\" class=\"form-control\" name=\"" + 
              __escape(guard(context && context['databases'] && context['databases'][key0] && context['databases'][key0]['questions'] && context['databases'][key0]['questions'][key1] && context['databases'][key0]['questions'][key1]['name'])) + 
              "\" placeholder=\"" + 
              __escape(guard(context && context['databases'] && context['databases'][key0] && context['databases'][key0]['questions'] && context['databases'][key0]['questions'][key1] && context['databases'][key0]['questions'][key1]['default'])) + 
              "\" value=\"" + 
              __escape(guard(context && context['databases'] && context['databases'][key0] && context['databases'][key0]['questions'] && context['databases'][key0]['questions'][key1] && context['databases'][key0]['questions'][key1]['default'])) + 
              "\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t</div>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
