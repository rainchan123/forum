
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
    return "<div widget-area=\"header\">\r\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"" + 
      (guard(context && context['widgets'] && context['widgets']['sidebar'] && context['widgets']['sidebar']['length']) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\r\n\t\t<div widget-area=\"content\">\r\n\t\t\t" + 
      compiled.blocks['widgets.content'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</div>\r\n\t</div>\r\n\t<div widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard(context && context['widgets'] && context['widgets']['sidebar'] && context['widgets']['sidebar']['length']) ?
        "" :
        "hidden") + 
      "\">\r\n\t\t" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\r\n\t</div>\r\n</div>\r\n\r\n<div widget-area=\"footer\">\r\n\t" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n";
  }

  compiled.blocks = {
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['widgets'] && context['widgets']['header']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          __escape(guard(context && context['widgets'] && context['widgets']['header'] && context['widgets']['header'][key0] && context['widgets']['header'][key0]['html'])) + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.content': function widgetscontent(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['widgets'] && context['widgets']['content']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          __escape(guard(context && context['widgets'] && context['widgets']['content'] && context['widgets']['content'][key0] && context['widgets']['content'][key0]['html'])) + 
          "\r\n\t\t\t";
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
          __escape(guard(context && context['widgets'] && context['widgets']['sidebar'] && context['widgets']['sidebar'][key0] && context['widgets']['sidebar'][key0]['html'])) + 
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
          __escape(guard(context && context['widgets'] && context['widgets']['footer'] && context['widgets']['footer'][key0] && context['widgets']['footer'][key0]['html'])) + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
