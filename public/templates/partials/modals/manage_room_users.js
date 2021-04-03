
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
    return compiled.blocks['users'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li class=\"list-group-item\">\r\n\t" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['canKick']) ?
            "<button class=\"pull-right btn btn-xs btn-link\" data-action=\"kick\" data-uid=\"" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
              "\">[[modules:chat.kick]]</button>" :
            "") + 
          "\r\n\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(context && context['users'] && context['users'][key0]), "sm", guard(context && context['true'])])) + 
          "\r\n\t<span>" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          " " + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['isOwner']) ?
            "<i class=\"fa fa-star text-warning\" title=\"[[modules:chat.owner]]\"></i>" :
            "") + 
          "</span>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
