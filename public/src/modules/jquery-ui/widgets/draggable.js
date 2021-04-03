(function(t){if(typeof define==="function"&&define.amd){define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],t)}else{t(jQuery)}})(function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"){this._setPositionRelative()}if(this.options.addClasses){this._addClass("ui-draggable")}this._setHandleClassName();this._mouseInit()},_setOption:function(t,e){this._super(t,e);if(t==="handle"){this._removeHandleClassName();this._setHandleClassName()}},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=true;return}this._removeHandleClassName();this._mouseDestroy()},_mouseCapture:function(e){var s=this.options;if(this.helper||s.disabled||t(e.target).closest(".ui-resizable-handle").length>0){return false}this.handle=this._getHandle(e);if(!this.handle){return false}this._blurActiveElement(e);this._blockFrames(s.iframeFix===true?"iframe":s.iframeFix);return true},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks}},_blurActiveElement:function(e){var s=t.ui.safeActiveElement(this.document[0]),i=t(e.target);if(i.closest(s).length){return}t.ui.safeBlur(s)},_mouseStart:function(e){var s=this.options;this.helper=this._createHelper(e);this._addClass(this.helper,"ui-draggable-dragging");this._cacheHelperProportions();if(t.ui.ddmanager){t.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent(true);this.offsetParent=this.helper.offsetParent();this.hasFixedAncestor=this.helper.parents().filter(function(){return t(this).css("position")==="fixed"}).length>0;this.positionAbs=this.element.offset();this._refreshOffsets(e);this.originalPosition=this.position=this._generatePosition(e,false);this.originalPageX=e.pageX;this.originalPageY=e.pageY;s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt);this._setContainment();if(this._trigger("start",e)===false){this._clear();return false}this._cacheHelperProportions();if(t.ui.ddmanager&&!s.dropBehaviour){t.ui.ddmanager.prepareOffsets(this,e)}this._mouseDrag(e,true);if(t.ui.ddmanager){t.ui.ddmanager.dragStart(this,e)}return true},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:false,parent:this._getParentOffset(),relative:this._getRelativeOffset()};this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,s){if(this.hasFixedAncestor){this.offset.parent=this._getParentOffset()}this.position=this._generatePosition(e,true);this.positionAbs=this._convertPositionTo("absolute");if(!s){var i=this._uiHash();if(this._trigger("drag",e,i)===false){this._mouseUp(new t.Event("mouseup",e));return false}this.position=i.position}this.helper[0].style.left=this.position.left+"px";this.helper[0].style.top=this.position.top+"px";if(t.ui.ddmanager){t.ui.ddmanager.drag(this,e)}return false},_mouseStop:function(e){var s=this,i=false;if(t.ui.ddmanager&&!this.options.dropBehaviour){i=t.ui.ddmanager.drop(this,e)}if(this.dropped){i=this.dropped;this.dropped=false}if(this.options.revert==="invalid"&&!i||this.options.revert==="valid"&&i||this.options.revert===true||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)){t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(s._trigger("stop",e)!==false){s._clear()}})}else{if(this._trigger("stop",e)!==false){this._clear()}}return false},_mouseUp:function(e){this._unblockFrames();if(t.ui.ddmanager){t.ui.ddmanager.dragStop(this,e)}if(this.handleElement.is(e.target)){this.element.trigger("focus")}return t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp(new t.Event("mouseup",{target:this.element[0]}))}else{this._clear()}return this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:true},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var s=this.options,i=t.isFunction(s.helper),o=i?t(s.helper.apply(this.element[0],[e])):s.helper==="clone"?this.element.clone().removeAttr("id"):this.element;if(!o.parents("body").length){o.appendTo(s.appendTo==="parent"?this.element[0].parentNode:s.appendTo)}if(i&&o[0]===this.element[0]){this._setPositionRelative()}if(o[0]!==this.element[0]&&!/(fixed|absolute)/.test(o.css("position"))){o.css("position","absolute")}return o},_setPositionRelative:function(){if(!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative"}},_adjustOffsetFromHelper:function(e){if(typeof e==="string"){e=e.split(" ")}if(t.isArray(e)){e={left:+e[0],top:+e[1]||0}}if("left"in e){this.offset.click.left=e.left+this.margins.left}if("right"in e){this.offset.click.left=this.helperProportions.width-e.right+this.margins.left}if("top"in e){this.offset.click.top=e.top+this.margins.top}if("bottom"in e){this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top}},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),s=this.document[0];if(this.cssPosition==="absolute"&&this.scrollParent[0]!==s&&t.contains(this.scrollParent[0],this.offsetParent[0])){e.left+=this.scrollParent.scrollLeft();e.top+=this.scrollParent.scrollTop()}if(this._isRootNode(this.offsetParent[0])){e={top:0,left:0}}return{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition!=="relative"){return{top:0,left:0}}var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(!e?this.scrollParent.scrollTop():0),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(!e?this.scrollParent.scrollLeft():0)}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,s,i,o=this.options,r=this.document[0];this.relativeContainer=null;if(!o.containment){this.containment=null;return}if(o.containment==="window"){this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||r.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(o.containment==="document"){this.containment=[0,0,t(r).width()-this.helperProportions.width-this.margins.left,(t(r).height()||r.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(o.containment.constructor===Array){this.containment=o.containment;return}if(o.containment==="parent"){o.containment=this.helper[0].parentNode}s=t(o.containment);i=s[0];if(!i){return}e=/(scroll|auto)/.test(s.css("overflow"));this.containment=[(parseInt(s.css("borderLeftWidth"),10)||0)+(parseInt(s.css("paddingLeft"),10)||0),(parseInt(s.css("borderTopWidth"),10)||0)+(parseInt(s.css("paddingTop"),10)||0),(e?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(s.css("borderRightWidth"),10)||0)-(parseInt(s.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(s.css("borderBottomWidth"),10)||0)-(parseInt(s.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relativeContainer=s},_convertPositionTo:function(t,e){if(!e){e=this.position}var s=t==="absolute"?1:-1,i=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*s+this.offset.parent.top*s-(this.cssPosition==="fixed"?-this.offset.scroll.top:i?0:this.offset.scroll.top)*s,left:e.left+this.offset.relative.left*s+this.offset.parent.left*s-(this.cssPosition==="fixed"?-this.offset.scroll.left:i?0:this.offset.scroll.left)*s}},_generatePosition:function(t,e){var s,i,o,r,n=this.options,l=this._isRootNode(this.scrollParent[0]),a=t.pageX,f=t.pageY;if(!l||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}}if(e){if(this.containment){if(this.relativeContainer){i=this.relativeContainer.offset();s=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else{s=this.containment}if(t.pageX-this.offset.click.left<s[0]){a=s[0]+this.offset.click.left}if(t.pageY-this.offset.click.top<s[1]){f=s[1]+this.offset.click.top}if(t.pageX-this.offset.click.left>s[2]){a=s[2]+this.offset.click.left}if(t.pageY-this.offset.click.top>s[3]){f=s[3]+this.offset.click.top}}if(n.grid){o=n.grid[1]?this.originalPageY+Math.round((f-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;f=s?o-this.offset.click.top>=s[1]||o-this.offset.click.top>s[3]?o:o-this.offset.click.top>=s[1]?o-n.grid[1]:o+n.grid[1]:o;r=n.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;a=s?r-this.offset.click.left>=s[0]||r-this.offset.click.left>s[2]?r:r-this.offset.click.left>=s[0]?r-n.grid[0]:r+n.grid[0]:r}if(n.axis==="y"){a=this.originalPageX}if(n.axis==="x"){f=this.originalPageY}}return{top:f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:l?0:this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:l?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false;if(this.destroyOnClear){this.destroy()}},_trigger:function(e,s,i){i=i||this._uiHash();t.ui.plugin.call(this,e,[s,i,this],true);if(/^(drag|start|stop)/.test(e)){this.positionAbs=this._convertPositionTo("absolute");i.offset=this.positionAbs}return t.Widget.prototype._trigger.call(this,e,s,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});t.ui.plugin.add("draggable","connectToSortable",{start:function(e,s,i){var o=t.extend({},s,{item:i.element});i.sortables=[];t(i.options.connectToSortable).each(function(){var s=t(this).sortable("instance");if(s&&!s.options.disabled){i.sortables.push(s);s.refreshPositions();s._trigger("activate",e,o)}})},stop:function(e,s,i){var o=t.extend({},s,{item:i.element});i.cancelHelperRemoval=false;t.each(i.sortables,function(){var t=this;if(t.isOver){t.isOver=0;i.cancelHelperRemoval=true;t.cancelHelperRemoval=false;t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")};t._mouseStop(e);t.options.helper=t.options._helper}else{t.cancelHelperRemoval=true;t._trigger("deactivate",e,o)}})},drag:function(e,s,i){t.each(i.sortables,function(){var o=false,r=this;r.positionAbs=i.positionAbs;r.helperProportions=i.helperProportions;r.offset.click=i.offset.click;if(r._intersectsWith(r.containerCache)){o=true;t.each(i.sortables,function(){this.positionAbs=i.positionAbs;this.helperProportions=i.helperProportions;this.offset.click=i.offset.click;if(this!==r&&this._intersectsWith(this.containerCache)&&t.contains(r.element[0],this.element[0])){o=false}return o})}if(o){if(!r.isOver){r.isOver=1;i._parent=s.helper.parent();r.currentItem=s.helper.appendTo(r.element).data("ui-sortable-item",true);r.options._helper=r.options.helper;r.options.helper=function(){return s.helper[0]};e.target=r.currentItem[0];r._mouseCapture(e,true);r._mouseStart(e,true,true);r.offset.click.top=i.offset.click.top;r.offset.click.left=i.offset.click.left;r.offset.parent.left-=i.offset.parent.left-r.offset.parent.left;r.offset.parent.top-=i.offset.parent.top-r.offset.parent.top;i._trigger("toSortable",e);i.dropped=r.element;t.each(i.sortables,function(){this.refreshPositions()});i.currentItem=i.element;r.fromOutside=i}if(r.currentItem){r._mouseDrag(e);s.position=r.position}}else{if(r.isOver){r.isOver=0;r.cancelHelperRemoval=true;r.options._revert=r.options.revert;r.options.revert=false;r._trigger("out",e,r._uiHash(r));r._mouseStop(e,true);r.options.revert=r.options._revert;r.options.helper=r.options._helper;if(r.placeholder){r.placeholder.remove()}s.helper.appendTo(i._parent);i._refreshOffsets(e);s.position=i._generatePosition(e,true);i._trigger("fromSortable",e);i.dropped=false;t.each(i.sortables,function(){this.refreshPositions()})}}})}});t.ui.plugin.add("draggable","cursor",{start:function(e,s,i){var o=t("body"),r=i.options;if(o.css("cursor")){r._cursor=o.css("cursor")}o.css("cursor",r.cursor)},stop:function(e,s,i){var o=i.options;if(o._cursor){t("body").css("cursor",o._cursor)}}});t.ui.plugin.add("draggable","opacity",{start:function(e,s,i){var o=t(s.helper),r=i.options;if(o.css("opacity")){r._opacity=o.css("opacity")}o.css("opacity",r.opacity)},stop:function(e,s,i){var o=i.options;if(o._opacity){t(s.helper).css("opacity",o._opacity)}}});t.ui.plugin.add("draggable","scroll",{start:function(t,e,s){if(!s.scrollParentNotHidden){s.scrollParentNotHidden=s.helper.scrollParent(false)}if(s.scrollParentNotHidden[0]!==s.document[0]&&s.scrollParentNotHidden[0].tagName!=="HTML"){s.overflowOffset=s.scrollParentNotHidden.offset()}},drag:function(e,s,i){var o=i.options,r=false,n=i.scrollParentNotHidden[0],l=i.document[0];if(n!==l&&n.tagName!=="HTML"){if(!o.axis||o.axis!=="x"){if(i.overflowOffset.top+n.offsetHeight-e.pageY<o.scrollSensitivity){n.scrollTop=r=n.scrollTop+o.scrollSpeed}else if(e.pageY-i.overflowOffset.top<o.scrollSensitivity){n.scrollTop=r=n.scrollTop-o.scrollSpeed}}if(!o.axis||o.axis!=="y"){if(i.overflowOffset.left+n.offsetWidth-e.pageX<o.scrollSensitivity){n.scrollLeft=r=n.scrollLeft+o.scrollSpeed}else if(e.pageX-i.overflowOffset.left<o.scrollSensitivity){n.scrollLeft=r=n.scrollLeft-o.scrollSpeed}}}else{if(!o.axis||o.axis!=="x"){if(e.pageY-t(l).scrollTop()<o.scrollSensitivity){r=t(l).scrollTop(t(l).scrollTop()-o.scrollSpeed)}else if(t(window).height()-(e.pageY-t(l).scrollTop())<o.scrollSensitivity){r=t(l).scrollTop(t(l).scrollTop()+o.scrollSpeed)}}if(!o.axis||o.axis!=="y"){if(e.pageX-t(l).scrollLeft()<o.scrollSensitivity){r=t(l).scrollLeft(t(l).scrollLeft()-o.scrollSpeed)}else if(t(window).width()-(e.pageX-t(l).scrollLeft())<o.scrollSensitivity){r=t(l).scrollLeft(t(l).scrollLeft()+o.scrollSpeed)}}}if(r!==false&&t.ui.ddmanager&&!o.dropBehaviour){t.ui.ddmanager.prepareOffsets(i,e)}}});t.ui.plugin.add("draggable","snap",{start:function(e,s,i){var o=i.options;i.snapElements=[];t(o.snap.constructor!==String?o.snap.items||":data(ui-draggable)":o.snap).each(function(){var e=t(this),s=e.offset();if(this!==i.element[0]){i.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:s.top,left:s.left})}})},drag:function(e,s,i){var o,r,n,l,a,f,h,p,c,d,u=i.options,g=u.snapTolerance,m=s.offset.left,v=m+i.helperProportions.width,_=s.offset.top,P=_+i.helperProportions.height;for(c=i.snapElements.length-1;c>=0;c--){a=i.snapElements[c].left-i.margins.left;f=a+i.snapElements[c].width;h=i.snapElements[c].top-i.margins.top;p=h+i.snapElements[c].height;if(v<a-g||m>f+g||P<h-g||_>p+g||!t.contains(i.snapElements[c].item.ownerDocument,i.snapElements[c].item)){if(i.snapElements[c].snapping){i.options.snap.release&&i.options.snap.release.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[c].item}))}i.snapElements[c].snapping=false;continue}if(u.snapMode!=="inner"){o=Math.abs(h-P)<=g;r=Math.abs(p-_)<=g;n=Math.abs(a-v)<=g;l=Math.abs(f-m)<=g;if(o){s.position.top=i._convertPositionTo("relative",{top:h-i.helperProportions.height,left:0}).top}if(r){s.position.top=i._convertPositionTo("relative",{top:p,left:0}).top}if(n){s.position.left=i._convertPositionTo("relative",{top:0,left:a-i.helperProportions.width}).left}if(l){s.position.left=i._convertPositionTo("relative",{top:0,left:f}).left}}d=o||r||n||l;if(u.snapMode!=="outer"){o=Math.abs(h-_)<=g;r=Math.abs(p-P)<=g;n=Math.abs(a-m)<=g;l=Math.abs(f-v)<=g;if(o){s.position.top=i._convertPositionTo("relative",{top:h,left:0}).top}if(r){s.position.top=i._convertPositionTo("relative",{top:p-i.helperProportions.height,left:0}).top}if(n){s.position.left=i._convertPositionTo("relative",{top:0,left:a}).left}if(l){s.position.left=i._convertPositionTo("relative",{top:0,left:f-i.helperProportions.width}).left}}if(!i.snapElements[c].snapping&&(o||r||n||l||d)){i.options.snap.snap&&i.options.snap.snap.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[c].item}))}i.snapElements[c].snapping=o||r||n||l||d}}});t.ui.plugin.add("draggable","stack",{start:function(e,s,i){var o,r=i.options,n=t.makeArray(t(r.stack)).sort(function(e,s){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(s).css("zIndex"),10)||0)});if(!n.length){return}o=parseInt(t(n[0]).css("zIndex"),10)||0;t(n).each(function(e){t(this).css("zIndex",o+e)});this.css("zIndex",o+n.length)}});t.ui.plugin.add("draggable","zIndex",{start:function(e,s,i){var o=t(s.helper),r=i.options;if(o.css("zIndex")){r._zIndex=o.css("zIndex")}o.css("zIndex",r.zIndex)},stop:function(e,s,i){var o=i.options;if(o._zIndex){t(s.helper).css("zIndex",o._zIndex)}}});return t.ui.draggable});
//# sourceMappingURL=draggable.js.map