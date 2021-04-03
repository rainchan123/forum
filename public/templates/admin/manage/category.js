
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
    return "<div class=\"category\" data-cid=\"" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3 pull-right\">\n\t\t\t<div component=\"category-selector\" class=\"btn-group " + 
      (guard(context && context['pullRight']) ?
        "pull-right" :
        "") + 
      "\">\r\n\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t<span component=\"category-selector-selected\">" + 
      (guard(context && context['selectedCategory']) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(context && context['selectedCategory'])])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['icon'])) + 
          "\" style=\"color: " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['color'])) + 
          ";\"></i></span> " + 
          __escape(guard(context && context['selectedCategory'] && context['selectedCategory']['name'])) :
        "\r\n\t\t[[topic:thread_tools.select_category]]") + 
      "</span> <span class=\"caret\"></span>\r\n\t</button>\r\n\t<div component=\"category-selector-search\" class=\"hidden\">\r\n\t\t<input type=\"text\" class=\"form-control\" autocomplete=\"off\">\r\n\t</div>\r\n\t<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu " + 
      (guard(context && context['pullRight']) ?
        "dropdown-menu-right" :
        "") + 
      "\" role=\"menu\">\r\n\t\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\r\n\t\t\t<a role=\"menu-item\">[[search:no-matches]]</a>\r\n\t\t</li>\r\n\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n</div>\n\t\t</div>\n\t</div>\n\n\t<br/>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-9\" id=\"category-settings\">\n\t\t\t<div class=\"category-settings-form\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-name\">\n\t\t\t\t\t\t[[admin/manage/categories:name]]\n\t\t\t\t\t</label>\n\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-name\" type=\"text\" class=\"form-control\" placeholder=\"[[admin/manage/categories:name]]\" data-name=\"name\" value=\"" + 
      __escape(guard(context && context['category'] && context['category']['name'])) + 
      "\" /><br />\n\n\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-description\">\n\t\t\t\t\t\t[[admin/manage/categories:description]]\n\t\t\t\t\t</label>\n\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-description\" data-name=\"description\" placeholder=\"[[admin/manage/categories:description]]\" value=\"" + 
      __escape(guard(context && context['category'] && context['category']['description'])) + 
      "\" class=\"form-control category_description description\" /><br />\n\t\t\t\t</fieldset>\n\n\t\t\t\t<fieldset class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-bgColor\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:bg-color]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"color\" id=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-bgColor\" placeholder=\"#0059b2\" data-name=\"bgColor\" value=\"" + 
      __escape(guard(context && context['category'] && context['category']['bgColor'])) + 
      "\" class=\"form-control category_bgColor\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-color\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:text-color]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"color\" id=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-color\" placeholder=\"#ffffff\" data-name=\"color\" value=\"" + 
      __escape(guard(context && context['category'] && context['category']['color'])) + 
      "\" class=\"form-control category_color\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-imageClass\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:bg-image-size]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<select id=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-imageClass\" class=\"form-control\" data-name=\"imageClass\" data-value=\"" + 
      __escape(guard(context && context['category'] && context['category']['imageClass'])) + 
      "\">\n\t\t\t\t\t\t\t\t<option value=\"auto\">auto</option>\n\t\t\t\t\t\t\t\t<option value=\"cover\">cover</option>\n\t\t\t\t\t\t\t\t<option value=\"contain\">contain</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><br />\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-class\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:custom-class]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input list=\"customClasses\" id=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-class\" type=\"text\" class=\"form-control\" placeholder=\"" + 
      (guard(context && context['customClasses'] && context['customClasses']['length']) ?
        compiled.blocks['customClasses'](helpers, context, guard, iter, helper) :
        "col-md-6 col-xs-6") + 
      "\" data-name=\"class\" value=\"" + 
      __escape(guard(context && context['category'] && context['category']['class'])) + 
      "\" />\n\t\t\t\t\t\t\t<datalist id=\"customClasses\">\n\t\t\t\t\t\t\t\t" + 
      iter(guard(context && context['customClasses']), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<option>" + 
          __escape(guard(value)) + 
          "</option>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t\t\t\t</datalist>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-numRecentReplies\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:num-recent-replies]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-numRecentReplies\" type=\"text\" class=\"form-control\" placeholder=\"2\" data-name=\"numRecentReplies\" value=\"" + 
      __escape(guard(context && context['category'] && context['category']['numRecentReplies'])) + 
      "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-link\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:ext-link]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-link\" type=\"text\" class=\"form-control\" placeholder=\"http://domain.com\" data-name=\"link\" value=\"" + 
      __escape(guard(context && context['category'] && context['category']['link'])) + 
      "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-min-tags\">\n\t\t\t\t\t\t\t\t[[admin/settings/tags:min-per-topic]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"cid-min-tags\" type=\"text\" class=\"form-control\" data-name=\"minTags\" value=\"" + 
      __escape(guard(context && context['category'] && context['category']['minTags'])) + 
      "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-max-tags\">\n\t\t\t\t\t\t\t\t[[admin/settings/tags:max-per-topic]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"cid-max-tags\" type=\"text\" class=\"form-control\" data-name=\"maxTags\" value=\"" + 
      __escape(guard(context && context['category'] && context['category']['maxTags'])) + 
      "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"tag-whitelist\">[[admin/manage/categories:tag-whitelist]]</label><br />\n\t\t\t\t\t\t\t<input id=\"tag-whitelist\" type=\"text\" class=\"form-control\" data-name=\"tagWhitelist\" value=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-isSection\" data-name=\"isSection\" " + 
      (guard(context && context['category'] && context['category']['isSection']) ?
        "checked" :
        "") + 
      " />\n\t\t\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/manage/categories:is-section]]</strong></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t" + 
      (guard(context && context['postQueueEnabled']) ?
        "\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" data-name=\"postQueue\" " + 
          (guard(context && context['category'] && context['category']['postQueue']) ?
            "checked" :
            "") + 
          " />\n\t\t\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/manage/categories:post-queue]]</strong></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-3 options acp-sidebar\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<div class=\"category-preview\" style=\"\n\t\t\t\t\t\t" + 
      (guard(context && context['category'] && context['category']['backgroundImage']) ?
        "background-image: url(" + 
          __escape(guard(context && context['category'] && context['category']['backgroundImage'])) + 
          ");" :
        "") + 
      "\n\t\t\t\t\t\t" + 
      (guard(context && context['category'] && context['category']['bgColor']) ?
        "background-color: " + 
          __escape(guard(context && context['category'] && context['category']['bgColor'])) + 
          ";" :
        "") + 
      "\n\t\t\t\t\t\t" + 
      (guard(context && context['category'] && context['category']['imageClass']) ?
        "background-size: " + 
          __escape(guard(context && context['category'] && context['category']['imageClass'])) + 
          ";" :
        "") + 
      "\n\t\t\t\t\t\tcolor: " + 
      __escape(guard(context && context['category'] && context['category']['color'])) + 
      ";\n\t\t\t\t\t\">\n\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t<i data-name=\"icon\" value=\"" + 
      __escape(guard(context && context['category'] && context['category']['icon'])) + 
      "\" class=\"fa " + 
      __escape(guard(context && context['category'] && context['category']['icon'])) + 
      " fa-2x\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"btn-group btn-group-justified\">\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<button type=\"button\" data-cid=\"" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "\" class=\"btn btn-default upload-button\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-upload\"></i>\n\t\t\t\t\t\t\t\t[[admin/manage/categories:upload-image]]\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t" + 
      (guard(context && context['category'] && context['category']['backgroundImage']) ?
        "\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<button class=\"btn btn-warning delete-image\">\n\t\t\t\t\t\t\t\t<i data-name=\"icon\" value=\"fa-times\" class=\"fa fa-times\"></i>\n\t\t\t\t\t\t\t\t[[admin/manage/categories:delete-image]]\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t</div><br />\n\n\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t\t\t\t<label for=\"category-image\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:category-image]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t<input id=\"category-image\" type=\"text\" class=\"form-control\" placeholder=\"[[admin/manage/categories:category-image]]\" data-name=\"backgroundImage\" value=\"" + 
      __escape(guard(context && context['category'] && context['category']['backgroundImage'])) + 
      "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "-parentCid\">[[admin/manage/categories:parent-category]]</label>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t<div class=\"btn-group " + 
      (guard(context && context['category'] && context['category']['parent'] && context['category']['parent']['name']) ?
        "" :
        "hide") + 
      "\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-action=\"changeParent\" data-parentCid=\"" + 
      __escape(guard(context && context['category'] && context['category']['parent'] && context['category']['parent']['cid'])) + 
      "\"><i class=\"fa " + 
      __escape(guard(context && context['category'] && context['category']['parent'] && context['category']['parent']['icon'])) + 
      "\"></i> " + 
      __escape(guard(context && context['category'] && context['category']['parent'] && context['category']['parent']['name'])) + 
      "</button>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" data-action=\"removeParent\" data-parentCid=\"" + 
      __escape(guard(context && context['category'] && context['category']['parent'] && context['category']['parent']['cid'])) + 
      "\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-block " + 
      (guard(context && context['category'] && context['category']['parent'] && context['category']['parent']['name']) ?
        "hide" :
        "") + 
      "\" data-action=\"setParent\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-sitemap\"></i>\n\t\t\t\t\t\t\t\t[[admin/manage/categories:parent-category-none]]\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</fieldset>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/admin/manage/privileges/" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "\" class=\"btn btn-info btn-block\">\n\t\t\t\t\t\t<i class=\"fa fa-gear\"></i> [[admin/manage/privileges:edit-privileges]]\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"" + 
      __escape(guard(context && context['config'] && context['config']['relative_path'])) + 
      "/category/" + 
      __escape(guard(context && context['category'] && context['category']['cid'])) + 
      "\" class=\"btn btn-info btn-block\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\"></i> [[admin/manage/categories:view-category]]\n\t\t\t\t\t</a>\n\t\t\t\t\t<button class=\"btn btn-info btn-block copy-settings\">\n\t\t\t\t\t\t<i class=\"fa fa-files-o\"></i> [[admin/manage/categories:copy-settings]]\n\t\t\t\t\t</button>\n\t\t\t\t\t<hr />\n\t\t\t\t\t<button data-action=\"toggle\" data-disabled=\"" + 
      __escape(guard(context && context['category'] && context['category']['disabled'])) + 
      "\" class=\"btn btn-sm btn-block " + 
      (guard(context && context['category'] && context['category']['disabled']) ?
        "btn-primary" :
        "btn-danger") + 
      "\">\n\t\t\t\t\t\t" + 
      (guard(context && context['category'] && context['category']['disabled']) ?
        "\n\t\t\t\t\t\t[[admin/manage/categories:enable]]\n\t\t\t\t\t\t" :
        "\n\t\t\t\t\t\t[[admin/manage/categories:disable]]\n\t\t\t\t\t\t") + 
      "\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class=\"btn btn-danger btn-block purge\">\n\t\t\t\t\t\t<i class=\"fa fa-eraser\"></i> [[admin/manage/categories:purge]]\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li role=\"presentation\" class=\"category " + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['disabledClass']) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['cid'])) + 
          "\" data-name=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\" data-parent-cid=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['parentCid'])) + 
          "\">\r\n\t\t\t<a role=\"menu-item\">" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['level'])) + 
          "<span component=\"category-markup\">" + 
          (guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon']) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i style=\"color: " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['color'])) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['icon'])) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "</span></a>\r\n\t\t</li>\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'customClasses': function customClasses(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['customClasses']), function each(key0, index, length, value) {
        var key = key0;
        return (index === 0 ?
            __escape(guard(value)) :
            "");
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
