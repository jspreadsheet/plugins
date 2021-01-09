<div class="section">
<div class='section-label' style='background-color: #737373'>Jexcel Plugins</div>
<div class="section-content">

<div class='breadcrumb' style='margin-bottom:10px;'>
    <div><a href='/plugins/'>Back to the plugins section</a></div>
</div>

<img src='https://jexcel.net/templates/default/img/jexcel-to-excel-plugin-icon.png' class='left mr1' style='width:80px;' width='80'>

<h1 style='margin-bottom: 0px;'>Jexcel Spreasheet to XLS</h1>

How to convert a jexcel spreadsheet to a XLS excel file.

<br><br>

<h2>Author</h2>
Copyright <a href="https://jexcel.net">Jexcel Team</a>.<br><br>

<h2>License</h2>
This is an open source plugin.<br><br>

<h2>License</h2>
Official <a href='https://github.com/jexcel/plugin-jexcel-to-excel-export'>github</a> repository<br><br>

<h2>Example</h2>
See a working example: <a href='/v7/examples/jexcel-to-excel-export'>export to XLS</a><br><br>

<h3>Example using NPM</h3>

% npm install @jspreadsheet/download

<pre class="prettyprint linenums">
import download from '@jspreadsheet/download';

download(document.getElementById('spreadsheet'), {
    filename: 'file.xsl',
    author: 'Lennon',
});
</pre>

<h3>Example using the browser</h3>

<pre class="prettyprint linenums">
&#60;html>
&#60;script src="https://jexcel.net/v7/jexcel.js">&#60;/script>
&#60;script src="https://jexcel.net/v7/jsuites.js">&#60;/script>
&#60;link rel="stylesheet" href="https://jexcel.net/v7/jexcel.css" type="text/css" />
&#60;link rel="stylesheet" href="https://jexcel.net/v7/jsuites.css" type="text/css" />

&#60;script src="/plugins/jexcel.download.js">&#60;/script>

&#60;div id="spreadsheet">&#60;/div>

&#60;input type='button' value='Export to XLS'
    onclick="jexcel.download(document.getElementById('spreadsheet'))">

&#60;script>
jexcel(document.getElementById('spreadsheet'), {
    minDimensions: [10,10],
});
&#60;/script>
&#60;/html>
</pre>


</div>
</div>
