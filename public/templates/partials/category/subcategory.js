
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
    return "<div class=\"subcategory\">\r\n\t" + 
      (guard(context && context['children'] && context['children']['length']) ?
        "<p>[[category:subcategories]]</p>" :
        "") + 
      "\r\n\r\n\t<ul class=\"categories\" itemscope itemtype=\"http://www.schema.org/ItemList\">\r\n\t\t" + 
      compiled.blocks['children'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n</div>";
  }

  compiled.blocks = {
    'children': function children(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['children']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li component=\"categories/category\" data-cid=\"" + 
          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['cid'])) + 
          "\" data-numRecentReplies=\"1\" class=\"row clearfix\">\r\n\t<meta itemprop=\"name\" content=\"" + 
          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['name'])) + 
          "\">\r\n\r\n\t<div class=\"content col-xs-12 " + 
          (guard(context && context['config'] && context['config']['hideCategoryLastPost']) ?
            "col-md-10 col-sm-12" :
            "col-md-7 col-sm-9") + 
          "\">\r\n\t\t<div class=\"icon pull-left\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
          "\">\r\n\t\t\t<i class=\"fa fa-fw " + 
          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['icon'])) + 
          "\"></i>\r\n\t\t</div>\r\n\r\n\t\t<h2 class=\"title\">\r\n\t\t\t" + 
          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['isSection']) ?
            "\r\n" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['name'])) + 
              "\r\n" :
            "\r\n" + 
              (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['link']) ?
                "\r\n<a href=\"" + 
                  __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['link'])) + 
                  "\" itemprop=\"url\">\r\n" :
                "\r\n<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/category/" + 
                  __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['slug'])) + 
                  "\" itemprop=\"url\">\r\n") + 
              "\r\n" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['name'])) + 
              "\r\n</a>\r\n") + 
          "\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t" + 
          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['descriptionParsed']) ?
            "\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['descriptionParsed'])) + 
              "\r\n\t\t\t</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t" + 
          (guard(context && context['config'] && context['config']['hideSubCategories']) ?
            "" :
            "\r\n\t\t\t" + 
              __escape(helper(context, helpers, 'generateChildrenCategories', [guard(value)])) + 
              "\r\n\t\t\t") + 
          "\r\n\t\t</div>\r\n\t\t<span class=\"visible-xs pull-right\">\r\n\t\t\t" + 
          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['teaser'] && context['children'][key0]['teaser']['timestampISO']) ?
            "\r\n\t\t\t<a class=\"permalink\" href=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['teaser'] && context['children'][key0]['teaser']['url'])) + 
              "\">\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['teaser'] && context['children'][key0]['teaser']['timestampISO'])) + 
              "\"></small>\r\n\t\t\t</a>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</span>\r\n\t</div>\r\n\r\n\t" + 
          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['link']) ?
            "" :
            "\r\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\r\n\t\t<span class=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['unread-class'])) + 
              " human-readable-number\" title=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['totalTopicCount'])) + 
              "\">" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['totalTopicCount'])) + 
              "</span><br />\r\n\t\t<small>[[global:topics]]</small>\r\n\t</div>\r\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\r\n\t\t<span class=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['unread-class'])) + 
              " human-readable-number\" title=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['totalPostCount'])) + 
              "\">" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['totalPostCount'])) + 
              "</span><br />\r\n\t\t<small>[[global:posts]]</small>\r\n\t</div>\r\n\t" + 
              (guard(context && context['config'] && context['config']['hideCategoryLastPost']) ?
                "" :
                "\r\n\t<div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\r\n\t\t<div class=\"card background-link-container\" style=\"border-color: " + 
                  __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['bgColor'])) + 
                  "\">\r\n\t" + 
                  iter(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts']), function each(key1, index, length, value) {
                    var key = key1;
                    return "\r\n\t" + 
                      (index === 0 ?
                        "\r\n\t<div component=\"category/posts\">\r\n\t\t<a class=\"background-link\" href=\"" + 
                          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                          "/topic/" + 
                          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['topic'] && context['children'][key0]['posts'][key1]['topic']['slug'])) + 
                          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['index']) ?
                            "/" + 
                              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['index'])) :
                            "") + 
                          "\"></a>\r\n\t\t<p>\r\n\t\t\t<a href=\"" + 
                          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                          "/user/" + 
                          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['user'] && context['children'][key0]['posts'][key1]['user']['userslug'])) + 
                          "\">" + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['user']), "sm", guard(context && context['true'])])) + 
                          "</a>\r\n\t\t\t<a class=\"permalink\" href=\"" + 
                          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                          "/topic/" + 
                          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['topic'] && context['children'][key0]['posts'][key1]['topic']['slug'])) + 
                          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['index']) ?
                            "/" + 
                              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['index'])) :
                            "") + 
                          "\">\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
                          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['timestampISO'])) + 
                          "\"></small>\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t\t<div class=\"post-content\">\r\n\t\t\t" + 
                          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['content'])) + 
                          "\r\n\t\t</div>\r\n\t</div>\r\n\t" :
                        "") + 
                      "\r\n\t";
                  }, function alt() {
                    return "";
                  }) + 
                  "\r\n\r\n\t" + 
                  (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts']['length']) ?
                    "" :
                    "\r\n\t<div component=\"category/posts\">\r\n\t\t<div class=\"post-content\">\r\n\t\t\t[[category:no_new_posts]]\r\n\t\t</div>\r\n\t</div>\r\n\t") + 
                  "\r\n</div>\r\n\r\n\t</div>\r\n\t") + 
              "\r\n\t") + 
          "\r\n</li>\r\n\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
