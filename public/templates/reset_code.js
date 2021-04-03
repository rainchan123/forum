
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
      "\r\n\r\n\r\n" + 
      (guard(context && context['valid']) ?
        "\r\n<div class=\"well\">\r\n\t" + 
          (guard(context && context['displayExpiryNotice']) ?
            "\r\n\t<div class=\"alert alert-warning\">\r\n\t\t[[reset_password:password_expired]]\r\n\t</div>\r\n\t" :
            "") + 
          "\r\n\t<div class=\"alert alert-success hidden\" id=\"success\">\r\n\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n\t\t<strong>[[reset_password:password_changed.title]]</strong>\r\n\t\t<p>[[reset_password:password_changed.message]]</p>\r\n\t</div>\r\n\t<div class=\"alert alert-warning hidden\" id=\"notice\">\r\n\t\t<strong></strong>\r\n\t\t<p></p>\r\n\t</div>\r\n\t<form onsubmit=\"return false;\" id=\"reset-form\" class=\"row\">\r\n\t\t<div class=\"col-sm-6\">\r\n\t\t\t<label for=\"password\">[[reset_password:new_password]]</label>\r\n\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:new_password]]\" id=\"password\" /><br />\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-6\">\r\n\t\t\t<label for=\"repeat\">[[reset_password:repeat_password]]</label>\r\n\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:repeat_password]]\" id=\"repeat\" /><br />\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<button class=\"btn btn-primary btn-block\" id=\"reset\" type=\"submit\">[[reset_password:reset_password]]</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n" :
        "\r\n<div class=\"panel panel-default panel-danger\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">[[reset_password:wrong_reset_code.title]]</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<p>[[reset_password:wrong_reset_code.message]]</p>\r\n\t</div>\r\n</div>\r\n");
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
