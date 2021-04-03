
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
    return "<div class=\"info\">\n\t<div class=\"panel panel-default\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">[[admin/development/info:you-are-on, " + 
      __escape(guard(context && context['host'])) + 
      ", " + 
      __escape(guard(context && context['port'])) + 
      "]] &bull; [[admin/development/info:ip, " + 
      __escape(guard(context && context['ip'])) + 
      "]]</h3>\n\t\t</div>\n\n\t\t<div class=\"panel-body\">\n\t\t\t<span>[[admin/development/info:nodes-responded, " + 
      __escape(guard(context && context['nodeCount'])) + 
      ", " + 
      __escape(guard(context && context['timeout'])) + 
      "]]</span>\n\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>[[admin/development/info:host]]</td>\n\t\t\t\t\t\t<td class=\"text-center\">[[admin/development/info:primary]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:pid]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:nodejs]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:online]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:git]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:cpu-usage]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:memory]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:load]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:uptime]]</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t" + 
      compiled.blocks['info'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"panel panel-default\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">[[admin/development/info:info]]</h3>\n\t\t</div>\n\n\t\t<div class=\"panel-body\">\n\t\t\t<div class=\"highlight\">\n\t\t\t\t<pre>" + 
      __escape(guard(context && context['infoJSON'])) + 
      "</pre>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'info': function info(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['info']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<tr>\n\t\t\t\t\t<td>" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['os'] && context['info'][key0]['os']['hostname'])) + 
          ":" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['process'] && context['info'][key0]['process']['port'])) + 
          "</td>\n\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t" + 
          (guard(context && context['info'] && context['info'][key0] && context['info'][key0]['nodebb'] && context['info'][key0]['nodebb']['isPrimary']) ?
            "<i class=\"fa fa-check\"></i>" :
            "<i class=\"fa fa-times\"></i>") + 
          " /\n\t\t\t\t\t\t" + 
          (guard(context && context['info'] && context['info'][key0] && context['info'][key0]['nodebb'] && context['info'][key0]['nodebb']['runJobs']) ?
            "<i class=\"fa fa-check\"></i>" :
            "<i class=\"fa fa-times\"></i>") + 
          "\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['process'] && context['info'][key0]['process']['pid'])) + 
          "</td>\n\t\t\t\t\t<td>" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['process'] && context['info'][key0]['process']['version'])) + 
          "</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<span title=\"[[admin/development/info:registered]]\">" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['stats'] && context['info'][key0]['stats']['onlineRegisteredCount'])) + 
          "</span> /\n\t\t\t\t\t\t<span title=\"[[admin/development/info:guests]]\">" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['stats'] && context['info'][key0]['stats']['onlineGuestCount'])) + 
          "</span> /\n\t\t\t\t\t\t<span title=\"[[admin/development/info:sockets]]\">" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['stats'] && context['info'][key0]['stats']['socketCount'])) + 
          "</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['git'] && context['info'][key0]['git']['branch'])) + 
          "@<a href=\"https://github.com/NodeBB/NodeBB/commit/" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['git'] && context['info'][key0]['git']['hash'])) + 
          "\" target=\"_blank\">" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['git'] && context['info'][key0]['git']['hashShort'])) + 
          "</a></td>\n\t\t\t\t\t<td>" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['process'] && context['info'][key0]['process']['cpuUsage'] && context['info'][key0]['process']['cpuUsage']['user'])) + 
          " / " + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['process'] && context['info'][key0]['process']['cpuUsage'] && context['info'][key0]['process']['cpuUsage']['system'])) + 
          "</td>\n\t\t\t\t\t<td>" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['process'] && context['info'][key0]['process']['memoryUsage'] && context['info'][key0]['process']['memoryUsage']['humanReadable'])) + 
          " mb / " + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['os'] && context['info'][key0]['os']['freemem'])) + 
          " mb</td>\n\t\t\t\t\t<td>" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['os'] && context['info'][key0]['os']['load'])) + 
          "</td>\n\t\t\t\t\t<td>" + 
          __escape(guard(context && context['info'] && context['info'][key0] && context['info'][key0]['process'] && context['info'][key0]['process']['uptimeHumanReadable'])) + 
          "</td>\n\t\t\t\t</tr>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
