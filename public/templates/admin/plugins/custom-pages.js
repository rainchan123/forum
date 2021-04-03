
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
    return "<div class=\"row\">\r\n    <div class=\"col-sm-2 col-xs-12 settings-header\">Active Routes</div>\r\n    <div class=\"col-sm-10 col-xs-12\">\r\n        <p class=\"lead\">\r\n            Define and customise your new routes here.\r\n        </p>\r\n        <p>\r\n           You can add content to your new routes from <a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/admin/extend/widgets\">Extend &rarr; Widgets</a>.\r\n        </p>\r\n        <p>\r\n            You can add your new route to the site navigation from <a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/admin/general/navigation\">General &rarr; Navigation</a> and select \"Custom Route\".\r\n        </p>\r\n        <p>\r\n            If you wish to set a custom page as your homepage, go to <a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/admin/general/homepage\">General &rarr; Homepage</a> and select \"Custom\".\r\n        </p>\r\n        \r\n        <div id=\"custom-pages\">\r\n            " + 
      compiled.blocks['pages'](helpers, context, guard, iter, helper) + 
      "\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"template well hidden\">\r\n    <form>\r\n        <span class=\"pull-right\"><i class=\"fa fa-times pointer\"></i></span>\r\n\r\n        <label>Page Title\r\n        <input type=\"text\" class=\"form-control\" name=\"name\" value=\"\" placeholder=\"Page Title\" />\r\n        </label>\r\n\r\n        <label>Path to Page\r\n        <input type=\"text\" class=\"form-control\" name=\"route\" value=\"\" placeholder=\"/my-page\" />\r\n        </label>\r\n\r\n        <br /><br />\r\n        <label>Restrict access to groups (leave blank for public):\r\n        <input type=\"text\" class=\"form-control groups-list\" name=\"groups\" value=\"\" placeholder=\"\" />\r\n        </label>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"floating-button\">\r\n    <button id=\"add\" class=\"success mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n        <i class=\"material-icons\">note_add</i>\r\n    </button>\r\n    <button id=\"save\" class=\"primary btn-primary mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n        <i class=\"material-icons\">save</i>\r\n    </button>\r\n</div>";
  }

  compiled.blocks = {
    'pages': function pages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['pages']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n            <div class=\"well\">\r\n                <form>\r\n                    <span class=\"pull-right\"><i class=\"fa fa-times pointer\"></i></span>\r\n\r\n                    <label>Page Title\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" value=\"" + 
          __escape(guard(context && context['pages'] && context['pages'][key0] && context['pages'][key0]['name'])) + 
          "\" placeholder=\"Page Title\" />\r\n                    </label>\r\n\r\n                    <label>Path to Page\r\n                    <input type=\"text\" class=\"form-control\" name=\"route\" value=\"" + 
          __escape(guard(context && context['pages'] && context['pages'][key0] && context['pages'][key0]['route'])) + 
          "\" placeholder=\"/my-page\" />\r\n                    </label>\r\n\r\n                    <br /><br />\r\n                    <label>Restrict access to groups (leave blank for public):\r\n                    <input type=\"text\" class=\"form-control groups-list\" name=\"groups\" value=\"" + 
          __escape(guard(context && context['pages'] && context['pages'][key0] && context['pages'][key0]['groups'])) + 
          "\" placeholder=\"\" />\r\n                    </label>\r\n                </form>\r\n            </div>\r\n            ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
