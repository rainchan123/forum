
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
    return "<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">GitHub SSO</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<div class=\"alert alert-info\">\n\t\t\t<p>\n\t\t\t\tRegister a new <strong>GitHub Application</strong> via \n\t\t\t\t<a href=\"https://github.com/settings/developers\">Developer Applications</a> and then paste\n\t\t\t\tyour application details here.\n\t\t\t</p>\n\t\t</div>\n\t\t<form class=\"sso-github-settings\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"id\">Client ID</label>\n\t\t\t\t<input type=\"text\" name=\"id\" title=\"Client ID\" class=\"form-control\" placeholder=\"Client ID\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"secret\">Client Secret</label>\n\t\t\t\t<input type=\"text\" name=\"secret\" title=\"Client Secret\" class=\"form-control\" placeholder=\"Client Secret\" />\n\t\t\t</div>\n\t\t\t<div class=\"form-group alert alert-warning\">\n\t\t\t\t<label for=\"callback\">Your NodeBB&apos;s \"Authorization callback URL\"</label>\n\t\t\t\t<input type=\"text\" id=\"callback\" title=\"Authorization callback URL\" class=\"form-control\" value=\"" + 
      __escape(guard(context && context['callbackURL'])) + 
      "\" readonly />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\tEnsure that this value is set in your GitHub application&apos;s settings\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label for=\"disableRegistration\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"disableRegistration\" name=\"disableRegistration\" />\n\t\t\t\t\t<span class=\"mdl-switch__label\">Disable user registration via SSO</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label for=\"needToVerifyEmail\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"needToVerifyEmail\" name=\"needToVerifyEmail\" />\n\t\t\t\t\t<span class=\"mdl-switch__label\">Need user to verify email</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<p class=\"help-block\">\n\t\t\t\tRestricting registration means that only registered users can associate their account with this SSO strategy.\n\t\t\t\tThis restriction is useful if you have uesrs bypassing registration controls by using social media accounts, or\n\t\t\t\tif you wish to use the NodeBB registration queue.\n\t\t\t</p>\n\t\t</form>\n\t</div>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
