# Extremes history plugin
This highcharts plugin adds navigation over extremes changes in the Highstock chart using standard browser history and 'back'/'forward' commands. Also you can add extremes information from your Highstock chart to the document title, so the navigation in the browser will be easier:
![Demo](https://github.com/sov1178/extremes-history/raw/master/extremes-history-demo.gif)

### Requirements
Tested with the latest (v5.0.2) highcharts, but should work with the earlier versions too. The browser should implement the History API.

### Usage
Just include plugin in your html document:
```
   <script src="extremes-history.js"></script>   
```
There is a new chart option:
```
{
   history:
   {
      opInterval: 1500
   }
}
```
If the time interval (in ms) between extremes change operations exceeds opInterval value these operations will be registered in the browser history as different records, otherwise the last record will be updated with the current extremes.

If you want to add extremes to your document title you should include 'extremes-title.js' file:
```
   <script src="extremes-title.js"></script>
```

You can customize title and date-time format with the following options:
```
{
  title: {
    dateFormat: "%d.%m.%Y",   //extremes date/time format used for date rendering
    dateStart: " [ ",         //this text will be added before the date range
    dateEnd: " ]"             //this text will be added after the date range
    rangeDelimiter: " - "
  }
}
```
The document title will be formed by concatenating the chart title, dateStart, starting date, rangeDelimiter, ending date, dateEnd.
