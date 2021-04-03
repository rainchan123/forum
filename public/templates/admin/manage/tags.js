
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
    return "<div class=\"tags row\">\n\t<div class=\"col-lg-9\">\n\t\t<div class=\"panel panel-default tag-management\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"alert alert-info\">\n\t\t\t\t\t<strong>[[admin/manage/tags:create-modify]]</strong>\n\t\t\t\t\t<p>[[admin/manage/tags:description]]</p>\n\t\t\t\t</div>\n\n\t\t\t\t" + 
      (guard(context && context['tags'] && context['tags']['length']) ?
        "" :
        "\n\t\t\t\t[[admin/manage/tags:none]]\n\t\t\t\t") + 
      "\n\n\t\t\t\t<div class=\"tag-list\">\n\t\t\t\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-lg-3 acp-sidebar\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<button class=\"btn btn-primary btn-block\" id=\"create\">[[admin/manage/tags:create]]</button>\n\t\t\t\t<button class=\"btn btn-primary btn-block\" id=\"modify\">[[admin/manage/tags:modify]]</button>\n\t\t\t\t<button class=\"btn btn-primary btn-block\" id=\"rename\">[[admin/manage/tags:rename]]</button>\n\t\t\t\t<button class=\"btn btn-warning btn-block\" id=\"deleteSelected\">[[admin/manage/tags:delete]]</button>\n\t\t\t\t<hr />\n\t\t\t\t<a class=\"btn btn-default btn-block\" href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/admin/settings/tags\">\n\t\t\t\t\t<i class=\"fa fa-external-link\"></i>\n\t\t\t\t\t[[admin/manage/tags:settings]]\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"tag-search\" placeholder=\"[[admin/manage/tags:search]]\"/><br/>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"modal fade\" id=\"create-modal\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">[[admin/manage/tags:create]]</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"create-tag-name\">[[admin/manage/tags:name]]</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"create-tag-name\" placeholder=\"[[admin/manage/tags:name]]\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">[[admin/manage/tags:create]]</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"rename-modal hidden\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"value\">[[admin/manage/tags:name]]</label>\n\t\t\t<input id=\"value\" data-name=\"value\" value=\"\" class=\"form-control\" />\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['tags']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<div class=\"tag-row\" data-tag=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span class=\"mdl-chip mdl-chip--contact tag-item\" data-tag=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "\" style=\"\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['color']) ?
            "color: " + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['color'])) + 
              ";" :
            "") + 
          "\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['bgColor']) ?
            "background-color: " + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['bgColor'])) + 
              ";" :
            "") + 
          "\">\n\t\t\t\t\t\t\t    <span class=\"mdl-chip__contact mdl-color--light-blue mdl-color-text--white tag-topic-count\">" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['score'])) + 
          "</span>\n\t\t\t\t\t\t\t    <span class=\"mdl-chip__text\">" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"tag-modal hidden\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"bgColor\">[[admin/manage/tags:bg-color]]</label>\n\t\t\t\t\t\t\t\t<input type=\"color\" id=\"bgColor\" placeholder=\"#ffffff\" data-name=\"bgColor\" value=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['bgColor'])) + 
          "\" class=\"form-control category_bgColor\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"color\">[[admin/manage/tags:text-color]]</label>\n\t\t\t\t\t\t\t\t<input type=\"color\" id=\"color\" placeholder=\"#a2a2a2\" data-name=\"color\" value=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['color'])) + 
          "\" class=\"form-control category_color\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input id=\"reset-colors\" type=\"checkbox\"> <strong>[[admin/manage/tags:reset-colors]]</strong>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
