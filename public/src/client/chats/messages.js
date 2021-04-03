"use strict";define("forum/chats/messages",["components","translator","benchpress"],function(e,t,a){var s={};s.sendMessage=function(e,t){var a=t.val();var n=t.attr("data-mid");if(!a.trim().length){return}t.val("");t.removeAttr("data-mid");s.updateRemainingLength(t.parent());$(window).trigger("action:chat.sent",{roomId:e,message:a,mid:n});if(!n){socket.emit("modules.chats.send",{roomId:e,message:a},function(e){if(e){t.val(a);s.updateRemainingLength(t.parent());if(e.message==="[[error:email-not-confirmed-chat]]"){return app.showEmailConfirmWarning(e)}return app.alert({alert_id:"chat_spam_error",title:"[[global:alert.error]]",message:e.message,type:"danger",timeout:1e4})}})}else{socket.emit("modules.chats.edit",{roomId:e,mid:n,message:a},function(e){if(e){t.val(a);t.attr("data-mid",n);s.updateRemainingLength(t.parent());return app.alertError(e.message)}})}};s.updateRemainingLength=function(e){var t=e.find('[component="chat/input"]');e.find('[component="chat/message/length"]').text(t.val().length);e.find('[component="chat/message/remaining"]').text(config.maximumChatMessageLength-t.val().length);$(window).trigger("action:chat.updateRemainingLength",{parent:e})};s.appendChatMessage=function(e,t){var a=parseInt(e.find(".chat-message").last().attr("data-uid"),10);var r=parseInt(e.find(".chat-message").last().attr("data-timestamp"),10);if(!Array.isArray(t)){t.newSet=a!==parseInt(t.fromuid,10)||parseInt(t.timestamp,10)>parseInt(r,10)+1e3*60*3}s.parseMessage(t,function(t){n(e,t)})};function n(e,t){var a=$(t);var n=s.isAtBottom(e);a.appendTo(e);a.find(".timeago").timeago();a.find("img:not(.not-responsive)").addClass("img-responsive");if(n){s.scrollToBottom(e)}$(window).trigger("action:chat.received",{messageEl:a})}s.parseMessage=function(e,s){function n(e){t.translate(e,s)}if(Array.isArray(e)){a.render("partials/chats/message"+(Array.isArray(e)?"s":""),{messages:e}).then(n)}else{a.render("partials/chats/"+(e.system?"system-message":"message"),{messages:e}).then(n)}};s.isAtBottom=function(e,t){if(e.length){var a=e[0].scrollHeight-(e.outerHeight()+e.scrollTop());return a<(t||100)}};s.scrollToBottom=function(e){if(e&&e.length){e.scrollTop(e[0].scrollHeight-e.height());e.parent().find('[component="chat/messages/scroll-up-alert"]').addClass("hidden")}};s.toggleScrollUpAlert=function(e){var t=s.isAtBottom(e,300);e.parent().find('[component="chat/messages/scroll-up-alert"]').toggleClass("hidden",t)};s.prepEdit=function(e,t,a){socket.emit("modules.chats.getRaw",{mid:t,roomId:a},function(s,n){if(s){return app.alertError(s.message)}if(e.val().length===0){e.attr("data-mid",t).addClass("editing");e.val(n).focus();$(window).trigger("action:chat.prepEdit",{inputEl:e,messageId:t,roomId:a})}})};s.addSocketListeners=function(){socket.removeListener("event:chats.edit",r);socket.on("event:chats.edit",r);socket.removeListener("event:chats.delete",o);socket.on("event:chats.delete",o);socket.removeListener("event:chats.restore",i);socket.on("event:chats.restore",i)};function r(t){t.messages.forEach(function(t){var a=parseInt(t.fromuid,10)===parseInt(app.user.uid,10);t.self=a?1:0;s.parseMessage(t,function(a){var s=e.get("chat/message",t.messageId);if(s.length){s.replaceWith(a);e.get("chat/message",t.messageId).find(".timeago").timeago()}})})}function o(t){e.get("chat/message",t).toggleClass("deleted",true).find('[component="chat/message/body"]').translateHtml("[[modules:chat.message-deleted]]")}function i(t){e.get("chat/message",t.messageId).toggleClass("deleted",false).find('[component="chat/message/body"]').html(t.content)}s.delete=function(a,s){t.translate("[[modules:chat.delete_message_confirm]]",function(t){bootbox.confirm(t,function(t){if(!t){return}socket.emit("modules.chats.delete",{messageId:a,roomId:s},function(t){if(t){return app.alertError(t.message)}e.get("chat/message",a).toggleClass("deleted",true)})})})};s.restore=function(t,a){socket.emit("modules.chats.restore",{messageId:t,roomId:a},function(a){if(a){return app.alertError(a.message)}e.get("chat/message",t).toggleClass("deleted",false)})};return s});
//# sourceMappingURL=messages.js.map