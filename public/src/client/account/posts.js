"use strict";define("forum/account/posts",["forum/account/header","forum/infinitescroll"],function(t,n){var o={};var e;var s;o.init=function(){t.init();$('[component="post/content"] img:not(.not-responsive)').addClass("img-responsive");o.handleInfiniteScroll("posts.loadMoreUserPosts","account/posts")};o.handleInfiniteScroll=function(t,o){e=t;s=o;if(!config.usePagination){n.init(a)}};function a(t){if(t<0){return}n.loadMore(e,{uid:ajaxify.data.theirid,after:$('[component="posts"]').attr("data-nextstart")},function(t,n){if(t.posts&&t.posts.length){i(t.posts,n)}else{n()}$('[component="posts"]').attr("data-nextstart",t.nextStart)})}function i(t,n){app.parseAndTranslate(s,"posts",{posts:t},function(t){$('[component="posts"]').append(t);t.find("img:not(.not-responsive)").addClass("img-responsive");t.find(".timeago").timeago();app.createUserTooltips();utils.makeNumbersHumanReadable(t.find(".human-readable-number"));n()})}return o});
//# sourceMappingURL=posts.js.map