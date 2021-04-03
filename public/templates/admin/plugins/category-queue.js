
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
    return "<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">Category Settings</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<p class=\"lead\">\n\t\t\tSelect categories to automatically queue topics from.\n\t\t</p>\n\t\t<div class=\"row category-defaults\">\n\t\t\t<form role=\"form\" class=\"category-queue-settings\">\n\t\t\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"floating-button\">\n\t<button id=\"save\" class=\"primary btn-primary mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t\t<i class=\"material-icons\">save</i>\n\t</button>\n</div>";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<div class=\"form-group col-sm-4 col-xs-6\">\n\t\t\t\t\t<label for=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\">" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "</label>\n\t\t\t\t\t<select data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" id=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" name=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" title=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\" class=\"form-control\">\n\t\t\t\t\t\t<option value=\"\">Don't queue</option>\n\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\">queue</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
