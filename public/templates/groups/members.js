
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
      "\r\n\r\n<div class=\"users\">\r\n\r\n\t<ul id=\"users-container\" class=\"users-container\">\r\n\t\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n\r\n\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n</div>";
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
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li class=\"users-box registered-user\" data-uid=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
          "\">\r\n\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['users'] && context['users'][key0]), "lg", guard(context && context['true'])])) + 
          "</a>\r\n\t<br/>\r\n\t<div class=\"user-info\">\r\n\t\t<span>\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['status'])) + 
          "\" title=\"[[global:" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['status'])) + 
          "]]\"></i>\r\n\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['userslug'])) + 
          "\">" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          "</a>\r\n\t\t</span>\r\n\t\t<br/>\r\n\r\n\t\t" + 
          (guard(context && context['section_joindate']) ?
            "\r\n\t\t<div title=\"joindate\" class=\"joindate\">\r\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['joindateISO'])) + 
              "\"></span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard(context && context['section_sort-reputation']) ?
            "\r\n\t\t<div title=\"reputation\" class=\"reputation\">\r\n\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t<span class=\"formatted-number\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['reputation'])) + 
              "</span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard(context && context['section_sort-posts']) ?
            "\r\n\t\t<div title=\"post count\" class=\"post-count\">\r\n\t\t\t<i class=\"fa fa-pencil\"></i>\r\n\t\t\t<span class=\"formatted-number\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['postcount'])) + 
              "</span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard(context && context['section_flagged']) ?
            "\r\n\t\t<div title=\"flag count\" class=\"flag-count\">\r\n\t\t\t<i class=\"fa fa-flag\"></i>\r\n\t\t\t<span><a class=\"formatted-number\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/flags?targetUid=" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
              "\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['flags'])) + 
              "</a></span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\t</div>\r\n</li>\r\n";
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
