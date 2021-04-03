
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
    return "\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.labels.groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
      __escape(guard(context && context['privileges'] && context['privileges']['columnCount'])) + 
      "\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.group\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class=\"help-block\">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t\t\t\t\t<th colspan=\"15\"></th>\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.labels.users'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.users'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
      __escape(guard(context && context['privileges'] && context['privileges']['columnCount'])) + 
      "\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.user\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n";
  }

  compiled.blocks = {
    'privileges.labels.groups': function privilegeslabelsgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['groups']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
          __escape(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['groups'] && context['privileges']['labels']['groups'][key0] && context['privileges']['labels']['groups'][key0]['name'])) + 
          "</th>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.groups': function privilegesgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['privileges'] && context['privileges']['groups']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<tr data-group-name=\"" + 
          __escape(guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key0] && context['privileges']['groups'][key0]['nameEscaped'])) + 
          "\" data-private=\"" + 
          (guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key0] && context['privileges']['groups'][key0]['isPrivate']) ?
            "1" :
            "0") + 
          "\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t" + 
          (guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key0] && context['privileges']['groups'][key0]['isPrivate']) ?
            "\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-lock text-muted\" title=\"[[admin/manage/categories:privileges.group-private]]\"></i>\n\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t\t\t" + 
          __escape(guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key0] && context['privileges']['groups'][key0]['name'])) + 
          "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key0] && context['privileges']['groups'][key0]['name']), guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key0] && context['privileges']['groups'][key0]['privileges'])])) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.labels.users': function privilegeslabelsusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
          __escape(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['users'] && context['privileges']['labels']['users'][key0] && context['privileges']['labels']['users'][key0]['name'])) + 
          "</th>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.users': function privilegesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['privileges'] && context['privileges']['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<tr data-uid=\"" + 
          __escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key0] && context['privileges']['users'][key0]['uid'])) + 
          "\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t" + 
          (guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key0] && context['privileges']['users'][key0]['picture']) ?
            "\n\t\t\t\t\t\t\t\t\t<img class=\"avatar avatar-sm\" src=\"" + 
              __escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key0] && context['privileges']['users'][key0]['picture'])) + 
              "\" title=\"" + 
              __escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key0] && context['privileges']['users'][key0]['username'])) + 
              "\" />\n\t\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t\t<div class=\"avatar avatar-sm\" style=\"background-color: " + 
              __escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key0] && context['privileges']['users'][key0]['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key0] && context['privileges']['users'][key0]['icon:text'])) + 
              "</div>\n\t\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>" + 
          __escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key0] && context['privileges']['users'][key0]['username'])) + 
          "</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key0] && context['privileges']['users'][key0]['username']), guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key0] && context['privileges']['users'][key0]['privileges'])])) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
