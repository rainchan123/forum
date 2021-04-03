
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
    return "<div class=\"panel panel-primary fork-thread-card\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">[[topic:thread_tools.delete-posts]]</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<p>\r\n\t\t\t[[topic:delete_posts_instruction]]<br />\r\n\t\t\t<strong><span id=\"pids\"></span></strong>\r\n\t\t</p>\r\n\t</div>\r\n\t<div class=\"panel-footer\">\r\n\t\t&nbsp;\r\n\t\t<div class=\"btn-group pull-right\">\r\n\t\t\t<button class=\"btn btn-link btn-xs\" id=\"delete_posts_cancel\">[[global:buttons.close]]</button>\r\n\t\t\t<button class=\"btn btn-primary btn-xs\" id=\"delete_posts_confirm\" disabled>[[topic:delete]]</button>\r\n\t\t\t<button class=\"btn btn-danger btn-xs\" id=\"purge_posts_confirm\" disabled>[[topic:purge]]</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
