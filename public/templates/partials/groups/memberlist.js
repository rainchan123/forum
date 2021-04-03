
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
    return "<div class=\"row\">\r\n\t" + 
      (guard(context && context['group'] && context['group']['isOwner']) ?
        "\r\n\t<div class=\"col-lg-2\">\r\n\t\t<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary\" title=\"[[groups:details.add-member]]\"><i class=\"fa fa-user-plus\"></i></button>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\t<div class=\"" + 
      (guard(context && context['group'] && context['group']['isOwner']) ?
        "col-lg-10" :
        "col-lg-12") + 
      "\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input class=\"form-control\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\r\n\t\t\t<span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<table component=\"groups/members\" class=\"table table-striped table-hover\" data-nextstart=\"" + 
      __escape(guard(context && context['group'] && context['group']['membersNextStart'])) + 
      "\">\r\n\t<tbody>\r\n\t" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\r\n\t</tbody>\r\n</table>";
  }

  compiled.blocks = {
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['group'] && context['group']['members']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<tr data-uid=\"" + 
          __escape(guard(context && context['group'] && context['group']['members'] && context['group']['members'][key0] && context['group']['members'][key0]['uid'])) + 
          "\">\r\n\t\t<td>\r\n\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['group'] && context['group']['members'] && context['group']['members'][key0] && context['group']['members'][key0]['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['group'] && context['group']['members'] && context['group']['members'][key0]), "sm", guard(context && context['true'])])) + 
          "</a>\r\n\t\t</td>\r\n\t\t<td class=\"member-name\">\r\n\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['group'] && context['group']['members'] && context['group']['members'][key0] && context['group']['members'][key0]['userslug'])) + 
          "\">" + 
          __escape(guard(context && context['group'] && context['group']['members'] && context['group']['members'][key0] && context['group']['members'][key0]['username'])) + 
          "</a> <i title=\"[[groups:owner]]\" class=\"fa fa-star text-warning " + 
          (guard(context && context['group'] && context['group']['members'] && context['group']['members'][key0] && context['group']['members'][key0]['isOwner']) ?
            "" :
            "invisible") + 
          "\"></i>\r\n\r\n\t\t\t" + 
          (guard(context && context['group'] && context['group']['isOwner']) ?
            "\r\n\t\t\t<div class=\"owner-controls btn-group pull-right\">\r\n\t\t\t\t<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\r\n\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t</a>\r\n\r\n\t\t\t\t<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\r\n\t\t\t\t\t<i class=\"fa fa-ban\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</td>\r\n\t</tr>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
