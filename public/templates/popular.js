
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
      "\r\n\r\n<div data-widget-area=\"header\">\r\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n<div class=\"popular\">\r\n\t<div class=\"topic-list-header btn-toolbar\">\r\n\t\t<div class=\"pull-left\">\r\n\t\t\t" + 
      (guard(context && context['canPost']) ?
        "\r\n\t\t\t<noscript><div class=\"dropdown\" component=\"category-selector\"></noscript>\r\n<label component=\"category/post\" for=\"category-dropdown-check\" class=\"btn btn-primary\" id=\"new_topic\" role=\"button\">\r\n\t[[category:new_topic_button]]\r\n</label>\r\n<noscript>\r\n\t<input type=\"checkbox\" class=\"hidden\" id=\"category-dropdown-check\" aria-hidden=\"true\">\r\n\t<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\r\n\t\t" + 
          compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
          "\r\n\t</ul>\r\n</div>\r\n</noscript>\r\n\r\n\t\t\t" :
        "\r\n\t\t\t<a component=\"category/post/guest\" href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/login\" class=\"btn btn-primary\">[[category:guest-login-post]]</a>\r\n\t\t\t") + 
      "\r\n\t\t</div>\r\n\r\n\t\t<div class=\"btn-group pull-right\">\r\n\t\t" + 
      (guard(context && context['showTopicTools']) ?
        "\r\n<div class=\"btn-group thread-tools bottom-sheet\">\r\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:thread_tools.title]]</span>\r\n\t\t<span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-gear\"></i></span>\r\n\t\t<span class=\"caret\"></span>\r\n\t</button>\r\n\t<ul class=\"dropdown-menu pull-right\">\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/mark-unread-for-all\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread_tools.markAsUnreadForAll]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/pin\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread_tools.pin]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/unpin\" href=\"#\" class=\"hidden\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread_tools.unpin]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/lock\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-lock\"></i> [[topic:thread_tools.lock]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/unlock\" href=\"#\" class=\"hidden\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread_tools.unlock]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"divider\"></li>\r\n\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/move\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t" + 
          (guard(context && context['template'] && context['template']['category']) ?
            "\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/move-all\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move_all]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t" :
            "") + 
          "\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/merge\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread_tools.merge]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"divider\"></li>\r\n\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/delete\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread_tools.delete]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/restore\" href=\"#\" class=\"hidden\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-history\"></i> [[topic:thread_tools.restore]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/purge\" href=\"#\" class=\"hidden\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread_tools.purge]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\r\n\t</ul>\r\n</div>\r\n" :
        "") + 
      "\r\n\t\t</div>\r\n\r\n\t\t<div component=\"category/dropdown\" class=\"btn-group pull-right category-dropdown-container bottom-sheet " + 
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
      iter(guard(context && context['categories']), function each(key0, index, length, value) {
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
      }) + 
      "\r\n    </ul>\r\n</div>\r\n\r\n\t\t<div class=\"btn-group pull-right bottom-sheet " + 
      (guard(context && context['filters'] && context['filters']['length']) ?
        "" :
        "hidden") + 
      "\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
      __escape(guard(context && context['selectedFilter'] && context['selectedFilter']['name'])) + 
      "</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw " + 
      __escape(guard(context && context['selectedFilter'] && context['selectedFilter']['icon'])) + 
      "\"></i></span> <span class=\"caret\"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t" + 
      compiled.blocks['filters'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"btn-group pull-right bottom-sheet " + 
      (guard(context && context['terms'] && context['terms']['length']) ?
        "" :
        "hidden") + 
      "\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t\t" + 
      __escape(guard(context && context['selectedTerm'] && context['selectedTerm']['name'])) + 
      " <span class=\"caret\"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t" + 
      compiled.blocks['terms'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"category\">\r\n\t\t" + 
      (guard(context && context['topics'] && context['topics']['length']) ?
        "" :
        "\r\n\t\t<div class=\"alert alert-warning\" id=\"category-no-topics\">[[recent:no_popular_topics]]</div>\r\n\t\t") + 
      "\r\n\r\n\t\t<ul component=\"category\" class=\"topic-list\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
      __escape(guard(context && context['nextStart'])) + 
      "\" data-set=\"" + 
      __escape(guard(context && context['set'])) + 
      "\">\r\n\t<meta itemprop=\"itemListOrder\" content=\"descending\">\r\n\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n\r\n\r\n\t\t" + 
      (guard(context && context['config'] && context['config']['usePagination']) ?
        "\r\n\t\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n</div>\r\n";
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
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['widgets'] && context['widgets']['header']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          guard(context && context['widgets'] && context['widgets']['header'] && context['widgets']['header'][key0] && context['widgets']['header'][key0]['html']) + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li role=\"presentation\" class=\"category " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabledClass']) ?
            "disabled" :
            "") + 
          "\">\r\n\t\t\t<a role=\"menu-item\" href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/compose?cid=" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\">" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['level'])) + 
          "<span component=\"category-markup\">" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon']) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i style=\"color: " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['color'])) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon'])) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "</span></a>\r\n\t\t</li>\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['thread_tools']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li>\r\n\t\t\t<a href=\"#\" class=\"" + 
          __escape(guard(context && context['thread_tools'] && context['thread_tools'][key0] && context['thread_tools'][key0]['class'])) + 
          "\"><i class=\"fa fa-fw " + 
          __escape(guard(context && context['thread_tools'] && context['thread_tools'][key0] && context['thread_tools'][key0]['icon'])) + 
          "\"></i> " + 
          __escape(guard(context && context['thread_tools'] && context['thread_tools'][key0] && context['thread_tools'][key0]['title'])) + 
          "</a>\r\n\t\t</li>\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'filters': function filters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['filters']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li role=\"presentation\" class=\"category " + 
          (guard(context && context['filters'] && context['filters'][key0] && context['filters'][key0]['selected']) ?
            "selected" :
            "") + 
          "\">\r\n\t\t\t\t\t<a role=\"menu-item\" href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/" + 
          __escape(guard(context && context['filters'] && context['filters'][key0] && context['filters'][key0]['url'])) + 
          "\"><i class=\"fa fa-fw " + 
          (guard(context && context['filters'] && context['filters'][key0] && context['filters'][key0]['selected']) ?
            "fa-check" :
            "") + 
          "\"></i>" + 
          __escape(guard(context && context['filters'] && context['filters'][key0] && context['filters'][key0]['name'])) + 
          "</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'terms': function terms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['terms']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li role=\"presentation\" class=\"category\">\r\n\t\t\t\t\t<a role=\"menu-item\" href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/" + 
          __escape(guard(context && context['terms'] && context['terms'][key0] && context['terms'][key0]['url'])) + 
          "\"><i class=\"fa fa-fw " + 
          (guard(context && context['terms'] && context['terms'][key0] && context['terms'][key0]['selected']) ?
            "fa-check" :
            "") + 
          "\"></i>" + 
          __escape(guard(context && context['terms'] && context['terms'][key0] && context['terms'][key0]['name'])) + 
          "</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['topics']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li component=\"category/topic\" class=\"row clearfix category-item " + 
          __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
          "\" data-tid=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tid'])) + 
          "\" data-index=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['index'])) + 
          "\" data-cid=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['cid'])) + 
          "\" itemprop=\"itemListElement\">\r\n\t\t<a id=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['index'])) + 
          "\" data-index=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['index'])) + 
          "\" component=\"topic/anchor\"></a>\r\n\t\t<meta itemprop=\"name\" content=\"" + 
          __escape(helper(context, helpers, 'stripTags', [guard(context && context['title'])])) + 
          "\">\r\n\r\n\t\t<div class=\"col-md-6 col-sm-9 col-xs-10 content\">\r\n\t\t\t<div class=\"avatar pull-left\">\r\n\t\t\t\t" + 
          (guard(context && context['showSelect']) ?
            "\r\n\t\t\t\t<div class=\"select\" component=\"topic/select\">\r\n\t\t\t\t\t" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb']) ?
                "\r\n\t\t\t\t\t<img src=\"" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb'])) + 
                  "\" class=\"user-img not-responsive\" />\r\n\t\t\t\t\t" :
                "\r\n\t\t\t\t\t" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user']), "46", guard(context && context['true']), "not-responsive"])) + 
                  "\r\n\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t<i class=\"fa fa-check\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t" + 
          (guard(context && context['showSelect']) ?
            "" :
            "\r\n\t\t\t\t<a href=\"" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug']) ?
                __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug'])) :
                "#") + 
              "\" class=\"pull-left\">\r\n\t\t\t\t\t" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb']) ?
                "\r\n\t\t\t\t\t<img src=\"" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['thumb'])) + 
                  "\" class=\"user-img not-responsive\" />\r\n\t\t\t\t\t" :
                "\r\n\t\t\t\t\t" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user']), "46", guard(context && context['true']), "not-responsive"])) + 
                  "\r\n\t\t\t\t\t") + 
              "\r\n\t\t\t\t</a>\r\n\t\t\t\t") + 
          "\r\n\t\t\t</div>\r\n\r\n\t\t\t<h2 component=\"topic/header\" class=\"title\">\r\n\t\t\t\t<i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['pinned']) ?
            "" :
            "hide") + 
          "\" title=\"" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['pinExpiry']) ?
            "[[topic:pinned-with-expiry, " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['pinExpiryISO'])) + 
              "]]" :
            "[[topic:pinned]]") + 
          "\"></i>\r\n\t\t\t\t<i component=\"topic/locked\" class=\"fa fa-lock " + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['locked']) ?
            "" :
            "hide") + 
          "\" title=\"[[topic:locked]]\"></i>\r\n\t\t\t\t<i component=\"topic/moved\" class=\"fa fa-arrow-circle-right " + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['oldCid']) ?
            "" :
            "hide") + 
          "\" title=\"[[topic:moved]]\"></i>\r\n\t\t\t\t" + 
          iter(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['icons']), function each(key1, index, length, value) {
            var key = key1;
            return __escape(guard(value));
          }, function alt() {
            return "";
          }) + 
          "\r\n\r\n\r\n\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['noAnchor']) ?
            "\r\n\t\t\t\t<span>" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['title'])) + 
              "</span><br />\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/topic/" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['slug'])) + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['bookmark']) ?
                "/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['bookmark'])) :
                "") + 
              "\" itemprop=\"url\">" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['title'])) + 
              "</a><br />\r\n\t\t\t\t") + 
          "\r\n\r\n\t\t\t\t" + 
          (guard(context && context['template'] && context['template']['category']) ?
            "" :
            "\r\n\t\t\t\t<small>\r\n\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/category/" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['slug'])) + 
              "\"><span class=\"fa-stack fa-lg\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'])])) + 
              "\"><i style=\"color:" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['color'])) + 
              ";\" class=\"fa " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['icon'])) + 
              " fa-stack-1x\"></i></span> " + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['name'])) + 
              "</a> &bull;\r\n\t\t\t\t</small>\r\n\t\t\t\t") + 
          "\r\n\r\n\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags']['length']) ?
            "\r\n\t\t\t\t<span class=\"tag-list hidden-xs\">\r\n\t\t\t\t\t" + 
              iter(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags']), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/tags/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['valueEscaped'])) + 
                  "\"><span class=\"tag\" style=\"" + 
                  (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['color']) ?
                    "color: " + 
                      __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['color'])) + 
                      ";" :
                    "") + 
                  (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['bgColor']) ?
                    "background-color: " + 
                      __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['bgColor'])) + 
                      ";" :
                    "") + 
                  "\">" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['tags'] && context['topics'][key0]['tags'][key1] && context['topics'][key0]['tags'][key1]['valueEscaped'])) + 
                  "</span></a>\r\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\r\n\t\t\t\t\t<small>&bull;</small>\r\n\t\t\t\t</span>\r\n\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t<small class=\"hidden-xs\"><span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['timestampISO'])) + 
          "\"></span> &bull; <a href=\"" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug']) ?
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['userslug'])) :
            "#") + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['user'] && context['topics'][key0]['user']['displayname'])) + 
          "</a></small>\r\n\t\t\t\t<small class=\"visible-xs-inline\">\r\n\t\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['timestamp']) ?
            "\r\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['timestampISO'])) + 
              "\"></span>\r\n\t\t\t\t\t" :
            "\r\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['timestampISO'])) + 
              "\"></span>\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t</small>\r\n\t\t\t</h2>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"mobile-stat col-xs-2 visible-xs text-right\">\r\n\t\t\t<span class=\"human-readable-number\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['postcount'])) + 
          "</span> <a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/topic/" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['slug'])) + 
          "/" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['index'])) + 
          "\"><i class=\"fa fa-arrow-circle-right\"></i></a>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-votes\">\r\n\t\t\t" + 
          (guard(context && context['reputation:disabled']) ?
            "" :
            "\r\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['votes'])) + 
              "\">" + 
              __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['votes'])) + 
              "</span><br />\r\n\t\t\t<small>[[global:votes]]</small>\r\n\t\t\t") + 
          "\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-postcount\">\r\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['postcount'])) + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['postcount'])) + 
          "</span><br />\r\n\t\t\t<small>[[global:posts]]</small>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-viewcount\">\r\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['viewcount'])) + 
          "\">" + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['viewcount'])) + 
          "</span><br />\r\n\t\t\t<small>[[global:views]]</small>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\r\n\t\t\t<div class=\"card\" style=\"border-color: " + 
          __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['category'] && context['topics'][key0]['category']['bgColor'])) + 
          "\">\r\n\t\t\t\t" + 
          (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['unreplied']) ?
            "\r\n\t\t\t\t<p>\r\n\t\t\t\t\t[[category:no_replies]]\r\n\t\t\t\t</p>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t" + 
              (guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['pid']) ?
                "\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['user'] && context['topics'][key0]['teaser']['user']['userslug'])) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['user']), "24", guard(context && context['true']), "not-responsive"])) + 
                  "</a>\r\n\t\t\t\t\t<a class=\"permalink\" href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/topic/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['slug'])) + 
                  "/" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['index'])) + 
                  "\">\r\n\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['timestampISO'])) + 
                  "\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"post-content\">\r\n\t\t\t\t\t" + 
                  __escape(guard(context && context['topics'] && context['topics'][key0] && context['topics'][key0]['teaser'] && context['topics'][key0]['teaser']['content'])) + 
                  "\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t") + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</li>\r\n\t";
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
