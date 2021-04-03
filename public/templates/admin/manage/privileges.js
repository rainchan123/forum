
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
    return "<div class=\"row\">\n\t<form role=\"form\" class=\"category\">\n\t\t<div class=\"\">\n\t\t\t<p>\n\t\t\t\t[[admin/manage/categories:privileges.description]]\n\t\t\t</p>\n\n\t\t\t<div class=\"lead\">\n\t\t\t\t[[admin/manage/categories:privileges.category-selector]]\n\t\t\t\t<div component=\"category-selector\" class=\"btn-group " + 
      (guard(context && context['pullRight']) ?
        "pull-right" :
        "") + 
      "\">\r\n\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t<span component=\"category-selector-selected\">" + 
      (guard(context && context['selectedCategory']) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(context && context['selectedCategory'])])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['icon'])) + 
          "\" style=\"color: " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['color'])) + 
          ";\"></i></span> " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['name'])) :
        "\r\n\t\t[[topic:thread_tools.select_category]]") + 
      "</span> <span class=\"caret\"></span>\r\n\t</button>\r\n\t<div component=\"category-selector-search\" class=\"hidden\">\r\n\t\t<input type=\"text\" class=\"form-control\" autocomplete=\"off\">\r\n\t</div>\r\n\t<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu " + 
      (guard(context && context['pullRight']) ?
        "dropdown-menu-right" :
        "") + 
      "\" role=\"menu\">\r\n\t\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\r\n\t\t\t<a role=\"menu-item\">[[search:no-matches]]</a>\r\n\t\t</li>\r\n\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"privilege-table-container\">\n\t\t\t\t" + 
      (guard(context && context['cid']) ?
        "\n\t\t\t\t\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t\t\t\t\t<th colspan=\"3\"></th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"9\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['privileges'] && context['privileges']['columnCountGroupOther']) ?
            "\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"" + 
              __escape(guard(context && context['privileges'] && context['privileges']['columnCountGroupOther'])) + 
              "\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-other]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.labels.groups'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.groups'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard(context && context['privileges'] && context['privileges']['columnCountGroup'])) + 
          "\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.group\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyPrivilegesFrom\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-from-category]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyToChildren\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-to-children]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyToAll\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-privileges-to-all-categories]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class=\"help-block\">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t\t\t\t\t<th colspan=\"3\"></th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"9\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['privileges'] && context['privileges']['columnCountUserOther']) ?
            "\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"" + 
              __escape(guard(context && context['privileges'] && context['privileges']['columnCountUserOther'])) + 
              "\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-other]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.labels.users'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.users'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard(context && context['privileges'] && context['privileges']['columnCountUser'])) + 
          "\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.user\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t" :
        "\n\t\t\t\t\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
          iter(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['groups']), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
              __escape(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['groups'] && context['privileges']['labels']['groups'][key0] && context['privileges']['labels']['groups'][key0]['name'])) + 
              "</th>\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
          iter(guard(context && context['privileges'] && context['privileges']['groups']), function each(key0, index, length, value) {
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
          }) + 
          "\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard(context && context['privileges'] && context['privileges']['columnCount'])) + 
          "\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.group\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class=\"help-block\">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t\t\t\t\t<th colspan=\"15\"></th>\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
          iter(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['users']), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
              __escape(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['users'] && context['privileges']['labels']['users'][key0] && context['privileges']['labels']['users'][key0]['name'])) + 
              "</th>\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
          iter(guard(context && context['privileges'] && context['privileges']['users']), function each(key0, index, length, value) {
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
          }) + 
          "\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard(context && context['privileges'] && context['privileges']['columnCount'])) + 
          "\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.user\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t") + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n\n<div class=\"floating-button\">\n\t<button id=\"discard\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t\t<i class=\"material-icons\">delete</i>\n\t</button>\n\n\t<button id=\"save\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored primary\">\n\t\t<i class=\"material-icons\">save</i>\n\t</button>\n</div>";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li role=\"presentation\" class=\"category " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabledClass']) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" data-name=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\" data-parent-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['parentCid'])) + 
          "\">\r\n\t\t\t<a role=\"menu-item\">" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['level'])) + 
          "<span component=\"category-markup\">" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon']) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i style=\"color: " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['color'])) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon'])) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "</span></a>\r\n\t\t</li>\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
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
          "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyToAllGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyToChildrenGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyPrivilegesFromGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n\t\t\t\t\t\t\t\t" + 
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
