"use strict";define("admin/manage/category-analytics",["Chart"],function(e){var a={};a.init=function(){var a=document.getElementById("pageviews:hourly");var o=document.getElementById("pageviews:daily");var r=document.getElementById("topics:daily");var t=document.getElementById("posts:daily");var i=utils.getHoursArray().map(function(e,a){return a%3?"":e});var l=utils.getDaysArray().map(function(e,a){return a%3?"":e});if(utils.isMobile()){e.defaults.global.tooltips.enabled=false}var n={"pageviews:hourly":{labels:i,datasets:[{label:"",backgroundColor:"rgba(186,139,175,0.2)",borderColor:"rgba(186,139,175,1)",pointBackgroundColor:"rgba(186,139,175,1)",pointHoverBackgroundColor:"#fff",pointBorderColor:"#fff",pointHoverBorderColor:"rgba(186,139,175,1)",data:ajaxify.data.analytics["pageviews:hourly"]}]},"pageviews:daily":{labels:l,datasets:[{label:"",backgroundColor:"rgba(151,187,205,0.2)",borderColor:"rgba(151,187,205,1)",pointBackgroundColor:"rgba(151,187,205,1)",pointHoverBackgroundColor:"#fff",pointBorderColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",data:ajaxify.data.analytics["pageviews:daily"]}]},"topics:daily":{labels:l.slice(-7),datasets:[{label:"",backgroundColor:"rgba(171,70,66,0.2)",borderColor:"rgba(171,70,66,1)",pointBackgroundColor:"rgba(171,70,66,1)",pointHoverBackgroundColor:"#fff",pointBorderColor:"#fff",pointHoverBorderColor:"rgba(171,70,66,1)",data:ajaxify.data.analytics["topics:daily"]}]},"posts:daily":{labels:l.slice(-7),datasets:[{label:"",backgroundColor:"rgba(161,181,108,0.2)",borderColor:"rgba(161,181,108,1)",pointBackgroundColor:"rgba(161,181,108,1)",pointHoverBackgroundColor:"#fff",pointBorderColor:"#fff",pointHoverBorderColor:"rgba(161,181,108,1)",data:ajaxify.data.analytics["posts:daily"]}]}};a.width=$(a).parent().width();o.width=$(o).parent().width();r.width=$(r).parent().width();t.width=$(t).parent().width();new e(a.getContext("2d"),{type:"line",data:n["pageviews:hourly"],options:{responsive:true,animation:false,legend:{display:false},scales:{yAxes:[{ticks:{beginAtZero:true,precision:0}}]}}});new e(o.getContext("2d"),{type:"line",data:n["pageviews:daily"],options:{responsive:true,animation:false,legend:{display:false},scales:{yAxes:[{ticks:{beginAtZero:true,precision:0}}]}}});new e(r.getContext("2d"),{type:"line",data:n["topics:daily"],options:{responsive:true,animation:false,legend:{display:false},scales:{yAxes:[{ticks:{beginAtZero:true,precision:0}}]}}});new e(t.getContext("2d"),{type:"line",data:n["posts:daily"],options:{responsive:true,animation:false,legend:{display:false},scales:{yAxes:[{ticks:{beginAtZero:true,precision:0}}]}}})};return a});
//# sourceMappingURL=category-analytics.js.map