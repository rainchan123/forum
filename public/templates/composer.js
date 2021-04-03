
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
    return "<div component=\"composer\" class=\"composer" + 
      (guard(context && context['resizable']) ?
        " resizable" :
        "") + 
      (guard(context && context['isTopicOrMain']) ?
        "" :
        " reply") + 
      "\">\r\n\r\n\t<div class=\"composer-container\">\r\n\t\t<nav class=\"navbar navbar-fixed-top mobile-navbar hidden-md hidden-lg\">\r\n\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t<button class=\"btn btn-sm btn-primary composer-discard\" data-action=\"discard\" tabindex=\"-1\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t\t<button class=\"btn btn-sm btn-primary composer-minimize\" data-action=\"minimize\" tabindex=\"-1\"><i class=\"fa fa-minus\"></i></button>\r\n\t\t\t</div>\r\n\t\t\t" + 
      (guard(context && context['isTopic']) ?
        "\r\n\t\t\t<div class=\"category-name-container\">\r\n\t\t\t\t<span class=\"category-name\"></span> <i class=\"fa fa-sort\"></i>\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t" + 
      (guard(context && context['isTopicOrMain']) ?
        "" :
        "\r\n\t\t\t<h4 class=\"title\">[[topic:composer.replying_to, \"" + 
          __escape(guard(context && context['title'])) + 
          "\"]]</h4>\r\n\t\t\t") + 
      "\r\n\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t<button class=\"btn btn-sm btn-primary composer-submit\" data-action=\"post\" tabindex=\"-1\"><i class=\"fa fa-chevron-right\"></i></button>\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\t\t<div class=\"row title-container\">\r\n\t\t\t" + 
      (guard(context && context['isTopic']) ?
        "\r\n\t\t\t<div class=\"category-list-container hidden-sm hidden-xs\"></div>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      (guard(context && context['showHandleInput']) ?
        "\r\n\t\t\t<div data-component=\"composer/handle\">\r\n\t\t\t\t<input class=\"handle form-control\" type=\"text\" tabindex=\"1\" placeholder=\"[[topic:composer.handle_placeholder]]\" value=\"" + 
          __escape(guard(context && context['handle'])) + 
          "\" />\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t<div data-component=\"composer/title\">\r\n\t\t\t\t" + 
      (guard(context && context['isTopicOrMain']) ?
        "\r\n\t\t\t\t<input class=\"title form-control\" type=\"text\" tabindex=\"1\" placeholder=\"[[topic:composer.title_placeholder]]\" value=\"" + 
          __escape(guard(context && context['title'])) + 
          "\"/>\r\n\t\t\t\t" :
        "\r\n\t\t\t\t<span class=\"title form-control\">[[topic:composer.replying_to, \"" + 
          __escape(guard(context && context['title'])) + 
          "\"]]</span>\r\n\t\t\t\t") + 
      "\r\n\t\t\t\t<div id=\"quick-search-container\" class=\"quick-search-container hidden\">\r\n\t\t\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\r\n\t\t\t\t\t<div class=\"quick-search-results-container\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"pull-right draft-icon hidden-xs hidden-sm\"></div>\r\n\r\n\t\t\t<div class=\"btn-group pull-right action-bar hidden-sm hidden-xs\">\r\n\t\t\t\t<button class=\"btn btn-default composer-discard\" data-action=\"discard\" tabindex=\"-1\"><i class=\"fa fa-times\"></i> [[topic:composer.discard]]</button>\r\n\r\n\t\t\t\t<button class=\"btn btn-primary composer-submit\" data-action=\"post\" tabindex=\"6\"><i class=\"fa fa-check\"></i> [[topic:composer.submit]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"category-tag-row\">\r\n\t\t\t<div class=\"btn-toolbar formatting-bar\">\r\n\t\t\t\t<ul class=\"formatting-group\">\r\n\t\t\t\t\t" + 
      compiled.blocks['formatting'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t\t\t\t" + 
      (guard(context && context['privileges'] && context['privileges']['upload:post:image']) ?
        "\r\n\t\t\t\t\t<li class=\"img-upload-btn\" data-format=\"picture\" tabindex=\"-1\" title=\"[[modules:composer.upload-picture]]\">\r\n\t\t\t\t\t\t<i class=\"fa fa-file-image-o\"></i>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t" + 
      (guard(context && context['privileges'] && context['privileges']['upload:post:file']) ?
        "\r\n\t\t\t\t\t<li class=\"file-upload-btn\" data-format=\"upload\" tabindex=\"-1\" title=\"[[modules:composer.upload-file]]\">\r\n\t\t\t\t\t\t<i class=\"fa fa-file-o\"></i>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t\t<form id=\"fileForm\" method=\"post\" enctype=\"multipart/form-data\">\r\n\t\t\t\t\t\t<input type=\"file\" id=\"files\" name=\"files[]\" multiple class=\"gte-ie9 hide\"/>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row write-preview-container\">\r\n\t\t\t<div class=\"write-container\">\r\n\t\t\t\t<div class=\"help-text\">\r\n\t\t\t\t\t<span class=\"help hidden\">[[modules:composer.compose]] <i class=\"fa fa-question-circle\"></i></span>\r\n\t\t\t\t\t<span class=\"toggle-preview hide\">[[modules:composer.show_preview]]</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"pull-right draft-icon hidden-md hidden-lg\"></div>\r\n\t\t\t\t<textarea class=\"write\" tabindex=\"4\" placeholder=\"[[modules:composer.textarea.placeholder]]\"></textarea>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"hidden-sm hidden-xs preview-container\">\r\n\t\t\t\t<div class=\"help-text\">\r\n\t\t\t\t\t<span class=\"toggle-preview\">[[modules:composer.hide_preview]]</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"preview well\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t" + 
      (guard(context && context['isTopicOrMain']) ?
        "\r\n\t\t<div class=\"tag-row\">\r\n\t\t\t<div class=\"tags-container\">\r\n\t\t\t\t<div class=\"btn-group dropup " + 
          (guard(context && context['tagWhitelist'] && context['tagWhitelist']['length']) ?
            "" :
            "hidden") + 
          "\" component=\"composer/tag/dropdown\">\r\n\t\t\t\t\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\t\t\t\t\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"><i class=\"fa fa-tags\"></i></span>\r\n\t\t\t\t\t\t[[tags:select_tags]]\r\n\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t" + 
          compiled.blocks['tagWhitelist'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<input class=\"tags\" type=\"text\" class=\"form-control\" placeholder=\"[[tags:enter_tags_here, " + 
          __escape(guard(context && context['minimumTagLength'])) + 
          ", " + 
          __escape(guard(context && context['maximumTagLength'])) + 
          "]]\" tabindex=\"5\"/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard(context && context['isTopic']) ?
        "\r\n\t\t<ul class=\"category-selector visible-xs visible-sm\">\r\n\r\n\t\t</ul>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t<div class=\"imagedrop\"><div>[[topic:composer.drag_and_drop_images]]</div></div>\r\n\r\n\t\t<div class=\"resizer\"><div class=\"trigger text-center\"><i class=\"fa\"></i></div></div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    'formatting': function formatting(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['formatting']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t" + 
          (guard(context && context['formatting'] && context['formatting'][key0] && context['formatting'][key0]['spacer']) ?
            "\r\n\t\t\t\t\t\t<li class=\"spacer\"></li>\r\n\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t" + 
              ((guard(context && context['formatting'] && context['formatting'][key0] && context['formatting'][key0]['visibility'] && context['formatting'][key0]['visibility']['desktop']) && ((guard(context && context['isTopicOrMain']) && guard(context && context['formatting'] && context['formatting'][key0] && context['formatting'][key0]['visibility'] && context['formatting'][key0]['visibility']['main'])) || (!guard(context && context['isTopicOrMain']) && guard(context && context['formatting'] && context['formatting'][key0] && context['formatting'][key0]['visibility'] && context['formatting'][key0]['visibility']['reply'])))) ?
                "\r\n\t\t\t\t\t\t<li tabindex=\"-1\" data-format=\"" + 
                  __escape(guard(context && context['formatting'] && context['formatting'][key0] && context['formatting'][key0]['name'])) + 
                  "\" title=\"" + 
                  __escape(guard(context && context['formatting'] && context['formatting'][key0] && context['formatting'][key0]['title'])) + 
                  "\"><i class=\"" + 
                  __escape(guard(context && context['formatting'] && context['formatting'][key0] && context['formatting'][key0]['className'])) + 
                  "\"></i></li>\r\n\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'tagWhitelist': function tagWhitelist(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['tagWhitelist']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<li data-tag=\"" + 
          __escape(guard(value)) + 
          "\"><a href=\"#\">" + 
          __escape(guard(value)) + 
          "</a></li>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
