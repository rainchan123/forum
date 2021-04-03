
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
    return "<div class=\"row events\">\n\t<div class=\"col-lg-9\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\"><i class=\"fa fa-calendar-o\"></i> [[admin/advanced/events:events]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t" + 
      (guard(context && context['events'] && context['events']['length']) ?
        "" :
        "\n\t\t\t\t<div class=\"alert alert-info\">[[admin/advanced/events:no-events]]</div>\n\t\t\t\t") + 
      "\n\t\t\t\t<div class=\"events-list\">\n\t\t\t\t" + 
      compiled.blocks['events'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
      (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages']['length']) ?
        "" :
        " hidden") + 
      "\">\r\n\t<ul class=\"pagination hidden-xs\">\r\n\t\t<li class=\"previous pull-left" + 
      (guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + 
      "\" data-page=\"" + 
      __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t<li class=\"next pull-right" + 
      (guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + 
      "\" data-page=\"" + 
      __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class=\"pagination hidden-sm hidden-md hidden-lg\">\r\n\t\t<li class=\"first" + 
      (guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['first'] && context['pagination']['first']['qs'])) + 
      "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"previous" + 
      (guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + 
      "\" data-page=\"" + 
      __escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t<a href=\"#\">" + 
      __escape(guard(context && context['pagination'] && context['pagination']['currentPage'])) + 
      " / " + 
      __escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + 
      "</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"next" + 
      (guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + 
      "\" data-page=\"" + 
      __escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"last" + 
      (guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard(context && context['pagination'] && context['pagination']['last'] && context['pagination']['last']['qs'])) + 
      "\" data-page=\"" + 
      __escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + 
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-3 acp-sidebar\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/advanced/events:filters]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<form role=\"form\" id=\"filters\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"type\">[[admin/advanced/events:filter-type]]</label>\n\t\t\t\t\t\t<select class=\"form-control\" id=\"type\" name=\"type\" class=\"form-control\">\n\t\t\t\t\t\t\t" + 
      compiled.blocks['types'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"start\">[[admin/advanced/events:filter-start]]</label>\n\t\t\t\t\t\t<input type=\"date\" id=\"start\" name=\"start\" value=\"" + 
      __escape(guard(context && context['query'] && context['query']['start'])) + 
      "\" class=\"form-control\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"end\">[[admin/advanced/events:filter-end]]</label>\n\t\t\t\t\t\t<input type=\"date\" id=\"end\" name=\"end\" value=\"" + 
      __escape(guard(context && context['query'] && context['query']['end'])) + 
      "\" class=\"form-control\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"perPage\">[[admin/advanced/events:filter-perPage]]</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"perPage\" name=\"perPage\" value=\"" + 
      __escape(guard(context && context['query'] && context['query']['perPage'])) + 
      "\" class=\"form-control\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"apply\">[[admin/advanced/events:filters-apply]]</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<button class=\"btn btn-block btn-danger\" data-action=\"clear\">\n\t\t\t\t\t<i class=\"fa fa-eraser\"></i> [[admin/advanced/events:delete-events]]\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'events': function events(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['events']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<div data-eid=\"" + 
          __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['eid'])) + 
          "\">\n\t\t\t\t\t<span class=\"label label-default\">#" + 
          __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['eid'])) + 
          "</span>\n\t\t\t\t\t<span class=\"label label-info\">" + 
          __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['type'])) + 
          "</span>\n\t\t\t\t\t<span class=\"label label-default\">uid " + 
          __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['uid'])) + 
          "</span>\n\t\t\t\t\t" + 
          (guard(context && context['events'] && context['events'][key0] && context['events'][key0]['ip']) ?
            "<span class=\"label label-default\">" + 
              __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['ip'])) + 
              "</span>" :
            "") + 
          "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['user'] && context['events'][key0]['user']['userslug'])) + 
          "\" target=\"_blank\">\n\t\t\t\t\t\t" + 
          (guard(context && context['events'] && context['events'][key0] && context['events'][key0]['user'] && context['events'][key0]['user']['picture']) ?
            "\n\t\t\t\t\t\t<img class=\"avatar avatar-xs\" src=\"" + 
              __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['user'] && context['events'][key0]['user']['picture'])) + 
              "\" />\n\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t<div class=\"avatar avatar-xs\" style=\"background-color: " + 
              __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['user'] && context['events'][key0]['user']['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['user'] && context['events'][key0]['user']['icon:text'])) + 
              "</div>\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['user'] && context['events'][key0]['user']['userslug'])) + 
          "\" target=\"_blank\">" + 
          __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['user'] && context['events'][key0]['user']['username'])) + 
          "</a>\n\t\t\t\t\t<span class=\"pull-right delete-event\"><i class=\"fa fa-trash-o\"></i></span>\n\t\t\t\t\t<span class=\"pull-right\">" + 
          __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['timestampISO'])) + 
          "</span>\n\t\t\t\t\t<pre class=\"well\">" + 
          __escape(guard(context && context['events'] && context['events'][key0] && context['events'][key0]['jsonString'])) + 
          "</pre>\n\t\t\t\t</div>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['pagination'] && context['pagination']['pages']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['separator']) ?
            "\r\n\t\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\r\n\t\t\t</li>\r\n\t\t\t" :
            "\r\n\t\t\t<li class=\"page" + 
              (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['active']) ?
                " active" :
                "") + 
              "\" >\r\n\t\t\t\t<a href=\"?" + 
              __escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['qs'])) + 
              "\" data-page=\"" + 
              __escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['page'])) + 
              "\">" + 
              __escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key0] && context['pagination']['pages'][key0]['page'])) + 
              "</a>\r\n\t\t\t</li>\r\n\t\t\t") + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'types': function types(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['types']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['types'] && context['types'][key0] && context['types'][key0]['value'])) + 
          "\" " + 
          (guard(context && context['types'] && context['types'][key0] && context['types'][key0]['selected']) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard(context && context['types'] && context['types'][key0] && context['types'][key0]['name'])) + 
          "</option>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
