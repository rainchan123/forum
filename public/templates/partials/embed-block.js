
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
    return "<div class=\"row github-embeds-container\">\n    " + 
      compiled.blocks['embeds'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'embeds': function embeds(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['embeds']), function each(key0, index, length, value) {
        var key = key0;
        return "\n    " + 
          (guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['type'] && context['embeds'][key0]['type']['issue']) ?
            "\n        <div class=\"col-md-6\">\n            <div class=\"github-embed panel panel-default\">\n                <div class=\"panel-body\">\n                    <div class=\"meta\">\n                        <img class=\"author-picture not-responsive\" src=\"" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['user'] && context['embeds'][key0]['user']['picture'])) + 
              "\" title=\"" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['user'] && context['embeds'][key0]['user']['login'])) + 
              "\" />\n                        <a href=\"" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['user'] && context['embeds'][key0]['user']['url'])) + 
              "\"><span class=\"username\">" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['user'] && context['embeds'][key0]['user']['login'])) + 
              "</span></a> created this issue <span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['created'])) + 
              "\"></span> in <a href=\"//github.com/" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['repo'])) + 
              "\">" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['repo'])) + 
              "</a>\n                    </div>\n                    <h3>\n                        <span class=\"label label-default " + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['state'])) + 
              " pull-right\">" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['state'])) + 
              "</span>\n                        <a href=\"" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['url'])) + 
              "\">" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['title'])) + 
              "</a>\n                        <span class=\"number\">#" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['number'])) + 
              "</span>\n                    </h3>\n                </div>\n            </div>\n        </div>\n    " :
            "") + 
          "\n    " + 
          (guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['type'] && context['embeds'][key0]['type']['commit']) ?
            "\n        <div class=\"col-md-6\">\n            <div class=\"github-embed panel panel-default\">\n                <div class=\"panel-body\">\n                    <div class=\"meta\">\n                        <span class=\"pull-right\">" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['commentCount'])) + 
              " <i class=\"fa fa-comment\"></i></span>\n                        <img class=\"author-picture not-responsive\" src=\"" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['user'] && context['embeds'][key0]['user']['picture'])) + 
              "\" title=\"" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['user'] && context['embeds'][key0]['user']['login'])) + 
              "\" />\n                        <a href=\"" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['user'] && context['embeds'][key0]['user']['url'])) + 
              "\"><span class=\"username\">" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['user'] && context['embeds'][key0]['user']['login'])) + 
              "</span></a> committed <span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['created'])) + 
              "\"></span> to <a href=\"//github.com/" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['repo'])) + 
              "\">" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['repo'])) + 
              "</a>\n                    </div>\n                    <a href=\"" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['url'])) + 
              "\"><pre>" + 
              __escape(guard(context && context['embeds'] && context['embeds'][key0] && context['embeds'][key0]['message'])) + 
              "</pre></a>\n                </div>\n            </div>\n        </div>\n    " :
            "") + 
          "\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
