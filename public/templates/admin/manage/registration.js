
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
    return "<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<div class=\"registration panel panel-primary\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t[[admin/manage/registration:queue]]\n\t\t\t</div>\n\t\t\t" + 
      (guard(context && context['users'] && context['users']['length']) ?
        "" :
        "\n\t\t\t<p class=\"panel-body\">\n\t\t\t\t[[admin/manage/registration:description, " + 
          __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
          "/admin/settings/user#user-registration]]\n\t\t\t</p>\n\t\t\t") + 
      "\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table table-striped users-list\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:list.name]]</th>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:list.email]]</th>\n\t\t\t\t\t\t\t<th class=\"hidden-xs\">[[admin/manage/registration:list.ip]]</th>\n\t\t\t\t\t\t\t<th class=\"hidden-xs\">[[admin/manage/registration:list.time]]</th>\n\t\t\t\t\t\t\t" + 
      compiled.blocks['customHeaders'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\n\t\t</div>\n\n\t\t<div class=\"invitations panel panel-success\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t[[admin/manage/registration:invitations]]\n\t\t\t</div>\n\t\t\t<p class=\"panel-body\">\n\t\t\t\t[[admin/manage/registration:invitations.description]]\n\t\t\t</p>\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table table-striped invites-list\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:invitations.inviter-username]]</th>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:invitations.invitee-email]]</th>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:invitations.invitee-username]]</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t" + 
      compiled.blocks['invites'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'customHeaders': function customHeaders(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['customHeaders']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<th class=\"hidden-xs\">" + 
          __escape(guard(context && context['customHeaders'] && context['customHeaders'][key0] && context['customHeaders'][key0]['label'])) + 
          "</th>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['users']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<tr data-username=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['usernameEscaped'])) + 
          "\">\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['usernameSpam']) ?
            "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-times-circle text-danger\" title=\"[[admin/manage/registration:list.username-spam, " + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['spamData'] && context['users'][key0]['spamData']['username'] && context['users'][key0]['spamData']['username']['frequency'])) + 
              ", " + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['spamData'] && context['users'][key0]['spamData']['username'] && context['users'][key0]['spamData']['username']['appears'])) + 
              ", " + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['spamData'] && context['users'][key0]['spamData']['username'] && context['users'][key0]['spamData']['username']['confidence'])) + 
              "]]\"></i>\n\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t" + 
              (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['spamChecked']) ?
                "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i>\n\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['username'])) + 
          "\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['emailSpam']) ?
            "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-times-circle text-danger\" title=\"[[admin/manage/registration:list.email-spam, " + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['spamData'] && context['users'][key0]['spamData']['email'] && context['users'][key0]['spamData']['email']['frequency'])) + 
              ", " + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['spamData'] && context['users'][key0]['spamData']['email'] && context['users'][key0]['spamData']['email']['appears'])) + 
              "]]\"></i>\n\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t" + 
              (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['spamChecked']) ?
                "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i>\n\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['email'])) + 
          "\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"hidden-xs\">\n\t\t\t\t\t\t\t\t" + 
          (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['ipSpam']) ?
            "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-times-circle text-danger\" title=\"[[admin/manage/registration:list.ip-spam, " + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['spamData'] && context['users'][key0]['spamData']['ip'] && context['users'][key0]['spamData']['ip']['frequency'])) + 
              ", " + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['spamData'] && context['users'][key0]['spamData']['ip'] && context['users'][key0]['spamData']['ip']['appears'])) + 
              "]]\"></i>\n\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t" + 
              (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['spamChecked']) ?
                "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i>\n\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['ip'])) + 
          "\n\t\t\t\t\t\t\t\t" + 
          iter(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['ipMatch']), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t" + 
              (guard(context && context['users'] && context['users'][key0] && context['users'][key0]['ipMatch'] && context['users'][key0]['ipMatch'][key1] && context['users'][key0]['ipMatch'][key1]['picture']) ?
                "\n\t\t\t\t\t\t\t\t<img src=\"" + 
                  __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['ipMatch'] && context['users'][key0]['ipMatch'][key1] && context['users'][key0]['ipMatch'][key1]['picture'])) + 
                  "\" class=\"user-img\"/>\n\t\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t\t<div class=\"user-img avatar avatar-sm\" style=\"background-color: " + 
                  __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['ipMatch'] && context['users'][key0]['ipMatch'][key1] && context['users'][key0]['ipMatch'][key1]['icon:bgColor'])) + 
                  ";\">" + 
                  __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['ipMatch'] && context['users'][key0]['ipMatch'][key1] && context['users'][key0]['ipMatch'][key1]['icon:text'])) + 
                  "</div>\n\t\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
              "/uid/" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['ipMatch'] && context['users'][key0]['ipMatch'][key1] && context['users'][key0]['ipMatch'][key1]['uid'])) + 
              "\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['ipMatch'] && context['users'][key0]['ipMatch'][key1] && context['users'][key0]['ipMatch'][key1]['username'])) + 
              "</a>\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"hidden-xs\">\n\t\t\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['timestampISO'])) + 
          "\"></span>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t" + 
          iter(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['customRows']), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t<td class=\"hidden-xs\">" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['customRows'] && context['users'][key0]['customRows'][key1] && context['users'][key0]['customRows'][key1]['value'])) + 
              "</td>\n\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"btn-group pull-right\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success btn-xs\" data-action=\"accept\"><i class=\"fa fa-check\"></i></button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-xs\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['customActions']), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t\t\t<button id=\"" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['customActions'] && context['users'][key0]['customActions'][key1] && context['users'][key0]['customActions'][key1]['id'])) + 
              "\" title=\"" + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['customActions'] && context['users'][key0]['customActions'][key1] && context['users'][key0]['customActions'][key1]['title'])) + 
              "\" class=\"btn btn-xs " + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['customActions'] && context['users'][key0]['customActions'][key1] && context['users'][key0]['customActions'][key1]['class'])) + 
              "\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa " + 
              __escape(guard(context && context['users'] && context['users'][key0] && context['users'][key0]['customActions'] && context['users'][key0]['customActions'][key1] && context['users'][key0]['customActions'][key1]['icon'])) + 
              "\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t";
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
    },
    'invites': function invites(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['invites']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t" + 
          iter(guard(context && context['invites'] && context['invites'][key0] && context['invites'][key0]['invitations']), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t<tr data-invitation-mail=\"" + 
              __escape(guard(context && context['invites'] && context['invites'][key0] && context['invites'][key0]['invitations'] && context['invites'][key0]['invitations'][key1] && context['invites'][key0]['invitations'][key1]['email'])) + 
              "\"\n\t\t\t\t\t\t\t\tdata-invited-by=\"" + 
              __escape(guard(context && context['invites'] && context['invites'][key0] && context['invites'][key0]['username'])) + 
              "\">\n\t\t\t\t\t\t\t<td class =\"invited-by\">" + 
              (index === 0 ?
                __escape(guard(context && context['invites'] && context['invites'][key0] && context['invites'][key0]['username'])) :
                "") + 
              "</td>\n\t\t\t\t\t\t\t<td>" + 
              __escape(guard(context && context['invites'] && context['invites'][key0] && context['invites'][key0]['invitations'] && context['invites'][key0]['invitations'][key1] && context['invites'][key0]['invitations'][key1]['email'])) + 
              "</td>\n\t\t\t\t\t\t\t<td>" + 
              __escape(guard(context && context['invites'] && context['invites'][key0] && context['invites'][key0]['invitations'] && context['invites'][key0]['invitations'][key1] && context['invites'][key0]['invitations'][key1]['username'])) + 
              "\n\t\t\t\t\t\t\t\t<div class=\"btn-group pull-right\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-xs\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
