
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
    return "\n<input class=\"form-control\" type=\"text\" placeholder=\"[[global:search]]\"/>\n\n<div class=\"list-group\" id=\"search-result\">\n    " + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n</div>\n";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <a href=\"#\" class=\"list-group-item\" data-username=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          "\" data-uid=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
          "\"><i class=\"fa fa-fw fa-check invisible\"></i>" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          "</a>\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
