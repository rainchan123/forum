
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
    return "<label>Amount of Posts to display:</label>\r\n<input type=\"text\" class=\"form-control\" name=\"numPosts\" placeholder=\"4\" />\r\n<label>Select Group</label>\r\n<select name=\"groupName\" class=\"form-control\">\r\n\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\r\n</select>\r\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['groups']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<option value=\"" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['name'])) + 
          "\">" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['name'])) + 
          "</option>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
