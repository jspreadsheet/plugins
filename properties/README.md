<h1>Jspreadsheet Plugins</h1>

## About Jspreadsheet

Jspreadsheet, a lightweight Vanilla JavaScript plugin, can help you create exceptional web-based interactive tables and spreadsheets. Compatible with most widely-used spreadsheet software, it offers users an unrivalled Excel-like user experience. It also works well with prominent modern frameworks and flexibly utilizes a large collection of events, extensions and configurations to meet different application requirements. Impress your clients with a better user experience and a great dynamic interactive data management tool. The jexcel extensions can be used to enhance the native capabilities.

Visit the jexcel <a href='https://jexcel.net/v7'>spreadsheet</a> website for more information.<br><br>

## plugin-spreadsheet-properties
A plugin to edit the jexcel spreadsheet's main properties on the fly.

<img src='https://jspreadsheet.com/templates/default/img/properties-spreadsheet-plugin-icon.png' width='80' align='left'>

<h2 style='margin-bottom: 0px;'>Spreadsheet Properties</h2>

This plugin includes a properties option on the context menu. Once it is selected by the user, a modal with some basic spreadsheet configuration will be presented for real time table configuration.<br><br>

The spreadsheet properties that can be changed using this plugin:

<img src='https://jspreadsheet.com/plugins/spreadsheet-column-properties.png' height='360' align='right'>
<ul>
<li>Allow drag and drop rows or columns</li>
<li>Allow resize rows or columns</li>
<li>Allow insert new rows or columns</li>
<li>Allow delete rows or columns </li>
<li>Allow rename column headers</li>
<li>Allow comments on cells</li>
<li>Allow export the CSV file</li>
<li>Allow column sorting</li>
<li>Enable the toolbar</li>
<li>Enable the column filters</li>
<li>Define the default column alignment</li>
<li>Define the default column width</li>
</ul>

<br>

<h2>Author</h2>
This is an official Jspreadsheet Plugin.<br><br>

<h2>License</h2>
This plugin a free MIT plugin.<br><br>

<h2>Example</h2>
A following working example can be found <a href='https://jspreadsheet.com/plugins/properties'>here</a><br><br>

<pre class="prettyprint linenums">
&#60;html>
&#60;script src="https://jspreadsheet.com/v7/jspreadsheet.js">&#60;/script>
&#60;link rel="stylesheet" href="https://jexcel.net/v7/jexcel.css" type="text/css" />

&#60;script src="https://jsuites.net/v4/jsuites.js">&#60;/script>
&#60;link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />
&#60;link rel="stylesheet" href="https://jsuites.net/v4/jsuites.layout.css" type="text/css" />

&#60;script src="https://jexcel.net/plugins/jexcel.properties.js">&#60;/script>

&#60;div id="spreadsheet">&#60;/div>

&#60;script>
jexcel(document.getElementById('spreadsheet'), {
    minDimension: [10,10],
    license: '<?php echo $this->view['license']; ?>',
    allowComments: false,
    plugins: [{ 
        plugin: properties,
        name: 'properties'
    }]
});
&#60;/script>
&#60;/html>
</pre>
