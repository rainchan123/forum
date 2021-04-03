
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
    return "<label>\r\n\tCategory<br />\r\n\t<small>Set the category IDs you want to display this widget on (separated by commas)</small>\r\n</label>\r\n<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />\r\n\r\n<label>\r\n\tTopics from Category<br />\r\n\t<small>Set the category IDs you want to pull topics from (separated by commas)</small>\r\n</label>\r\n<input type=\"text\" class=\"form-control\" name=\"topicsFromCid\" placeholder=\"0\" />\r\n\r\n<label>\r\n\tTopic IDs<br />\r\n\t<small>Set the topic IDs you want to display in the widget (separated by commas). This overrides category IDs setting.</small>\r\n</label>\r\n<input type=\"text\" class=\"form-control\" name=\"topicsTids\" placeholder=\"0\" />\r\n\r\n<label>Select Groups to show topics from</label>\r\n<select name=\"fromGroups\" class=\"form-control\" multiple size=\"10\">\r\n\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\r\n</select>\r\n\r\n<label for=\"teaserPost\">Teaser Post</label>\r\n<select class=\"form-control\" id=\"teaserPost\" name=\"teaserPost\">\r\n\t<option value=\"first\">First Post</option>\r\n\t<option value=\"last-post\">Last Post</option>\r\n</select>\r\n\r\n<label for=\"sortBy\">Sort Topics</label>\r\n<select class=\"form-control\" id=\"sortBy\" name=\"sort\">\r\n\t<option value=\"create\">Recently Created</option>\r\n\t<option value=\"recent\">Recently Replied</option>\r\n\t<option value=\"posts\">Most Posts</option>\r\n\t<option value=\"votes\">Most Votes</option>\r\n</select>\r\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['groups']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<option value=\"" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['name'])) + 
          "\">" + 
          __escape(guard(context && context['groups'] && context['groups'][key0] && context['groups'][key0]['name'])) + 
          "</option>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
