<h1>Jspreadsheet Plugins</h1>

## About Jspreadsheet 

Jspreadsheet, a lightweight Vanilla JavaScript plugin, can help you create exceptional web-based interactive tables and spreadsheets. Compatible with most widely-used spreadsheet softwares, it offers users an unrivalled Excel-like user experience. It also works well with prominent modern frameworks and flexibly utilizes a large collection of events, extensions and configurations to meet different application requirements. Impress your clients with a better user experience and a great dynamic interactive data management tool. The jspreadsheet extensions can be used to enhance the native capabilities.

For more information:<br>
<a href='https://jspreadsheet.com/v7'>Jspreadsheet</a> Pro distribution.<br>

## plugins/xls
A plugin to create a XLS file from a Jspreadsheet worksheet.

<br><br>

<img src='https://jspreadsheet.com/templates/default/img/export-to-xls-plugin-icon.png' width='80' align='left'>

<h2 style='margin-bottom: 0px;'>JSpreadsheet to XLS</h2>

This plugin helps the export a XLS from a jspreadsheet worksheet.<br><br>

<h2>Author</h2>
This is an official Jspreadsheet Plugin.<br><br>

<h2>License</h2>
MIT distribution<br><br>

<h2>Example using the browser</h2>
A following working example can be found <a href='https://jspreadsheet.com/plugins/exporting-to-xls'>here</a><br><br>

<pre class="prettyprint linenums">
&#60;html>
&#60;script src="https://jspreadsheet.com/v7/jspreadsheet.js">&#60;/script>
&#60;link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
&#60;script src="https://jsuites.net/v4/jsuites.js">&#60;/script>
&#60;link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />

&#60;script src="https://jspreadsheet.com/v7/plugins/download.js">&#60;/script>

&#60;div id="spreadsheet">&#60;/div>

&#60;input type='button' value='Download' onclick="jspreadsheet.download(document.getElementById('spreadsheet'));">

&#60;script>
jexcel(document.getElementById('spreadsheet'), {
    minDimension: [10,10]
});
&#60;/script>
&#60;/html>
</pre>

<h3>Example using NPM</h3>
% npm install @jspreadsheet/xls

<pre class="prettyprint linenums">
import download from '@jspreadsheet/xls';

download(document.getElementById('spreadsheet'), {
    filename: 'file.xsl',
    author: 'Lennon',
});
</pre>
