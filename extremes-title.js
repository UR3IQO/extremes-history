/**
 * Highstock plugin shows x-axis extremes on the window title 
 * 
 * Author: Oleg Skydan
 * Email: sov1178@gmail.com
 *
 * Usage: 'dateFormat' parameter of the 'title' options section determines format used for dates rendering. 
 *         The window title will be in the "title.text [ date_min - date_max ]" form. 
 */

(function (H) {

   var title = 
      {
         text: "",
         dateFormat: "%d.%m.%Y",
	       dateStart: " [ ",
	       dateEnd: " ]",
	       rangeDelimiter: " - "
      };

   H.Chart.prototype.callbacks.push(function (chart) 
   {

      //merge user options with the default ones
      H.merge(true, title, chart.options.title)

      //add setExtremes event handler
      H.addEvent(chart.xAxis[0], 'setExtremes', function (e) 
      {
         document.title = title.text + 
                          title.dateStart + 
                          H.dateFormat(title.dateFormat, e.min) + 
                          title.rangeDelimiter + 
                          H.dateFormat(title.dateFormat, e.max) + 
                          title.dateEnd;
      });

   });

}(Highcharts));
