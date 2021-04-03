
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
    return "<div class=\"emoji-dialog\" id=\"emoji-dialog\">\n  <div class=\"emoji-tabs\">\n    <div class=\"top-bar\"></div>\n    \n    <div class=\"emoji-dialog-search-container\">\n      <input type=\"text\" class=\"form-control emoji-dialog-search\" placeholder=\"[[emoji:search.placeholder]]\">\n      \n      <button type=\"button\" class=\"close form-control\" data-dismiss=\"modal\" aria-label=\"[[global:close]]\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n      \n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n      <li role=\"presentation\" class=\"emoji-dialog-search-results hidden\">\n        <a href=\"#emoji-tab-search\" aria-controls=\"search\" role=\"tab\" data-toggle=\"tab\" data-ajaxify=\"false\">\n          [[emoji:search.results]]\n        </a>\n      </li>\n\n      " + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n\n      <li role=\"presentation\">\n        <button href=\"#emoji-tab-legal\" class=\"btn btn-info\" aria-controls=\"legal\" role=\"tab\" data-toggle=\"tab\" data-ajaxify=\"false\">\n          [[emoji:modal.legal]]\n        </button>\n      </li>\n    </ul>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n      <div role=\"tabpanel\" class=\"tab-pane emoji-dialog-search-results hidden\" id=\"emoji-tab-search\">\n        <!-- search results emoji go here -->\n      </div>\n\n      " + 
      iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\n      <div role=\"tabpanel\" class=\"tab-pane " + 
          (index === 0 ?
            "active" :
            "") + 
          "\" id=\"emoji-tab-" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\">\n        " + 
          iter(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['emojis']), function each(key1, index, length, value) {
            var key = key1;
            return "\n        <a class=\"emoji-link\" name=\"" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['emojis'] && context['categories'][key0]['emojis'][key1] && context['categories'][key0]['emojis'][key1]['name'])) + 
              "\" href=\"#\">" + 
              __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['emojis'] && context['categories'][key0]['emojis'][key1] && context['categories'][key0]['emojis'][key1]['html'])) + 
              "</a>\n        ";
          }, function alt() {
            return "";
          }) + 
          "\n      </div>\n      ";
      }, function alt() {
        return "";
      }) + 
      "\n\n      <div role=\"tabpanel\" class=\"tab-pane\" id=\"emoji-tab-legal\">\n        <div class=\"col-xs-12\">\n          <p class=\"lead\">\n            [[emoji:modal.legal.header]]\n          </p>\n        </div>\n        " + 
      compiled.blocks['packs'](helpers, context, guard, iter, helper) + 
      "\n      </div>\n    </div>\n  </div>\n</div>\n";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['categories']), function each(key0, index, length, value) {
        var key = key0;
        return "\n      <li role=\"presentation\" class=\"" + 
          (index === 0 ?
            "active" :
            "") + 
          "\">\n        <a href=\"#emoji-tab-" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\" aria-controls=\"" + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "\" role=\"tab\" data-toggle=\"tab\" data-ajaxify=\"false\">\n          [[emoji:categories." + 
          __escape(guard(context && context['categories'] && context['categories'][key0] && context['categories'][key0]['name'])) + 
          "]]\n        </a>\n      </li>\n      ";
      }, function alt() {
        return "";
      });
    },
    'packs': function packs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard(context && context['packs']), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <div class=\"col-xs-12\">\n          <h3>[[emoji:modal.legal.set.header, " + 
          __escape(guard(context && context['packs'] && context['packs'][key0] && context['packs'][key0]['name'])) + 
          ", " + 
          __escape(guard(context && context['packs'] && context['packs'][key0] && context['packs'][key0]['id'])) + 
          "]]</h3>\n\n          " + 
          (guard(context && context['packs'] && context['packs'][key0] && context['packs'][key0]['attribution']) ?
            "\n          <h4>[[emoji:modal.legal.set.attribution]]</h4>\n          <div class=\"well\">\n            " + 
              __escape(guard(context && context['packs'] && context['packs'][key0] && context['packs'][key0]['attribution'])) + 
              "\n          </div>\n          " :
            "") + 
          "\n\n          " + 
          (guard(context && context['packs'] && context['packs'][key0] && context['packs'][key0]['license']) ?
            "\n          <h4>[[emoji:modal.legal.set.license]]</h4>\n          <div class=\"well\">\n            " + 
              __escape(guard(context && context['packs'] && context['packs'][key0] && context['packs'][key0]['license'])) + 
              "\n          </div>\n          " :
            "") + 
          "\n        </div>\n        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
