
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
    return compiled.blocks['themes'](helpers, context, guard, iter, helper) + 
      "\n";
  }

  compiled.blocks = {
    'themes': function themes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['themes']), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\" data-type=\"" + 
          __escape(guard(context && context['themes'] && context['themes'][key0] && context['themes'][key0]['type'])) + 
          "\" data-theme=\"" + 
          __escape(guard(context && context['themes'] && context['themes'][key0] && context['themes'][key0]['id'])) + 
          "\"" + 
          (guard(context && context['themes'] && context['themes'][key0] && context['themes'][key0]['css']) ?
            " data-css=\"" + 
              __escape(guard(context && context['themes'] && context['themes'][key0] && context['themes'][key0]['css'])) + 
              "\"" :
            "") + 
          ">\n\t<div class=\"theme-card mdl-card mdl-shadow--2dp\">\n\t\t<div class=\"mdl-card__title mdl-card--expand\" style=\"background-image: url('" + 
          __escape(guard(context && context['themes'] && context['themes'][key0] && context['themes'][key0]['screenshot_url'])) + 
          "');\"></div>\n\t\t<div class=\"mdl-card__supporting-text\">\n\t\t\t<h2 class=\"mdl-card__title-text\">" + 
          __escape(guard(context && context['themes'] && context['themes'][key0] && context['themes'][key0]['name'])) + 
          "</h2>\n\t\t\t<p>\n\t\t\t\t" + 
          __escape(guard(context && context['themes'] && context['themes'][key0] && context['themes'][key0]['description'])) + 
          "\n\t\t\t</p>\n\n\t\t\t" + 
          (guard(context && context['themes'] && context['themes'][key0] && context['themes'][key0]['url']) ?
            "\n\t\t\t<p>\n\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['themes'] && context['themes'][key0] && context['themes'][key0]['url'])) + 
              "\" target=\"_blank\">[[admin/appearance/themes:homepage]]</a>\n\t\t\t</p>\n\t\t\t" :
            "") + 
          "\n\t\t</div>\n\t\t<div class=\"mdl-card__actions mdl-card--border\">\n\t\t\t<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" data-action=\"use\">\n\t\t\t\t" + 
          (guard(context && context['themes'] && context['themes'][key0] && context['themes'][key0]['skin']) ?
            "[[admin/appearance/skins:select-skin]]" :
            "[[admin/appearance/themes:select-theme]]") + 
          "\n\t\t\t</a>\n\t\t</div>\n\t</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
