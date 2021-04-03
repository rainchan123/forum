
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
    return "<div class=\"row\">\r\n\t<div class=\"col-lg-9\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">Recent Cards</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<form role=\"form\" id=\"recentcards\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t<label for=\"enableCarousel\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" data-key=\"enableCarousel\" id=\"enableCarousel\" name=\"enableCarousel\" />\r\n\t\t\t\t\t\t\t\tEnable Carousel Mode\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t<label for=\"enableCarouselPagination\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" data-key=\"enableCarouselPagination\" id=\"enableCarouselPagination\" name=\"enableCarouselPagination\" />\r\n\t\t\t\t\t\t\t\tTurn on paginator for carousel\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"minSlides\">Minimum slides to show for carousel</label>\r\n\t\t\t\t\t\t\t<input id=\"minSlides\" type=\"text\" class=\"form-control\" placeholder=\"1\" name=\"minSlides\" data-key=\"minSlides\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"maxSlides\">Max slides to show for carousel</label>\r\n\t\t\t\t\t\t\t<input id=\"maxSlides\" type=\"text\" class=\"form-control\" placeholder=\"4\" name=\"maxSlides\" data-key=\"maxSlides\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-3\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">Control Panel</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<button class=\"btn btn-primary\" id=\"save\">Save Settings</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<script>\r\nrequire(['settings'], function(settings) {\r\n\r\n\tsettings.sync('recentcards', $('#recentcards'));\r\n\r\n\t$('#save').click( function (event) {\r\n\t\tsettings.persist('recentcards', $('#recentcards'));\r\n\t});\r\n});\r\n</script>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
