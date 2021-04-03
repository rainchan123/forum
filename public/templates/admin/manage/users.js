
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
    return "<div class=\"row manage-users\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"clearfix\">\n\n\t\t\t<div class=\"pull-left\">\n\t\t\t\t" + 
      (guard(context && context['showInviteButton']) ?
        "\n\t\t\t\t<button component=\"user/invite\" class=\"btn btn-success\"><i class=\"fa fa-users\"></i> [[admin/manage/users:invite]]</button>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t<a target=\"_blank\" href=\"#\" class=\"btn btn-primary export-csv\">[[admin/manage/users:download-csv]]</a>\n\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">[[admin/manage/users:edit]] <span class=\"caret\"></span></button>\n\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t<li><a href=\"#\" class=\"validate-email\"><i class=\"fa fa-fw fa-check\"></i> [[admin/manage/users:validate-email]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"send-validation-email\"><i class=\"fa fa-fw fa-mail-forward\"></i> [[admin/manage/users:send-validation-email]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"password-reset-email\"><i class=\"fa fa-fw fa-key\"></i> [[admin/manage/users:password-reset-email]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"force-password-reset\"><i class=\"fa fa-fw fa-unlock-alt\"></i> [[admin/manage/users:force-password-reset]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"manage-groups\"><i class=\"fa fa-fw fa-users\"></i> [[admin/manage/users:manage-groups]]</a></li>\n\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"ban-user\"><i class=\"fa fa-fw fa-gavel\"></i> [[admin/manage/users:ban]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"ban-user-temporary\"><i class=\"fa fa-fw fa-clock-o\"></i> [[admin/manage/users:temp-ban]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"unban-user\"><i class=\"fa fa-fw fa-comment-o\"></i> [[admin/manage/users:unban]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"reset-lockout\"><i class=\"fa fa-fw fa-unlock\"></i> [[admin/manage/users:reset-lockout]]</a></li>\n\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"delete-user\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"delete-user-content\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete-content]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"delete-user-and-content\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:purge]]</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"btn-group\" id=\"filter-by\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t[[admin/manage/users:filter-by]] <span class=\"caret\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t\t<li data-filter-by=\"unverified\" role=\"presentation\">\n\t\t\t\t\t\t\t<a role=\"menu-item\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard(context && context['filterBy_unverified']) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.unvalidated]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li data-filter-by=\"verified\" role=\"presentation\">\n\t\t\t\t\t\t\t<a role=\"menu-item\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard(context && context['filterBy_verified']) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.validated]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li data-filter-by=\"banned\" role=\"presentation\">\n\t\t\t\t\t\t\t<a role=\"menu-item\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard(context && context['filterBy_banned']) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.banned]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<form class=\"form-inline pull-right\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" id=\"user-search\" value=\"" + 
      __escape(guard(context && context['query'])) + 
      "\">\n\t\t\t\t\t<span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\n\t\t\t\t</div>\n\t\t\t\t<select id=\"user-search-by\" class=\"form-control\">\n\t\t\t\t\t<option value=\"username\" " + 
      (guard(context && context['searchBy_username']) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.username]]</option>\n\t\t\t\t\t<option value=\"email\" " + 
      (guard(context && context['searchBy_email']) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.email]]</option>\n\t\t\t\t\t<option value=\"uid\" " + 
      (guard(context && context['searchBy_uid']) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.uid]]</option>\n\t\t\t\t\t<option value=\"ip\" " + 
      (guard(context && context['searchBy_ip']) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.ip]]</option>\n\t\t\t\t</select>\n\t\t\t\t<select id=\"results-per-page\" class=\"form-control\">\n\t\t\t\t\t<option value=\"50\">[[admin/manage/users:50-per-page]]</option>\n\t\t\t\t\t<option value=\"100\">[[admin/manage/users:100-per-page]]</option>\n\t\t\t\t\t<option value=\"250\">[[admin/manage/users:250-per-page]]</option>\n\t\t\t\t\t<option value=\"500\">[[admin/manage/users:500-per-page]]</option>\n\t\t\t\t</select>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<hr/>\n\n\t\t<div class=\"search " + 
      __escape(guard(context && context['search_display'])) + 
      "\">\n\t\t\t<i class=\"fa fa-spinner fa-spin hidden\"></i>\n\n\t\t\t<div id=\"user-found-notify\" class=\"label label-info " + 
      (guard(context && context['matchCount']) ?
        "" :
        "hidden") + 
      "\">[[admin/manage/users:alerts.x-users-found, " + 
      __escape(guard(context && context['matchCount'])) + 
      ", " + 
      __escape(guard(context && context['timing'])) + 
      "]]</div>\n\n\t\t\t<div id=\"user-notfound-notify\" class=\"label label-danger " + 
      (guard(context && context['query']) ?
        "" :
        "hidden") + 
      " " + 
      (guard(context && context['matchCount']) ?
        "hidden" :
        "") + 
      "\">[[admin/manage/users:search.not-found]]</div>\n\t\t</div>\n\n\t\t" + 
      (guard(context && context['inactive']) ?
        "\n\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/admin/manage/users/inactive?months=3&resultsPerPage=" + 
          __escape(guard(context && context['resultsPerPage'])) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.3-months]]</a>\n\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/admin/manage/users/inactive?months=6&resultsPerPage=" + 
          __escape(guard(context && context['resultsPerPage'])) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.6-months]]</a>\n\t\t<a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/admin/manage/users/inactive?months=12&resultsPerPage=" + 
          __escape(guard(context && context['resultsPerPage'])) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.12-months]]</a>\n\t\t" :
        "") + 
      "\n\n\t\t<div class=\"table-responsive\">\n\t\t\t<table class=\"table table-striped users-table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th><input component=\"user/select/all\" type=\"checkbox\"/></th>\n\t\t\t\t\t\t<th class=\"text-right text-muted\">[[admin/manage/users:users.uid]]</th>\n\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.username]]</th>\n\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.email]]</th>\n\t\t\t\t\t\t<th data-sort=\"postcount\" class=\"text-right pointer\">[[admin/manage/users:users.postcount]] " + 
      (guard(context && context['sort_postcount']) ?
        "<i class=\"fa fa-sort-" + 
          (guard(context && context['reverse']) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t<th data-sort=\"reputation\" class=\"text-right pointer\">[[admin/manage/users:users.reputation]] " + 
      (guard(context && context['sort_reputation']) ?
        "<i class=\"fa fa-sort-" + 
          (guard(context && context['reverse']) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t<th data-sort=\"flags\" class=\"text-right pointer\">[[admin/manage/users:users.flags]] " + 
      (guard(context && context['sort_flags']) ?
        "<i class=\"fa fa-sort-" + 
          (guard(context && context['reverse']) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t<th data-sort=\"joindate\" class=\"pointer\">[[admin/manage/users:users.joined]] " + 
      (guard(context && context['sort_joindate']) ?
        "<i class=\"fa fa-sort-" + 
          (guard(context && context['reverse']) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t<th data-sort=\"lastonline\" class=\"pointer\">[[admin/manage/users:users.last-online]] " + 
      (guard(context && context['sort_lastonline']) ?
        "<i class=\"fa fa-sort-" + 
          (guard(context && context['reverse']) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\n\n\t</div>\n</div>\n\n<button data-action=\"create\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">add</i>\n</button>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<tr class=\"user-row\">\n\t\t\t\t\t\t<th><input component=\"user/select/single\" data-uid=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
          "\" type=\"checkbox\"/></th>\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['uid'])) + 
          "</td>\n\t\t\t\t\t\t<td><i title=\"[[admin/manage/users:users.banned]]\" class=\"ban fa fa-gavel text-danger" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['banned']) ?
            "" :
            " hidden") + 
          "\"></i><i class=\"administrator fa fa-shield text-success" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['administrator']) ?
            "" :
            " hidden") + 
          "\"></i><a href=\"" + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/user/" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['userslug'])) + 
          "\"> " + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          "</a></td>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t<i class=\"validated fa fa-check text-success" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['email:confirmed']) ?
            "" :
            " hidden") + 
          "\" title=\"validated\"></i>\n\t\t\t\t\t\t<i class=\"notvalidated fa fa-check text-muted" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['email:confirmed']) ?
            " hidden" :
            "") + 
          "\" title=\"not validated\"></i>\n\t\t\t\t\t\t " + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['email'])) + 
          "</td>\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['postcount'])) + 
          "</td>\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['reputation'])) + 
          "</td>\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['flags']) ?
            __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['flags'])) :
            "0") + 
          "</td>\n\t\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['joindateISO'])) + 
          "\"></span></td>\n\t\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['lastonlineISO'])) + 
          "\"></span></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t";
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
