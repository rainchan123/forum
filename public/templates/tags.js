
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
      "\r\n</div>\r\n<div class=\"tags\">\r\n\t" + 
      (guard(context && context['displayTagSearch']) ?
        "\r\n\t" + 
          (guard(context && context['tags'] && context['tags']['length']) ?
            "\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" id=\"tag-search\">\r\n\t\t\t\t<span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t" :
            "") + 
          "\r\n\t" :
        "") + 
      "\r\n\r\n\t" + 
      (guard(context && context['tags'] && context['tags']['length']) ?
        "" :
        "\r\n\t<div class=\"alert alert-warning\">[[tags:no_tags]]</div>\r\n\t") + 
      "\r\n\r\n\t<div class=\"category row\">\r\n\t\t<div class=\"col-md-12 clearfix tag-list\" data-nextstart=\"" + 
      __escape(guard(context && context['nextStart'])) + 
      "\">\r\n\t\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
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
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['tags']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<h3 class=\"pull-left tag-container\">\r\n\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/tags/" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "\" data-value=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "\"><span class=\"tag-item\" data-tag=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "\" style=\"" + 
          (guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['color']) ?
            "color: " + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['color'])) + 
              ";" :
            "") + 
          (guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['bgColor']) ?
            "background-color: " + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['bgColor'])) + 
              ";" :
            "") + 
          "\">" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "</span><span class=\"tag-topic-count human-readable-number\" title=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['score'])) + 
          "\">" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['score'])) + 
          "</span></a>\r\n</h3>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
