"use strict";define("iconSelect",["benchpress"],function(e){var a={};a.init=function(a,s){s=s||function(){};var t=a.hasClass("fa-2x");var l=a.attr("class").replace("fa-2x","").replace("fa","").replace(/\s+/g,"");$("#icons .selected").removeClass("selected");if(l){try{$("#icons .fa-icons .fa."+l).addClass("selected")}catch(e){l=""}}e.render("partials/fontawesome",{}).then(function(e){e=$(e);e.find(".fa-icons").prepend($('<i class="fa fa-nbb-none"></i>'));var n=bootbox.dialog({onEscape:true,backdrop:true,show:false,message:e,title:"Select an Icon",buttons:{noIcon:{label:"No Icon",className:"btn-default",callback:function(){a.attr("class","fa "+(t?"fa-2x ":""));a.val("");a.attr("value","");s(a)}},success:{label:"Select",className:"btn-primary",callback:function(){var e=$(".bootbox .selected").attr("class");var l=$("<div></div>").addClass(e).removeClass("fa").removeClass("selected").attr("class");if(l){a.attr("class","fa "+(t?"fa-2x ":"")+l);a.val(l);a.attr("value",l)}s(a)}}}});n.on("show.bs.modal",function(){var e=$(this);var a=e.find("input");if(l){e.find("."+l).addClass("selected");a.val(l.replace("fa-",""))}}).modal("show");n.on("shown.bs.modal",function(){var e=$(this);var a=e.find("input");var s=e.find(".fa-icons i");var t=e.find("button.btn-primary");function n(s){e.find("i.selected").removeClass("selected");if(s){s.addClass("selected")}else if(a.val().length===0){if(l){e.find("."+l).addClass("selected")}}else{e.find("i:visible").first().addClass("selected")}}a.selectRange(0,a.val().length);e.find(".icon-container").on("click","i",function(){a.val($(this).attr("class").replace("fa fa-","").replace("selected",""));n($(this))});a.on("keyup",function(e){if(e.keyCode!==13){s.show();s.each(function(e,s){if(!s.className.match(new RegExp("^fa fa-.*"+a.val()+".*$"))){$(s).hide()}});n()}else{t.click()}})})})};return a});
//# sourceMappingURL=iconSelect.js.map