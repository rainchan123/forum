
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
    return "<div component=\"category/dropdown\" class=\"btn-group pull-right category-dropdown-container bottom-sheet " + 
      (guard(context && context['categories'] && context['categories']['length']) ?
        "" :
        "hidden") + 
      "\">\r\n    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n        " + 
      (guard(context && context['selectedCategory']) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(context && context['selectedCategory'])])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['icon'])) + 
          "\" style=\"color: " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['color'])) + 
          ";\"></i></span> <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['name'])) + 
          "</span>" :
        "\r\n        <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[unread:all_categories]]</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-list\"></i></span>") + 
      " <span class=\"caret\"></span>\r\n    </button>\r\n    <div component=\"category-selector-search\" class=\"hidden\">\r\n        <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\r\n    </div>\r\n    <ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\r\n        <li role=\"presentation\" class=\"category\">\r\n            <a role=\"menu-item\" href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/" + 
      __escape(guard(context && context['allCategoriesUrl'])) + 
      "\"><i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
      (guard(context && context['selectedCategory']) ?
        "invisible" :
        "") + 
      "\"></i> [[unread:all_categories]]</a>\r\n        </li>\r\n        " + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n    </ul>\r\n</div>";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n        <li role=\"presentation\" class=\"category " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabledClass']) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" data-parent-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['parentCid'])) + 
          "\" data-name=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\">\r\n            <a role=\"menu-item\" href=\"#\">" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['level'])) + 
          "<i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['selected']) ?
            "" :
            "invisible") + 
          "\"></i><span component=\"category-markup\">" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon']) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i class=\"fa fa-fw fa-stack-1x " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon'])) + 
              "\" style=\"color: " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['color'])) + 
              ";\"></i></span>" :
            "") + 
          " " + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "</span></a>\r\n        </li>\r\n        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
