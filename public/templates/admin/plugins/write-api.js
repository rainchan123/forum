
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
    return "<div class=\"row\">\n\t<div class=\"col-lg-5\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Write API Settings</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<form role=\"form\" class=\"writeapi-settings\">\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"requireHttps\"> Require API usage via HTTPS only\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr />\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"jwt:enabled\"> Enable authentication via <a href=\"http://jwt.io\">JSON Web Tokens</a>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"jwt:secret\">JSON Web Token Secret</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"jwt:secret\" id=\"jwt:secret\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"jwt:payloadKey\">JSON Web Token Payload Key</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"jwt:payloadKey\" id=\"jwt:payloadKey\" placeholder=\"Default: token\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\tJSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.\n\t\t\t\t\t\tTo make requests with a JSON Web Token instead of a user/master token, sign the entire request payload with the same\n\t\t\t\t\t\tsecret as defined in the plugin, and either send it in the <code>POST</code> body, or as a query string parameter. In both cases,\n\t\t\t\t\t\tthe key `token` is used.\n\t\t\t\t\t</p>\n\t\t\t\t</form>\n\t\t\t\t<button type=\"button\" class=\"pull-right btn btn-primary\" id=\"save\">Save</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Active Tokens</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table class=\"table table-striped user-tokens\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>User/Token</th>\n\t\t\t\t\t</tr>\n\t\t\t\t\t" + 
      compiled.blocks['tokens'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</table>\n\t\t\t\t<form role=\"form\" class=\"row\">\n\t\t\t\t\t<div class=\"form-group col-xs-6\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"newToken-uid\" placeholder=\"uid\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-xs-6\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-block btn-primary\" id=\"newToken-create\">Create Token</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Master Tokens</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table class=\"table table-striped master-tokens\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Token</th>\n\t\t\t\t\t</tr>\n\t\t\t\t\t" + 
      compiled.blocks['masterTokens'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</table>\n\t\t\t\t<form role=\"form\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-block btn-primary\" id=\"masterToken-create\">Create Token</button>\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tMaster tokens differ from regular write-enabled tokens in that they can be utilised to make any API call as any user.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tTo define a user in your call, add the <code>_uid</code> parameter to your request body.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-7\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">API Documentation</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t" + 
      __escape(guard(context && context['documentation'])) + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'tokens': function tokens(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['tokens']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<tr data-token=\"" + 
          __escape(guard(context && context['tokens'] && context['tokens'][key0] && context['tokens'][key0]['access_token'])) + 
          "\" data-token-type=\"user\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t" + 
          (guard(context && context['tokens'] && context['tokens'][key0] && context['tokens'][key0]['user'] && context['tokens'][key0]['user']['picture']) ?
            "\n\t\t\t\t\t\t\t\t\t<img class=\"avatar avatar-sm avatar-rounded\" src=\"" + 
              __escape(guard(context && context['tokens'] && context['tokens'][key0] && context['tokens'][key0]['user'] && context['tokens'][key0]['user']['picture'])) + 
              "\" title=\"" + 
              __escape(guard(context && context['tokens'] && context['tokens'][key0] && context['tokens'][key0]['user'] && context['tokens'][key0]['user']['username'])) + 
              " (uid " + 
              __escape(guard(context && context['tokens'] && context['tokens'][key0] && context['tokens'][key0]['uid'])) + 
              ")\">\n\t\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t\t<div class=\"avatar avatar-sm avatar-rounded\" style=\"background-color: " + 
              __escape(guard(context && context['tokens'] && context['tokens'][key0] && context['tokens'][key0]['user'] && context['tokens'][key0]['user']['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['tokens'] && context['tokens'][key0] && context['tokens'][key0]['user'] && context['tokens'][key0]['user']['icon:text'])) + 
              "</div>\n\t\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"" + 
          __escape(guard(context && context['tokens'] && context['tokens'][key0] && context['tokens'][key0]['access_token'])) + 
          "\" readonly />\n\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" data-action=\"revoke\" type=\"button\"><i class=\"fa fa-times\"></i> Revoke</button>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'masterTokens': function masterTokens(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['masterTokens']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<tr data-token=\"" + 
          __escape(guard(context && context['masterTokens'] && context['masterTokens'][key0] && context['masterTokens'][key0]['access_token'])) + 
          "\" data-token-type=\"master\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t <div class=\"input-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"" + 
          __escape(guard(context && context['masterTokens'] && context['masterTokens'][key0] && context['masterTokens'][key0]['access_token'])) + 
          "\" readonly />\n\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" data-action=\"revoke\" type=\"button\"><i class=\"fa fa-times\"></i> Revoke</button>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
