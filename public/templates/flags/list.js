
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
    return (guard(context && context['breadcrumbs'] && context['breadcrumbs']['length']) ?
        "\r\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-4 col-md-3\">\r\n\t\t<div class=\"text-center\">\r\n\t<div class=\"panel panel-default\">\r\n\t\t<div class=\"panel-body collapse\" id=\"flags-daily-wrapper\" aria-expanded=\"false\">\r\n\t\t\t<div><canvas id=\"flags:daily\" height=\"150\"></canvas></div>\r\n\t\t</div>\r\n\t\t<div class=\"panel-footer\" aria-controls=\"#flags-daily-wrapper\"><small>[[flags:graph-label]]</small>&nbsp;<span class=\"caret\"></span></div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">[[flags:quick-filters]]</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<ul>\r\n\t\t\t<li><a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/flags?quick=mine\">[[flags:filter-quick-mine]]</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">[[flags:filters]]</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<form role=\"form\" component=\"flags/filters\">\r\n\t\t\t<fieldset>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"sort\">[[flags:sort]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"sort\" name=\"sort\">\r\n\t\t\t\t\t\t<optgroup label=\"[[flags:sort-all]]\">\r\n\t\t\t\t\t\t\t<option value=\"newest\">[[flags:sort-newest]]</option>\r\n\t\t\t\t\t\t\t<option value=\"oldest\">[[flags:sort-oldest]]</option>\r\n\t\t\t\t\t\t\t<option value=\"reports\">[[flags:sort-reports]]</option>\r\n\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t<optgroup label=\"[[flags:sort-posts-only]]\">\r\n\t\t\t\t\t\t\t<option value=\"downvotes\">[[flags:sort-downvotes]]</option>\r\n\t\t\t\t\t\t\t<option value=\"upvotes\">[[flags:sort-upvotes]]</option>\r\n\t\t\t\t\t\t\t<option value=\"replies\">[[flags:sort-replies]]</option>\r\n\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-state\">[[flags:filter-state]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-state\" name=\"state\">\r\n\t\t\t\t\t\t<option value=\"\">[[flags:state-all]]</option>\r\n\t\t\t\t\t\t<option value=\"open\">[[flags:state-open]]</option>\r\n\t\t\t\t\t\t<option value=\"wip\">[[flags:state-wip]]</option>\r\n\t\t\t\t\t\t<option value=\"resolved\">[[flags:state-resolved]]</option>\r\n\t\t\t\t\t\t<option value=\"rejected\">[[flags:state-rejected]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-type\">[[flags:filter-type]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-type\" name=\"type\">\r\n\t\t\t\t\t\t<option value=\"\">[[flags:filter-type-all]]</option>\r\n\t\t\t\t\t\t<option value=\"post\">[[flags:filter-type-post]]</option>\r\n\t\t\t\t\t\t<option value=\"user\">[[flags:filter-type-user]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-cid\">[[flags:filter-cid]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-cid\" name=\"cid\" multiple=\"true\">\r\n\t\t\t\t\t\t<option value=\"\">[[flags:filter-cid-all]]</option>\r\n\t\t\t\t\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</fieldset>\r\n\r\n\t\t\t<fieldset class=\"collapse\" id=\"more-filters\" aria-expanded=\"false\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-assignee\">[[flags:filter-assignee]]</label>\r\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"filter-assignee\" name=\"assignee\" min=\"0\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-targetUid\">[[flags:filter-targetUid]]</label>\r\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"filter-targetUid\" name=\"targetUid\" min=\"0\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-reporterId\">[[flags:filter-reporterId]]</label>\r\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"filter-reporterId\" name=\"reporterId\" min=\"0\" />\r\n\t\t\t\t</div>\r\n\t\t\t</fieldset>\r\n\r\n\t\t\t<button type=\"button\" class=\"btn btn-link btn-block\" data-toggle=\"collapse\" data-target=\"#more-filters\" aria-controls=\"#more-filters\">[[flags:more-filters]]&nbsp;<span class=\"caret\"></span></button>\r\n\t\t\t<button type=\"button\" id=\"apply-filters\" class=\"btn btn-primary btn-block\">[[flags:apply-filters]]</button>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\t</div>\r\n\t<div class=\"col-sm-8 col-md-9\">\r\n\t\t" + 
      (guard(context && context['hasFilter']) ?
        "\r\n\t\t<div class=\"alert alert-warning\">\r\n\t\t\t<p class=\"pull-right\">\r\n\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/flags?reset=1\">[[flags:filter-reset]]</a>\r\n\t\t\t</p>\r\n\t\t\t[[flags:filter-active]]\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t<div class=\"btn-group pull-right\" component=\"flags/bulk-actions\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" autocomplete=\"off\" aria-haspopup=\"true\" aria-expanded=\"false\" disabled=\"disabled\">\r\n\t\t\t\t<i class=\"fa fa-clone\"></i> [[flags:bulk-actions]] <span class=\"caret\"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t<li><a href=\"#\" data-action=\"bulk-assign\">[[flags:assign-to-me]]</a></li>\r\n\t\t\t\t<li><a href=\"#\" data-action=\"bulk-mark-resolved\">[[flags:bulk-resolve]]</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<table class=\"table table-striped table-hover\" component=\"flags/list\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-action=\"toggle-all\" autocomplete=\"off\" />\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t\t<th><span class=\"hidden-xs\">[[flags:reports]] </span><i class=\"fa fa-user-plus\"></i></th>\r\n\t\t\t\t\t<th><span class=\"hidden-xs\">[[flags:first-reported]] </span><i class=\"fa fa-clock-o\"></i></th>\r\n\t\t\t\t\t<th>[[flags:state]]</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t" + 
      (guard(context && context['flags'] && context['flags']['length']) ?
        "" :
        "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td colspan=\"5\">\r\n\t\t\t\t\t\t<div class=\"alert alert-success text-center\">\r\n\t\t\t\t\t\t\t[[flags:no-flags]]\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t") + 
      "\r\n\t\t\t\t" + 
      compiled.blocks['flags'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\r\n\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['breadcrumbs']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\r\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "<a href=\"" + 
              __escape(guard(context && context['breadcrumbs'] && context['breadcrumbs'][key0] && context['breadcrumbs'][key0]['url'])) + 
              "\" itemprop=\"item\">") + 
          "\r\n\t\t\t<span itemprop=\"name\">\r\n\t\t\t\t" + 
          __escape(guard(context && context['breadcrumbs'] && context['breadcrumbs'][key0] && context['breadcrumbs'][key0]['text'])) + 
          "\r\n\t\t\t\t" + 
          (index === length - 1 ?
            "\r\n\t\t\t\t" + 
              (guard(context && context['feeds:disableRSS']) ?
                "" :
                "\r\n\t\t\t\t" + 
                  (guard(context && context['rssFeedUrl']) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard(context && context['rssFeedUrl'])) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</span>\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "</a>") + 
          "\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    },
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
    },
    'flags': function flags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['flags']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<tr data-flag-id=\"" + 
          __escape(guard(context && context['flags'] && context['flags'][key0] && context['flags'][key0]['flagId'])) + 
          "\">\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<input type=\"checkbox\" autocomplete=\"off\" />\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/flags/" + 
          __escape(guard(context && context['flags'] && context['flags'][key0] && context['flags'][key0]['flagId'])) + 
          "\">\r\n\t\t\t\t\t\t\t<strong>" + 
          __escape(guard(context && context['flags'] && context['flags'][key0] && context['flags'][key0]['target_readable'])) + 
          "</strong>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t" + 
          __escape(guard(context && context['flags'] && context['flags'][key0] && context['flags'][key0]['heat'])) + 
          "\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['flags'] && context['flags'][key0] && context['flags'][key0]['datetimeISO'])) + 
          "\"></span></td>\r\n\t\t\t\t\t<td><span class=\"label label-" + 
          __escape(guard(context && context['flags'] && context['flags'][key0] && context['flags'][key0]['labelClass'])) + 
          "\">[[flags:state-" + 
          __escape(guard(context && context['flags'] && context['flags'][key0] && context['flags'][key0]['state'])) + 
          "]]</span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t";
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
