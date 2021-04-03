
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
      "\r\n\n<div class=\"clearfix\">\n\t<button id=\"upload\" class=\"btn-success pull-right\"><i class=\"fa fa-upload\"></i> [[global:upload]]</button>\n</div>\n\n<div class=\"table-responsive\">\n\t<table class=\"table table-striped users-table\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>[[admin/manage/uploads:filename]]</th>\n\t\t\t\t" + 
      (guard(context && context['showPids']) ?
        "<th class=\"text-right\">[[admin/manage/uploads:usage]]</th>" :
        "") + 
      "\n\t\t\t\t<th class=\"text-right\">[[admin/manage/uploads:size/filecount]]</th>\n\t\t\t\t<th></th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t" + 
      compiled.blocks['files'](helpers, context, guard, iter, helper) + 
      "\n\t\t</tbody>\n\t</table>\n</div>\n\n<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>";
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
    'files': function files(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['files']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<tr data-path=\"" + 
          __escape(guard(context && context['files'] && context['files'][key0] && context['files'][key0]['path'])) + 
          "\">\n\t\t\t\t" + 
          (guard(context && context['files'] && context['files'][key0] && context['files'][key0]['isDirectory']) ?
            "\n\t\t\t\t<td class=\"col-md-6\" role=\"button\">\n\t\t\t\t\t<i class=\"fa fa-fw fa-folder-o\"></i> <a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/admin/manage/uploads?dir=" + 
              __escape(guard(context && context['files'] && context['files'][key0] && context['files'][key0]['path'])) + 
              "\">" + 
              __escape(guard(context && context['files'] && context['files'][key0] && context['files'][key0]['name'])) + 
              "</a>\n\t\t\t\t</td>\n\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t" + 
          (guard(context && context['files'] && context['files'][key0] && context['files'][key0]['isFile']) ?
            "\n\t\t\t\t<td class=\"col-md-6\">\n\t\t\t\t\t<i class=\"fa fa-fw fa-file-text-o\"></i> <a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              __escape(guard(context && context['files'] && context['files'][key0] && context['files'][key0]['url'])) + 
              "\" target=\"_blank\">" + 
              __escape(guard(context && context['files'] && context['files'][key0] && context['files'][key0]['name'])) + 
              "</a>\n\t\t\t\t</td>\n\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t" + 
          (guard(context && context['showPids']) ?
            "\n\t\t\t\t<td class=\"col-md-3 text-right\">\n\t\t\t\t\t" + 
              iter(guard(context && context['files'] && context['files'][key0] && context['files'][key0]['inPids']), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t\t\t\t<a target=\"_blank\" href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/post/" + 
                  __escape(guard(value)) + 
                  "\"><span class=\"label label-default\">" + 
                  __escape(guard(value)) + 
                  "</span></a>\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t\t\t" + 
              (guard(context && context['files'] && context['files'][key0] && context['files'][key0]['inPids'] && context['files'][key0]['inPids']['length']) ?
                "" :
                "\n\t\t\t\t\t<span class=\"label label-danger\">[[admin/manage/uploads:orphaned]]</span>\n\t\t\t\t\t") + 
              "\n\t\t\t\t</td>\n\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t<td class=\"col-md-2 text-right\">" + 
          (guard(context && context['files'] && context['files'][key0] && context['files'][key0]['isFile']) ?
            __escape(guard(context && context['files'] && context['files'][key0] && context['files'][key0]['sizeHumanReadable'])) :
            "[[admin/manage/uploads:filecount, " + 
              __escape(guard(context && context['files'] && context['files'][key0] && context['files'][key0]['fileCount'])) + 
              "]]") + 
          "</td>\n\n\t\t\t\t<td role=\"button\" class=\"col-md-1 text-right\"><i class=\"delete fa fa-fw fa-trash-o " + 
          (guard(context && context['files'] && context['files'][key0] && context['files'][key0]['isFile']) ?
            "" :
            " hidden") + 
          "\"></i></td>\n\t\t\t</tr>\n\t\t\t";
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
