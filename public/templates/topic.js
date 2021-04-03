
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
    return "<div data-widget-area=\"header\">\r\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"topic " + 
      (guard(context && context['widgets'] && context['widgets']['sidebar'] && context['widgets']['sidebar']['length']) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\r\n\t\t<div class=\"topic-header\">\r\n\t\t\t<h1 component=\"post/header\" class=\"\" itemprop=\"name\">\r\n\t\t\t\t<span class=\"topic-title\" component=\"topic/title\">\r\n\t\t\t\t\t<span component=\"topic/labels\">\r\n\t\t\t\t\t\t<i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
      (guard(context && context['pinned']) ?
        "" :
        "hidden") + 
      "\" title=\"" + 
      (guard(context && context['pinExpiry']) ?
        "[[topic:pinned-with-expiry, " + 
          __escape(guard(context && context['pinExpiryISO'])) + 
          "]]" :
        "[[topic:pinned]]") + 
      "\"></i>\r\n\t\t\t\t\t\t<i component=\"topic/locked\" class=\"fa fa-lock " + 
      (guard(context && context['locked']) ?
        "" :
        "hidden") + 
      "\" title=\"[[topic:locked]]\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-arrow-circle-right " + 
      (guard(context && context['oldCid']) ?
        "" :
        "hidden") + 
      "\" title=\"" + 
      (guard(context && context['privileges'] && context['privileges']['isAdminOrMod']) ?
        "[[topic:moved-from, " + 
          __escape(guard(context && context['oldCategory'] && context['oldCategory']['name'])) + 
          "]]" :
        "[[topic:moved]]") + 
      "\"></i>\r\n\t\t\t\t\t\t" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t" + 
      __escape(guard(context && context['title'])) + 
      "\r\n\t\t\t\t</span>\r\n\t\t\t</h1>\r\n\r\n\t\t\t<div class=\"topic-info clearfix\">\r\n\t\t\t\t<div class=\"category-item inline-block\">\r\n\t\t\t\t\t" + 
      (guard(context && context['category'] && context['category']['icon']) ?
        "\r\n\t\t\t\t\t<div role=\"presentation\" class=\"icon pull-left\" style=\"" + 
          (guard(context && context['category'] && context['category']['bgColor']) ?
            "background-color: " + 
              __escape(guard(context && context['category'] && context['category']['bgColor'])) + 
              ";" :
            "") + 
          "; " + 
          (guard(context && context['category'] && context['category']['color']) ?
            "color: " + 
              __escape(guard(context && context['category'] && context['category']['color'])) + 
              ";" :
            "") + 
          "\">\r\n\t\t\t\t\t\t<i class=\"fa fa-fw " + 
          __escape(guard(context && context['category'] && context['category']['icon'])) + 
          "\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/category/" + 
      __escape(guard(context && context['category'] && context['category']['slug'])) + 
      "\">" + 
      __escape(guard(context && context['category'] && context['category']['name'])) + 
      "</a>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"tags tag-list inline-block hidden-xs\">\r\n\t\t\t\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"inline-block hidden-xs\">\r\n\t\t\t\t\t<div class=\"stats text-muted\">\r\n\t<i class=\"fa fa-fw fa-user\" title=\"[[global:posters]]\"></i>\r\n\t<span title=\"" + 
      __escape(guard(context && context['postercount'])) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard(context && context['postercount'])) + 
      "</span>\r\n</div>\r\n<div class=\"stats text-muted\">\r\n\t<i class=\"fa fa-fw fa-pencil\" title=\"[[global:posts]]\"></i>\r\n\t<span component=\"topic/post-count\" title=\"" + 
      __escape(guard(context && context['postcount'])) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard(context && context['postcount'])) + 
      "</span>\r\n</div>\r\n<div class=\"stats text-muted\">\r\n\t<i class=\"fa fa-fw fa-eye\" title=\"[[global:views]]\"></i>\r\n\t<span class=\"human-readable-number\" title=\"" + 
      __escape(guard(context && context['viewcount'])) + 
      "\">" + 
      __escape(guard(context && context['viewcount'])) + 
      "</span>\r\n</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t" + 
      (guard(context && context['feeds:disableRSS']) ?
        "" :
        "\r\n\t\t\t\t" + 
          (guard(context && context['rssFeedUrl']) ?
            "<a class=\"hidden-xs\" target=\"_blank\" href=\"" + 
              __escape(guard(context && context['rssFeedUrl'])) + 
              "\"><i class=\"fa fa-rss-square\"></i></a>" :
            "") + 
          "\r\n\t\t\t\t") + 
      "\r\n\t\t\t\t<div component=\"topic/browsing-users\" class=\"inline-block hidden-xs\">\r\n\t" + 
      compiled.blocks['browsingUsers'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n\r\n\t\t\t\t<div class=\"topic-main-buttons pull-right inline-block\">\r\n\t<span class=\"loading-indicator btn pull-left hidden\" done=\"0\">\r\n\t\t<span class=\"hidden-xs\">[[topic:loading_more_posts]]</span> <i class=\"fa fa-refresh fa-spin\"></i>\r\n\t</span>\r\n\r\n\t" + 
      (guard(context && context['loggedIn']) ?
        "\r\n\t<button component=\"topic/mark-unread\" class=\"btn btn-sm btn-default\" title=\"[[topic:mark_unread]]\">\r\n\t\t<i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"></span>\r\n\t</button>\r\n\t" :
        "") + 
      "\r\n\r\n\t" + 
      (guard(context && context['config'] && context['config']['loggedIn']) ?
        "\r\n<div class=\"btn-group topic-watch-dropdown bottom-sheet\" component=\"topic/watch\">\r\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"\r\n\t\t" + 
          (guard(context && context['isFollowing']) ?
            "title=\"[[topic:watching]]\"" :
            "") + 
          "\r\n\t\t" + 
          (guard(context && context['isNotFollowing']) ?
            "title=\"[[topic:not-watching]]\"" :
            "") + 
          "\r\n\t\t" + 
          (guard(context && context['isIgnoring']) ?
            "title=\"[[topic:ignoring]]\"" :
            "") + 
          "\r\n\t>\r\n\t\t<span component=\"topic/following/menu\" " + 
          (guard(context && context['isFollowing']) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-o\"></i></span>\r\n\r\n\t\t<span component=\"topic/not-following/menu\" " + 
          (guard(context && context['isNotFollowing']) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-slash-o\"></i></span>\r\n\r\n\t\t<span component=\"topic/ignoring/menu\" " + 
          (guard(context && context['isIgnoring']) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i></span>\r\n\r\n\t</button>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t<li><a href=\"#\" component=\"topic/following\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard(context && context['isFollowing']) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-o\"></i> [[topic:watching]]<p class=\"help-text hidden-xs\"><small>[[topic:watching.description]]</small></p></a></li>\r\n\t\t<li><a href=\"#\" component=\"topic/not-following\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard(context && context['isNotFollowing']) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-slash-o\"></i> [[topic:not-watching]]<p class=\"help-text hidden-xs\"><small>[[topic:not-watching.description]]</small></p></a></li>\r\n\t\t<li><a href=\"#\" component=\"topic/ignoring\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard(context && context['isIgnoring']) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[topic:ignoring]]<p class=\"help-text hidden-xs\"><small>[[topic:ignoring.description]]</small></p></a></li>\r\n\t</ul>\r\n</div>\r\n" :
        "") + 
      "\r\n\r\n\t<div title=\"[[topic:sort_by]]\" class=\"btn-group bottom-sheet hidden-xs\" component=\"thread/sort\">\r\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\t<span><i class=\"fa fa-fw fa-sort\"></i></span></button>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t<li><a href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\"><i class=\"fa fa-fw\"></i> [[topic:oldest_to_newest]]</a></li>\r\n\t\t<li><a href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\"><i class=\"fa fa-fw\"></i> [[topic:newest_to_oldest]]</a></li>\r\n\t\t<li><a href=\"#\" class=\"most_votes\" data-sort=\"most_votes\"><i class=\"fa fa-fw\"></i> [[topic:most_votes]]</a></li>\r\n\t</ul>\r\n</div>\r\n\r\n\r\n\t<div class=\"inline-block\">\r\n\t" + 
      (guard(context && context['privileges'] && context['privileges']['view_thread_tools']) ?
        "\r\n<div title=\"[[topic:thread_tools.title]]\" class=\"btn-group thread-tools bottom-sheet\">\r\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\t\t<i class=\"fa fa-fw fa-gear\"></i>\r\n\t</button>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\"></ul>\r\n</div>\r\n" :
        "") + 
      "\r\n\t</div>\r\n\t<div component=\"topic/reply/container\" class=\"btn-group action-bar bottom-sheet " + 
      (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
        "" :
        "hidden") + 
      "\">\r\n\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/compose?tid=" + 
      __escape(guard(context && context['tid'])) + 
      "&title=" + 
      __escape(guard(context && context['title'])) + 
      "\" class=\"btn btn-sm btn-primary\" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-reply visible-xs-inline\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[topic:reply]]</span></a>\r\n\t<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t<span class=\"caret\"></span>\r\n\t</button>\r\n\t<ul class=\"dropdown-menu pull-right\" role=\"menu\">\r\n\t\t<li><a href=\"#\" component=\"topic/reply-as-topic\">[[topic:reply-as-topic]]</a></li>\r\n\t</ul>\r\n</div>\r\n\r\n" + 
      (guard(context && context['loggedIn']) ?
        "\r\n" + 
          (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
            "" :
            "\r\n" + 
              (guard(context && context['locked']) ?
                "\r\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\r\n" :
                "") + 
              "\r\n") + 
          "\r\n\r\n" + 
          (guard(context && context['locked']) ?
            "" :
            "\r\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary hidden\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\r\n") + 
          "\r\n\r\n" :
        "\r\n\r\n" + 
          (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
            "" :
            "\r\n<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/login\" class=\"btn btn-sm btn-primary\">[[topic:guest-login-reply]]</a>\r\n") + 
          "\r\n") + 
      "\r\n</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" + 
      (guard(context && context['merger']) ?
        "\r\n\t\t<div component=\"topic/merged/message\" class=\"alert alert-warning clearfix\">\r\n\t\t\t<span class=\"pull-left\">[[topic:merged_message, " + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/topic/" + 
          __escape(guard(context && context['mergeIntoTid'])) + 
          ", " + 
          __escape(guard(context && context['merger'] && context['merger']['mergedIntoTitle'])) + 
          "]]</span>\r\n\t\t\t<span class=\"pull-right\">\r\n\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['merger'] && context['merger']['userslug'])) + 
          "\">\r\n\t\t\t\t\t<strong>" + 
          __escape(guard(context && context['merger'] && context['merger']['username'])) + 
          "</strong>\r\n\t\t\t\t</a>\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
          __escape(guard(context && context['mergedTimestampISO'])) + 
          "\"></small>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t<div component=\"topic/deleted/message\" class=\"alert alert-warning" + 
      (guard(context && context['deleted']) ?
        "" :
        " hidden") + 
      " clearfix\">\r\n    <span class=\"pull-left\">[[topic:deleted_message]]</span>\r\n    <span class=\"pull-right\">\r\n        " + 
      (guard(context && context['deleter']) ?
        "\r\n        <a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['deleter'] && context['deleter']['userslug'])) + 
          "\">\r\n            <strong>" + 
          __escape(guard(context && context['deleter'] && context['deleter']['username'])) + 
          "</strong>\r\n        </a>\r\n        <small class=\"timeago\" title=\"" + 
          __escape(guard(context && context['deletedTimestampISO'])) + 
          "\"></small>\r\n        " :
        "") + 
      "\r\n    </span>\r\n</div>\r\n\r\n\t\t<ul component=\"topic\" class=\"posts\" data-tid=\"" + 
      __escape(guard(context && context['tid'])) + 
      "\" data-cid=\"" + 
      __escape(guard(context && context['cid'])) + 
      "\">\r\n\t\t\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</ul>\r\n\r\n\t\t" + 
      (guard(context && context['config'] && context['config']['enableQuickReply']) ?
        "\r\n\t\t" + 
          (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
            "\r\n<div class=\"clearfix quick-reply\">\r\n\t<div class=\"icon pull-left hidden-xs\">\r\n\t\t<a href=\"" + 
              (guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['userslug']) ?
                __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/user/" + 
                  __escape(guard(context && context['posts'] && context['posts']['user'] && context['posts']['user']['userslug'])) :
                "#") + 
              "\">\r\n\t\t\t" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['loggedInUser']), "46", guard(context && context['true']), "", "user/picture"])) + 
              "\r\n\t\t\t" + 
              (guard(context && context['loggedInUser'] && context['loggedInUser']['status']) ?
                "\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
                  __escape(guard(context && context['loggedInUser'] && context['loggedInUser']['status'])) + 
                  "\" title=\"[[global:" + 
                  __escape(guard(context && context['loggedInUser'] && context['loggedInUser']['status'])) + 
                  "]]\"></i>\r\n\t\t\t" :
                "") + 
              "\r\n\t\t</a>\r\n\t</div>\r\n\t<form method=\"post\" action=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/compose\">\r\n\t\t<input type=\"hidden\" name=\"tid\" value=\"" + 
              __escape(guard(context && context['tid'])) + 
              "\" />\r\n\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
              __escape(guard(context && context['config'] && context['config']['csrf_token'])) + 
              "\" />\r\n\t\t<div class=\"quickreply-message\">\r\n\t\t\t<textarea name=\"content\" component=\"topic/quickreply/text\" class=\"form-control\" rows=\"5\"></textarea>\r\n\t\t</div>\r\n\t\t<button type=\"submit\" component=\"topic/quickreply/button\" class=\"btn btn-primary pull-right\">[[persona:post-quick-reply]]</button>\r\n\t</form>\r\n</div>\r\n" :
            "") + 
          "\r\n\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard(context && context['config'] && context['config']['usePagination']) ?
        "\r\n\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\r\n\r\n\t\t<div class=\"pagination-block text-center\">\r\n    <div class=\"progress-bar\"></div>\r\n    <div class=\"wrapper dropup\">\r\n        <i class=\"fa fa-2x fa-angle-double-up pointer fa-fw pagetop\"></i>\r\n\r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            <span class=\"pagination-text\"></span>\r\n        </a>\r\n\r\n        <i class=\"fa fa-2x fa-angle-double-down pointer fa-fw pagebottom\"></i>\r\n        <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n            <li>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-8 post-content\"></div>\r\n                    <div class=\"col-xs-4 text-right\">\r\n                        <div class=\"scroller-content\">\r\n                            <span class=\"pointer pagetop\">[[topic:first-post]] <i class=\"fa fa-angle-double-up\"></i></span>\r\n                            <div class=\"scroller-container\">\r\n                                <div class=\"scroller-thumb\">\r\n                                    <span class=\"thumb-text\"></span>\r\n                                    <div class=\"scroller-thumb-icon\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <span class=\"pointer pagebottom\">[[topic:last-post]] <i class=\"fa fa-angle-double-down\"></i></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"indexInput\" placeholder=\"[[global:pagination.enter_index]]\">\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\t</div>\r\n\t<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard(context && context['widgets'] && context['widgets']['sidebar'] && context['widgets']['sidebar']['length']) ?
        "" :
        "hidden") + 
      "\">\r\n\t\t" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\r\n\t</div>\r\n</div>\r\n\r\n<div data-widget-area=\"footer\">\r\n\t" + 
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
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['icons']), function each(key0, index, length, value) {
        var key = key0;
        return __escape(guard(value));
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['tags']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/tags/" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['value'])) + 
          "\">\r\n    <span class=\"tag tag-item\" data-tag=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['value'])) + 
          "\" style=\"" + 
          (guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['color']) ?
            "color: " + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['color'])) + 
              ";" :
            "") + 
          (guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['bgColor']) ?
            "background-color: " + 
              __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['bgColor'])) + 
              ";" :
            "") + 
          "\">" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "</span>\r\n</a>\r\n";
      }, function alt() {
        return "";
      });
    },
    'browsingUsers': function browsingUsers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['browsingUsers']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div class=\"pull-left\" data-uid=\"" + 
          __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['uid'])) + 
          "\">\r\n\t\t<a href=\"" + 
          (guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['userslug']) ?
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['userslug'])) :
            "#") + 
          "\">\r\n\t\t\t" + 
          (guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['picture']) ?
            "\r\n\t\t\t<img class=\"avatar avatar-sm avatar-rounded\" component=\"user/picture\" src=\"" + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['picture'])) + 
              "\" align=\"left\" itemprop=\"image\" title=\"" + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['username'])) + 
              "\"/>\r\n\t\t\t" :
            "\r\n\t\t\t<div class=\"avatar avatar-sm avatar-rounded\" component=\"user/picture\" title=\"" + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['username'])) + 
              "\" style=\"background-color: " + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['icon:bgColor'])) + 
              ";\">" + 
              __escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key0] && context['browsingUsers'][key0]['icon:text'])) + 
              "</div>\r\n\t\t\t") + 
          "\r\n\t\t</a>\r\n\t</div>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li component=\"post\" class=\"" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['deleted']) ?
            "deleted" :
            "") + 
          " " + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['selfPost']) ?
            "self-post" :
            "") + 
          " " + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['topicOwnerPost']) ?
            "topic-owner-post" :
            "") + 
          "\" data-index=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['index'])) + 
          "\" data-pid=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['pid'])) + 
          "\" data-uid=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['uid'])) + 
          "\" data-timestamp=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['timestamp'])) + 
          "\" data-username=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['username'])) + 
          "\" data-userslug=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug'])) + 
          "\" itemscope itemtype=\"http://schema.org/Comment\">\r\n\t\t\t\t\t<a component=\"post/anchor\" data-index=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['index'])) + 
          "\" id=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['index'])) + 
          "\"></a>\r\n\r\n\t\t\t\t\t<meta itemprop=\"datePublished\" content=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['timestampISO'])) + 
          "\">\r\n\t\t\t\t\t<meta itemprop=\"dateModified\" content=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['editedISO'])) + 
          "\">\r\n\r\n\t\t\t\t\t<div class=\"clearfix post-header\">\r\n\t<div class=\"icon pull-left\">\r\n\t\t<a href=\"" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug']) ?
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug'])) :
            "#") + 
          "\">\r\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user']), "sm2x", guard(context && context['true']), "", "user/picture"])) + 
          "\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['status'])) + 
          "\" title=\"[[global:" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['status'])) + 
          "]]\"></i>\r\n\t\t</a>\r\n\t</div>\r\n\r\n\t<small class=\"pull-left\">\r\n\t\t<strong>\r\n\t\t\t<a href=\"" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug']) ?
            __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/user/" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug'])) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['username'])) + 
          "\" data-uid=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['uid'])) + 
          "\">" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['displayname'])) + 
          "</a>\r\n\t\t</strong>\r\n\r\n\t\t" + 
          iter(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['selectedGroups']), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n" + 
              (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['selectedGroups'] && context['posts'][key0]['user']['selectedGroups'][key1] && context['posts'][key0]['user']['selectedGroups'][key1]['slug']) ?
                "\r\n<a href=\"" + 
                  __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
                  "/groups/" + 
                  __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['selectedGroups'] && context['posts'][key0]['user']['selectedGroups'][key1] && context['posts'][key0]['user']['selectedGroups'][key1]['slug'])) + 
                  "\"><small class=\"label group-label inline-block\" style=\"color:" + 
                  __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['selectedGroups'] && context['posts'][key0]['user']['selectedGroups'][key1] && context['posts'][key0]['user']['selectedGroups'][key1]['textColor'])) + 
                  ";background-color: " + 
                  __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['selectedGroups'] && context['posts'][key0]['user']['selectedGroups'][key1] && context['posts'][key0]['user']['selectedGroups'][key1]['labelColor'])) + 
                  ";\">" + 
                  (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['selectedGroups'] && context['posts'][key0]['user']['selectedGroups'][key1] && context['posts'][key0]['user']['selectedGroups'][key1]['icon']) ?
                    "<i class=\"fa " + 
                      __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['selectedGroups'] && context['posts'][key0]['user']['selectedGroups'][key1] && context['posts'][key0]['user']['selectedGroups'][key1]['icon'])) + 
                      "\"></i> " :
                    "") + 
                  __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['selectedGroups'] && context['posts'][key0]['user']['selectedGroups'][key1] && context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'])) + 
                  "</small></a>\r\n" :
                "") + 
              "\r\n";
          }, function alt() {
            return "";
          }) + 
          "\r\n\r\n\t\t" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['banned']) ?
            "\r\n\t\t<span class=\"label label-danger\">[[user:banned]]</span>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t<span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\r\n\t\t\t" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['toPid']) ?
            "\r\n\t\t\t<a component=\"post/parent\" class=\"btn btn-xs btn-default hidden-xs\" data-topid=\"" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['toPid'])) + 
              "\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/post/" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['toPid'])) + 
              "\"><i class=\"fa fa-reply\"></i> @" + 
              (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['parent'] && context['posts'][key0]['parent']['username']) ?
                __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['parent'] && context['posts'][key0]['parent']['username'])) :
                "[[global:guest]]") + 
              "</a>\r\n\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t<span>\r\n\t\t\t\t" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['custom_profile_info'] && context['posts'][key0]['user']['custom_profile_info']['length']) ?
            "\r\n\t\t\t\t&#124;\r\n\t\t\t\t" + 
              iter(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['custom_profile_info']), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t\t" + 
                  __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['custom_profile_info'] && context['posts'][key0]['user']['custom_profile_info'][key1] && context['posts'][key0]['user']['custom_profile_info'][key1]['content'])) + 
                  "\r\n\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</span>\r\n\t\t</span>\r\n\r\n\t</small>\r\n\t<small class=\"pull-right\">\r\n\t\t<span class=\"bookmarked\"><i class=\"fa fa-bookmark-o\"></i></span>\r\n\t</small>\r\n\t<small class=\"pull-right\">\r\n\t\t<i component=\"post/edit-indicator\" class=\"fa fa-pencil-square" + 
          (guard(context && context['privileges'] && context['privileges']['posts:history']) ?
            " pointer" :
            "") + 
          " edit-icon " + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['editor'] && context['posts'][key0]['editor']['username']) ?
            "" :
            "hidden") + 
          "\"></i>\r\n\r\n\t\t<small data-editor=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['editor'] && context['posts'][key0]['editor']['userslug'])) + 
          "\" component=\"post/editor\" class=\"hidden\">[[global:last_edited_by, " + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['editor'] && context['posts'][key0]['editor']['username'])) + 
          "]] <span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['editedISO'])) + 
          "\"></span></small>\r\n\r\n\t\t<span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\r\n\t\t\t<a class=\"permalink\" href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/post/" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['pid'])) + 
          "\"><span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['timestampISO'])) + 
          "\"></span></a>\r\n\t\t</span>\r\n\t</small>\r\n</div>\r\n\r\n<br />\r\n\r\n<div class=\"content\" component=\"post/content\" itemprop=\"text\">\r\n\t" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['content'])) + 
          "\r\n</div>\r\n\r\n<div class=\"post-footer\">\r\n\t" + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['signature']) ?
            "\r\n\t<div component=\"post/signature\" data-uid=\"" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['uid'])) + 
              "\" class=\"post-signature\">" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['signature'])) + 
              "</div>\r\n\t" :
            "") + 
          "\r\n\r\n\t<div class=\"clearfix\">\r\n\t" + 
          (guard(context && context['hideReplies']) ?
            "" :
            "\r\n\t<a component=\"post/reply-count\" data-target-component=\"post/replies/container\" href=\"#\" class=\"threaded-replies no-select pull-left " + 
              (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['replies'] && context['posts'][key0]['replies']['count']) ?
                "" :
                "hidden") + 
              "\">\r\n\t\t<span component=\"post/reply-count/avatars\" class=\"avatars " + 
              (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['replies'] && context['posts'][key0]['replies']['hasMore']) ?
                "hasMore" :
                "") + 
              "\">\r\n\t\t\t" + 
              iter(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['replies'] && context['posts'][key0]['replies']['users']), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['replies'] && context['posts'][key0]['replies']['users'] && context['posts'][key0]['replies']['users'][key1]), "xs", guard(context && context['true']), ""])) + 
                  "\r\n\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\r\n\t\t</span>\r\n\r\n\t\t<span class=\"replies-count\" component=\"post/reply-count/text\" data-replies=\"" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['replies'] && context['posts'][key0]['replies']['count'])) + 
              "\">" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['replies'] && context['posts'][key0]['replies']['text'])) + 
              "</span>\r\n\t\t<span class=\"replies-last hidden-xs\">[[topic:last_reply_time]] <span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['replies'] && context['posts'][key0]['replies']['timestampISO'])) + 
              "\"></span></span>\r\n\r\n\t\t<i class=\"fa fa-fw fa-chevron-right\" component=\"post/replies/open\"></i>\r\n\t\t<i class=\"fa fa-fw fa-chevron-down hidden\" component=\"post/replies/close\"></i>\r\n\t\t<i class=\"fa fa-fw fa-spin fa-spinner hidden\" component=\"post/replies/loading\"></i>\r\n\t</a>\r\n\t") + 
          "\r\n\r\n\t<small class=\"pull-right\">\r\n\t\t<span class=\"post-tools\">\r\n\t\t\t<a component=\"post/reply\" href=\"#\" class=\"no-select " + 
          (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
            "" :
            "hidden") + 
          "\">[[topic:reply]]</a>\r\n\t\t\t<a component=\"post/quote\" href=\"#\" class=\"no-select " + 
          (guard(context && context['privileges'] && context['privileges']['topics:reply']) ?
            "" :
            "hidden") + 
          "\">[[topic:quote]]</a>\r\n\t\t</span>\r\n\r\n\t\t" + 
          (guard(context && context['reputation:disabled']) ?
            "" :
            "\r\n\t\t<span class=\"votes\">\r\n\t\t\t<a component=\"post/upvote\" href=\"#\" class=\"" + 
              (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['upvoted']) ?
                "upvoted" :
                "") + 
              "\">\r\n\t\t\t\t<i class=\"fa fa-chevron-up\"></i>\r\n\t\t\t</a>\r\n\r\n\t\t\t<span component=\"post/vote-count\" data-votes=\"" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['votes'])) + 
              "\">" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['votes'])) + 
              "</span>\r\n\r\n\t\t\t" + 
              (guard(context && context['downvote:disabled']) ?
                "" :
                "\r\n\t\t\t<a component=\"post/downvote\" href=\"#\" class=\"" + 
                  (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['downvoted']) ?
                    "downvoted" :
                    "") + 
                  "\">\r\n\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\r\n\t\t\t</a>\r\n\t\t\t") + 
              "\r\n\t\t</span>\r\n\t\t") + 
          "\r\n\r\n\t\t<span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet " + 
          (guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['display_post_menu']) ?
            "" :
            "hidden") + 
          "\">\r\n\t<a href=\"#\" data-toggle=\"dropdown\" data-ajaxify=\"false\"><i class=\"fa fa-fw fa-ellipsis-v\"></i></a>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\"></ul>\r\n</span>\r\n\r\n\t</small>\r\n\t</div>\r\n\t<div component=\"post/replies/container\"></div>\r\n</div>\r\n\t\t\t\t</li>\r\n\t\t\t";
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
