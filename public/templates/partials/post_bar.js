
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
    return "<div class=\"topic-main-buttons pull-right inline-block\">\r\n\t<span class=\"loading-indicator btn pull-left hidden\" done=\"0\">\r\n\t\t<span class=\"hidden-xs\">[[topic:loading_more_posts]]</span> <i class=\"fa fa-refresh fa-spin\"></i>\r\n\t</span>\r\n\r\n\t" + 
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
      "\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
