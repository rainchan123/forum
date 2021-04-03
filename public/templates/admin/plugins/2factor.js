
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
    return "<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[2factor:intro.title]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<img src=\"data:image/png;base64," + 
      __escape(guard(context && context['image'])) + 
      "\" class=\"pull-right\" alt=\"User Profile\" />\n\t\t\t\t<p>\n\t\t\t\t\t[[2factor:admin.intro.one]]\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t[[2factor:admin.intro.two]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-6\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[2factor:admin.users.title]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<p>\n\t\t\t\t\t[[2factor:admin.users.text]]\n\t\t\t\t</p>\n\t\t\t\t" + 
      (guard(context && context['users'] && context['users']['length']) ?
        "\n\t\t\t\t<ul class=\"user-list\">\n\t\t\t\t\t" + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t</ul>\n\t\t\t\t" :
        "\n\t\t\t\t<div class=\"alert alert-warning text-center\">\n\t\t\t\t\t<em>[[2factor:admin.users.none]]</em>\n\t\t\t\t</div>\n\t\t\t\t") + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-sm-6\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[2factor:admin.deactivate.title]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"disassociate\" placeholder=\"[[2factor:admin.deactivate.search]]\" />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[2factor:admin.deactivate.text]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[2factor:admin.force_2fa]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<form class=\"2factor-settings\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"tfaEnforcedGroups\">[[2factor:admin.force_2fa.help]]</label>\n\t\t\t\t\t\t<select class=\"form-control\" id=\"tfaEnforcedGroups\" name=\"tfaEnforcedGroups\" multiple>\n\t\t\t\t\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['users']), function each(key0, index, length, value) {
        var key = key0;
        return "<li>\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['config'] && context['users'][key0]['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['userslug'])) + 
          "\">\n\t\t\t\t\t\t\t" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['picture']) ?
            "\n\t\t\t\t\t\t\t<img class=\"avatar avatar-sm\" component=\"user/picture\" src=\"" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['picture'])) + 
              "\" itemprop=\"image\" />\n\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t<div class=\"avatar avatar-sm\" component=\"user/picture\" style=\"background-color: " + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['icon:text'])) + 
              "</div>\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          "\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['groups']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['name'])) + 
          "\">" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['value'])) + 
          "</option>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
