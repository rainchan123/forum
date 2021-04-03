
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
    return "<div id=\"rewards\" class=\"row\">\n\t<div class=\"col-lg-9\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/extend/rewards:rewards]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<ul id=\"active\">\n\t\t\t\t\t" + 
      compiled.blocks['active'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-lg-3 acp-sidebar\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/extend/rewards:control-panel]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<button class=\"btn btn-success btn-md\" id=\"new\">[[admin/extend/rewards:new-reward]]</button>\n\t\t\t\t<button class=\"btn btn-primary btn-md\" id=\"save\">[[global:save_changes]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'active': function active(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['active']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<li data-rid=\"" + 
          __escape(guard(context && context['active'] && context['active'][key0] && context['active'][key0]['rid'])) + 
          "\" data-id=\"" + 
          __escape(guard(context && context['active'] && context['active'][key0] && context['active'][key0]['id'])) + 
          "\">\n\t\t\t\t\t\t<form class=\"main inline-block\">\n\t\t\t\t\t\t\t<div class=\"well inline-block\">\n\t\t\t\t\t\t\t\t<label for=\"condition\">[[admin/extend/rewards:condition-if-users]]</label><br />\n\t\t\t\t\t\t\t\t<select name=\"condition\" data-selected=\"" + 
          __escape(guard(context && context['active'] && context['active'][key0] && context['active'][key0]['condition'])) + 
          "\">\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard(context && context['conditions']), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard(context && context['conditions'] && context['conditions'][key1] && context['conditions'][key1]['condition'])) + 
              "\">" + 
              __escape(guard(context && context['conditions'] && context['conditions'][key1] && context['conditions'][key1]['name'])) + 
              "</option>\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"well inline-block\">\n\t\t\t\t\t\t\t\t<label for=\"condition\">[[admin/extend/rewards:condition-is]]</label><br />\n\t\t\t\t\t\t\t\t<select name=\"conditional\" data-selected=\"" + 
          __escape(guard(context && context['active'] && context['active'][key0] && context['active'][key0]['conditional'])) + 
          "\">\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard(context && context['conditionals']), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard(context && context['conditionals'] && context['conditionals'][key1] && context['conditionals'][key1]['conditional'])) + 
              "\">" + 
              __escape(guard(context && context['conditionals'] && context['conditionals'][key1] && context['conditionals'][key1]['name'])) + 
              "</option>\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"value\" value=\"" + 
          __escape(guard(context && context['active'] && context['active'][key0] && context['active'][key0]['value'])) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"well inline-block\">\n\t\t\t\t\t\t\t\t<label for=\"condition\">[[admin/extend/rewards:condition-then]]</label><br />\n\t\t\t\t\t\t\t\t<select name=\"rid\" data-selected=\"" + 
          __escape(guard(context && context['active'] && context['active'][key0] && context['active'][key0]['rid'])) + 
          "\">\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard(context && context['rewards']), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard(context && context['rewards'] && context['rewards'][key1] && context['rewards'][key1]['rid'])) + 
              "\">" + 
              __escape(guard(context && context['rewards'] && context['rewards'][key1] && context['rewards'][key1]['name'])) + 
              "</option>\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\n\t\t\t\t\t\t<form class=\"rewards inline-block\">\n\t\t\t\t\t\t\t<div class=\"inputs well inline-block\"></div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t\t<div class=\"panel-body inline-block\">\n\t\t\t\t\t\t\t\t<form class=\"main\">\n\t\t\t\t\t\t\t\t\t<label for=\"claimable\">[[admin/extend/rewards:max-claims]]</label><br />\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"claimable\" value=\"" + 
          __escape(guard(context && context['active'] && context['active'][key0] && context['active'][key0]['claimable'])) + 
          "\" placeholder=\"1\" />\n\t\t\t\t\t\t\t\t\t<small>[[admin/extend/rewards:zero-infinite]]</small>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body inline-block\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger delete\">[[admin/extend/rewards:delete]]</button>\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['active'] && context['active'][key0] && context['active'][key0]['disabled']) ?
            "\n\t\t\t\t\t\t\t\t<button class=\"btn btn-success toggle\">[[admin/extend/rewards:enable]]</button>\n\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t<button class=\"btn btn-warning toggle\">[[admin/extend/rewards:disable]]</button>\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
