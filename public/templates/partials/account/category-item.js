
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard(context && context['cid'])) + 
      "\" data-parent-cid=\"" + 
      __escape(guard(context && context['parentCid'])) + 
      "\" class=\"row clearfix\">\r\n\t<meta itemprop=\"name\" content=\"" + 
      __escape(guard(context && context['name'])) + 
      "\">\r\n\r\n\t<div class=\"content col-xs-12 col-md-10 col-sm-12 depth-" + 
      __escape(guard(context && context['depth'])) + 
      "\">\r\n\t\t<div class=\"icon pull-left\" style=\"" + 
      __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
      "\">\r\n\t\t\t<i class=\"fa fa-fw " + 
      __escape(guard(context && context['icon'])) + 
      "\"></i>\r\n\t\t</div>\r\n\r\n\t\t<h2 class=\"title\">\r\n\t\t\t" + 
      (guard(context && context['isSection']) ?
        "\r\n" + 
          __escape(guard(context && context['name'])) + 
          "\r\n" :
        "\r\n" + 
          (guard(context && context['link']) ?
            "\r\n<a href=\"" + 
              __escape(guard(context && context['link'])) + 
              "\" itemprop=\"url\">\r\n" :
            "\r\n<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/category/" + 
              __escape(guard(context && context['slug'])) + 
              "\" itemprop=\"url\">\r\n") + 
          "\r\n" + 
          __escape(guard(context && context['name'])) + 
          "\r\n</a>\r\n") + 
      "\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t" + 
      (guard(context && context['descriptionParsed']) ?
        "\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t" + 
          __escape(guard(context && context['descriptionParsed'])) + 
          "\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t" + 
      (guard(context && context['config'] && context['config']['loggedIn']) ?
        "\r\n<div class=\"btn-group topic-watch-dropdown bottom-sheet\" component=\"topic/watch\">\r\n\r\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\r\n\t\t<span component=\"category/watching/menu\" " + 
          (guard(context && context['isWatched']) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:watching]]</span></span>\r\n\r\n\t\t<span component=\"category/notwatching/menu\" " + 
          (guard(context && context['isNotWatched']) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-clock-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:not-watching]]</span></span>\r\n\r\n\t\t<span component=\"category/ignoring/menu\" " + 
          (guard(context && context['isIgnored']) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:ignoring]]</span></span>\r\n\r\n\t\t<span class=\"caret\"></span>\r\n\t</button>\r\n\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t<li><a href=\"#\" component=\"category/watching\" data-state=\"watching\"><i component=\"category/watching/check\" class=\"fa fa-fw " + 
          (guard(context && context['isWatched']) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-inbox\"></i> [[category:watching]]<p class=\"help-text\"><small>[[category:watching.description]]</small></p></a></li>\r\n\r\n\t\t<li><a href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\"><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
          (guard(context && context['isNotWatched']) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-clock-o\"></i> [[category:not-watching]]<p class=\"help-text\"><small>[[category:not-watching.description]]</small></p></a></li>\r\n\r\n\t\t<li><a href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\"><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
          (guard(context && context['isIgnored']) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[category:ignoring]]<p class=\"help-text\"><small>[[category:ignoring.description]]</small></p></a></li>\r\n\t</ul>\r\n</div>\r\n" :
        "") + 
      "\r\n</li>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
