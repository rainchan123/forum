(function(e){if(typeof define==="function"&&define.amd){define(["jquery","../version","../effect"],e)}else{e(jQuery)}})(function(e){return e.effects.define("blind","hide",function(i,t){var o={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},f=e(this),n=i.direction||"up",c=f.cssClip(),l={clip:e.extend({},c)},r=e.effects.createPlaceholder(f);l.clip[o[n][0]]=l.clip[o[n][1]];if(i.mode==="show"){f.cssClip(l.clip);if(r){r.css(e.effects.clipToBox(l))}l.clip=c}if(r){r.animate(e.effects.clipToBox(l),i.duration,i.easing)}f.animate(l,{queue:false,duration:i.duration,easing:i.easing,complete:t})})});
//# sourceMappingURL=effect-blind.js.map