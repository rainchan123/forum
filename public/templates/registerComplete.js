
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
      "\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xs-12 col-sm-8 col-sm-offset-2\">\r\n\t\t<p class=\"lead text-center\">\r\n\t\t\t[[register:interstitial.intro]]\r\n\t\t</p>\r\n\r\n\t\t" + 
      (guard(context && context['errors'] && context['errors']['length']) ?
        "\r\n\t\t<div class=\"alert alert-warning\">\r\n\t\t\t<p>\r\n\t\t\t\t[[register:interstitial.errors-found]]\r\n\t\t\t</p>\r\n\t\t\t<ul>\r\n\t\t\t\t" + 
          compiled.blocks['errors'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n</div>\r\n\r\n<form role=\"form\" method=\"post\" action=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/register/complete/?_csrf=" + 
      __escape(guard(context && context['config'] && context['config']['csrf_token'])) + 
      "\" enctype=\"multipart/form-data\">\r\n\t" + 
      compiled.blocks['sections'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 col-sm-8 col-sm-offset-2\">\r\n\t\t\t<button class=\"btn btn-primary btn-block\">[[topic:composer.submit]]</button>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<form role=\"form\" method=\"post\" action=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/register/abort\">\r\n\t<p class=\"text-center\">\r\n\t\t<button class=\"btn btn-link\">[[register:cancel_registration]]</button>\r\n\t</p>\r\n</form>";
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
    'errors': function errors(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['errors']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li>" + 
          __escape(guard(value)) + 
          "</li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sections': function sections(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['sections']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 col-sm-8 col-sm-offset-2\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t" + 
          __escape(guard(value)) + 
          "\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
