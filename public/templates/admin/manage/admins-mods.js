
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
    return "<div class=\"admins-mods\">\n\t<h4>" + 
      (guard(context && context['admins'] && context['admins']['icon']) ?
        "<i class=\"fa " + 
          __escape(guard(context && context['admins'] && context['admins']['icon'])) + 
          "\"></i> " :
        "") + 
      "[[admin/manage/admins-mods:administrators]]</h4>\n\t<div class=\"administrator-area\">\n\t" + 
      compiled.blocks['admins.members'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\t<input id=\"admin-search\" class=\"form-control\" placeholder=\"[[admin/manage/admins-mods:add-administrator]]\" />\n\n\t<br/>\n\n\t<h4>" + 
      (guard(context && context['globalMods'] && context['globalMods']['icon']) ?
        "<i class=\"fa " + 
          __escape(guard(context && context['globalMods'] && context['globalMods']['icon'])) + 
          "\"></i> " :
        "") + 
      "[[admin/manage/admins-mods:global-moderators]]</h4>\n\t<div class=\"global-moderator-area\">\n\t" + 
      compiled.blocks['globalMods.members'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\n\t<div id=\"no-global-mods-warning\" class=\"" + 
      (guard(context && context['globalMods'] && context['globalMods']['members'] && context['globalMods']['members']['length']) ?
        "hidden" :
        "") + 
      "\">[[admin/manage/admins-mods:no-global-moderators]]</div>\n\n\t<input id=\"global-mod-search\" class=\"form-control\" placeholder=\"[[admin/manage/admins-mods:add-global-moderator]]\" />\n\n\t<br/>\n\n\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n</div>\n";
  }

  compiled.blocks = {
    'admins.members': function adminsmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['admins'] && context['admins']['members']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<div class=\"user-card pull-left\" data-uid=\"" + 
          __escape(guard(context && context['admins'] && context['admins']['members'] && context['admins']['members'][key0] && context['admins']['members'][key0]['uid'])) + 
          "\">\n\t\t\t" + 
          (guard(context && context['admins'] && context['admins']['members'] && context['admins']['members'][key0] && context['admins']['members'][key0]['picture']) ?
            "\n\t\t\t<img class=\"avatar avatar-sm\" src=\"" + 
              __escape(guard(context && context['admins'] && context['admins']['members'] && context['admins']['members'][key0] && context['admins']['members'][key0]['picture'])) + 
              "\" />\n\t\t\t" :
            "\n\t\t\t<div class=\"avatar avatar-sm\" style=\"background-color: " + 
              __escape(guard(context && context['admins'] && context['admins']['members'] && context['admins']['members'][key0] && context['admins']['members'][key0]['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['admins'] && context['admins']['members'] && context['admins']['members'][key0] && context['admins']['members'][key0]['icon:text'])) + 
              "</div>\n\t\t\t") + 
          "\n\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['admins'] && context['admins']['members'] && context['admins']['members'][key0] && context['admins']['members'][key0]['userslug'])) + 
          "\">" + 
          __escape(guard(context && context['admins'] && context['admins']['members'] && context['admins']['members'][key0] && context['admins']['members'][key0]['username'])) + 
          "</a>\n\t\t\t<i class=\"remove-user-icon fa fa-times\" role=\"button\"></i>\n\t\t</div>\n\t";
      }, function alt() {
        return "";
      });
    },
    'globalMods.members': function globalModsmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['globalMods'] && context['globalMods']['members']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<div class=\"user-card pull-left\" data-uid=\"" + 
          __escape(guard(context && context['globalMods'] && context['globalMods']['members'] && context['globalMods']['members'][key0] && context['globalMods']['members'][key0]['uid'])) + 
          "\">\n\t\t\t" + 
          (guard(context && context['globalMods'] && context['globalMods']['members'] && context['globalMods']['members'][key0] && context['globalMods']['members'][key0]['picture']) ?
            "\n\t\t\t<img class=\"avatar avatar-sm\" src=\"" + 
              __escape(guard(context && context['globalMods'] && context['globalMods']['members'] && context['globalMods']['members'][key0] && context['globalMods']['members'][key0]['picture'])) + 
              "\" />\n\t\t\t" :
            "\n\t\t\t<div class=\"avatar avatar-sm\" style=\"background-color: " + 
              __escape(guard(context && context['globalMods'] && context['globalMods']['members'] && context['globalMods']['members'][key0] && context['globalMods']['members'][key0]['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['globalMods'] && context['globalMods']['members'] && context['globalMods']['members'][key0] && context['globalMods']['members'][key0]['icon:text'])) + 
              "</div>\n\t\t\t") + 
          "\n\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['globalMods'] && context['globalMods']['members'] && context['globalMods']['members'][key0] && context['globalMods']['members'][key0]['userslug'])) + 
          "\">" + 
          __escape(guard(context && context['globalMods'] && context['globalMods']['members'] && context['globalMods']['members'][key0] && context['globalMods']['members'][key0]['username'])) + 
          "</a>\n\t\t\t<i class=\"remove-user-icon fa fa-times\" role=\"button\"></i>\n\t\t</div>\n\t";
      }, function alt() {
        return "";
      });
    },
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<div class=\"categories category-wrapper category-depth-" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['depth'])) + 
          "\">\n\t<h4>" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon']) ?
            "<i class=\"fa " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon'])) + 
              "\"></i> " :
            "") + 
          "[[admin/manage/admins-mods:moderators-of-category, " + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "]]" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabled']) ?
            "<span class=\"badge badge-primary\">[[admin/manage/admins-mods:disabled]]</span>" :
            "") + 
          "</h4>\n\t<div class=\"moderator-area\" data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\">\n\t\t" + 
          iter(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['moderators']), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t<div class=\"user-card pull-left\" data-uid=\"" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['moderators'] && context['categories'][key0]['moderators'][key1] && context['categories'][key0]['moderators'][key1]['uid'])) + 
              "\">\n\t\t\t\t" + 
              (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['moderators'] && context['categories'][key0]['moderators'][key1] && context['categories'][key0]['moderators'][key1]['picture']) ?
                "\n\t\t\t\t<img class=\"avatar avatar-sm\" src=\"" + 
                  __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['moderators'] && context['categories'][key0]['moderators'][key1] && context['categories'][key0]['moderators'][key1]['picture'])) + 
                  "\" />\n\t\t\t\t" :
                "\n\t\t\t\t<div class=\"avatar avatar-sm\" style=\"background-color: " + 
                  __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['moderators'] && context['categories'][key0]['moderators'][key1] && context['categories'][key0]['moderators'][key1]['icon:bgColor'])) + 
                  ";\">" + 
                  __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['moderators'] && context['categories'][key0]['moderators'][key1] && context['categories'][key0]['moderators'][key1]['icon:text'])) + 
                  "</div>\n\t\t\t\t") + 
              "\n\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['moderators'] && context['categories'][key0]['moderators'][key1] && context['categories'][key0]['moderators'][key1]['userslug'])) + 
              "\">" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['moderators'] && context['categories'][key0]['moderators'][key1] && context['categories'][key0]['moderators'][key1]['username'])) + 
              "</a>\n\t\t\t\t<i class=\"remove-user-icon fa fa-times\" role=\"button\"></i>\n\t\t\t</div>\n\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t</div>\n\n\t<div data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" class=\"no-moderator-warning " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['moderators'] && context['categories'][key0]['moderators']['length']) ?
            "hidden" :
            "") + 
          "\">[[admin/manage/admins-mods:no-moderators]]</div>\n\n\t<input data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" class=\"form-control moderator-search\" placeholder=\"[[admin/manage/admins-mods:add-moderator]]\" />\n\t</div>\n\t<br/>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
