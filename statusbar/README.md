## JExcel Plugin : Status bar

 Status bar is a plugin for add a status bar on bottom of the sheet like Excel. On this status bar you can add new row with button, and show information on selection (Range selected, Formulas, etc.)

![preview](https://user-images.githubusercontent.com/52194475/94404123-c484cd00-016e-11eb-8f27-c978019f181e.png)


This plugin is **Free**

## Demo

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.statusbar.php)

## GitHub

Source available on GitHub : [GitHub](https://github.com/Guillaume-Bo/jexcel-plugins-and-editors/tree/master/plugins/statusbar)

## Documentation

### Dependencies

- [JExcel Pro v7](https://www.jexcel.net/v7)  

### Options of plugin

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
			<td><code>showAddRowButton</code></td>
			<td>For show or hide add row button on left of status bar</td>
			<td><code>Boolean</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code>formulas</code></td>
			<td>Object of formulas, you can use quick reference on formulas<br>
      <code>{range}</code> : Range name A1:B3<br>
      <code>{cells}</code> : Array of cells (work with filtered row) [A1,A3,B1,B3]<br>
      <code>{x1}</code> : x start selection (first x = 0)<br>
      <code>{y1}</code> : y start selection (first y = 0)<br>
      <code>{x2}</code> : x end selection<br>
      <code>{y2}</code> : y end selection<br>
      the key property of object is the name showing before result<br>If you use custom formula, for not show empty result, return null.
      </td>
			<td><code>Object</code></td>
			<td><code>{
"Range":"{range}", // Format A1:B5
"SUM":"=SUM({range})",
"MAX":"=MAX({range})",
"MIN":"=MIN({range})"
},</code></td>
		</tr>
	</tbody>
</table>

You can modify CSS file for change separator of formulas

### For translation
you can defined on translation global to replace var <code>text_XXXX</code> by <code>statusbar_</code>
<table>
	<thead>
		<tr>
			<th>Option name</th>
			<th>Default Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>text_AddRowButton</code><br>
				{*} = input box, previous this is button and after is text</td>
			<td>Add {*} row(s)</td>
		</tr>
	</tbody>
</table>


### Get started

Header on page
```HTML
<script src="https://jexcel.net/v7/jexcel.js"></script>
<script src="https://jexcel.net/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jexcel.net/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jexcel.net/v7/jexcel.css" type="text/css" />

<script src="/path/to/jexcel.statusbar.js"></script>
<link rel="stylesheet" href="/path/to/jexcel.statusbar.css" type="text/css" />
```

Initialize plugin on JExcel
```JavaScript
jexcel(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'statusBar', plugin:jss_statusbar },
      ...  
    ],
    ...
});
```

#### Example with options with Options

Header on page
```HTML
<script src="https://jexcel.net/v7/jexcel.js"></script>
<script src="https://jexcel.net/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jexcel.net/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jexcel.net/v7/jexcel.css" type="text/css" />

<script src="/path/to/jexcel.statusbar.js"></script>
<link rel="stylesheet" href="/path/to/jexcel.statusbar.css" type="text/css" />
```

Initialize plugin on JExcel
```JavaScript
jexcel(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'statusBar', plugin:jss_statusbar, options: { 
                 showAddRowButton: false, 
                 formulas:{
                    "COUNT":"=COUNT({range})",
                 } // End formulas
            } // End options
      },
      ...  
    ],
    ...
});
```

## CDN

You can use this CDN link
```HTML
<script src="https://cdn.jsdelivr.net/gh/Guillaume-Bo/jexcel-plugins-and-editors@latest/plugins/statusbar/jexcel.statusbar.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Guillaume-Bo/jexcel-plugins-and-editors@latest/plugins/statusbar/jexcel.statusbar.css" type="text/css" />
```

## NPM
Coming soon (March 2021)
```javascript
import download from '@jspreadsheet/statusBar';
```

## Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License