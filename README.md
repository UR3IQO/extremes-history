# extremes-history
This highcharts plugin adds navigation over extremes changes in the Highstock chart using standard browser 'back'/'forward' commands. Also you can add extremes information from your Highstock chart to the document title, so the navigation in the browser will be easier:


### Requirements
Tested with the latest (v5.0.2) highcharts, but should work with the earlier versions too. The browser should implement the History API.

### Usage
Just include plugin in your html document:
```
   <script src="extremes-history.js"></script>   
```

If you want to add extremes to your document title you should add 'extremes-title.js' file:
```
   <script src="extremes-title.js"></script>
```

You can customise title and date-time format with the following options:
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
The document title will be formed by concatenating the Chart title, dateStart, starting date, rangeDelimiter, ending date, dateEnd.
