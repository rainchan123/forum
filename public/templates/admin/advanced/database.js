
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "\n<div class=\"row database\">\n\t" + 
      (guard(context && context['mongo']) ?
        "\n\t<div class=\"col-lg-6\">\n\t\t" + 
          (guard(context && context['mongo'] && context['mongo']['serverStatusError']) ?
            "\n\t\t<div class=\"alert alert-warning\">\n\t\t\t" + 
              __escape(guard(context && context['mongo'] && context['mongo']['serverStatusError'])) + 
              "\n\t\t</div>\n\t\t" :
            "") + 
          "\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\"><i class=\"fa fa-hdd-o\"></i> [[admin/advanced/database:mongo]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"database-info\">\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.version]]</span> <span class=\"text-right\">" + 
          __escape(guard(context && context['mongo'] && context['mongo']['version'])) + 
          "</span><br/>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<span>[[admin/advanced/database:uptime-seconds]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['mongo'] && context['mongo']['uptime'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.storage-engine]]</span> <span class=\"text-right\">" + 
          __escape(guard(context && context['mongo'] && context['mongo']['storageEngine'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.collections]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['mongo'] && context['mongo']['collections'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.objects]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['mongo'] && context['mongo']['objects'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.avg-object-size]]</span> <span class=\"text-right\">[[admin/advanced/database:x-b, " + 
          __escape(guard(context && context['mongo'] && context['mongo']['avgObjSize'])) + 
          "]]</span><br/>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.data-size]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard(context && context['mongo'] && context['mongo']['dataSize'])) + 
          "]]</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.storage-size]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard(context && context['mongo'] && context['mongo']['storageSize'])) + 
          "]]</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.index-size]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard(context && context['mongo'] && context['mongo']['indexSize'])) + 
          "]]</span><br/>\n\t\t\t\t\t" + 
          (guard(context && context['mongo'] && context['mongo']['fileSize']) ?
            "\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.file-size]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
              __escape(guard(context && context['mongo'] && context['mongo']['fileSize'])) + 
              "]]</span><br/>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.resident-memory]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard(context && context['mongo'] && context['mongo']['mem'] && context['mongo']['mem']['resident'])) + 
          "]]</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.virtual-memory]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard(context && context['mongo'] && context['mongo']['mem'] && context['mongo']['mem']['virtual'])) + 
          "]]</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.mapped-memory]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard(context && context['mongo'] && context['mongo']['mem'] && context['mongo']['mem']['mapped'])) + 
          "]]</span><br/>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.bytes-in]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard(context && context['mongo'] && context['mongo']['network'] && context['mongo']['network']['bytesIn'])) + 
          "]]</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.bytes-out]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard(context && context['mongo'] && context['mongo']['network'] && context['mongo']['network']['bytesOut'])) + 
          "]]</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.num-requests]]</span> <span class=\"text-right\">" + 
          __escape(guard(context && context['mongo'] && context['mongo']['network'] && context['mongo']['network']['numRequests'])) + 
          "</span><br/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard(context && context['redis']) ?
        "\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\"><i class=\"fa fa-hdd-o\"></i> [[admin/advanced/database:redis]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"database-info\">\n\t\t\t\t\t<span>[[admin/advanced/database:redis.version]]</span> <span class=\"text-right\">" + 
          __escape(guard(context && context['redis'] && context['redis']['redis_version'])) + 
          "</span><br/>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<span>[[admin/advanced/database:uptime-seconds]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['redis'] && context['redis']['uptime_in_seconds'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:uptime-days]]</span> <span class=\"text-right\">" + 
          __escape(guard(context && context['redis'] && context['redis']['uptime_in_days'])) + 
          "</span><br/>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.keys]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['redis'] && context['redis']['keys'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.expires]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['redis'] && context['redis']['expires'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.avg-ttl]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['redis'] && context['redis']['avg_ttl'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.connected-clients]]</span> <span class=\"text-right\">" + 
          __escape(guard(context && context['redis'] && context['redis']['connected_clients'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.connected-slaves]]</span> <span class=\"text-right\">" + 
          __escape(guard(context && context['redis'] && context['redis']['connected_slaves'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.blocked-clients]]</span> <span class=\"text-right\">" + 
          __escape(guard(context && context['redis'] && context['redis']['blocked_clients'])) + 
          "</span><br/>\n\t\t\t\t\t<hr/>\n\n\t\t\t\t\t<span>[[admin/advanced/database:redis.used-memory]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard(context && context['redis'] && context['redis']['used_memory_human'])) + 
          "]]</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.memory-frag-ratio]]</span> <span class=\"text-right\">" + 
          __escape(guard(context && context['redis'] && context['redis']['mem_fragmentation_ratio'])) + 
          "</span><br/>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.total-connections-recieved]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['redis'] && context['redis']['total_connections_received'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.total-commands-processed]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['redis'] && context['redis']['total_commands_processed'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.iops]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['redis'] && context['redis']['instantaneous_ops_per_sec'])) + 
          "</span><br/>\n\n\t\t\t\t\t<span>[[admin/advanced/database:redis.iinput]]</span> <span class=\"text-right\">[[admin/advanced/database:x-mb, " + 
          __escape(guard(context && context['redis'] && context['redis']['instantaneous_input'])) + 
          "]]</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.ioutput]]</span> <span class=\"text-right\">[[admin/advanced/database:x-mb, " + 
          __escape(guard(context && context['redis'] && context['redis']['instantaneous_output'])) + 
          "]]</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.total-input]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard(context && context['redis'] && context['redis']['total_net_input'])) + 
          "]]</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.total-output]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard(context && context['redis'] && context['redis']['total_net_output'])) + 
          "]]</span><br/>\n\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.keyspace-hits]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['redis'] && context['redis']['keyspace_hits'])) + 
          "</span><br/>\n\t\t\t\t\t<span>[[admin/advanced/database:redis.keyspace-misses]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['redis'] && context['redis']['keyspace_misses'])) + 
          "</span><br/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard(context && context['postgres']) ?
        "\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\"><i class=\"fa fa-hdd-o\"></i> [[admin/advanced/database:postgres]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"database-info\">\n\t\t\t\t\t<span>[[admin/advanced/database:postgres.version]]</span> <span class=\"text-right\">" + 
          __escape(guard(context && context['postgres'] && context['postgres']['version'])) + 
          "</span><br/>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<span>[[admin/advanced/database:uptime-seconds]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard(context && context['postgres'] && context['postgres']['uptime'])) + 
          "</span><br/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n</div>\n\n<div class=\"row database\">\n\t" + 
      (guard(context && context['mongo']) ?
        "\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\".mongodb-raw\">\n\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-caret-down\"></i> [[admin/advanced/database:mongo.raw-info]]</h3>\n\t\t\t</div>\n\n\t\t\t<div class=\"panel-body mongodb-raw collapse\">\n\t\t\t\t<div class=\"highlight\">\n\t\t\t\t\t<pre>" + 
          __escape(guard(context && context['mongo'] && context['mongo']['raw'])) + 
          "</pre>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard(context && context['redis']) ?
        "\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\".redis-raw\">\n\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-caret-down\"></i> [[admin/advanced/database:redis.raw-info]]</h3>\n\t\t\t</div>\n\n\t\t\t<div class=\"panel-body redis-raw collapse\">\n\t\t\t\t<div class=\"highlight\">\n\t\t\t\t\t<pre>" + 
          __escape(guard(context && context['redis'] && context['redis']['raw'])) + 
          "</pre>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard(context && context['postgres']) ?
        "\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\".postgresql-raw\">\n\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-caret-down\"></i> [[admin/advanced/database:postgres.raw-info]]</h3>\n\t\t\t</div>\n\n\t\t\t<div class=\"panel-body postgresql-raw collapse\">\n\t\t\t\t<div class=\"highlight\">\n\t\t\t\t\t<pre>" + 
          __escape(guard(context && context['postgres'] && context['postgres']['raw'])) + 
          "</pre>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
