
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:email-settings]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email:from\"><strong>[[admin/settings/email:address]]</strong></label>\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/email:address-help]]\n\t\t\t\t</p>\n\t\t\t\t<input type=\"text\" class=\"form-control input-lg\" id=\"email:from\" data-field=\"email:from\" placeholder=\"info@example.org\" /><br />\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email:from_name\"><strong>From Name</strong></label>\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/email:from-help]]\n\t\t\t\t</p>\n\t\t\t\t<input type=\"text\" class=\"form-control input-lg\" id=\"email:from_name\" data-field=\"email:from_name\" placeholder=\"NodeBB\" /><br />\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:smtp-transport]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<div class=\"alert alert-warning\">\n\t\t\t<p>\n\t\t\t\t[[admin/settings/email:smtp-transport-help]]\n\t\t\t</p>\n\t\t</div>\n\t\t<form>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label for=\"email:smtpTransport:enabled\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"email:smtpTransport:enabled\" data-field=\"email:smtpTransport:enabled\" name=\"email:smtpTransport:enabled\" />\n\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/email:smtp-transport.enabled]]</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<label for=\"email:smtpTransport:pool\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"email:smtpTransport:pool\" data-field=\"email:smtpTransport:pool\" name=\"email:smtpTransport:pool\" />\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/email:smtp-transport.pool]]</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"col-xs-12 help-block\">\n\t\t\t\t\t[[admin/settings/email:smtp-transport.pool-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email:smtpTransport:service\"><strong>[[admin/settings/email:smtp-transport.service]]</strong></label>\n\t\t\t\t<select class=\"form-control input-lg\" id=\"email:smtpTransport:service\" data-field=\"email:smtpTransport:service\">\n\t\t\t\t\t<option value=\"nodebb-custom-smtp\" style=\"font-weight: bold\">[[admin/settings/email:smtp-transport.service-custom]]</option>\n\t\t\t\t\t<option style=\"font-size: 10px\" disabled>&nbsp;</option>\n\n\t\t\t\t\t" + 
      compiled.blocks['services'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</select>\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/email:smtp-transport.service-help]]\n\t\t\t\t\t<br>\n\t\t\t\t\t[[admin/settings/email:smtp-transport.gmail-warning1]]\n\t\t\t\t\t<br>\n\t\t\t\t\t[[admin/settings/email:smtp-transport.gmail-warning2]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"form-group well\" id=\"email:smtpTransport:custom-service\" style=\"display: none\">\n\t\t\t\t<h5>Custom Service</h5>\n\n\t\t\t\t<label for=\"email:smtpTransport:host\">[[admin/settings/email:smtp-transport.host]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control input-md\" id=\"email:smtpTransport:host\" data-field=\"email:smtpTransport:host\" placeholder=\"smtp.example.org\">\n\n\t\t\t\t<label for=\"email:smtpTransport:port\">[[admin/settings/email:smtp-transport.port]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control input-md\" id=\"email:smtpTransport:port\" data-field=\"email:smtpTransport:port\" placeholder=\"5555\">\n\n\t\t\t\t<label for=\"email:smtpTransport:security\">[[admin/settings/email:smtp-transport.security]]</label>\n\t\t\t\t<select class=\"form-control\" id=\"email:smtpTransport:security\" data-field=\"email:smtpTransport:security\">\n\t\t\t\t\t<option value=\"ENCRYPTED\">[[admin/settings/email:smtp-transport.security-encrypted]]</option>\n\t\t\t\t\t<option value=\"STARTTLS\">[[admin/settings/email:smtp-transport.security-starttls]]</option>\n\t\t\t\t\t<option value=\"NONE\">[[admin/settings/email:smtp-transport.security-none]]</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email:smtpTransport:user\"><strong>[[admin/settings/email:smtp-transport.username]]</strong></label>\n\t\t\t\t<input type=\"text\" class=\"form-control input-lg\" data-field=\"email:smtpTransport:user\" placeholder=\"admin@example.org\" />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/email:smtp-transport.username-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email:smtpTransport:pass\"><strong>[[admin/settings/email:smtp-transport.password]]</strong></label>\n\t\t\t\t<input type=\"password\" class=\"form-control input-lg\" data-field=\"email:smtpTransport:pass\" />\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:template]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<label>[[admin/settings/email:template.select]]</label><br />\n\t\t<select id=\"email-editor-selector\" class=\"form-control\">\n\t\t\t" + 
      compiled.blocks['emails'](helpers, context, guard, iter, helper) + 
      "\n\t\t</select>\n\t\t<br />\n\t\t<div id=\"email-editor\"></div>\n\t\t<input type=\"hidden\" id=\"email-editor-holder\" value=\"\" data-field=\"\" />\n\t\t<br />\n\t\t<button class=\"btn btn-warning\" type=\"button\" data-action=\"email.revert\">[[admin/settings/email:template.revert]]</button>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:testing]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>[[admin/settings/email:testing.select]]</label>\n\t\t\t<select id=\"test-email\" class=\"form-control\">\n\t\t\t\t" + 
      compiled.blocks['sendable'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</select>\n\t\t</div>\n\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"email.test\">[[admin/settings/email:testing.send]]</button>\n\t\t<p class=\"help-block\">\n\t\t\t[[admin/settings/email:testing.send-help]]\n\t\t</p>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:subscriptions]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label for=\"disableEmailSubscriptions\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"disableEmailSubscriptions\" data-field=\"disableEmailSubscriptions\" name=\"disableEmailSubscriptions\" />\n\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/email:subscriptions.disable]]</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"digestHour\"><strong>[[admin/settings/email:subscriptions.hour]]</strong></label>\n\t\t\t\t<input type=\"number\" class=\"form-control input-lg\" id=\"digestHour\" data-field=\"digestHour\" placeholder=\"17\" min=\"0\" max=\"24\" />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/email:subscriptions.hour-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:notifications.settings]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label for=\"removeEmailNotificationImages\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"removeEmailNotificationImages\" data-field=\"removeEmailNotificationImages\" name=\"removeEmailNotificationImages\" />\n\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/email:notifications.remove-images]]</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n\n<script>\n\trequire(['admin/settings'], function(Settings) {\n\t\tSettings.prepare();\n\t\tSettings.populateTOC();\n\t});\n</script>\n\n";
  }

  compiled.blocks = {
    'services': function services(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['services']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'emails': function emails(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['emails']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<option value=\"" + 
          __escape(guard(context && context['emails'] && context['emails'][key0] && context['emails'][key0]['path'])) + 
          "\">" + 
          __escape(guard(context && context['emails'] && context['emails'][key0] && context['emails'][key0]['path'])) + 
          "</option>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sendable': function sendable(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['sendable']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
