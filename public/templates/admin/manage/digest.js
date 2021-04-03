
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
    return "<p class=\"lead\">[[admin/manage/digest:lead]]</p>\n<p>[[admin/manage/digest:disclaimer]]</p>\n<p>[[admin/manage/digest:disclaimer-continued]]</p>\n\n<hr />\n\n<table class=\"table table-striped\">\n\t<thead>\n\t\t<th>[[admin/manage/digest:user]]</th>\n\t\t<th>[[admin/manage/digest:subscription]]</th>\n\t\t<th>[[admin/manage/digest:last-delivery]]</th>\n\t\t<th></th>\n\t</thead>\n\t<tbody>\n\t\t" + 
      compiled.blocks['delivery'](helpers, context, guard, iter, helper) + 
      "\n\t\t" + 
      (guard(context && context['delivery'] && context['delivery']['length']) ?
        "" :
        "\n\t\t<tr>\n\t\t\t<td colspan=\"4\">\n\t\t\t\t<div class=\"alert alert-success\">\n\t\t\t\t\t[[admin/manage/digest:no-delivery-data]]\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t</tr>\n\t\t") + 
      "\n\t</tbody>\n\t<tfoot>\n\t\t<tr>\n\t\t\t<td colspan=\"4\"><div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"4\">\n\t\t\t\t<em>[[admin/manage/digest:default-help, " + 
      __escape(guard(context && context['default'])) + 
      "]]</em>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"4\">\n\t\t\t\t[[admin/manage/digest:manual-run]]\n\t\t\t\t<button class=\"btn btn-xs btn-default\" data-action=\"resend-day\">[[admin/settings/user:digest-freq.daily]]</button>\n\t\t\t\t<button class=\"btn btn-xs btn-default\" data-action=\"resend-week\">[[admin/settings/user:digest-freq.weekly]]</button>\n\t\t\t\t<button class=\"btn btn-xs btn-default\" data-action=\"resend-month\">[[admin/settings/user:digest-freq.monthly]]</button>\n\t\t\t</td>\n\t\t</tr>\n\t</tfoot>\n</table>\n";
  }

  compiled.blocks = {
    'delivery': function delivery(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['delivery']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<tr>\n\t\t\t<td><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/uid/" + 
          __escape(guard(context && context['delivery'] && context['delivery'][key0] && context['delivery'][key0]['uid'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['delivery'] && context['delivery'][key0]), "sm", guard(context && context['true'])])) + 
          " " + 
          __escape(guard(context && context['delivery'] && context['delivery'][key0] && context['delivery'][key0]['username'])) + 
          "</a></td>\n\t\t\t<td>" + 
          (guard(context && context['delivery'] && context['delivery'][key0] && context['delivery'][key0]['setting']) ?
            __escape(guard(context && context['delivery'] && context['delivery'][key0] && context['delivery'][key0]['setting'])) :
            "<em>[[admin/manage/digest:default]]</em>") + 
          "</td>\n\t\t\t<td>" + 
          __escape(guard(context && context['delivery'] && context['delivery'][key0] && context['delivery'][key0]['lastDelivery'])) + 
          "</td>\n\t\t\t<td><button class=\"btn btn-xs btn-default\" data-action=\"resend\" data-uid=\"" + 
          __escape(guard(context && context['delivery'] && context['delivery'][key0] && context['delivery'][key0]['uid'])) + 
          "\">[[admin/manage/digest:resend]]</button></td>\n\t\t</tr>\n\t\t";
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
    }
  };

  return compiled;
})
