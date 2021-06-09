# JSpreadsheet Plugin : Open File

With the open file plugin, you can:
- open modal for open file CSV, XLS, XLSX from your computer (without throught by server)
- select options on open (separator for csv, import style for XLSX, remove current sheets)

![preview](https://user-images.githubusercontent.com/52194475/115003509-28ba7480-9ea6-11eb-969c-845dd127ce6a.png)


This plugin is **Premium**

# Demo

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.openfile.php)

# Source

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-openfile)

# Documentation
## Options of plugin
<table>
	<thead>
		<tr>
			<th>Option name</th>
			<th>Description</th>
			<th>Type</th>
			<th>Default Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>allowShortcut</code></td>
			<td>Allow use shortcut CTRL + O for open file</td>
			<td><code>Boolean</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code>icon_toolbar</code></td>
			<td>Material icon on toolbar</td>
			<td><code>String</code></td>
			<td><code>folder_open</code></td>
		</tr>
	</tbody>
</table>

## For translation
*If you use general translator, you can translate this plugin to replace "text_" by "openfile_"*
<table>
	<thead>
		<tr>
			<th>Option name</th>
			<th>Default Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>text_toolbar_badge</code></td>
			<td>Open file</td>
		</tr>
		<tr>
			<td><code>text_popup_title_options</code></td>
			<td>Options of import</td>
		</tr>
		<tr>
			<td><code>text_popup_removesheets</code></td>
			<td>Remove current sheets</td>
		</tr>
		<tr>
			<td><code>text_popup_csvdelimiter</code></td>
			<td>Delimiter fields in row</td>
		</tr>
		<tr>
			<td><code>text_popup_csvheaders</code></td>
			<td>First row is an header</td>
		</tr>
		<tr>
			<td><code>text_popup_loadstyle</code></td>
			<td>Load style from file</td>
		</tr>
	</tbody>
</table>


## Methods of plugin

<table>
	<thead>
		<tr>
			<th>Method</th>
			<th>Description</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>open() → Void</code></td>
			<td>open modal for choose file on local</td>
			<td><code>jspreadsheet.current.plugins.openFile.open();</code></td>
		</tr>
	</tbody>
</table>

## Events of plugin

<table>
	<thead>
		<tr>
			<th>Event</th>
			<th>Arguments</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>openfile_onload</code></td>
			<td><code>DOMElementJSS, instanceJSS</code></td>
			<td>After load file, this event is dispatched</td>
		</tr>
	</tbody>
</table>



## Get started
Header on page
```HTML
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />

<script src="/path/to/jexcel.openFile.js"></script>
```

Initialize plugin on JSpreadsheet
```JavaScript
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'openFile', plugin:jss_openfile },
      ...  
    ],
    ...
});
```

# Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)
