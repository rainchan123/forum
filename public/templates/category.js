
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
      "\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"category " + 
      (guard(context && context['widgets'] && context['widgets']['sidebar'] && context['widgets']['sidebar']['length']) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\r\n\t\t<div class=\"subcategory\">\r\n\t" + 
      (guard(context && context['children'] && context['children']['length']) ?
        "<p>[[category:subcategories]]</p>" :
        "") + 
      "\r\n\r\n\t<ul class=\"categories\" itemscope itemtype=\"http://www.schema.org/ItemList\">\r\n\t\t" + 
      compiled.blocks['children'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n</div>\r\n\r\n\t\t<div class=\"topic-list-header clearfix\">\r\n\t\t\t" + 
      (guard(context && context['privileges'] && context['privileges']['topics:create']) ?
        "\r\n\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/compose?cid=" + 
          __escape(guard(context && context['cid'])) + 
          "\" component=\"category/post\" id=\"new_topic\" class=\"btn btn-primary\" data-ajaxify=\"false\" role=\"button\">[[category:new_topic_button]]</a>\r\n\t\t\t" :
        "\r\n\t\t\t\t" + 
          (guard(context && context['loggedIn']) ?
            "" :
            "\r\n\t\t\t\t<a component=\"category/post/guest\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/login\" class=\"btn btn-primary\">[[category:guest-login-post]]</a>\r\n\t\t\t\t") + 
          "\r\n\t\t\t") + 
      "\r\n\r\n\t\t\t<a href=\"" + 
      __escape(guard(context && context['url'])) + 
      "\" class=\"inline-block\">\r\n\t\t\t\t<div class=\"alert alert-warning hide\" id=\"new-topics-alert\"></div>\r\n\t\t\t</a>\r\n\r\n\t\t\t<span class=\"pull-right\" component=\"category/controls\">\r\n\t\t\t\t" + 
      (guard(context && context['config'] && context['config']['loggedIn']) ?
        "\r\n<div class=\"btn-group topic-watch-dropdown bottom-sheet\" component=\"topic/watch\">\r\n\r\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\r\n\t\t<span component=\"category/watching/menu\" " + 
          (guard(context && context['isWatched']) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:watching]]</span></span>\r\n\r\n\t\t<span component=\"category/notwatching/menu\" " + 
          (guard(context && context['isNotWatched']) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-clock-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:not-watching]]</span></span>\r\n\r\n\t\t<span component=\"category/ignoring/menu\" " + 
          (guard(context && context['isIgnored']) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:ignoring]]</span></span>\r\n\r\n\t\t<span class=\"caret\"></span>\r\n\t</button>\r\n\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t<li><a href=\"#\" component=\"category/watching\" data-state=\"watching\"><i component=\"category/watching/check\" class=\"fa fa-fw " + 
          (guard(context && context['isWatched']) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-inbox\"></i> [[category:watching]]<p class=\"help-text\"><small>[[category:watching.description]]</small></p></a></li>\r\n\r\n\t\t<li><a href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\"><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
          (guard(context && context['isNotWatched']) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-clock-o\"></i> [[category:not-watching]]<p class=\"help-text\"><small>[[category:not-watching.description]]</small></p></a></li>\r\n\r\n\t\t<li><a href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\"><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
          (guard(context && context['isIgnored']) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[category:ignoring]]<p class=\"help-text\"><small>[[category:ignoring.description]]</small></p></a></li>\r\n\t</ul>\r\n</div>\r\n" :
        "") + 
      "\r\n\t\t\t\t<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\r\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:sort_by]]</span>\r\n\t\t<span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-sort\"></i></span>\r\n\t\t<span class=\"caret\"></span>\r\n\t</button>\r\n\r\n\t<ul class=\"dropdown-menu pull-right\">\r\n\t\t<li><a href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\"><i class=\"fa fa-fw\"></i> [[topic:newest_to_oldest]]</a></li>\r\n\t\t<li><a href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\"><i class=\"fa fa-fw\"></i> [[topic:oldest_to_newest]]</a></li>\r\n\t\t<li><a href=\"#\" class=\"most_posts\" data-sort=\"most_posts\"><i class=\"fa fa-fw\"></i> [[topic:most_posts]]</a></li>\r\n\t\t<li><a href=\"#\" class=\"most_votes\" data-sort=\"most_votes\"><i class=\"fa fa-fw\"></i> [[topic:most_votes]]</a></li>\r\n\t</ul>\r\n</div>\r\n\t\t\t\t" + 
      (guard(context && context['showTopicTools']) ?
        "\r\n<div class=\"btn-group thread-tools bottom-sheet\">\r\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:thread_tools.title]]</span>\r\n\t\t<span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-gear\"></i></span>\r\n\t\t<span class=\"caret\"></span>\r\n\t</button>\r\n\t<ul class=\"dropdown-menu pull-right\">\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/mark-unread-for-all\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread_tools.markAsUnreadForAll]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/pin\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread_tools.pin]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/unpin\" href=\"#\" class=\"hidden\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread_tools.unpin]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/lock\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-lock\"></i> [[topic:thread_tools.lock]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/unlock\" href=\"#\" class=\"hidden\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread_tools.unlock]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"divider\"></li>\r\n\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/move\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t" + 
          (guard(context && context['template'] && context['template']['category']) ?
            "\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/move-all\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move_all]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t" :
            "") + 
          "\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/merge\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread_tools.merge]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"divider\"></li>\r\n\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/delete\" href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread_tools.delete]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/restore\" href=\"#\" class=\"hidden\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-history\"></i> [[topic:thread_tools.restore]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component=\"topic/purge\" href=\"#\" class=\"hidden\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread_tools.purge]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\r\n\t</ul>\r\n</div>\r\n" :
        "") + 
      "\r\n\t\t\t</span>\r\n\t\t</div>\r\n\r\n\t\t" + 
      (guard(context && context['topics'] && context['topics']['length']) ?
        "" :
        "\r\n\t\t" + 
          (guard(context && context['privileges'] && context['privileges']['topics:create']) ?
            "\r\n\t\t<hr class=\"visible-xs\" />\r\n\t\t<div class=\"alert alert-warning\" id=\"category-no-topics\">\r\n\t\t\t[[category:no_topics]]\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\t\t") + 
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
      "\r\n\t</div>\r\n\t<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard(context && context['widgets'] && context['widgets']['sidebar'] && context['widgets']['sidebar']['length']) ?
        "" :
        "hidden") + 
      "\">\r\n\t\t" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\r\n\t</div>\r\n</div>\r\n<div data-widget-area=\"footer\">\r\n\t" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n\r\n" + 
      (guard(context && context['config'] && context['config']['usePagination']) ?
        "" :
        "\r\n<noscript>\r\n\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
          iter(guard(context && context['pagination'] && context['pagination']['pages']), function each(key0, index, length, value) {
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
          }) + 
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
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n</noscript>\r\n") + 
      "\r\n";
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
    'children': function children(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['children']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li component=\"categories/category\" data-cid=\"" + 
          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['cid'])) + 
          "\" data-numRecentReplies=\"1\" class=\"row clearfix\">\r\n\t<meta itemprop=\"name\" content=\"" + 
          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['name'])) + 
          "\">\r\n\r\n\t<div class=\"content col-xs-12 " + 
          (guard(context && context['config'] && context['config']['hideCategoryLastPost']) ?
            "col-md-10 col-sm-12" :
            "col-md-7 col-sm-9") + 
          "\">\r\n\t\t<div class=\"icon pull-left\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
          "\">\r\n\t\t\t<i class=\"fa fa-fw " + 
          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['icon'])) + 
          "\"></i>\r\n\t\t</div>\r\n\r\n\t\t<h2 class=\"title\">\r\n\t\t\t" + 
          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['isSection']) ?
            "\r\n" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['name'])) + 
              "\r\n" :
            "\r\n" + 
              (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['link']) ?
                "\r\n<a href=\"" + 
                  __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['link'])) + 
                  "\" itemprop=\"url\">\r\n" :
                "\r\n<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/category/" + 
                  __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['slug'])) + 
                  "\" itemprop=\"url\">\r\n") + 
              "\r\n" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['name'])) + 
              "\r\n</a>\r\n") + 
          "\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t" + 
          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['descriptionParsed']) ?
            "\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['descriptionParsed'])) + 
              "\r\n\t\t\t</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t" + 
          (guard(context && context['config'] && context['config']['hideSubCategories']) ?
            "" :
            "\r\n\t\t\t" + 
              __escape(helper(context, helpers, 'generateChildrenCategories', [guard(value)])) + 
              "\r\n\t\t\t") + 
          "\r\n\t\t</div>\r\n\t\t<span class=\"visible-xs pull-right\">\r\n\t\t\t" + 
          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['teaser'] && context['children'][key0]['teaser']['timestampISO']) ?
            "\r\n\t\t\t<a class=\"permalink\" href=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['teaser'] && context['children'][key0]['teaser']['url'])) + 
              "\">\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['teaser'] && context['children'][key0]['teaser']['timestampISO'])) + 
              "\"></small>\r\n\t\t\t</a>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</span>\r\n\t</div>\r\n\r\n\t" + 
          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['link']) ?
            "" :
            "\r\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\r\n\t\t<span class=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['unread-class'])) + 
              " human-readable-number\" title=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['totalTopicCount'])) + 
              "\">" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['totalTopicCount'])) + 
              "</span><br />\r\n\t\t<small>[[global:topics]]</small>\r\n\t</div>\r\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\r\n\t\t<span class=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['unread-class'])) + 
              " human-readable-number\" title=\"" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['totalPostCount'])) + 
              "\">" + 
              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['totalPostCount'])) + 
              "</span><br />\r\n\t\t<small>[[global:posts]]</small>\r\n\t</div>\r\n\t" + 
              (guard(context && context['config'] && context['config']['hideCategoryLastPost']) ?
                "" :
                "\r\n\t<div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\r\n\t\t<div class=\"card background-link-container\" style=\"border-color: " + 
                  __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['bgColor'])) + 
                  "\">\r\n\t" + 
                  iter(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts']), function each(key1, index, length, value) {
                    var key = key1;
                    return "\r\n\t" + 
                      (index === 0 ?
                        "\r\n\t<div component=\"category/posts\">\r\n\t\t<a class=\"background-link\" href=\"" + 
                          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                          "/topic/" + 
                          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['topic'] && context['children'][key0]['posts'][key1]['topic']['slug'])) + 
                          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['index']) ?
                            "/" + 
                              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['index'])) :
                            "") + 
                          "\"></a>\r\n\t\t<p>\r\n\t\t\t<a href=\"" + 
                          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                          "/user/" + 
                          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['user'] && context['children'][key0]['posts'][key1]['user']['userslug'])) + 
                          "\">" + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['user']), "sm", guard(context && context['true'])])) + 
                          "</a>\r\n\t\t\t<a class=\"permalink\" href=\"" + 
                          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                          "/topic/" + 
                          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['topic'] && context['children'][key0]['posts'][key1]['topic']['slug'])) + 
                          (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['index']) ?
                            "/" + 
                              __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['index'])) :
                            "") + 
                          "\">\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
                          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['timestampISO'])) + 
                          "\"></small>\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t\t<div class=\"post-content\">\r\n\t\t\t" + 
                          __escape(guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts'][key1] && context['children'][key0]['posts'][key1]['content'])) + 
                          "\r\n\t\t</div>\r\n\t</div>\r\n\t" :
                        "") + 
                      "\r\n\t";
                  }, function alt() {
                    return "";
                  }) + 
                  "\r\n\r\n\t" + 
                  (guard(context && context['children'] && context['children'][key0] && context['children'][key0]['posts'] && context['children'][key0]['posts']['length']) ?
                    "" :
                    "\r\n\t<div component=\"category/posts\">\r\n\t\t<div class=\"post-content\">\r\n\t\t\t[[category:no_new_posts]]\r\n\t\t</div>\r\n\t</div>\r\n\t") + 
                  "\r\n</div>\r\n\r\n\t</div>\r\n\t") + 
              "\r\n\t") + 
          "\r\n</li>\r\n\r\n\t\t";
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
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['widgets'] && context['widgets']['sidebar']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t" + 
          guard(context && context['widgets'] && context['widgets']['sidebar'] && context['widgets']['sidebar'][key0] && context['widgets']['sidebar'][key0]['html']) + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['widgets'] && context['widgets']['footer']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          guard(context && context['widgets'] && context['widgets']['footer'] && context['widgets']['footer'][key0] && context['widgets']['footer'][key0]['html']) + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
