
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
      "\r\n";
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
    }
  };

  return compiled;
})
