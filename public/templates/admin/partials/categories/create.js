
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
    return "<form type=\"form\">\n\t<div class=\"form-group\">\n\t\t<label for=\"name\">[[admin/manage/categories:name]]</label>\n\t\t<input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" />\n\t</div>\n\t<div class=\"form-group\" id=\"parentCidGroup\">\n\t\t<label for=\"parentCid\">[[admin/manage/categories:optional-parent-category]]</label>\n\t\t<div component=\"category-selector\" class=\"btn-group " + 
      (guard(context && context['pullRight']) ?
        "pull-right" :
        "") + 
      "\">\r\n\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t<span component=\"category-selector-selected\">" + 
      (guard(context && context['selectedCategory']) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(context && context['selectedCategory'])])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['icon'])) + 
          "\" style=\"color: " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['color'])) + 
          ";\"></i></span> " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['name'])) :
        "\r\n\t\t[[topic:thread_tools.select_category]]") + 
      "</span> <span class=\"caret\"></span>\r\n\t</button>\r\n\t<div component=\"category-selector-search\" class=\"hidden\">\r\n\t\t<input type=\"text\" class=\"form-control\" autocomplete=\"off\">\r\n\t</div>\r\n\t<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu " + 
      (guard(context && context['pullRight']) ?
        "dropdown-menu-right" :
        "") + 
      "\" role=\"menu\">\r\n\t\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\r\n\t\t\t<a role=\"menu-item\">[[search:no-matches]]</a>\r\n\t\t</li>\r\n\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n</div>\n\t</div>\n\n\t<div class=\"form-group\" id=\"cloneFromCidGroup\">\n\t\t<label for=\"cloneFromCid\">[[admin/manage/categories:optional-clone-settings]]</label>\n\t\t<div component=\"category-selector\" class=\"btn-group " + 
      (guard(context && context['pullRight']) ?
        "pull-right" :
        "") + 
      "\">\r\n\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t<span component=\"category-selector-selected\">" + 
      (guard(context && context['selectedCategory']) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(context && context['selectedCategory'])])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['icon'])) + 
          "\" style=\"color: " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['color'])) + 
          ";\"></i></span> " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['name'])) :
        "\r\n\t\t[[topic:thread_tools.select_category]]") + 
      "</span> <span class=\"caret\"></span>\r\n\t</button>\r\n\t<div component=\"category-selector-search\" class=\"hidden\">\r\n\t\t<input type=\"text\" class=\"form-control\" autocomplete=\"off\">\r\n\t</div>\r\n\t<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu " + 
      (guard(context && context['pullRight']) ?
        "dropdown-menu-right" :
        "") + 
      "\" role=\"menu\">\r\n\t\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\r\n\t\t\t<a role=\"menu-item\">[[search:no-matches]]</a>\r\n\t\t</li>\r\n\t\t" + 
      iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li role=\"presentation\" class=\"category " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabledClass']) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" data-name=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\" data-parent-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['parentCid'])) + 
          "\">\r\n\t\t\t<a role=\"menu-item\">" + 
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
          "</span></a>\r\n\t\t</li>\r\n\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t</ul>\r\n</div>\n\t\t<label>\n\t\t\t<input id=\"cloneChildren\" name=\"cloneChildren\" type=\"checkbox\">\n\t\t\t<strong>[[admin/manage/categories:clone-children]]</strong>\n\t\t</label>\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<label>\n\t\t\t<input id=\"disabled\" name=\"disabled\" type=\"checkbox\">\n\t\t\t<strong>[[admin/manage/categories:disable-on-create]]</strong>\n\t\t</label>\n\t</div>\n\n</form>";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li role=\"presentation\" class=\"category " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabledClass']) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" data-name=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\" data-parent-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['parentCid'])) + 
          "\">\r\n\t\t\t<a role=\"menu-item\">" + 
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
          "</span></a>\r\n\t\t</li>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
