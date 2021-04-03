"use strict";define("admin/extend/plugins",["translator","benchpress","jquery-ui/widgets/sortable"],function(e,t){var i={};i.init=function(){var r=$(".plugins");var o=r[0].querySelectorAll("li").length;var c;if(!o){e.translate("<li><p><i>[[admin/extend/plugins:none-found]]</i></p></li>",function(e){r.append(e)});return}$("#plugin-search").val("");r.on("click",'button[data-action="toggleActive"]',function(){var i=$(this).parents("li");c=i.attr("data-plugin-id");var n=$('[id="'+c+'"] [data-action="toggleActive"]');var a=ajaxify.data.installed[i.attr("data-plugin-index")];function l(){socket.emit("admin.plugins.toggleActive",c,function(t,l){if(t){return app.alertError(t)}e.translate('<i class="fa fa-power-off"></i> [[admin/extend/plugins:plugin-item.'+(l.active?"deactivate":"activate")+"]]",function(e){n.html(e);n.toggleClass("btn-warning",l.active).toggleClass("btn-success",!l.active);if(l.active&&!$('#active [id="'+c+'"]').length){$("#active ul").prepend(i.clone(true))}a.active=!a.active;app.alert({alert_id:"plugin_toggled",title:"[[admin/extend/plugins:alert."+(l.active?"enabled":"disabled")+"]]",message:"[[admin/extend/plugins:alert."+(l.active?"activate-success":"deactivate-success")+"]]",type:l.active?"warning":"success",timeout:5e3,clickfn:function(){require(["admin/modules/instance"],function(e){e.rebuildAndRestart()})}})})})}if(a.license&&a.active!==true){t.render("admin/partials/plugins/license",a).then(function(e){bootbox.dialog({title:"[[admin/extend/plugins:license.title]]",message:e,size:"large",buttons:{cancel:{label:"[[modules:bootbox.cancel]]",className:"btn-link"},save:{label:"[[modules:bootbox.confirm]]",className:"btn-primary",callback:l}}})})}else{l(c)}});r.on("click",'button[data-action="toggleInstall"]',function(){var t=$(this);t.attr("disabled",true);c=$(this).parents("li").attr("data-plugin-id");if($(this).attr("data-installed")==="1"){return i.toggleInstall(c,$(this).parents("li").attr("data-version"))}i.suggest(c,function(a,l){if(a){bootbox.confirm(e.compile("admin/extend/plugins:alert.suggest-error",a.status,a.responseText),function(e){if(e){i.toggleInstall(c,"latest")}else{t.removeAttr("disabled")}});return}if(l.version!=="latest"){i.toggleInstall(c,l.version)}else if(l.version==="latest"){n(c,function(e){if(e){i.toggleInstall(c,"latest")}else{t.removeAttr("disabled")}})}else{t.removeAttr("disabled")}})});r.on("click",'button[data-action="upgrade"]',function(){var t=$(this);var l=t.parents("li");c=l.attr("data-plugin-id");i.suggest(c,function(i,s){if(i){return bootbox.alert("[[admin/extend/plugins:alert.package-manager-unreachable]]")}require(["compare-versions"],function(i){var r=l.find(".currentVersion").text();if(s.version!=="latest"&&i.compare(s.version,r,">")){a(c,t,s.version)}else if(s.version==="latest"){n(c,function(){a(c,t,s.version)})}else{bootbox.alert(e.compile("admin/extend/plugins:alert.incompatible",app.config.version,s.version))}})})});$("#plugin-search").on("input propertychange",function(){var e=$(this).val();$(".plugins li").each(function(){var t=$(this).attr("data-plugin-id");$(this).toggleClass("hide",t&&t.indexOf(e)===-1)})});$("#plugin-submit-usage").on("click",function(){socket.emit("admin.config.setMultiple",{submitPluginUsage:$(this).prop("checked")?"1":"0"},function(e){if(e){return app.alertError(e.message)}})});$("#plugin-order").on("click",function(){$("#order-active-plugins-modal").modal("show");socket.emit("admin.plugins.getActive",function(t,i){if(t){return app.alertError(t)}var n="";i.forEach(function(e){n+='<li class="">'+e+'<span class="pull-right"><i class="fa fa-chevron-up"></i><i class="fa fa-chevron-down"></i></span></li>'});if(!i.length){e.translate("[[admin/extend/plugins:none-active]]",function(e){$("#order-active-plugins-modal .plugin-list").html(e).sortable()});return}var a=$("#order-active-plugins-modal .plugin-list");a.html(n).sortable();a.find(".fa-chevron-up").on("click",function(){var e=$(this).parents("li");e.prev().before(e)});a.find(".fa-chevron-down").on("click",function(){var e=$(this).parents("li");e.next().after(e)})})});$("#save-plugin-order").on("click",function(){var e=$("#order-active-plugins-modal .plugin-list").children();var t=[];e.each(function(e,i){t.push({name:$(i).text(),order:e})});socket.emit("admin.plugins.orderActivePlugins",t,function(e){if(e){return app.alertError(e.message)}$("#order-active-plugins-modal").modal("hide");app.alert({alert_id:"plugin_reordered",title:"[[admin/extend/plugins:alert.reorder]]",message:"[[admin/extend/plugins:alert.reorder-success]]",type:"success",timeout:5e3,clickfn:function(){require(["admin/modules/instance"],function(e){e.rebuildAndRestart()})}})})});l();s()};function n(t,i){bootbox.confirm(e.compile("admin/extend/plugins:alert.possibly-incompatible",t),function(e){i(e)})}function a(e,t,i){t.attr("disabled",true).find("i").attr("class","fa fa-refresh fa-spin");socket.emit("admin.plugins.upgrade",{id:e,version:i},function(e,n){if(e){return app.alertError(e.message)}var a=t.parents("li");a.find(".fa-exclamation-triangle").remove();a.find(".currentVersion").text(i);t.remove();if(n){app.alert({alert_id:"plugin_upgraded",title:"[[admin/extend/plugins:alert.upgraded]]",message:"[[admin/extend/plugins:alert.upgrade-success]]",type:"warning",timeout:5e3,clickfn:function(){require(["admin/modules/instance"],function(e){e.rebuildAndRestart()})}})}})}i.toggleInstall=function(e,t,i){var n=$('li[data-plugin-id="'+e+'"] button[data-action="toggleInstall"]');n.find("i").attr("class","fa fa-refresh fa-spin");socket.emit("admin.plugins.toggleInstall",{id:e,version:t},function(e,t){if(e){n.removeAttr("disabled");return app.alertError(e.message)}ajaxify.refresh();app.alert({alert_id:"plugin_toggled",title:"[[admin/extend/plugins:alert."+(t.installed?"installed":"uninstalled")+"]]",message:"[[admin/extend/plugins:alert."+(t.installed?"install-success":"uninstall-success")+"]]",type:"info",timeout:5e3});if(typeof i==="function"){i.apply(this,arguments)}})};i.suggest=function(e,t){var i=app.config.version.match(/^\d+\.\d+\.\d+/);$.ajax((app.config.registry||"https://packages.nodebb.org")+"/api/v1/suggest",{type:"GET",data:{package:e,version:i[0]},dataType:"json"}).done(function(e){t(undefined,e)}).fail(t)};function l(){$("#installed ul li").each(function(){if($(this).children('[data-action="upgrade"]').length){$("#upgrade ul").append($(this).clone(true))}})}function s(){$("#installed ul li").each(function(){if($(this).hasClass("active")){$("#active ul").append($(this).clone(true))}else{$("#deactive ul").append($(this).clone(true))}})}return i});
//# sourceMappingURL=plugins.js.map