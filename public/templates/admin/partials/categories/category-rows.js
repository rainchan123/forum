
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
    return "<ul data-cid=\"" + 
      __escape(guard(context && context['cid'])) + 
      "\">\n" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n<li class=\"children-placeholder\"></li>\n</ul>\n";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" data-parent-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['parentCid'])) + 
          "\" data-name=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\" " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabled']) ?
            "class=\"disabled\"" :
            "") + 
          ">\n        <div class=\"row category-row\">\n            <div class=\"col-md-9\">\n                <div class=\"clearfix\">\n                    <div class=\"toggle\">\n                        <i class=\"fa fa-minus\"></i>\n                    </div>\n                    <div class=\"information\">\n                        <div class=\"icon\" style=\"\n                            color: " + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['color'])) + 
          ";\n                            background-color: " + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['bgColor'])) + 
          ";\n                            " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['backgroundImage']) ?
            "\n                            background-image: url('" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['backgroundImage'])) + 
              "');\n                            " :
            "") + 
          "\n                        \">\n                            <i data-name=\"icon\" value=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon'])) + 
          "\" class=\"fa " + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon'])) + 
          "\"></i>\n                        </div>\n                        <h5 class=\"category-header\"><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/admin/manage/categories/" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\">" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "</a></h5>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"clearfix pull-right text-right\">\n                    <div class=\"btn-group category-tools\">\n                        <button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></button>\n                        <ul class=\"dropdown-menu dropdown-menu-right\">\n                            <li><a href=\"./categories/" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\">[[admin/manage/categories:edit]]</a></li>\n                            <li><a href=\"./categories/" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "/analytics\">[[admin/manage/categories:analytics]]</a></li>\n                            <li><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/admin/manage/privileges/" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\">[[admin/manage/categories:privileges]]</a></li>\n\n                            <li><a href=\"" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['link']) ?
            __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['link'])) :
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/category/" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid']))) + 
          "\" target=\"_blank\">[[admin/manage/categories:view-category]]</a></li>\n\n                            <li>\n                                <a href=\"#\" data-disable-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" data-action=\"toggle\" data-disabled=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabled'])) + 
          "\">\n                                " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabled']) ?
            "\n                                [[admin/manage/categories:enable]]\n                                " :
            "\n                                [[admin/manage/categories:disable]]\n                                ") + 
          "\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
