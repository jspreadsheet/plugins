<h1>Jexcel Spreadsheet Plugins</h1>

## About Jexcel

jExcel, a lightweight Vanilla JavaScript plugin, can help you create exceptional web-based interactive tables and spreadsheets. Compatible with most widely-used spreadsheet software, such as Excel or Google Spreadsheet, it offers users an unrivalled Excel-like user experience. It also works well with prominent modern frameworks and flexibly utilizes a large collection of events, extensions and configurations to meet different application requirements. Impress your clients with a better user experience and a great dynamic interactive data management tool. The jexcel extensions can be used to enhance the native capabilities.

For more information:<br>
<a href='https://jexcel.net/v7'>Jexcel Spreadsheet</a> Pro distribution.<br>

## plugins/xls
A plugin to create a XLS file from a jexcel spreadsheet.

<br><br>

<img src='https://jexcel.net/templates/default/img/jexcel-to-excel-plugin-icon.png' width='80' align='left'>

<h2 style='margin-bottom: 0px;'>Jexcel Spreadsheet to Excel</h2>

This plugin helps the export a XLS from a jexcel spreadsheet.<br><br>

<h2>Author</h2>
This is an official Jexcel Plugin.<br><br>

<h2>License</h2>
MIT distribution<br><br>

<h2>Example using the browser</h2>
A following working example can be found <a href='https://jexcel.net/plugins/jexcel-to-excel'>here</a><br><br>

<pre class="prettyprint linenums">
&#60;html>
&#60;script src="https://jexcel.net/v7/jexcel.js">&#60;/script>
&#60;script src="https://jexcel.net/v7/jsuites.js">&#60;/script>
&#60;link rel="stylesheet" href="https://jexcel.net/v7/jexcel.css" type="text/css" />
&#60;link rel="stylesheet" href="https://jexcel.net/v7/jsuites.css" type="text/css" />

&#60;script src="https://jexcel.net/plugins/jexcel.download.js">&#60;/script>

&#60;div id="spreadsheet">&#60;/div>

&#60;input type='button' value='Download' onclick="jexcel.download(document.getElementById('spreadsheet'));">

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
