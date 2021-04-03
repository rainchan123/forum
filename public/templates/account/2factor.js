
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
    return (guard(context && context['showSetup']) ?
        "\n<div class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">[[2factor:intro.title]]</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<p>\n\t\t\t[[2factor:user.intro.one]]\n\t\t</p>\n\t\t<p>\n\t\t\t[[2factor:user.intro.two]]\n\t\t</p>\n\t\t<p>\n\t\t\t[[2factor:user.intro.three]]\n\t\t</p>\n\t</div>\n</div>\n" :
        "") + 
      "\n\n" + 
      (guard(context && context['forceTfa']) ?
        "\n<div class=\"alert alert-info\">[[2factor:user.force_2fa]]</div>\n" :
        "") + 
      "\n\n<div class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t" + 
      (guard(context && context['showSetup']) ?
        "\n\t\t<span class=\"text-danger pull-right\"><strong>[[2factor:disabled]]</strong> <i class=\"fa fa-circle\"></i></span>\n\t\t" :
        "\n\t\t<span class=\"text-success pull-right\"><strong>[[2factor:enabled]]</strong> <i class=\"fa fa-circle\"></i></span>\n\t\t") + 
      "\n\t\t<h3 class=\"panel-title\">[[2factor:user.settings.title]]</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t" + 
      (guard(context && context['showSetup']) ?
        "\n\t\t<button class=\"btn btn-primary\" data-action=\"regenerate\">[[2factor:user.settings.enable]]</button>\n\t\t" :
        "\n\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"Two-Factor Authentication User Settings\">\n\t\t\t<button class=\"btn btn-info\" data-action=\"generateBackupCodes\">[[2factor:user.settings.generateBackupCodes]]</button>\n\t\t\t<button class=\"btn btn-danger\" data-action=\"disassociate\">[[2factor:user.settings.disable]]</button>\n\t\t</div>\n\t\t") + 
      "\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
