
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
    return "<ul component=\"category\" class=\"topic-list\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
      __escape(guard(context && context['nextStart'])) + 
      "\" data-set=\"" + 
      __escape(guard(context && context['set'])) + 
      "\">\r\n\t<meta itemprop=\"itemListOrder\" content=\"descending\">\r\n\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['topics']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li component=\"category/topic\" class=\"row clearfix category-item " + 
          __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
          "\" data-tid=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tid'])) + 
          "\" data-index=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['index'])) + 
          "\" data-cid=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['cid'])) + 
          "\" itemprop=\"itemListElement\">\r\n\t\t<a id=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['index'])) + 
          "\" data-index=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['index'])) + 
          "\" component=\"topic/anchor\"></a>\r\n\t\t<meta itemprop=\"name\" content=\"" + 
          __escape(helper(context, helpers, 'stripTags', [guard(context && context['title'])])) + 
          "\">\r\n\r\n\t\t<div class=\"col-md-6 col-sm-9 col-xs-10 content\">\r\n\t\t\t<div class=\"avatar pull-left\">\r\n\t\t\t\t" + 
          (guard(context && context['showSelect']) ?
            "\r\n\t\t\t\t<div class=\"select\" component=\"topic/select\">\r\n\t\t\t\t\t" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb']) ?
                "\r\n\t\t\t\t\t<img src=\"" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb'])) + 
                  "\" class=\"user-img not-responsive\" />\r\n\t\t\t\t\t" :
                "\r\n\t\t\t\t\t" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user']), "46", guard(context && context['true']), "not-responsive"])) + 
                  "\r\n\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t<i class=\"fa fa-check\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t" + 
          (guard(context && context['showSelect']) ?
            "" :
            "\r\n\t\t\t\t<a href=\"" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug']) ?
                __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug'])) :
                "#") + 
              "\" class=\"pull-left\">\r\n\t\t\t\t\t" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb']) ?
                "\r\n\t\t\t\t\t<img src=\"" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb'])) + 
                  "\" class=\"user-img not-responsive\" />\r\n\t\t\t\t\t" :
                "\r\n\t\t\t\t\t" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user']), "46", guard(context && context['true']), "not-responsive"])) + 
                  "\r\n\t\t\t\t\t") + 
              "\r\n\t\t\t\t</a>\r\n\t\t\t\t") + 
          "\r\n\t\t\t</div>\r\n\r\n\t\t\t<h2 component=\"topic/header\" class=\"title\">\r\n\t\t\t\t<i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['pinned']) ?
            "" :
            "hide") + 
          "\" title=\"" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['pinExpiry']) ?
            "[[topic:pinned-with-expiry, " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['pinExpiryISO'])) + 
              "]]" :
            "[[topic:pinned]]") + 
          "\"></i>\r\n\t\t\t\t<i component=\"topic/locked\" class=\"fa fa-lock " + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['locked']) ?
            "" :
            "hide") + 
          "\" title=\"[[topic:locked]]\"></i>\r\n\t\t\t\t<i component=\"topic/moved\" class=\"fa fa-arrow-circle-right " + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['oldCid']) ?
            "" :
            "hide") + 
          "\" title=\"[[topic:moved]]\"></i>\r\n\t\t\t\t" + 
          iter(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['icons']), function each(key1, index, length, value) {
            var key = key1;
            return __escape(guard(value));
          }, function alt() {
            return "";
          }) + 
          "\r\n\r\n\r\n\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['noAnchor']) ?
            "\r\n\t\t\t\t<span>" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['title'])) + 
              "</span><br />\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/topic/" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['slug'])) + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['bookmark']) ?
                "/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['bookmark'])) :
                "") + 
              "\" itemprop=\"url\">" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['title'])) + 
              "</a><br />\r\n\t\t\t\t") + 
          "\r\n\r\n\t\t\t\t" + 
          (guard(context && context['template'] && context['template']['category']) ?
            "" :
            "\r\n\t\t\t\t<small>\r\n\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/category/" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['slug'])) + 
              "\"><span class=\"fa-stack fa-lg\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'])])) + 
              "\"><i style=\"color:" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['color'])) + 
              ";\" class=\"fa " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['icon'])) + 
              " fa-stack-1x\"></i></span> " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['name'])) + 
              "</a> &bull;\r\n\t\t\t\t</small>\r\n\t\t\t\t") + 
          "\r\n\r\n\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags']['length']) ?
            "\r\n\t\t\t\t<span class=\"tag-list hidden-xs\">\r\n\t\t\t\t\t" + 
              iter(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags']), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/tags/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['valueEscaped'])) + 
                  "\"><span class=\"tag\" style=\"" + 
                  (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['color']) ?
                    "color: " + 
                      __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['color'])) + 
                      ";" :
                    "") + 
                  (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['bgColor']) ?
                    "background-color: " + 
                      __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['bgColor'])) + 
                      ";" :
                    "") + 
                  "\">" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['valueEscaped'])) + 
                  "</span></a>\r\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\r\n\t\t\t\t\t<small>&bull;</small>\r\n\t\t\t\t</span>\r\n\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t<small class=\"hidden-xs\"><span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['timestampISO'])) + 
          "\"></span> &bull; <a href=\"" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug']) ?
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug'])) :
            "#") + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['displayname'])) + 
          "</a></small>\r\n\t\t\t\t<small class=\"visible-xs-inline\">\r\n\t\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['timestamp']) ?
            "\r\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['timestampISO'])) + 
              "\"></span>\r\n\t\t\t\t\t" :
            "\r\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['timestampISO'])) + 
              "\"></span>\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t</small>\r\n\t\t\t</h2>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"mobile-stat col-xs-2 visible-xs text-right\">\r\n\t\t\t<span class=\"human-readable-number\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['postcount'])) + 
          "</span> <a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/topic/" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['slug'])) + 
          "/" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['index'])) + 
          "\"><i class=\"fa fa-arrow-circle-right\"></i></a>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-votes\">\r\n\t\t\t" + 
          (guard(context && context['reputation:disabled']) ?
            "" :
            "\r\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['votes'])) + 
              "\">" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['votes'])) + 
              "</span><br />\r\n\t\t\t<small>[[global:votes]]</small>\r\n\t\t\t") + 
          "\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-postcount\">\r\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['postcount'])) + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['postcount'])) + 
          "</span><br />\r\n\t\t\t<small>[[global:posts]]</small>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-viewcount\">\r\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['viewcount'])) + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['viewcount'])) + 
          "</span><br />\r\n\t\t\t<small>[[global:views]]</small>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\r\n\t\t\t<div class=\"card\" style=\"border-color: " + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['bgColor'])) + 
          "\">\r\n\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['unreplied']) ?
            "\r\n\t\t\t\t<p>\r\n\t\t\t\t\t[[category:no_replies]]\r\n\t\t\t\t</p>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['pid']) ?
                "\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['user'] && context['topics'][key0]['teaser']['user']['userslug'])) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['user']), "24", guard(context && context['true']), "not-responsive"])) + 
                  "</a>\r\n\t\t\t\t\t<a class=\"permalink\" href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/topic/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['slug'])) + 
                  "/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['index'])) + 
                  "\">\r\n\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['timestampISO'])) + 
                  "\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"post-content\">\r\n\t\t\t\t\t" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['content'])) + 
                  "\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t") + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
