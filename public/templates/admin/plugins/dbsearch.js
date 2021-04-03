
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
    return "<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"panel panel-default\">\n\n\t\t\t<div class=\"panel-heading\"><h4>DB Search</h4></div>\n\n\t\t\t<div class=\"panel-body\">\n\n\t\t\t\t<div class=\"alert alert-info\">\n\t\t\t\tTopics Indexed: <strong id=\"topics-indexed\">" + 
      __escape(guard(context && context['topicsIndexed'])) + 
      "</strong> / <strong>" + 
      __escape(guard(context && context['topicCount'])) + 
      "</strong>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t<div class=\"topic-progress progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + 
      __escape(guard(context && context['progressData'] && context['progressData']['topicsPercent'])) + 
      "%;min-width: 2em;\">" + 
      __escape(guard(context && context['progressData'] && context['progressData']['topicsPercent'])) + 
      "%</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"alert alert-info\">\n\t\t\t\tPosts Indexed: <strong id=\"posts-indexed\">" + 
      __escape(guard(context && context['postsIndexed'])) + 
      "</strong> / <strong>" + 
      __escape(guard(context && context['postCount'])) + 
      "</strong>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t<div class=\"post-progress progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + 
      __escape(guard(context && context['progressData'] && context['progressData']['postsPercent'])) + 
      "%;min-width: 2em;\">" + 
      __escape(guard(context && context['progressData'] && context['progressData']['postsPercent'])) + 
      "%</div>\n\t\t\t\t</div>\n\n\t\t\t\t<button class=\"btn btn-warning\" id=\"reindex\" " + 
      (guard(context && context['working']) ?
        "disabled" :
        "") + 
      ">Re Index</button>\n\t\t\t\t<button class=\"btn btn-danger\" id=\"clear-index\">Clear Index</button>\n\t\t\t\t<span id=\"work-in-progress\" class=\"" + 
      (guard(context && context['working']) ?
        "" :
        "hidden") + 
      "\">\n\t\t\t\t\t<i class=\"fa fa-gear fa-spin\"></i> Working...\n\t\t\t\t</span>\n\t\t\t\t<hr/>\n\n\t\t\t\t<div class=\"form-group post-search-item\">\n\t\t\t\t\t<label>Select categories to exclude from indexing</label>\n\t\t\t\t\t<select multiple class=\"form-control\" id=\"exclude-categories\" size=\"10\">\n\t\t\t\t\t\t" + 
      compiled.blocks['allCategories'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t" + 
      (guard(context && context['languageSupported']) ?
        "\n\t\t\t\t<form class=\"form\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Index Language</label>\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"indexLanguage\">\n\t\t\t\t\t\t\t\t\t" + 
          compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<button class=\"btn btn-primary\" id=\"changeLanguage\">Change Language</button>\n\t\t\t\t<hr/>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t<form class=\"form\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Topic Limit</label>\n\t\t\t\t\t\t\t\t<input id=\"topicLimit\" type=\"text\" class=\"form-control\" placeholder=\"Number of topics to return\" value=\"" + 
      __escape(guard(context && context['topicLimit'])) + 
      "\">\n\t\t\t\t\t\t\t\t<label>Post Limit</label>\n\t\t\t\t\t\t\t\t<input id=\"postLimit\" type=\"text\" class=\"form-control\" placeholder=\"Number of posts to return\" value=\"" + 
      __escape(guard(context && context['postLimit'])) + 
      "\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t\t<button class=\"btn btn-primary\" id=\"save\">Save</button>\n\n\t\t\t\t<input id=\"csrf_token\" type=\"hidden\" value=\"" + 
      __escape(guard(context && context['csrf'])) + 
      "\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'allCategories': function allCategories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['allCategories']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['allCategories'] && context['allCategories'][key0] && context['allCategories'][key0]['value'])) + 
          "\" " + 
          (guard(context && context['allCategories'] && context['allCategories'][key0] && context['allCategories'][key0]['selected']) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard(context && context['allCategories'] && context['allCategories'][key0] && context['allCategories'][key0]['text'])) + 
          "</option>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['languages']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['languages'] && context['languages'][key0] && context['languages'][key0]['value'])) + 
          "\" " + 
          (guard(context && context['languages'] && context['languages'][key0] && context['languages'][key0]['selected']) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard(context && context['languages'] && context['languages'][key0] && context['languages'][key0]['name'])) + 
          "</option>\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
