
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
    return "<h3>[[global:upvoters]] <small>(" + 
      __escape(guard(context && context['upvoteCount'])) + 
      ")</small></h3>\r\n" + 
      compiled.blocks['upvoters'](helpers, context, guard, iter, helper) + 
      "\r\n" + 
      (guard(context && context['showDownvotes']) ?
        "\r\n<h3>[[global:downvoters]] <small>(" + 
          __escape(guard(context && context['downvoteCount'])) + 
          ")</small></h3>\r\n" + 
          compiled.blocks['downvoters'](helpers, context, guard, iter, helper) + 
          "\r\n" :
        "") + 
      "\r\n";
  }

  compiled.blocks = {
    'upvoters': function upvoters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['upvoters']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['upvoters'] && context['upvoters'][key0] && context['upvoters'][key0]['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['upvoters'] && context['upvoters'][key0]), "sm", guard(context && context['false'])])) + 
          "</a>\r\n";
      }, function alt() {
        return "";
      });
    },
    'downvoters': function downvoters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['downvoters']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['downvoters'] && context['downvoters'][key0] && context['downvoters'][key0]['userslug'])) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['downvoters'] && context['downvoters'][key0]), "sm", guard(context && context['false'])])) + 
          "</a>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
