
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
    return "<script defer src=\"" + 
      __escape(guard(context && context['relative_path'])) + 
      "/assets/nodebb.min.js?" + 
      __escape(guard(context && context['config'] && context['config']['cache-buster'])) + 
      "\"></script>\n\n" + 
      compiled.blocks['scripts'](helpers, context, guard, iter, helper) + 
      "\n\n<script>\n    if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', prepareFooter);\n    } else {\n        prepareFooter();\n    }\n\n    function prepareFooter() {\n        " + 
      (guard(context && context['useCustomJS']) ?
        "\n        " + 
          guard(context && context['customJS']) + 
          "\n        " :
        "") + 
      "\n\n        $(document).ready(function () {\n            app.coldLoad();\n        });\n    }\n</script>";
  }

  compiled.blocks = {
    'scripts': function scripts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['scripts']), function each(key0, index, length, value) {
        var key = key0;
        return "\n<script defer type=\"text/javascript\" src=\"" + 
          __escape(guard(context && context['scripts'] && context['scripts'][key0] && context['scripts'][key0]['src'])) + 
          "\"></script>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
