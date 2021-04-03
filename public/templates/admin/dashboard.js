
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
    return "<div class=\"row dashboard\">\n\t<div class=\"col-lg-9\">\n\t\t<div class=\"panel panel-default\" id=\"analytics-panel\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t[[admin/dashboard:forum-traffic]]\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<a id=\"view-as-json\" href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/api/admin/analytics&type=hourly\"><i class=\"fa fa-terminal\"></i></a>\n\t\t\t\t\t<i class=\"fa fa-expand\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"graph-container\" id=\"analytics-traffic-container\">\n\t\t\t\t\t<canvas id=\"analytics-traffic\" width=\"100%\" height=\"400\"></canvas>\n\t\t\t\t</div>\n\t\t\t\t<hr/>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n\t\t\t\t\t\t<div><strong id=\"pageViewsThirty\">0</strong></div>\n\t\t\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"30\">[[admin/dashboard:page-views-thirty]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\n\t\t\t\t\t\t<div><strong id=\"pageViewsSeven\">0</strong></div>\n\t\t\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"7\">[[admin/dashboard:page-views-seven]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n\t\t\t\t\t\t<div><strong id=\"pageViewsPastDay\">0</strong></div>\n\t\t\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph active\" data-action=\"updateGraph\" data-units=\"hours\">[[admin/dashboard:page-views-last-day]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\n\t\t\t\t\t\t<div><strong><i class=\"fa fa-clock-o\"></i></strong></div>\n\t\t\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"custom\">[[admin/dashboard:page-views-custom]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.yesterday]]</th>\n\t\t\t\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.today]]</th>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.last-week]]</th>\n\t\t\t\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.this-week]]</th>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.last-month]]</th>\n\t\t\t\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.this-month]]</th>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.all]]</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t" + 
      compiled.blocks['stats'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">[[admin/dashboard:anonymous-registered-users]]</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"graph-container pie-chart legend-down\">\n\t\t\t\t\t\t\t<canvas id=\"analytics-registered\"></canvas>\n\t\t\t\t\t\t\t<ul class=\"graph-legend\" id=\"analytics-legend\">\n\t\t\t\t\t\t\t\t<li><div class=\"registered\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:registered]]</span></li>\n\t\t\t\t\t\t\t\t<li><div class=\"anonymous\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:anonymous]]</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">[[admin/dashboard:user-presence]]</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"graph-container pie-chart legend-down\">\n\t\t\t\t\t\t\t<canvas id=\"analytics-presence\"></canvas>\n\t\t\t\t\t\t\t<ul class=\"graph-legend\" id=\"analytics-presence-legend\">\n\t\t\t\t\t\t\t\t<li><div class=\"reading-posts\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:reading-posts]]</span></li>\n\t\t\t\t\t\t\t\t<li><div class=\"on-categories\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:on-categories]]</span></li>\n\t\t\t\t\t\t\t\t<li><div class=\"browsing-topics\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:browsing-topics]]</span></li>\n\t\t\t\t\t\t\t\t<li><div class=\"recent\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:recent]]</span></li>\n\t\t\t\t\t\t\t\t<li><div class=\"unread\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:unread]]</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">[[admin/dashboard:high-presence-topics]]</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"graph-container pie-chart legend-down\">\n\t\t\t\t\t\t\t<canvas id=\"analytics-topics\"></canvas>\n\t\t\t\t\t\t\t<ul class=\"graph-legend\" id=\"topics-legend\"></ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-lg-3\">\n\t\t" + 
      (guard(context && context['showSystemControls']) ?
        "\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/dashboard:control-panel]]</div>\n\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t<p>\n\t\t\t\t\t<button class=\"btn btn-block btn-warning restart\"" + 
          (guard(context && context['canRestart']) ?
            "" :
            " disabled") + 
          ">[[admin/dashboard:restart]]</button>\n\t\t\t\t\t<button class=\"btn btn-block btn-danger rebuild-and-restart\"" + 
          (guard(context && context['canRestart']) ?
            "" :
            " disabled") + 
          ">[[admin/dashboard:rebuild-and-restart]]</button>\n\t\t\t\t</p>\n\t\t\t\t" + 
          (guard(context && context['lastrestart']) ?
            "\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/dashboard:last-restarted-by]]<br />\n\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/uid/" + 
              __escape(guard(context && context['lastrestart'] && context['lastrestart']['uid'])) + 
              "\"><span class=\"label label-info\">" + 
              __escape(guard(context && context['lastrestart'] && context['lastrestart']['user'] && context['lastrestart']['user']['username'])) + 
              "</span></a> <span class=\"timeago\" title=\"" + 
              __escape(guard(context && context['lastrestart'] && context['lastrestart']['timestampISO'])) + 
              "\"></span>\n\t\t\t\t</p>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t<p class=\"" + 
          (guard(context && context['canRestart']) ?
            "help-block" :
            "alert alert-warning") + 
          "\">\n\t\t\t\t\t" + 
          (guard(context && context['canRestart']) ?
            "\n\t\t\t\t\t[[admin/dashboard:restart-warning]]\n\t\t\t\t\t" :
            "\n\t\t\t\t\t[[admin/dashboard:restart-disabled]]\n\t\t\t\t\t") + 
          "\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/admin/settings/advanced\" class=\"btn btn-info btn-block\" data-placement=\"bottom\" data-toggle=\"tooltip\" title=\"[[admin/dashboard:maintenance-mode-title]]\">[[admin/dashboard:maintenance-mode]]</a>\n\t\t\t\t</p>\n\n\t\t\t\t<hr />\n\t\t\t\t<span id=\"toggle-realtime\">[[admin/dashboard:realtime-chart-updates]] <strong>OFF</strong> <i class=\"fa fa fa-toggle-off pointer\"></i></span>\n\t\t\t</div>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/dashboard:active-users]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div id=\"active-users\" class=\"stats\"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/dashboard:updates]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"alert " + 
      (guard(context && context['lookupFailed']) ?
        "alert-danger" :
        (guard(context && context['upgradeAvailable']) ?
            "alert-warning" :
            (guard(context && context['currentPrerelease']) ?
                "alert-info" :
                "alert-success"))) + 
      " version-check\">\n\t\t\t\t\t<p>[[admin/dashboard:running-version, " + 
      __escape(guard(context && context['version'])) + 
      "]]</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t" + 
      (guard(context && context['lookupFailed']) ?
        "\n\t\t\t\t\t[[admin/dashboard:latest-lookup-failed]]\n\t\t\t\t\t" :
        "\n\t\t\t\t\t\t" + 
          (guard(context && context['upgradeAvailable']) ?
            "\n\t\t\t\t\t\t\t" + 
              (guard(context && context['currentPrerelease']) ?
                "\n\t\t\t\t\t\t\t[[admin/dashboard:prerelease-upgrade-available, " + 
                  __escape(guard(context && context['latestVersion'])) + 
                  "]]\n\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t[[admin/dashboard:upgrade-available, " + 
                  __escape(guard(context && context['latestVersion'])) + 
                  "]]\n\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t" + 
              (guard(context && context['currentPrerelease']) ?
                "\n\t\t\t\t\t\t\t[[admin/dashboard:prerelease-warning]]\n\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t[[admin/dashboard:up-to-date]]\n\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/dashboard:keep-updated]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/dashboard:notices]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t" + 
      compiled.blocks['notices'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'stats': function stats(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['stats']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><strong>" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['name'])) + 
          "</strong></td>\n\t\t\t\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['yesterday'])) + 
          "</td>\n\t\t\t\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['today'])) + 
          "</td>\n\t\t\t\t\t\t\t<td class=\"" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['dayTextClass'])) + 
          "\"><small>" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['dayIncrease'])) + 
          "%</small></td>\n\n\t\t\t\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['lastweek'])) + 
          "</td>\n\t\t\t\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['thisweek'])) + 
          "</td>\n\t\t\t\t\t\t\t<td class=\"" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['weekTextClass'])) + 
          "\"><small>" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['weekIncrease'])) + 
          "%</small></td>\n\n\t\t\t\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['lastmonth'])) + 
          "</td>\n\t\t\t\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['thismonth'])) + 
          "</td>\n\t\t\t\t\t\t\t<td class=\"" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['monthTextClass'])) + 
          "\"><small>" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['monthIncrease'])) + 
          "%</small></td>\n\n\t\t\t\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['stats'] && context['stats'][key0] && context['stats'][key0]['alltime'])) + 
          "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'notices': function notices(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['notices']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<div>\n\t\t\t\t\t" + 
          (guard(context && context['notices'] && context['notices'][key0] && context['notices'][key0]['done']) ?
            "\n\t\t\t\t\t<i class=\"fa fa-fw fa-check text-success\"></i> " + 
              __escape(guard(context && context['notices'] && context['notices'][key0] && context['notices'][key0]['doneText'])) + 
              "\n\t\t\t\t\t" :
            "\n\t\t\t\t\t" + 
              (guard(context && context['notices'] && context['notices'][key0] && context['notices'][key0]['link']) ?
                "<a href=\"" + 
                  __escape(guard(context && context['notices'] && context['notices'][key0] && context['notices'][key0]['link'])) + 
                  "\" data-toggle=\"tooltip\" title=\"" + 
                  __escape(guard(context && context['notices'] && context['notices'][key0] && context['notices'][key0]['tooltip'])) + 
                  "\">" :
                "") + 
              "\n\t\t\t\t\t<i class=\"fa fa-fw fa-times text-danger\"></i> " + 
              __escape(guard(context && context['notices'] && context['notices'][key0] && context['notices'][key0]['notDoneText'])) + 
              "\n\t\t\t\t\t" + 
              (guard(context && context['notices'] && context['notices'][key0] && context['notices'][key0]['link']) ?
                "</a>" :
                "") + 
              "\n\t\t\t\t\t") + 
          "\n\t\t\t\t</div>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
