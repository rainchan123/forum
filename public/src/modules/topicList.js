"use strict";define("topicList",["forum/infinitescroll","handleBack","topicSelect","categoryFilter","forum/category/tools"],function(e,t,a,i,n){var o={};var r="";var c={recent:"recent",unread:"unread",popular:"posts",top:"votes"};var s=0;var d=0;var l;var f;$(window).on("action:ajaxify.start",function(){o.removeListeners();n.removeListeners()});o.init=function(a,c){f=p();r=a;l=c||w;n.init();o.watchForNewPosts();i.init($('[component="category/dropdown"]'));if(!config.usePagination){e.init(o.loadMoreTopics)}t.init(function(e,t){l(e,1,function(e,a){o.onTopicsLoaded(r,e.topics,ajaxify.data.showSelect,1,function(){t();a()})})});if($("body").height()<=$(window).height()&&f.children().length>=20){$("#load-more-btn").show()}$("#load-more-btn").on("click",function(){o.loadMoreTopics(1)});$(window).trigger("action:topics.loaded",{topics:ajaxify.data.topics})};function p(){return $('[component="category"]').filter(function(e,t){return!$(t).parents("[widget-area],[data-widget-area]").length})}o.watchForNewPosts=function(){$("#new-topics-alert").on("click",function(){$(this).addClass("hide")});d=0;s=0;o.removeListeners();socket.on("event:new_topic",g);socket.on("event:new_post",h)};o.removeListeners=function(){socket.removeListener("event:new_topic",g);socket.removeListener("event:new_post",h)};function u(e){return ajaxify.data.categories&&ajaxify.data.categories.length&&ajaxify.data.categories.some(function(t){return parseInt(t.cid,10)===parseInt(e,10)})}function g(e){if(ajaxify.data.selectedCids&&ajaxify.data.selectedCids.length&&ajaxify.data.selectedCids.indexOf(parseInt(e.cid,10))===-1||ajaxify.data.selectedFilter&&ajaxify.data.selectedFilter.filter==="watched"||ajaxify.data.template.category&&parseInt(ajaxify.data.cid,10)!==parseInt(e.cid,10)||!u(e.cid)){return}s+=1;m()}function h(e){var t=e.posts[0];if(!t||!t.topic){return}if(!t.topic.isFollowing&&(parseInt(t.topic.mainPid,10)===parseInt(t.pid,10)||ajaxify.data.selectedCids&&ajaxify.data.selectedCids.length&&ajaxify.data.selectedCids.indexOf(parseInt(t.topic.cid,10))===-1||ajaxify.data.selectedFilter&&ajaxify.data.selectedFilter.filter==="new"||ajaxify.data.selectedFilter&&ajaxify.data.selectedFilter.filter==="watched"&&!t.topic.isFollowing||ajaxify.data.template.category&&parseInt(ajaxify.data.cid,10)!==parseInt(t.topic.cid,10)||!u(t.topic.cid))){return}d+=1;m()}function m(){var e="";if(s===0){if(d===1){e="[[recent:there-is-a-new-post]]"}else if(d>1){e="[[recent:there-are-new-posts, "+d+"]]"}}else if(s===1){if(d===0){e="[[recent:there-is-a-new-topic]]"}else if(d===1){e="[[recent:there-is-a-new-topic-and-a-new-post]]"}else if(d>1){e="[[recent:there-is-a-new-topic-and-new-posts, "+d+"]]"}}else if(s>1){if(d===0){e="[[recent:there-are-new-topics, "+s+"]]"}else if(d===1){e="[[recent:there-are-new-topics-and-a-new-post, "+s+"]]"}else if(d>1){e="[[recent:there-are-new-topics-and-new-posts, "+s+", "+d+"]]"}}e+=" [[recent:click-here-to-reload]]";$("#new-topics-alert").translateText(e).removeClass("hide").fadeIn("slow");$("#category-no-topics").addClass("hide")}o.loadMoreTopics=function(e){if(!f.length||!f.children().length){return}var t=f.find('[component="category/topic"]');var a=e>0?t.last():t.first();var i=(parseInt(a.attr("data-index"),10)||0)+(e>0?1:0);if(!utils.isNumber(i)||i===0&&f.find('[component="category/topic"][data-index="0"]').length){return}l(i,e,function(t,a){o.onTopicsLoaded(r,t.topics,ajaxify.data.showSelect,e,a)})};function w(t,a,i){i=i||function(){};var n=utils.params();e.loadMore("topics.loadMoreSortedTopics",{after:t,direction:a,sort:c[r],count:config.topicsPerPage,cid:n.cid,query:n,term:ajaxify.data.selectedTerm&&ajaxify.data.selectedTerm.term,filter:ajaxify.data.selectedFilter.filter,set:f.attr("data-set")?f.attr("data-set"):"topics:recent"},i)}function y(e){return e.filter(function(e){return!f.find('[component="category/topic"][data-tid="'+e.tid+'"]').length})}o.onTopicsLoaded=function(t,i,n,o,r){if(!i||!i.length){$("#load-more-btn").hide();return r()}i=y(i);if(!i.length){$("#load-more-btn").hide();return r()}var c;var s;var d=f.find('[component="category/topic"]');if(o>0&&i.length){c=d.last()}else if(o<0&&i.length){s=d.first()}var l={topics:i,showSelect:n,template:{name:t}};l.template[t]=true;app.parseAndTranslate(t,"topics",l,function(n){f.removeClass("hidden");$("#category-no-topics").remove();if(c&&c.length){n.insertAfter(c)}else if(s&&s.length){var d=$(document).height();var l=$(window).scrollTop();n.insertBefore(s);$(window).scrollTop(l+($(document).height()-d))}else{f.append(n)}if(!a.getSelectedTids().length){e.removeExtra(f.find('[component="category/topic"]'),o,Math.max(60,config.topicsPerPage*3))}n.find(".timeago").timeago();app.createUserTooltips(n);utils.makeNumbersHumanReadable(n.find(".human-readable-number"));$(window).trigger("action:topics.loaded",{topics:i,template:t});r()})};return o});
//# sourceMappingURL=topicList.js.map