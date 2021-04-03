
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
      "\r\n\r\n\r\n<div class=\"search\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<form id=\"advanced-search\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<label>[[global:search]]</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"search-input\" placeholder=\"[[global:search]]\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t<label>[[search:in]]</label>\r\n\t\t\t\t\t\t\t<select id=\"search-in\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option value=\"titlesposts\">[[search:titles-posts]]</option>\r\n\t\t\t\t\t\t\t\t<option value=\"titles\">[[search:titles]]</option>\r\n\t\t\t\t\t\t\t\t<option value=\"posts\">[[global:posts]]</option>\r\n\t\t\t\t\t\t\t\t" + 
      (guard(context && context['privileges'] && context['privileges']['search:users']) ?
        "\r\n\t\t\t\t\t\t\t\t<option value=\"users\">[[global:users]]</option>\r\n\t\t\t\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t\t\t\t" + 
      (guard(context && context['privileges'] && context['privileges']['search:tags']) ?
        "\r\n\t\t\t\t\t\t\t\t<option value=\"tags\">[[tags:tags]]</option>\r\n\t\t\t\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t<label>[[search:match-words]]</label>\r\n\t\t\t\t\t\t\t<select id=\"match-words-filter\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option value=\"all\">[[search:all]]</option>\r\n\t\t\t\t\t\t\t\t<option value=\"any\">[[search:any]]</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t<label>&nbsp;</label>\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary form-control\">[[global:search]]</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\".search-options\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-caret-down\"></i> [[search:advanced-search]]</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body search-options collapse " + 
      (guard(context && context['expandSearch']) ?
        "in" :
        "") + 
      "\">\r\n\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<label>[[search:in-categories]]</label>\r\n\t\t\t\t\t\t\t\t\t<select multiple class=\"form-control\" id=\"posted-in-categories\" size=\"" + 
      __escape(guard(context && context['categoriesCount'])) + 
      "\">\r\n\t\t\t\t\t\t\t\t\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"search-children\"> [[search:search-child-categories]]\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>[[search:posted-by]]</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"posted-by-user\" placeholder=\"[[search:posted-by]]\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>[[search:has-tags]]</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"has-tags\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t\t\t\t<label>[[search:reply-count]]</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"reply-count-filter\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"atleast\">[[search:at-least]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"atmost\">[[search:at-most]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"reply-count\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t\t\t\t<label>[[search:post-time]]</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"post-time-filter\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"newer\">[[search:newer-than]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"older\">[[search:older-than]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"post-time-range\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">[[search:any-date]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"86400\">[[search:yesterday]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"604800\">[[search:one-week]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1209600\">[[search:two-weeks]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2592000\">[[search:one-month]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"7776000\">[[search:three-months]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"15552000\">[[search:six-months]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"31104000\">[[search:one-year]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t\t\t\t<label>[[search:sort-by]]</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"post-sort-by\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"relevance\">[[search:relevance]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"timestamp\">[[search:post-time]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"votes\">[[search:votes]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.lastposttime\">[[search:last-reply-time]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.title\">[[search:topic-title]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.postcount\">[[search:number-of-replies]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.viewcount\">[[search:number-of-views]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.votes\">[[search:topic-votes]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.timestamp\">[[search:topic-start-date]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"user.username\">[[search:username]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"category.name\">[[search:category]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"post-sort-direction\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"desc\">[[search:descending]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"asc\">[[search:ascending]]</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t\t\t\t<label>[[search:show-results-as]]</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"radio\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"show-as-posts\" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t\t[[global:posts]]\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"radio\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"show-as-topics\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t[[global:topics]]\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">[[global:search]]</button>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-default\" id=\"save-preferences\" href=\"#\">[[search:save-preferences]]</a>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-default\" id=\"clear-preferences\" href=\"#\">[[search:clear-preferences]]</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div id=\"results\" class=\"search-results col-md-12\" data-search-query=\"" + 
      __escape(guard(context && context['search_query'])) + 
      "\">\r\n\t\t\t" + 
      (guard(context && context['matchCount']) ?
        "\r\n\t\t\t<div class=\"alert alert-info\">[[search:results_matching, " + 
          __escape(guard(context && context['matchCount'])) + 
          ", " + 
          __escape(guard(context && context['search_query'])) + 
          ", " + 
          __escape(guard(context && context['time'])) + 
          "]] </div>\r\n\t\t\t" :
        "\r\n\t\t\t" + 
          (guard(context && context['search_query']) ?
            "\r\n\t\t\t<div class=\"alert alert-warning\">[[search:no-matches]]</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t") + 
      "\r\n\r\n\t\t\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t\t" + 
      (guard(context && context['users'] && context['users']['length']) ?
        "\r\n\t\t\t<ul id=\"users-container\" class=\"users-container\">\r\n\t\t\t" + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t</ul>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      (guard(context && context['tags'] && context['tags']['length']) ?
        "\r\n\t\t\t" + 
          compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
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
        return "\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['value'])) + 
          "\">" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['text'])) + 
          "</option>\r\n\t\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['posts']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<div class=\"topic-row panel panel-default clearfix\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user'] && context['posts'][key0]['user']['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['user']), "sm", guard(context && context['true'])])) + 
          "</a>\r\n\t\t\t\t\t<span class=\"search-result-text search-result-title\"><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/post/" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['pid'])) + 
          "\">" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['topic'] && context['posts'][key0]['topic']['title'])) + 
          "</a></span>\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t" + 
          (guard(context && context['showAsPosts']) ?
            "\r\n\t\t\t\t\t<div class=\"search-result-text\">\r\n\t\t\t\t\t\t" + 
              __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['content'])) + 
              "\r\n\t\t\t\t\t\t<p class=\"fade-out\"></p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t<small class=\"post-info pull-right\">\r\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/category/" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['slug'])) + 
          "\"><span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'])])) + 
          "\"><i style=\"color:" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['color'])) + 
          ";\" class=\"fa " + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['icon'])) + 
          " fa-stack-1x\"></i></span> " + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['category'] && context['posts'][key0]['category']['name'])) + 
          "</a> &bull;\r\n\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['posts'] && context['posts'][key0] && context['posts'][key0]['timestampISO'])) + 
          "\"></span>\r\n\t\t\t\t\t</small>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li class=\"users-box registered-user\" data-uid=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
          "\">\r\n\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['users'] && context['users'][key0]), "lg", guard(context && context['true'])])) + 
          "</a>\r\n\t<br/>\r\n\t<div class=\"user-info\">\r\n\t\t<span>\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['status'])) + 
          "\" title=\"[[global:" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['status'])) + 
          "]]\"></i>\r\n\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['userslug'])) + 
          "\">" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          "</a>\r\n\t\t</span>\r\n\t\t<br/>\r\n\r\n\t\t" + 
          (guard(context && context['section_joindate']) ?
            "\r\n\t\t<div title=\"joindate\" class=\"joindate\">\r\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['joindateISO'])) + 
              "\"></span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard(context && context['section_sort-reputation']) ?
            "\r\n\t\t<div title=\"reputation\" class=\"reputation\">\r\n\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t<span class=\"formatted-number\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['reputation'])) + 
              "</span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard(context && context['section_sort-posts']) ?
            "\r\n\t\t<div title=\"post count\" class=\"post-count\">\r\n\t\t\t<i class=\"fa fa-pencil\"></i>\r\n\t\t\t<span class=\"formatted-number\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['postcount'])) + 
              "</span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard(context && context['section_flagged']) ?
            "\r\n\t\t<div title=\"flag count\" class=\"flag-count\">\r\n\t\t\t<i class=\"fa fa-flag\"></i>\r\n\t\t\t<span><a class=\"formatted-number\" href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/flags?targetUid=" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
              "\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['flags'])) + 
              "</a></span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\t</div>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['tags']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<h3 class=\"pull-left tag-container\">\r\n\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/tags/" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "\" data-value=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
          "\"><span class=\"tag-item\" data-tag=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['valueEscaped'])) + 
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
          "</span><span class=\"tag-topic-count human-readable-number\" title=\"" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['score'])) + 
          "\">" + 
          __escape(guard(context && context['tags'] && context['tags'][key0] && context['tags'][key0]['score'])) + 
          "</span></a>\r\n</h3>\r\n";
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
