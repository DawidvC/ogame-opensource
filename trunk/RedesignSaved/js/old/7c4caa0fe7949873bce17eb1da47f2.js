function hideRows(c){var a=$.parseJSON(c);for(var b in a.rows){$("#eventRow-"+a.rows[b]).hide();$(".union"+a.rows[b]).hide()}}function initEventTable(){$(".eventFleet:odd").addClass("odd");$(".partnerInfo:even").addClass("part-even");$(".partnerInfo").hide();$(".toggleInfos").click(function(){var b=$(this).attr("rel");var a=$("."+b);if($(a).is(":hidden")){$(a).show();$(this).children().attr("src","/cdn/img/layout/fleetCloseDetails.gif")}else{$(a).hide();$(this).children().attr("src","/cdn/img/layout/fleetOpenDetails.gif")}})};