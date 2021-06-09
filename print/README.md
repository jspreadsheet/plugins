# JSpreadsheet Plugin : print

The print plugin add lot of features for print sheet as :

Add icon on toolbar
- Print all cells of sheet (page break with lot of rows)
- Print area defined, print selection or print result search
- Print all sheets (tabs)
- Orientation of page
- Zoom
- Apply Style of Cell for print (i.e. print CSS of conditional style)
- Popup print
- Replace checkbox by string Yes / No
- Print cells with Charts / Image
- Row breaker (define row who break page)


![preview](https://s1.gifyu.com/images/print.gif)


This plugin is **Premium**

# Demo

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.print.php)

# Source

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-print)

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
			<td><code>allowPrint</code></td>
			<td>Allow print for page</td>
			<td><code>Boolean</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code>allowShortcut</code></td>
			<td>Allow shortcut CTRL+P for open popup of print</td>
			<td><code>Boolean</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code>autoprint</code></td>
			<td>start print automaticaly after preview. Set false for force preview before print</td>
			<td><code>Boolean</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code>header</code></td>
			<td>Show columns header on print</td>
			<td><code>Boolean</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code>index</code></td>
			<td>Show rows index on print</td>
			<td><code>Boolean</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code>orientation</code></td>
			<td>Defined orientation of page<br>
				<ul>
					<li>auto : page orientation defined by printer</li>
					<li>landscape : page orientation force to landscape</li>
					<li>portrait : page orientation force to portrait</li>
				</ul></td>
			<td><code>String</code></td>
			<td><code>auto</code></td>
		</tr>
		<tr>
			<td><code>range</code></td>
			<td>Defined area range</td>
			<td><code>ArrayOfCoord[x1,y1,x2,y2] or String "A1:B5"</code></td>
			<td><code>null</code></td>
		</tr>
                <tr>
			<td><code>rowBreaker</code></td>
			<td>Defined page breaker after number of rows</td>
			<td><code>Int|"auto"</code></td>
			<td><code>"auto"</code></td>
		</tr>
		<tr>
			<td><code>style</code></td>
			<td>Defined styles CSS</td>
			<td><code>String|Function</code></td>
			<td><code>(blank)</code></td>
		</tr>
		<tr>
			<td><code>stylesheet</code></td>
			<td>Defined url of style file .css</td>
			<td><code>String</code></td>
			<td><code>(blank)</code></td>
		</tr>
		<tr>
			<td><code>title</code></td>
			<td>Title of page printed</td>
			<td><code>String</code></td>
			<td><code>(blank)</code></td>
		</tr>
		<tr>
			<td><code>zoom</code></td>
			<td>Zoom of page printed (1 = 100%)</td>
			<td><code>Float</code></td>
			<td><code>1</code></td>
		</tr>
	</tbody>
</table>

## For translation
*If you use general translator, you can translate this plugin to replace "text_" by "print_"*
<table>
	<thead>
		<tr>
			<th>Option name</th>
			<th>Default Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>text_true</code></td>
			<td>Yes</td>
		</tr>
		<tr>
			<td><code>text_false</code></td>
			<td>No</td>
		</tr>
		<tr>
			<td><code>text_orientation</code></td>
			<td>Orientation</td>
		</tr>
		<tr>
			<td><code>text_orientation_landscape</code></td>
			<td>Landscape</td>
		</tr>
		<tr>
			<td><code>text_orientation_portrait</code></td>
			<td>Portrait</td>
		</tr>
		<tr>
			<td><code>text_orientation_auto</code></td>
			<td>Printer settings</td>
		</tr>
		<tr>
			<td><code>text_zoom</code></td>
			<td>Zoom</td>
		</tr>
		<tr>
			<td><code>text_title</code></td>
			<td>Title of page</td>
		</tr>
		<tr>
			<td><code>text_popup_title</code></td>
			<td>Print options</td>
		</tr>
		<tr>
			<td><code>text_index</code></td>
			<td>Show index of rows</td>
		</tr>
		<tr>
			<td><code>text_header</code></td>
			<td>Show header of columns</td>
		</tr>
		<tr>
			<td><code>text_print_area</code></td>
			<td>Print area</td>
		</tr>
		<tr>
			<td><code>text_print_selection</code></td>
			<td>Print selection</td>
		</tr>
		<tr>
			<td><code>text_print_resultsearch</code></td>
			<td>Print results of search</td>
		</tr>
		<tr>
			<td><code>text_print_all</code></td>
			<td>Print all rows of the sheet</td>
		</tr>
		<tr>
			<td><code>text_print_area_defined</code></td>
			<td>Print area defined</td>
		</tr>
		<tr>
			<td><code>text_print</code></td>
			<td>Print</td>
		</tr>
		<tr>
			<td><code>text_printpreview</code></td>
			<td>Preview</td>
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
			<td><code>do(*optional* Object optionsPrint) → Void</code></td>
			<td>execute print with options, if optionsPrint is null, print with default options</td>
			<td><code>jspreadsheet.current.plugins.print.do({title:'test button print', index:false});</code></td>
		</tr>
		<tr>
			<td><code>open() → Void</code></td>
			<td>Open popup print</td>
			<td><code>jspreadsheet.current.plugins.print.open();</code></td>
		</tr>
		<tr>
			<td><code>preview(*optional* Object optionsPrint) → Void</code></td>
			<td>execute preview print with options, if optionsPrint is null, preview with default options</td>
			<td><code>jspreadsheet.current.plugins.print.preview({title:'test button print', index:false});</code></td>
		</tr>
		<tr>
			<td><code>resetRange() → Void</code></td>
			<td>remove range print area</td>
			<td><code>jspreadsheet.current.plugins.print.resetRange();</code></td>
		</tr>
		<tr>
			<td><code>setRange(Array|String range) → Void</code></td>
			<td>set range print area (by Coord [x1,y1,x2,y2] of A1:B10)</td>
			<td><code>jspreadsheet.current.plugins.print.setRange("A1:B10");</code></td>
		</tr>
		<tr>
			<td><code>setStyle(String style) → Void</code></td>
			<td>set style of page printed</td>
			<td><code>jspreadsheet.current.plugins.print.setStyle(".jexcel tbody tr td.cellAlert {background-color: #f46e42!important;color: #ffffff;}");</code></td>
		</tr>
	</tbody>
</table>

## Events

<table>
	<thead>
		<tr>
			<th>Event</th>
			<th>Description</th>
			<th>Arguments</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>onprint</code></td>
			<td>event dispatch after start print and preview</td>
			<td><code>onprint(ElementJExcel)</code></td>
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

<script src="/path/to/jexcel.print.js"></script>
```

Initialize plugin on JSpreadsheet
```JavaScript
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'print', plugin:jss_print},
      ...  
    ],
    ...
});
```
## Example
Header on page
```HTML
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />

<script src="/path/to/jexcel.print.js"></script>
```

Initialize plugin on JSpreadsheet
```JavaScript
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
   		 { name:'print', plugin:jss_print, options:{title:"test print", index:false, style:function(obj) { return obj.plugins.conditionalstyle.getCSS(); }} }, // For apply style of plugin conditional style
      ...  
    ],
    ...
});
```


# Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)
