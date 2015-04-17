/**
 * Created by zane-shen on 2015/4/16 016.
 */

function getWeekNum(date) {
	var today = date || new Date()
		,firstDay = new Date();
	firstDay.setYear(today.getFullYear());
	firstDay.setMonth(0);
	firstDay.setDate(1);
	firstDay.setHours(0);
	firstDay.setMinutes(0);
	firstDay.setSeconds(0);
	firstDay.setDate(firstDay.getDay() === 0 ? 2 : (9 - firstDay.getDay()));
	return Math.ceil(((+today) - (+firstDay)) / (1000 * 3600 * 24 * 7)) + 1;
}


(function ($, g) {
	"use strict";
	$.fn.createWeekDate = function (date) {
		var that = this;
		var today = date || new Date()
			, mondayDate = (+today) - ((today.getDay() - 1) * 1000 * 3600 * 24)
			, i = 0;
		$(that).empty().append('<option value="">--请选择--</option>');
		while (i++ < 7) {
			var temp = new Date((+mondayDate) + i * 1000 * 3600 * 24);
			$(that).append('<option value="'+temp.getFullYear() + '-' + (temp.getMonth() + 1) + '-' + temp.getDate()+'">' + temp.getFullYear() + '-' + (temp.getMonth() + 1) + '-' + temp.getDate() + '</option>');
		}
	}
})(jQuery, window);
