
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
    return "<div class=\"row\" id=\"navigation\">\n\t<div class=\"col-lg-9\">\n\t\t<div class=\"clearfix\">\n\t\t\t<ul id=\"active-navigation\" class=\"nav navbar-nav\">\n\t\t\t\t" + 
      compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<hr/>\n\n\t\t<ul id=\"enabled\">\n\t\t\t" + 
      compiled.blocks['enabled'](helpers, context, guard, iter, helper) + 
      "\n\t\t</ul>\n\t</div>\n\n\t<div class=\"col-lg-3\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/settings/navigation:available-menu-items]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<ul id=\"available\">\n\t\t\t\t\t<li data-id=\"custom\" class=\"clearfix\">\n\t\t\t\t\t\t<div data-id=\"custom\" class=\"drag-item alert alert-success pull-left\">\n\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-plus-circle\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>[[admin/settings/navigation:custom-route]]</strong>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t" + 
      compiled.blocks['available'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['navigation']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li data-index=\"" + 
          __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['index'])) + 
          "\" class=\"" + 
          __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['class'])) + 
          " " + 
          (guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['selected']) ?
            " active " :
            "") + 
          "\">\n\t\t\t\t\t<a href=\"#\" title=\"" + 
          __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['route'])) + 
          "\" id=\"" + 
          __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['id'])) + 
          "\">\n\t\t\t\t\t\t<i class=\"fa fa-fw " + 
          (guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['iconClass']) ?
            __escape(guard(context && context['navigation'] && context['navigation'][key0] && context['navigation'][key0]['iconClass'])) :
            "") + 
          "\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'enabled': function enabled(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['enabled']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li data-index=\"" + 
          __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['index'])) + 
          "\" class=\"well " + 
          (guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['selected']) ?
            "" :
            "hidden") + 
          "\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>[[admin/settings/navigation:icon]]</label>\n\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t<span class=\"iconPicker\"><i class=\"fa fa-2x " + 
          __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['iconClass'])) + 
          "\"></i>\n\t\t\t\t\t\t\t\t\t<a class=\"change-icon-link " + 
          (guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['iconClass']) ?
            "hidden" :
            "") + 
          "\" href=\"#\">[[admin/settings/navigation:change-icon]]</a>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"hidden\" name=\"iconClass\" value=\"" + 
          __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['iconClass'])) + 
          "\" />\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>[[admin/settings/navigation:route]]</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"route\" value=\"" + 
          __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['route'])) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>[[admin/settings/navigation:class]]</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"class\" value=\"" + 
          __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['class'])) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>[[admin/settings/navigation:id]]</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"id\" value=\"" + 
          __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['id'])) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>[[admin/settings/navigation:text]]</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control unescape\" type=\"text\" name=\"text\" value=\"" + 
          __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['text'])) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>[[admin/settings/navigation:text-class]]</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"textClass\" value=\"" + 
          __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['textClass'])) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>[[admin/settings/navigation:tooltip]]</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control unescape\" type=\"text\" name=\"title\" value=\"" + 
          __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['title'])) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<strong>[[admin/settings/navigation:groups]]</strong>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<select name=\"groups\" class=\"form-control\" size=\"10\" multiple>\n\t\t\t\t\t\t\t" + 
          iter(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['groups']), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['groups'] && context['enabled'][key0]['groups'][key1] && context['enabled'][key0]['groups'][key1]['displayName'])) + 
              "\"" + 
              (guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['groups'] && context['enabled'][key0]['groups'][key1] && context['enabled'][key0]['groups'][key1]['selected']) ?
                " selected" :
                "") + 
              ">" + 
              __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['groups'] && context['enabled'][key0]['groups'][key1] && context['enabled'][key0]['groups'][key1]['displayName'])) + 
              "</option>\n\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" name=\"property:targetBlank\" " + 
          (guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['properties'] && context['enabled'][key0]['properties']['targetBlank']) ?
            "checked" :
            "") + 
          "/>\n\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/navigation:open-new-window]]</strong></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button class=\"btn btn-danger delete\">[[admin/settings/navigation:btn.delete]]</button>\n\t\t\t\t\t" + 
          (guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['enabled']) ?
            "\n\t\t\t\t\t<button class=\"btn btn-warning toggle\">[[admin/settings/navigation:btn.disable]]</button>\n\t\t\t\t\t" :
            "\n\t\t\t\t\t<button class=\"btn btn-success toggle\">[[admin/settings/navigation:btn.enable]]</button>\n\t\t\t\t\t") + 
          "\n\t\t\t\t\t<input type=\"hidden\" name=\"enabled\" value=\"" + 
          __escape(guard(context && context['enabled'] && context['enabled'][key0] && context['enabled'][key0]['enabled'])) + 
          "\" />\n\t\t\t\t</form>\n\t\t\t</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'available': function available(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['available']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<li data-id=\"" + 
          __escape(index) + 
          "\" class=\"clearfix\">\n\t\t\t\t\t\t<div data-id=\"" + 
          __escape(index) + 
          "\" class=\"drag-item alert " + 
          (guard(context && context['available'] && context['available'][key0] && context['available'][key0]['core']) ?
            "alert-warning" :
            "alert-info") + 
          " pull-left\">\n\t\t\t\t\t\t\t<i class=\"fa fa-fw " + 
          (guard(context && context['available'] && context['available'][key0] && context['available'][key0]['iconClass']) ?
            __escape(guard(context && context['available'] && context['available'][key0] && context['available'][key0]['iconClass'])) :
            "fa-navicon") + 
          "\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>" + 
          __escape(guard(context && context['available'] && context['available'][key0] && context['available'][key0]['text'])) + 
          "</strong> " + 
          __escape(guard(context && context['available'] && context['available'][key0] && context['available'][key0]['route'])) + 
          " <br/>\n\t\t\t\t\t\t\t" + 
          (guard(context && context['available'] && context['available'][key0] && context['available'][key0]['core']) ?
            " [[admin/settings/navigation:core]] " :
            " [[admin/settings/navigation:plugin]] ") + 
          "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
