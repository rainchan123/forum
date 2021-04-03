
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
    return compiled.blocks['users'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div data-uid=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
          "\">\n    <h5>" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          "</h5>\n    <div class=\"group-area\">\n        " + 
          iter(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['groups']), function each(key1, index, length, value) {
            var key = key1;
            return "\n        <div class=\"group-card pull-left\" data-group-name=\"" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['groups'] && context['users'][key0]['groups'][key1] && context['users'][key0]['groups'][key1]['nameEscaped'])) + 
              "\">\n            <a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/admin/manage/groups/" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['groups'] && context['users'][key0]['groups'][key1] && context['users'][key0]['groups'][key1]['nameEncoded'])) + 
              "\"><span class=\"label label-default\" style=\"color:" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['groups'] && context['users'][key0]['groups'][key1] && context['users'][key0]['groups'][key1]['textColor'])) + 
              "; background-color: " + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['groups'] && context['users'][key0]['groups'][key1] && context['users'][key0]['groups'][key1]['labelColor'])) + 
              ";\">" + 
              (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['groups'] && context['users'][key0]['groups'][key1] && context['users'][key0]['groups'][key1]['icon']) ?
                "<i class=\"fa " + 
                  __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['groups'] && context['users'][key0]['groups'][key1] && context['users'][key0]['groups'][key1]['icon'])) + 
                  "\"></i> " :
                "") + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['groups'] && context['users'][key0]['groups'][key1] && context['users'][key0]['groups'][key1]['displayName'])) + 
              " <i class=\"remove-group-icon fa fa-times\" role=\"button\"></i></span></a>\n        </div>\n        ";
          }, function alt() {
            return "";
          }) + 
          "\n    </div>\n    <input data-uid=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
          "\" class=\"form-control group-search\" placeholder=\"[[admin/manage/users:add-group]]\" />\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
