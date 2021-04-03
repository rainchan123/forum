
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
    return "\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['groups']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div class=\"col-lg-4 col-md-6 col-sm-12\" component=\"groups/summary\" data-slug=\"" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['slug'])) + 
          "\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/groups/" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['slug'])) + 
          "\" class=\"panel-heading list-cover\" style=\"" + 
          (guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['cover:thumb:url']) ?
            "background-image: url(" + 
              __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['cover:thumb:url'])) + 
              ");" :
            "") + 
          "\">\r\n\t\t\t\t<h3 class=\"panel-title\">" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['displayName'])) + 
          " <small>" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['memberCount'])) + 
          "</small></h3>\r\n\t\t\t</a>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<ul class=\"members\">\r\n\t\t\t\t\t" + 
          iter(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['members']), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['members'] && context['groups'][key0]['members'][key1] && context['groups'][key0]['members'][key1]['userslug'])) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['members'] && context['groups'][key0]['members'][key1]), "sm", guard(context && context['true'])])) + 
              "</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t" + 
          (guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['truncated']) ?
            "\r\n\t\t\t\t\t<li class=\"truncated\"><i class=\"fa fa-ellipsis-h\"></i></li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
