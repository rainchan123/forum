
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
    return "<div class=\"persona-usercard\">\r\n\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['userslug'])) + 
      "\">\r\n\t\t" + 
      (guard(context && context['picture']) ?
        "\r\n\t\t<div class=\"usercard-picture\" style=\"background-image:url(" + 
          __escape(guard(context && context['picture'])) + 
          ")\"></div>\r\n\t\t" :
        "\r\n\t\t<div class=\"usercard-picture\" style=\"background-color: " + 
          __escape(guard(context && context['icon:bgColor'])) + 
          ";\">" + 
          __escape(guard(context && context['icon:text'])) + 
          "</div>\r\n\t\t") + 
      "\r\n\t</a>\r\n\t<div class=\"usercard-body\">\r\n\t\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/user/" + 
      __escape(guard(context && context['userslug'])) + 
      "\">\r\n\t\t\t<span class=\"usercard-name\">" + 
      (guard(context && context['fullname']) ?
        __escape(guard(context && context['fullname'])) :
        __escape(guard(context && context['username']))) + 
      "</span><br />\r\n\t\t\t<span class=\"usercard-username\">" + 
      (guard(context && context['banned']) ?
        "[[user:banned]]" :
        "@" + 
          __escape(guard(context && context['username']))) + 
      "</span>\r\n\t\t\t" + 
      (guard(context && context['banned']) ?
        "" :
        "\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard(context && context['status'])) + 
          "\" title=\"[[global:" + 
          __escape(guard(context && context['status'])) + 
          "]]\"></i>\r\n\t\t\t") + 
      "\r\n\t\t</a>\r\n\r\n\t\t<div class=\"row usercard-info\">\r\n\t\t\t<div class=\"col-xs-4\">\r\n\t\t\t\t<small>[[global:posts]]</small>\r\n\t\t\t\t<span class=\"human-readable-number\">" + 
      __escape(guard(context && context['postcount'])) + 
      "</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-4\">\r\n\t\t\t\t<small>[[global:reputation]]</small>\r\n\t\t\t\t<span class=\"human-readable-number\">" + 
      __escape(guard(context && context['reputation'])) + 
      "</span>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<button class=\"btn-morph fab " + 
      (guard(context && context['banned']) ?
        " hide" :
        "") + 
      "\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<span class=\"s1\"></span>\r\n\t\t\t\t\t<span class=\"s2\"></span>\r\n\t\t\t\t\t<span class=\"s3\"></span>\r\n\t\t\t\t</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
