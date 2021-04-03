
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
    return (guard(context && context['topics'] && context['topics']['length']) ?
        "\r\n<div class=\"recent-cards-plugin preventSlideout\">\r\n\t" + 
          (guard(context && context['title']) ?
            "\r\n\t<h5>" + 
              __escape(guard(context && context['title'])) + 
              "</h5>\r\n\t" :
            "") + 
          "\r\n\r\n\t<ul class=\"row recent-cards carousel-mode\" itemscope itemtype=\"http://www.schema.org/ItemList\">\r\n\t\t" + 
          compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
          "\r\n\t</ul>\r\n</div>\r\n" :
        "") + 
      "\r\n";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['topics']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li class=\"col-md-3 col-sm-6 col-xs-12 recent-card-container\" data-cid=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['cid'])) + 
          "\">\r\n\t\t\t<div class=\"recent-card\">\r\n\t\t\t\t<div class=\"recent-card-body\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<h4><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/topic/" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['slug'])) + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['bookmark']) ?
            "/" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['bookmark'])) :
            "") + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['title'])) + 
          "</a></h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"clearfix\">\r\n\t\t\t\t\t\t<div class=\"pull-left\">\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['user'] && context['topics'][key0]['teaser']['user']['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['user']), "sm", guard(context && context['true'])])) + 
          "</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"topic-info\">\r\n\t\t\t\t\t\t\t" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['content'])) + 
          "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"footer clearfix\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<span class=\"category-item pull-left\">\r\n\t\t\t\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['icon']) ?
            "\r\n\t\t\t\t\t\t\t<div role=\"presentation\" class=\"icon pull-left\" style=\"" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['bgColor']) ?
                "background-color: " + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['bgColor'])) + 
                  ";" :
                "") + 
              "; " + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['color']) ?
                "color: " + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['color'])) + 
                  ";" :
                "") + 
              "\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-fw " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['icon'])) + 
              "\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/category/" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['slug'])) + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['name'])) + 
          "</a>\r\n\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t" + 
          (guard(context && context['sorts'] && context['sorts']['create']) ?
            "\r\n\t\t\t\t\t\t<span class=\"pull-right\"><span class=\"sort-info timeago\" title=\"" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['timestampISO']) ?
                __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['timestampISO'])) :
                "") + 
              "\"></span></span>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t" + 
          (guard(context && context['sorts'] && context['sorts']['recent']) ?
            "\r\n\t\t\t\t\t\t<span class=\"pull-right\"><span class=\"sort-info timeago\" title=\"" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['lastposttimeISO']) ?
                __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['lastposttimeISO'])) :
                "") + 
              "\"></span></span>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t" + 
          (guard(context && context['sorts'] && context['sorts']['posts']) ?
            "\r\n\t\t\t\t\t\t<span class=\"pull-right\"><span class=\"sort-info\">[[global:x-posts, " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['postcount'])) + 
              "]]</span></span>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t" + 
          (guard(context && context['sorts'] && context['sorts']['votes']) ?
            "\r\n\t\t\t\t\t\t<span class=\"pull-right\"><span class=\"sort-info\">[[global:x-votes, " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['votes'])) + 
              "]]</span></span>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
