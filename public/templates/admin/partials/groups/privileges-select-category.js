
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
    return "<div component=\"category-selector\" class=\"btn-group\">\n\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t<span>[[admin/manage/groups:privileges]]</span> <span class=\"caret\"></span>\n\t</button>\n\t<div component=\"category-selector-search\" class=\"hidden\">\n\t\t<input type=\"text\" class=\"form-control\" autocomplete=\"off\">\n\t</div>\n\t<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu dropdown-menu-right\" role=\"menu\">\n\t\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n\t\t\t<a role=\"menu-item\">[[search:no-matches]]</a>\n\t\t</li>\n\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n\t</ul>\n</div>";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li role=\"presentation\" class=\"category " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabledClass']) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" data-name=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\" data-parent-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['parentCid'])) + 
          "\">\n\t\t\t<a role=\"menu-item\">" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['level'])) + 
          "<span component=\"category-markup\">" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon']) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i style=\"color: " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['color'])) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon'])) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "</span></a>\n\t\t</li>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
