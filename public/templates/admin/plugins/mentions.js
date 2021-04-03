
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
    return "<form role=\"form\" class=\"mentions-settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">General</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label for=\"autofillGroups\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"autofillGroups\" name=\"autofillGroups\" />\r\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">Allow mentioning User Groups</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label for=\"overrideIgnores\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"overrideIgnores\" name=\"overrideIgnores\" />\r\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">Notify recipients of mentions even if topic is explictly ignored</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"disableGroupMentions\">Select groups you wish to disable mentions</label>\r\n\t\t\t\t<select class=\"form-control\" id=\"disableGroupMentions\" name=\"disableGroupMentions\" multiple>\r\n\t\t\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"display\">Mentions will display ...</label>\r\n\t\t\t\t<select class=\"form-control\" id=\"display\" name=\"display\">\r\n\t\t\t\t\t<option value=\"\">... as written</option>\r\n\t\t\t\t\t<option value=\"fullname\">... as user&apos;s full name (if set)</option>\r\n\t\t\t\t\t<option value=\"username\">... as user&apos;s username</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">Restrictions</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label for=\"disableFollowedTopics\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"disableFollowedTopics\" name=\"disableFollowedTopics\" />\r\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">Disable mentions for followed topics</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label for=\"privilegedDirectReplies\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"privilegedDirectReplies\" name=\"privilegedDirectReplies\" />\r\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">Restrict mentions to privileged users (mods, global mods, administrators), unless it is a direct reply to a post</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['groups']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['displayName'])) + 
          "\">" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['displayName'])) + 
          "</option>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
