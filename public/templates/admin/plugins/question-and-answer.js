
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
    return "<form role=\"form\" class=\"question-and-answer-settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12\r\n                settings-header\">[[qanda:admin.form.general_settings]]</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"checkbox\" name=\"forceQuestions\">\r\n\t\t\t\t\t[[qanda:admin.form.label.only_allow_all]]\r\n\t\t\t\t</label>\r\n\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t[[qanda:admin.form.tips]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<hr />\r\n\t\t\t<label>\r\n\t\t\t\t[[qanda:admin.form.label.only_allow_following]]\r\n\t\t\t</label>\r\n\t\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire(['settings'], function(Settings) {\r\n\t\tSettings.load('question-and-answer', $('.question-and-answer-settings'));\r\n\r\n\t\t$('#save').on('click', function() {\r\n\t\t\tSettings.save('question-and-answer', $('.question-and-answer-settings'), function() {\r\n\t\t\t\tapp.alert({\r\n\t\t\t\t\ttype: 'success',\r\n\t\t\t\t\talert_id: 'question-and-answer-saved',\r\n\t\t\t\t\ttitle: 'Settings Saved',\r\n\t\t\t\t\tmessage: 'Please reload your NodeBB to apply these settings',\r\n\t\t\t\t\tclickfn: function() {\r\n\t\t\t\t\t\tsocket.emit('admin.reload');\r\n\t\t\t\t\t}\r\n\t\t\t\t})\r\n\t\t\t});\r\n\t\t});\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"checkbox\" name=\"defaultCid_" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\">\r\n\t\t\t\t\t" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
