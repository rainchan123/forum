
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
    return (guard(context && context['breadcrumbs'] && context['breadcrumbs']['length']) ?
        "\r\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n<div data-widget-area=\"header\">\r\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n<div class=\"groups list\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-4\">\r\n\t\t\t" + 
      (guard(context && context['allowGroupCreation']) ?
        "\r\n\t\t\t<button class=\"btn btn-primary\" data-action=\"new\"><i class=\"fa fa-plus\"></i> [[groups:new_group]]</button>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-8\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-5 col-md-3 text-left pull-right\">\r\n\t\t\t\t\t<select class=\"form-control\" id=\"search-sort\">\r\n\t\t\t\t\t\t<option value=\"alpha\">[[groups:details.group_name]]</option>\r\n\t\t\t\t\t\t<option value=\"count\">[[groups:details.member_count]]</option>\r\n\t\t\t\t\t\t<option value=\"date\">[[groups:details.creation_date]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-7 col-md-5 text-left pull-right\">\r\n\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\" id=\"search-text\">\r\n\t\t\t\t\t\t<span id=\"search-button\" class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<hr />\r\n\r\n\t<div component=\"groups/container\" class=\"row\" id=\"groups-list\" data-nextstart=" + 
      __escape(guard(context && context['nextStart'])) + 
      ">\r\n\t\t" + 
      (guard(context && context['groups'] && context['groups']['length']) ?
        "\r\n\t\t\t" + 
          compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t" :
        "\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"alert alert-warning\">\r\n\t\t\t[[groups:no_groups_found]]\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t") + 
      "\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['breadcrumbs']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\r\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "<a href=\"" + 
              __escape(guard(context && context['breadcrumbs'] && context['breadcrumbs'][key0] && context['breadcrumbs'][key0]['url'])) + 
              "\" itemprop=\"item\">") + 
          "\r\n\t\t\t<span itemprop=\"name\">\r\n\t\t\t\t" + 
          __escape(guard(context && context['breadcrumbs'] && context['breadcrumbs'][key0] && context['breadcrumbs'][key0]['text'])) + 
          "\r\n\t\t\t\t" + 
          (index === length - 1 ?
            "\r\n\t\t\t\t" + 
              (guard(context && context['feeds:disableRSS']) ?
                "" :
                "\r\n\t\t\t\t" + 
                  (guard(context && context['rssFeedUrl']) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard(context && context['rssFeedUrl'])) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</span>\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "</a>") + 
          "\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['widgets'] && context['widgets']['header']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          guard(context && context['widgets'] && context['widgets']['header'] && context['widgets']['header'][key0] && context['widgets']['header'][key0]['html']) + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    },
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
