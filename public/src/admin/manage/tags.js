"use strict";define("admin/manage/tags",["forum/infinitescroll","admin/modules/selectable"],function(a,e){var t={};var n=0;t.init=function(){e.enable(".tag-management",".tag-row");r();o();i();s();c()};function r(){var a=$("#create-modal");var e=$("#create-tag-name");var t=$("#create-modal-go");a.on("keypress",function(a){if(a.keyCode===13){t.click()}});$("#create").on("click",function(){a.modal("show");setTimeout(function(){e.focus()},250)});t.on("click",function(){socket.emit("admin.tags.create",{tag:e.val()},function(t){if(t){return app.alertError(t.message)}e.val("");a.on("hidden.bs.modal",function(){ajaxify.refresh()});a.modal("hide")})})}function o(){$("#tag-search").on("input propertychange",function(){if(n){clearTimeout(n);n=0}n=setTimeout(function(){socket.emit("topics.searchAndLoadTags",{query:$("#tag-search").val()},function(a,t){if(a){return app.alertError(a.message)}app.parseAndTranslate("admin/manage/tags","tags",{tags:t.tags},function(a){$(".tag-list").html(a);utils.makeNumbersHumanReadable(a.find(".human-readable-number"));n=0;e.enable(".tag-management",".tag-row")})})},250)})}function i(){$("#modify").on("click",function(){var a=$(".tag-row.ui-selected");if(!a.length){return}var e=$(a[0]);bootbox.dialog({title:"[[admin/manage/tags:alerts.editing]]",message:e.find(".tag-modal").html(),buttons:{success:{label:"Save",className:"btn-primary save",callback:function(){var e=$(".bootbox");var t=e.find("#reset-colors").is(":checked");var n=t?"":e.find('[data-name="bgColor"]').val();var r=t?"":e.find('[data-name="color"]').val();var o=[];a.each(function(a,e){e=$(e);o.push({value:e.attr("data-tag"),color:r,bgColor:n});e.find('[data-name="bgColor"]').val(n);e.find('[data-name="color"]').val(r);e.find(".tag-item").css("background-color",n).css("color",r)});socket.emit("admin.tags.update",o,function(a){if(a){return app.alertError(a.message)}app.alertSuccess("[[admin/manage/tags:alerts.update-success]]")})}}}})})}function s(){$("#rename").on("click",function(){var a=$(".tag-row.ui-selected");if(!a.length){return}var e=bootbox.dialog({title:"[[admin/manage/tags:alerts.editing]]",message:$(".rename-modal").html(),buttons:{success:{label:"Save",className:"btn-primary save",callback:function(){var t=[];a.each(function(a,n){n=$(n);t.push({value:n.attr("data-tag"),newName:e.find('[data-name="value"]').val()})});socket.emit("admin.tags.rename",t,function(a){if(a){return app.alertError(a.message)}app.alertSuccess("[[admin/manage/tags:alerts.update-success]]");ajaxify.refresh()})}}}})})}function c(){$("#deleteSelected").on("click",function(){var a=$(".tag-row.ui-selected");if(!a.length){return}bootbox.confirm("[[admin/manage/tags:alerts.confirm-delete]]",function(e){if(!e){return}var t=[];a.each(function(a,e){t.push($(e).attr("data-tag"))});socket.emit("admin.tags.deleteTags",{tags:t},function(e){if(e){return app.alertError(e.message)}a.remove()})})})}return t});
//# sourceMappingURL=tags.js.map