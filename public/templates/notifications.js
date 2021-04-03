
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
    return "\r\n<div class=\"notifications\">\r\n\r\n\t" + 
      (guard(context && context['breadcrumbs'] && context['breadcrumbs']['length']) ?
        "\r\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n\r\n\t<div class=\"btn-toolbar\">\r\n\t\t<div class=\"dropdown pull-right\">\r\n\t\t\t<button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n\t\t\t\t<i class=\"fa fa-eye\"></i>\r\n\t\t\t\t<span class=\"caret\"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\r\n\t\t\t\t<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" data-ajaxify=\"false\" component=\"notifications/mark_all\">[[notifications:mark_all_read]]</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"dropdown pull-right\">\r\n\t\t\t<button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t" + 
      (guard(context && context['selectedFilter']) ?
        __escape(guard(context && context['selectedFilter'] && context['selectedFilter']['name'])) :
        "") + 
      " <span class=\"caret\"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t" + 
      compiled.blocks['filters'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<hr />\r\n\r\n\t<div class=\"alert alert-info " + 
      (guard(context && context['notifications'] && context['notifications']['length']) ?
        "hidden" :
        "") + 
      "\">\r\n\t\t[[notifications:no_notifs]]\r\n\t</div>\r\n\r\n\t<ul class=\"notifications-list\" data-nextstart=\"" + 
      __escape(guard(context && context['nextStart'])) + 
      "\">\r\n\t" + 
      compiled.blocks['notifications'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n\t<div component=\"pagination\" class=\"text-center pagination-container" + 
      (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages']['length']) ?
        "" :
        " hidden") + 
      "\">\r\n\t<ul class=\"pagination hidden-xs\">\r\n\t\t<li class=\"previous pull-left" + 
      (guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + 
      "\" data-page=\"" + 
      __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t<li class=\"next pull-right" + 
      (guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + 
      "\" data-page=\"" + 
      __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class=\"pagination hidden-sm hidden-md hidden-lg\">\r\n\t\t<li class=\"first" + 
      (guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['first'] && context['pagination']['first']['qs'])) + 
      "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"previous" + 
      (guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + 
      "\" data-page=\"" + 
      __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t<a href=\"#\">" + 
      __escape(guard(context && context['pagination'] && context['pagination']['currentPage'])) + 
      " / " + 
      __escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + 
      "</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"next" + 
      (guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + 
      "\" data-page=\"" + 
      __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"last" + 
      (guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['last'] && context['pagination']['last']['qs'])) + 
      "\" data-page=\"" + 
      __escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + 
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n</div>\r\n\r\n\r\n";
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
    'filters': function filters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['filters']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t" + 
          (guard(context && context['filters'] && context['filters'][key0] && context['filters'][key0]['separator']) ?
            "\r\n\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<li role=\"presentation\" class=\"category\">\r\n\t\t\t\t\t<a role=\"menu-item\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/notifications?filter=" + 
              __escape(guard(context && context['filters'] && context['filters'][key0] && context['filters'][key0]['filter'])) + 
              "\"><i class=\"fa fa-fw " + 
              (guard(context && context['filters'] && context['filters'][key0] && context['filters'][key0]['selected']) ?
                "fa-check" :
                "") + 
              "\"></i> " + 
              __escape(guard(context && context['filters'] && context['filters'][key0] && context['filters'][key0]['name'])) + 
              "</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t") + 
          "\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'notifications': function notifications(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['notifications']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li data-nid=\"" + 
          __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['nid'])) + 
          "\" class=\"" + 
          __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['readClass'])) + 
          "\" component=\"notifications/item\">\r\n\t\t\t" + 
          (guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['image']) ?
            "\r\n\t\t\t" + 
              (guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['from']) ?
                "\r\n\t\t\t<a class=\"pull-left\" href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['user'] && context['notifications'][key0]['user']['userslug'])) + 
                  "\"><img class=\"user-img\" src=\"" + 
                  __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['image'])) + 
                  "\" /></a>\r\n\t\t\t" :
                "") + 
              "\r\n\t\t\t" :
            "\r\n\t\t\t<a class=\"pull-left\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['user'] && context['notifications'][key0]['user']['userslug'])) + 
              "\"><div class=\"pull-left user-icon user-img\" style=\"background-color: " + 
              __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['user'] && context['notifications'][key0]['user']['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['user'] && context['notifications'][key0]['user']['icon:text'])) + 
              "</div></a>\r\n\t\t\t") + 
          "\r\n\r\n\t\t\t<p>\r\n\t\t\t\t<a component=\"notifications/item/link\" href=\"" + 
          __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['path'])) + 
          "\">" + 
          __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['bodyShort'])) + 
          "</a>\r\n\t\t\t</p>\r\n\t\t\t<p class=\"timestamp\">\r\n\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['notifications'] && context['notifications'][key0] && context['notifications'][key0]['datetimeISO'])) + 
          "\"></span>\r\n\t\t\t</p>\r\n\t\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['pagination'] && context['pagination']['pages']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['separator']) ?
            "\r\n\t\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\r\n\t\t\t</li>\r\n\t\t\t" :
            "\r\n\t\t\t<li class=\"page" + 
              (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['active']) ?
                " active" :
                "") + 
              "\" >\r\n\t\t\t\t<a href=\"?" + 
              __escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['qs'])) + 
              "\" data-page=\"" + 
              __escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['page'])) + 
              "\">" + 
              __escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['page'])) + 
              "</a>\r\n\t\t\t</li>\r\n\t\t\t") + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
