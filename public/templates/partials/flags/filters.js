
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
    return "<div class=\"text-center\">\r\n\t<div class=\"panel panel-default\">\r\n\t\t<div class=\"panel-body collapse\" id=\"flags-daily-wrapper\" aria-expanded=\"false\">\r\n\t\t\t<div><canvas id=\"flags:daily\" height=\"150\"></canvas></div>\r\n\t\t</div>\r\n\t\t<div class=\"panel-footer\" aria-controls=\"#flags-daily-wrapper\"><small>[[flags:graph-label]]</small>&nbsp;<span class=\"caret\"></span></div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">[[flags:quick-filters]]</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<ul>\r\n\t\t\t<li><a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/flags?quick=mine\">[[flags:filter-quick-mine]]</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">[[flags:filters]]</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<form role=\"form\" component=\"flags/filters\">\r\n\t\t\t<fieldset>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"sort\">[[flags:sort]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"sort\" name=\"sort\">\r\n\t\t\t\t\t\t<optgroup label=\"[[flags:sort-all]]\">\r\n\t\t\t\t\t\t\t<option value=\"newest\">[[flags:sort-newest]]</option>\r\n\t\t\t\t\t\t\t<option value=\"oldest\">[[flags:sort-oldest]]</option>\r\n\t\t\t\t\t\t\t<option value=\"reports\">[[flags:sort-reports]]</option>\r\n\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t<optgroup label=\"[[flags:sort-posts-only]]\">\r\n\t\t\t\t\t\t\t<option value=\"downvotes\">[[flags:sort-downvotes]]</option>\r\n\t\t\t\t\t\t\t<option value=\"upvotes\">[[flags:sort-upvotes]]</option>\r\n\t\t\t\t\t\t\t<option value=\"replies\">[[flags:sort-replies]]</option>\r\n\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-state\">[[flags:filter-state]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-state\" name=\"state\">\r\n\t\t\t\t\t\t<option value=\"\">[[flags:state-all]]</option>\r\n\t\t\t\t\t\t<option value=\"open\">[[flags:state-open]]</option>\r\n\t\t\t\t\t\t<option value=\"wip\">[[flags:state-wip]]</option>\r\n\t\t\t\t\t\t<option value=\"resolved\">[[flags:state-resolved]]</option>\r\n\t\t\t\t\t\t<option value=\"rejected\">[[flags:state-rejected]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-type\">[[flags:filter-type]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-type\" name=\"type\">\r\n\t\t\t\t\t\t<option value=\"\">[[flags:filter-type-all]]</option>\r\n\t\t\t\t\t\t<option value=\"post\">[[flags:filter-type-post]]</option>\r\n\t\t\t\t\t\t<option value=\"user\">[[flags:filter-type-user]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-cid\">[[flags:filter-cid]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-cid\" name=\"cid\" multiple=\"true\">\r\n\t\t\t\t\t\t<option value=\"\">[[flags:filter-cid-all]]</option>\r\n\t\t\t\t\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</fieldset>\r\n\r\n\t\t\t<fieldset class=\"collapse\" id=\"more-filters\" aria-expanded=\"false\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-assignee\">[[flags:filter-assignee]]</label>\r\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"filter-assignee\" name=\"assignee\" min=\"0\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-targetUid\">[[flags:filter-targetUid]]</label>\r\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"filter-targetUid\" name=\"targetUid\" min=\"0\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-reporterId\">[[flags:filter-reporterId]]</label>\r\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"filter-reporterId\" name=\"reporterId\" min=\"0\" />\r\n\t\t\t\t</div>\r\n\t\t\t</fieldset>\r\n\r\n\t\t\t<button type=\"button\" class=\"btn btn-link btn-block\" data-toggle=\"collapse\" data-target=\"#more-filters\" aria-controls=\"#more-filters\">[[flags:more-filters]]&nbsp;<span class=\"caret\"></span></button>\r\n\t\t\t<button type=\"button\" id=\"apply-filters\" class=\"btn btn-primary btn-block\">[[flags:apply-filters]]</button>\r\n\t\t</form>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<option value=\"" + 
          __escape(key) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
