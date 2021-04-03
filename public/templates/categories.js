
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
      "\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"" + 
      (guard(context && context['widgets'] && context['widgets']['sidebar'] && context['widgets']['sidebar']['length']) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\r\n\t\t<h1 class=\"categories-title\">[[pages:categories]]</h1>\r\n\t\t<ul class=\"categories\" itemscope itemtype=\"http://www.schema.org/ItemList\">\r\n\t\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</ul>\r\n\t</div>\r\n\t<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard(context && context['widgets'] && context['widgets']['sidebar'] && context['widgets']['sidebar']['length']) ?
        "" :
        "hidden") + 
      "\">\r\n\t\t" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\r\n\t</div>\r\n</div>\r\n<div data-widget-area=\"footer\">\r\n\t" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n";
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
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<li component=\"categories/category\" data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" data-numRecentReplies=\"1\" class=\"row clearfix\">\r\n\t<meta itemprop=\"name\" content=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\">\r\n\r\n\t<div class=\"content col-xs-12 " + 
          (guard(context && context['config'] && context['config']['hideCategoryLastPost']) ?
            "col-md-10 col-sm-12" :
            "col-md-7 col-sm-9") + 
          "\">\r\n\t\t<div class=\"icon pull-left\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
          "\">\r\n\t\t\t<i class=\"fa fa-fw " + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon'])) + 
          "\"></i>\r\n\t\t</div>\r\n\r\n\t\t<h2 class=\"title\">\r\n\t\t\t" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['isSection']) ?
            "\r\n" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
              "\r\n" :
            "\r\n" + 
              (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['link']) ?
                "\r\n<a href=\"" + 
                  __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['link'])) + 
                  "\" itemprop=\"url\">\r\n" :
                "\r\n<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/category/" + 
                  __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['slug'])) + 
                  "\" itemprop=\"url\">\r\n") + 
              "\r\n" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
              "\r\n</a>\r\n") + 
          "\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['descriptionParsed']) ?
            "\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['descriptionParsed'])) + 
              "\r\n\t\t\t</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t" + 
          (guard(context && context['config'] && context['config']['hideSubCategories']) ?
            "" :
            "\r\n\t\t\t" + 
              __escape(helper(context, helpers, 'generateChildrenCategories', [guard(value)])) + 
              "\r\n\t\t\t") + 
          "\r\n\t\t</div>\r\n\t\t<span class=\"visible-xs pull-right\">\r\n\t\t\t" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['teaser'] && context['categories'][key0]['teaser']['timestampISO']) ?
            "\r\n\t\t\t<a class=\"permalink\" href=\"" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['teaser'] && context['categories'][key0]['teaser']['url'])) + 
              "\">\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['teaser'] && context['categories'][key0]['teaser']['timestampISO'])) + 
              "\"></small>\r\n\t\t\t</a>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</span>\r\n\t</div>\r\n\r\n\t" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['link']) ?
            "" :
            "\r\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\r\n\t\t<span class=\"" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['unread-class'])) + 
              " human-readable-number\" title=\"" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['totalTopicCount'])) + 
              "\">" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['totalTopicCount'])) + 
              "</span><br />\r\n\t\t<small>[[global:topics]]</small>\r\n\t</div>\r\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\r\n\t\t<span class=\"" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['unread-class'])) + 
              " human-readable-number\" title=\"" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['totalPostCount'])) + 
              "\">" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['totalPostCount'])) + 
              "</span><br />\r\n\t\t<small>[[global:posts]]</small>\r\n\t</div>\r\n\t" + 
              (guard(context && context['config'] && context['config']['hideCategoryLastPost']) ?
                "" :
                "\r\n\t<div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\r\n\t\t<div class=\"card background-link-container\" style=\"border-color: " + 
                  __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['bgColor'])) + 
                  "\">\r\n\t" + 
                  iter(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts']), function each(key1, index, length, value) {
                    var key = key1;
                    return "\r\n\t" + 
                      (index === 0 ?
                        "\r\n\t<div component=\"category/posts\">\r\n\t\t<a class=\"background-link\" href=\"" + 
                          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                          "/topic/" + 
                          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts'] && context['categories'][key0]['posts'][key1] && context['categories'][key0]['posts'][key1]['topic'] && context['categories'][key0]['posts'][key1]['topic']['slug'])) + 
                          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts'] && context['categories'][key0]['posts'][key1] && context['categories'][key0]['posts'][key1]['index']) ?
                            "/" + 
                              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts'] && context['categories'][key0]['posts'][key1] && context['categories'][key0]['posts'][key1]['index'])) :
                            "") + 
                          "\"></a>\r\n\t\t<p>\r\n\t\t\t<a href=\"" + 
                          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                          "/user/" + 
                          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts'] && context['categories'][key0]['posts'][key1] && context['categories'][key0]['posts'][key1]['user'] && context['categories'][key0]['posts'][key1]['user']['userslug'])) + 
                          "\">" + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts'] && context['categories'][key0]['posts'][key1] && context['categories'][key0]['posts'][key1]['user']), "sm", guard(context && context['true'])])) + 
                          "</a>\r\n\t\t\t<a class=\"permalink\" href=\"" + 
                          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                          "/topic/" + 
                          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts'] && context['categories'][key0]['posts'][key1] && context['categories'][key0]['posts'][key1]['topic'] && context['categories'][key0]['posts'][key1]['topic']['slug'])) + 
                          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts'] && context['categories'][key0]['posts'][key1] && context['categories'][key0]['posts'][key1]['index']) ?
                            "/" + 
                              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts'] && context['categories'][key0]['posts'][key1] && context['categories'][key0]['posts'][key1]['index'])) :
                            "") + 
                          "\">\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
                          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts'] && context['categories'][key0]['posts'][key1] && context['categories'][key0]['posts'][key1]['timestampISO'])) + 
                          "\"></small>\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t\t<div class=\"post-content\">\r\n\t\t\t" + 
                          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts'] && context['categories'][key0]['posts'][key1] && context['categories'][key0]['posts'][key1]['content'])) + 
                          "\r\n\t\t</div>\r\n\t</div>\r\n\t" :
                        "") + 
                      "\r\n\t";
                  }, function alt() {
                    return "";
                  }) + 
                  "\r\n\r\n\t" + 
                  (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['posts'] && context['categories'][key0]['posts']['length']) ?
                    "" :
                    "\r\n\t<div component=\"category/posts\">\r\n\t\t<div class=\"post-content\">\r\n\t\t\t[[category:no_new_posts]]\r\n\t\t</div>\r\n\t</div>\r\n\t") + 
                  "\r\n</div>\r\n\r\n\t</div>\r\n\t") + 
              "\r\n\t") + 
          "\r\n</li>\r\n\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['widgets'] && context['widgets']['sidebar']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t" + 
          guard(context && context['widgets'] && context['widgets']['sidebar'] && context['widgets']['sidebar'][key0] && context['widgets']['sidebar'][key0]['html']) + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['widgets'] && context['widgets']['footer']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          guard(context && context['widgets'] && context['widgets']['footer'] && context['widgets']['footer'][key0] && context['widgets']['footer'][key0]['html']) + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
