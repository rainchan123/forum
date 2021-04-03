"use strict";define("admin/settings/email",["ace/ace","admin/settings"],function(e){var t={};var i;t.init=function(){a();n();s();r();$(window).on("action:admin.settingsLoaded action:admin.settingsSaved",s);$(window).on("action:admin.settingsSaved",function(){socket.emit("admin.user.restartJobs")});$('[id="email:smtpTransport:service"]').change(r)};function a(){$('button[data-action="email.test"]').off("click").on("click",function(){socket.emit("admin.email.test",{template:$("#test-email").val()},function(e){if(e){console.error(e.message);return app.alertError(e.message)}app.alertSuccess("Test Email Sent")});return false})}function n(){$("#email-editor-selector").on("change",o);i=e.edit("email-editor");i.$blockScrolling=Infinity;i.setTheme("ace/theme/twilight");i.getSession().setMode("ace/mode/html");i.on("change",function(){var e=$("#email-editor-selector").val();var t;ajaxify.data.emails.forEach(function(i){if(i.path===e){t=i.original}});var a=i.getValue();$("#email-editor-holder").val(a!==t?a:"")});$('button[data-action="email.revert"]').off("click").on("click",function(){ajaxify.data.emails.forEach(function(e){if(e.path===$("#email-editor-selector").val()){i.getSession().setValue(e.original);$("#email-editor-holder").val("")}})});o()}function o(){ajaxify.data.emails.forEach(function(e){if(e.path===$("#email-editor-selector").val()){i.getSession().setValue(e.text);$("#email-editor-holder").val(e.text!==e.original?e.text:"").attr("data-field","email:custom:"+e.path)}})}function s(){var e=parseInt($("#digestHour").val(),10);if(isNaN(e)){e=17}else if(e>23||e<0){e=0}socket.emit("admin.getServerTime",{},function(t,i){if(t){return app.alertError(t.message)}var a=new Date(i.timestamp);var n=((new Date).getTimezoneOffset()-i.offset)/60;a.setHours(a.getHours()+n);$("#serverTime").text(a.toLocaleTimeString());a.setHours(parseInt(e,10)-n,0,0,0);if(a.getTime()<Date.now()){a.setDate(a.getDate()+1)}$("#nextDigestTime").text(a.toLocaleString())})}function r(){var e=$('[id="email:smtpTransport:service"]').val()==="nodebb-custom-smtp";$('[id="email:smtpTransport:custom-service"]')[e?"slideDown":"slideUp"](e)}return t});
//# sourceMappingURL=email.js.map