
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/post:sorting]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>[[admin/settings/post:sorting.post-default]]</label>\n\t\t\t\t<select class=\"form-control\" data-field=\"topicPostSort\">\n\t\t\t\t\t<option value=\"oldest_to_newest\">[[admin/settings/post:sorting.oldest-to-newest]]</option>\n\t\t\t\t\t<option value=\"newest_to_oldest\">[[admin/settings/post:sorting.newest-to-oldest]]</option>\n\t\t\t\t\t<option value=\"most_votes\">[[admin/settings/post:sorting.most-votes]]</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>[[admin/settings/post:sorting.topic-default]]</label>\n\t\t\t\t<select class=\"form-control\" data-field=\"categoryTopicSort\">\n\t\t\t\t\t<option value=\"oldest_to_newest\">[[admin/settings/post:sorting.oldest-to-newest]]</option>\n\t\t\t\t\t<option value=\"newest_to_oldest\">[[admin/settings/post:sorting.newest-to-oldest]]</option>\n\t\t\t\t\t<option value=\"most_posts\">[[admin/settings/post:sorting.most-posts]]</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/post:length]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"minimumTitleLength\">[[admin/settings/post:restrictions.min-title-length]]</label>\n\t\t\t\t\t\t<input id=\"minimumTitleLength\" type=\"text\" class=\"form-control\" value=\"3\" data-field=\"minimumTitleLength\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"maximumTitleLength\">[[admin/settings/post:restrictions.max-title-length]]</label>\n\t\t\t\t\t\t<input id=\"maximumTitleLength\" type=\"text\" class=\"form-control\" value=\"255\" data-field=\"maximumTitleLength\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"minimumPostLength\">[[admin/settings/post:restrictions.min-post-length]]</label>\n\t\t\t\t\t\t<input id=\"minimumPostLength\" type=\"text\" class=\"form-control\" value=\"8\" data-field=\"minimumPostLength\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"maximumPostLength\">[[admin/settings/post:restrictions.max-post-length]]</label>\n\t\t\t\t\t\t<input id=\"maximumPostLength\" type=\"text\" class=\"form-control\" value=\"32767\" data-field=\"maximumPostLength\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/post:restrictions]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"postDelay\">[[admin/settings/post:restrictions.seconds-between]]</label>\n\t\t\t\t<input id=\"postDelay\" type=\"text\" class=\"form-control\" value=\"10\" data-field=\"postDelay\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"postEditDuration\">[[admin/settings/post:restrictions.seconds-edit-after]]</label>\n\t\t\t\t<input id=\"postEditDuration\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"postEditDuration\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"postDeleteDuration\">[[admin/settings/post:restrictions.seconds-delete-after]]</label>\n\t\t\t\t<input id=\"postDeleteDuration\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"postDeleteDuration\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"preventTopicDeleteAfterReplies\">[[admin/settings/post:restrictions.replies-no-delete]]</label>\n\t\t\t\t<input id=\"preventTopicDeleteAfterReplies\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"preventTopicDeleteAfterReplies\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"topicStaleDays\">[[admin/settings/post:restrictions.days-until-stale]]</label>\n\t\t\t\t<input id=\"topicStaleDays\" type=\"text\" class=\"form-control\" value=\"60\" data-field=\"topicStaleDays\">\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/post:restrictions.stale-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/post:restrictions-new]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"newbiePostDelayThreshold\">[[admin/settings/post:restrictions.rep-threshold]]</label>\n\t\t\t\t<input id=\"newbiePostDelayThreshold\" type=\"text\" class=\"form-control\" value=\"3\" data-field=\"newbiePostDelayThreshold\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"newbiePostDelay\">[[admin/settings/post:restrictions.seconds-between-new]]</label>\n\t\t\t\t<input id=\"newbiePostDelay\" type=\"text\" class=\"form-control\" value=\"120\" data-field=\"newbiePostDelay\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"initialPostDelay\">[[admin/settings/post:restrictions.seconds-before-new]]</label>\n\t\t\t\t<input id=\"initialPostDelay\" type=\"text\" class=\"form-control\" value=\"10\" data-field=\"initialPostDelay\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"newbiePostEditDuration\">[[admin/settings/post:restrictions.seconds-edit-after]]</label>\n\t\t\t\t<input id=\"newbiePostEditDuration\" type=\"text\" class=\"form-control\" value=\"120\" data-field=\"newbiePostEditDuration\">\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/post:post-queue]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"postQueue\">\n\t\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/post:restrictions.post-queue]]</strong></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\t[[admin/settings/post:restrictions.post-queue-help]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"postQueueReputationThreshold\">[[admin/settings/post:restrictions.post-queue-rep-threshold]]</label>\n\t\t\t\t\t\t<input id=\"postQueueReputationThreshold\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"postQueueReputationThreshold\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>[[admin/settings/post:restrictions.groups-exempt-from-post-queue]]</label>\n\t\t\t\t\t<select class=\"form-control\" multiple data-field=\"groupsExemptFromPostQueue\">\n\t\t\t\t\t\t" + 
      compiled.blocks['groupsExemptFromPostQueue'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/post:timestamp]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"timeagoCutoff\">[[admin/settings/post:timestamp.cut-off]]</label>\n\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"timeagoCutoff\" data-field=\"timeagoCutoff\"  />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/post:timestamp.cut-off-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"necroThreshold\">[[admin/settings/post:timestamp.necro-threshold]]</label>\n\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"necroThreshold\" data-field=\"necroThreshold\"  />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/post:timestamp.necro-threshold-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"incrementTopicViewsInterval\">[[admin/settings/post:timestamp.topic-views-interval]]</label>\n\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"incrementTopicViewsInterval\" data-field=\"incrementTopicViewsInterval\"  />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/post:timestamp.topic-views-interval-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">Teaser</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>[[admin/settings/post:teaser]]</label>\n\t\t\t\t<select class=\"form-control\" data-field=\"teaserPost\">\n\t\t\t\t\t<option value=\"last-post\">[[admin/settings/post:teaser.last-post]]</option>\n\t\t\t\t\t<option value=\"last-reply\">[[admin/settings/post:teaser.last-reply]]</option>\n\t\t\t\t\t<option value=\"first\">[[admin/settings/post:teaser.first]]</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/post:unread]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"unreadCutoff\">[[admin/settings/post:unread.cutoff]]</label>\n\t\t\t\t<input id=\"unreadCutoff\" type=\"text\" class=\"form-control\" value=\"2\" data-field=\"unreadCutoff\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"bookmarkthreshold\">[[admin/settings/post:unread.min-track-last]]</label>\n\t\t\t\t<input id=\"bookmarkthreshold\" type=\"text\" class=\"form-control\" value=\"5\" data-field=\"bookmarkThreshold\">\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/post:recent]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"recentMaxTopics\">[[admin/settings/post:recent.max-topics]]</label>\n\t\t\t\t<input id=\"recentMaxTopics\" type=\"text\" class=\"form-control\" value=\"200\" data-field=\"recentMaxTopics\">\n\t\t\t</div>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"disableRecentCategoryFilter\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/post:recent.categoryFilter.disable]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/post:signature]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"disableSignatures\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/post:signature.disable]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"signatures:disableLinks\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/post:signature.no-links]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"signatures:disableImages\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/post:signature.no-images]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>[[admin/settings/post:signature.max-length]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"255\" data-field=\"maximumSignatureLength\">\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/post:composer]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<p>\n\t\t\t\t[[admin/settings/post:composer-help]]\n\t\t\t</p>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"composer:showHelpTab\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"composer:showHelpTab\" data-field=\"composer:showHelpTab\" checked />\n\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/post:composer.show-help]]</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"composer:allowPluginHelp\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"composer:allowPluginHelp\" data-field=\"composer:allowPluginHelp\" checked />\n\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/post:composer.enable-plugin-help]]</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"composer:customHelpText\">[[admin/settings/post:composer.custom-help]]</label>\n\t\t\t\t<textarea class=\"form-control\" id=\"composer:customHelpText\" data-field=\"composer:customHelpText\" rows=\"5\"></textarea>\n\t\t\t</div>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"enablePostHistory\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"enablePostHistory\" data-field=\"enablePostHistory\" checked />\n\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/post:enable-post-history]]</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/post:ip-tracking]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"trackIpPerPost\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/post:ip-tracking.each-post]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n\n<script>\n\trequire(['admin/settings'], function(Settings) {\n\t\tSettings.prepare();\n\t\tSettings.populateTOC();\n\t});\n</script>\n";
  }

  compiled.blocks = {
    'groupsExemptFromPostQueue': function groupsExemptFromPostQueue(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['groupsExemptFromPostQueue']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(context && context['groupsExemptFromPostQueue'] && context['groupsExemptFromPostQueue'][key0] && context['groupsExemptFromPostQueue'][key0]['displayName'])) + 
          "\">" + 
          __escape(guard(context && context['groupsExemptFromPostQueue'] && context['groupsExemptFromPostQueue'][key0] && context['groupsExemptFromPostQueue'][key0]['displayName'])) + 
          "</option>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
