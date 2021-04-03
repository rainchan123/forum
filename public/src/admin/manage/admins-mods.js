"use strict";define("admin/manage/admins-mods",["translator","benchpress","autocomplete","api","bootbox"],function(a,e,r,s,t){var i={};i.init=function(){r.user($("#admin-search"),function(a,e){socket.emit("admin.user.makeAdmins",[e.item.user.uid],function(a){if(a){return app.alertError(a.message)}app.alertSuccess("[[admin/manage/users:alerts.make-admin-success]]");$("#admin-search").val("");if($('.administrator-area [data-uid="'+e.item.user.uid+'"]').length){return}app.parseAndTranslate("admin/manage/admins-mods","admins.members",{admins:{members:[e.item.user]}},function(a){$(".administrator-area").prepend(a)})})});$(".administrator-area").on("click",".remove-user-icon",function(){var a=$(this).parents("[data-uid]");var e=a.attr("data-uid");if(parseInt(e,10)===parseInt(app.user.uid,10)){return app.alertError("[[admin/manage/users:alerts.no-remove-yourself-admin]]")}t.confirm("[[admin/manage/users:alerts.confirm-remove-admin]]",function(r){if(r){socket.emit("admin.user.removeAdmins",[e],function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/users:alerts.remove-admin-success]]");a.remove()})}})});r.user($("#global-mod-search"),function(a,e){s.put("/groups/global-moderators/membership/"+e.item.user.uid).then(()=>{app.alertSuccess("[[admin/manage/users:alerts.make-global-mod-success]]");$("#global-mod-search").val("");if($('.global-moderator-area [data-uid="'+e.item.user.uid+'"]').length){return}app.parseAndTranslate("admin/manage/admins-mods","globalMods.members",{globalMods:{members:[e.item.user]}},function(a){$(".global-moderator-area").prepend(a);$("#no-global-mods-warning").addClass("hidden")})}).catch(app.alertError)});$(".global-moderator-area").on("click",".remove-user-icon",function(){var a=$(this).parents("[data-uid]");var e=a.attr("data-uid");t.confirm("[[admin/manage/users:alerts.confirm-remove-global-mod]]",function(r){if(r){s.del("/groups/global-moderators/membership/"+e).then(()=>{app.alertSuccess("[[admin/manage/users:alerts.remove-global-mod-success]]");a.remove();if(!$(".global-moderator-area").children().length){$("#no-global-mods-warning").removeClass("hidden")}}).catch(app.alertError)}})});r.user($(".moderator-search"),function(a,e){var r=$(a.target);var s=$(a.target).attr("data-cid");socket.emit("admin.categories.setPrivilege",{cid:s,privilege:ajaxify.data.allPrivileges,set:true,member:e.item.user.uid},function(a){if(a){return app.alertError(a.message)}app.alertSuccess("[[admin/manage/users:alerts.make-moderator-success]]");r.val("");if($('.moderator-area[data-cid="'+s+'"] [data-uid="'+e.item.user.uid+'"]').length){return}app.parseAndTranslate("admin/manage/admins-mods","globalMods.members",{globalMods:{members:[e.item.user]}},function(a){$('.moderator-area[data-cid="'+s+'"]').prepend(a);$('.no-moderator-warning[data-cid="'+s+'"]').addClass("hidden")})})});$(".moderator-area").on("click",".remove-user-icon",function(){var a=$(this).parents("[data-cid]");var e=a.attr("data-cid");var r=$(this).parents("[data-uid]");var s=r.attr("data-uid");t.confirm("[[admin/manage/users:alerts.confirm-remove-moderator]]",function(t){if(t){socket.emit("admin.categories.setPrivilege",{cid:e,privilege:ajaxify.data.allPrivileges,set:false,member:s},function(s){if(s){return app.alertError(s.message)}app.alertSuccess("[[admin/manage/users:alerts.remove-moderator-success]]");r.remove();if(!a.children().length){$('.no-moderator-warning[data-cid="'+e+'"]').removeClass("hidden")}})}})})};return i});
//# sourceMappingURL=admins-mods.js.map