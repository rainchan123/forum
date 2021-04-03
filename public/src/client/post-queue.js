"use strict";define("forum/post-queue",["categoryFilter","categorySelector"],function(t,e){var a={};a.init=function(){$('[data-toggle="tooltip"]').tooltip();t.init($('[component="category/dropdown"]'));$(".posts-list").on("click","[data-action]",function(){var t=$(this).parents("[data-id]");var e=$(this).attr("data-action");var a=t.attr("data-id");var i=t.get(0).parentNode;if(!["accept","reject"].some(function(t){return e===t})){return}socket.emit("posts."+e,{id:a},function(e){if(e){return app.alertError(e.message)}t.remove();if(i.childElementCount===0){ajaxify.refresh()}});return false});i(".post-content",".post-content-editable","textarea");i(".topic-title",".topic-title-editable","input");$(".posts-list").on("click",".topic-category[data-editable]",function(){var t=$(this);var a=t.parents("[data-id]").attr("data-id");e.modal(ajaxify.data.allCategories,function(e){var i=ajaxify.data.allCategories.find(function(t){return parseInt(t.cid,10)===parseInt(e,10)});socket.emit("posts.editQueuedContent",{id:a,cid:e},function(e){if(e){return app.alertError(e.message)}app.parseAndTranslate("post-queue","posts",{posts:[{category:i}]},function(e){if(t.find(".category-text").length){t.find(".category-text").text(e.find(".topic-category .category-text").text())}else{t.replaceWith(e.find(".topic-category"))}})})});return false});$('[component="post/content"] img:not(.not-responsive)').addClass("img-responsive")};function i(t,e,a){$(".posts-list").on("click",t,function(){var t=$(this);var i=t.parent().find(e);if(i.length){t.addClass("hidden");i.removeClass("hidden").find(a).focus()}});$(".posts-list").on("blur",e+" "+a,function(){var e=$(this);var a=e.parent().parent().find(t);var i=e.parents("[data-id]").attr("data-id");var n=t===".topic-title";socket.emit("posts.editQueuedContent",{id:i,title:n?e.val():undefined,content:n?undefined:e.val()},function(t,i){if(t){return app.alertError(t)}if(n){if(a.find(".title-text").length){a.find(".title-text").text(i.postData.title)}else{a.html(i.postData.title)}}else{a.html(i.postData.content)}e.parent().addClass("hidden");a.removeClass("hidden")})})}return a});
//# sourceMappingURL=post-queue.js.map