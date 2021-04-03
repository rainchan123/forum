
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
      "\r\n\r\n<div class=\"btn-toolbar\">\r\n\t<div component=\"category/dropdown\" class=\"btn-group pull-right category-dropdown-container bottom-sheet " + 
      (guard(context && context['categories'] && context['categories']['length']) ?
        "" :
        "hidden") + 
      "\">\r\n    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n        " + 
      (guard(context && context['selectedCategory']) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(context && context['selectedCategory'])])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['icon'])) + 
          "\" style=\"color: " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['color'])) + 
          ";\"></i></span> <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['name'])) + 
          "</span>" :
        "\r\n        <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[unread:all_categories]]</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-list\"></i></span>") + 
      " <span class=\"caret\"></span>\r\n    </button>\r\n    <div component=\"category-selector-search\" class=\"hidden\">\r\n        <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\r\n    </div>\r\n    <ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\r\n        <li role=\"presentation\" class=\"category\">\r\n            <a role=\"menu-item\" href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/" + 
      __escape(guard(context && context['allCategoriesUrl'])) + 
      "\"><i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
      (guard(context && context['selectedCategory']) ?
        "invisible" :
        "") + 
      "\"></i> [[unread:all_categories]]</a>\r\n        </li>\r\n        " + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n    </ul>\r\n</div>\r\n</div>\r\n<hr/>\r\n<div class=\"row\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<div class=\"post-queue preventSlideout posts-list\">\r\n\t\t\t" + 
      (guard(context && context['posts'] && context['posts']['length']) ?
        "" :
        "\r\n\t\t\t<p class=\"panel-body\">\r\n\t\t\t\t[[post-queue:description, " + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/admin/settings/post#post-queue]]\r\n\t\t\t</p>\r\n\t\t\t") + 
      "\r\n\r\n\t\t\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</div>\r\n\r\n\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\t</div>\r\n</div>";
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
        return "\r\n        <li role=\"presentation\" class=\"category " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabledClass']) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" data-parent-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['parentCid'])) + 
          "\" data-name=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\">\r\n            <a role=\"menu-item\" href=\"#\">" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['level'])) + 
          "<i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['selected']) ?
            "" :
            "invisible") + 
          "\"></i><span component=\"category-markup\">" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon']) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i class=\"fa fa-fw fa-stack-1x " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon'])) + 
              "\" style=\"color: " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['color'])) + 
              ";\"></i></span>" :
            "") + 
          " " + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "</span></a>\r\n        </li>\r\n        ";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<div class=\"panel panel-default\" data-id=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['id'])) + 
          "\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<strong>" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['tid']) ?
            "[[post-queue:reply]]" :
            "[[post-queue:topic]]") + 
          "</strong>\r\n\t\t\t\t\t<span class=\"timeago pull-right\" title=" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['timestampISO'])) + 
          "></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<strong>[[post-queue:user]]</strong>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug']) ?
            "\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/uid/" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['uid'])) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user']), "24", guard(context && context['true']), "not-responsive"])) + 
              " " + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['username'])) + 
              "</a>\r\n\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['username'])) + 
              "\r\n\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-3 col-xs-12\">\r\n\t\t\t\t\t\t\t<strong>[[post-queue:category]]" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['cid']) ?
            " <i class=\"fa fa-fw fa-edit\" data-toggle=\"tooltip\" title=\"[[post-queue:category-editable]]\"></i>" :
            "") + 
          "</strong>\r\n\t\t\t\t\t\t\t<div class=\"topic-category\" " + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['cid']) ?
            "data-editable=\"editable\"" :
            "") + 
          "\">\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/category/" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['slug'])) + 
          "\">" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['icon']) ?
            "<span class=\"fa-stack\"><i style=\"color: " + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['bgColor'])) + 
              ";\" class=\"fa fa-circle fa-stack-2x\"></i><i style=\"color: " + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['color'])) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['icon'])) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['name'])) + 
          "</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-7 col-xs-12\">\r\n\t\t\t\t\t\t\t<strong>" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['tid']) ?
            "[[post-queue:topic]]" :
            "[[post-queue:title]] <i class=\"fa fa-fw fa-edit\" data-toggle=\"tooltip\" title=\"[[post-queue:title-editable]]\"></i>") + 
          "</strong>\r\n\t\t\t\t\t\t\t<div class=\"topic-title\">\r\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['tid']) ?
            "\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/topic/" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['tid'])) + 
              "\">" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['topic'] && context['posts'][key0]['topic']['title'])) + 
              "</a>\r\n\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t<span class=\"title-text\">" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['title'])) + 
          "</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['tid']) ?
            "" :
            "\r\n\t\t\t\t\t\t\t<div class=\"topic-title-editable hidden\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['title'])) + 
              "\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<strong>[[post-queue:content]] <i class=\"fa fa-fw fa-edit\" data-toggle=\"tooltip\" title=\"[[post-queue:content-editable]]\"></i></strong>\r\n\t\t\t\t\t\t<div class=\"post-content\">" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['content'])) + 
          "</div>\r\n\t\t\t\t\t\t<div class=\"post-content-editable hidden\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\">" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['data'] && context['posts'][key0]['data']['rawContent'])) + 
          "</textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-footer text-right\">\r\n\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t<button class=\"btn btn-success btn-xs\" data-action=\"accept\"><i class=\"fa fa-check\"></i> [[post-queue:accept]] </button>\r\n\t\t\t\t\t\t<button class=\"btn btn-danger btn-xs\" data-action=\"reject\"><i class=\"fa fa-times\"></i> [[post-queue:reject]]</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t";
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
