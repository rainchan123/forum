"use strict";define("forum/login",["jquery-form"],function(){var e={};e.init=function(){var e=$("#login-error-notify");var n=$("#login");var o=$("#login-form");n.on("click",function(r){r.preventDefault();if(!$("#username").val()||!$("#password").val()){e.find("p").translateText("[[error:invalid-username-or-password]]");e.show()}else{e.hide();if(n.hasClass("disabled")){return}n.addClass("disabled");$(window).trigger("action:app.login");o.ajaxSubmit({headers:{"x-csrf-token":config.csrf_token},beforeSend:function(){app.flags._login=true},success:function(e){$(window).trigger("action:app.loggedIn",e);var n=utils.urlToLocation(e.next).pathname;var o=utils.params({url:e.next});o.loggedin=true;var r=decodeURIComponent($.param(o));window.location.href=n+"?"+r},error:function(o){if(o.status===403&&o.responseText==="Forbidden"){window.location.href=config.relative_path+"/login?error=csrf-invalid"}else{e.find("p").translateText(o.responseText);e.show();n.removeClass("disabled");if($("#password:focus").length){$("#password").select()}}}})}});$("#login-error-notify button").on("click",function(n){n.preventDefault();e.hide();return false});if($("#content #username").val()){$("#content #password").val("").focus()}else{$("#content #username").focus()}$("#content #noscript").val("false")};return e});
//# sourceMappingURL=login.js.map