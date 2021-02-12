## JExcel Plugin : Row Header rename

 Row Header rename is a plugin for rename row header (Index) with custom name

![preview](https://user-images.githubusercontent.com/52194475/91864087-220d2300-ec70-11ea-9390-fe52e74cf28e.png)


This plugin is **Free**

## Demo

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.rowheaderrename.php)

## GitHub

Source available on GitHub : [GitHub](https://github.com/Guillaume-Bo/jexcel-plugins-and-editors/tree/master/plugins/rowHeaderRename)

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
			<td><code>headerIndexTitle</code></td>
			<td>For change header text of column index</td>
			<td><code>String</code></td>
			<td>(blank)</td>
		</tr>
		<tr>
			<td><code>rowIndexTitle</code></td>
			<td>For change header row (Index)<br>
      If set an array : value repeat after last name set
      If set a function : ryou have 1 parameter : index, return string,
      If set an object : property = indexrow, value of property = value
      </td>
			<td><code>String|Array[value, value]|Object {indexrow:value,...}|function (indexRow) {}</code></td>
			<td><code>null</code></td>
		</tr>
		<tr>
			<td><code>widthRowIndex</code></td>
			<td>For resize column index</td>
			<td><code>Int|String</code></td>
			<td><code>50</code></td>
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

<script src="/path/to/jexcel.rowHeaderRename.js"></script>
```

Initialize plugin on JExcel
```JavaScript
jexcel(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'rowRename', plugin:jss_rowHeaderRename, options:{headerIndexTitle: "hours", rowIndexTitle:function(rowIndex) {return (rowIndex % 24) + ":00";}}},
      ...  
    ],
    ...
});
```

#### Example with options with Array

Header on page
```HTML
<script src="https://jexcel.net/v7/jexcel.js"></script>
<script src="https://jexcel.net/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jexcel.net/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jexcel.net/v7/jexcel.css" type="text/css" />

<script src="/path/to/jexcel.rowHeaderRename.js"></script>
```

Initialize plugin on JExcel
```JavaScript
jexcel(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'rowRename', plugin:jss_rowHeaderRename, options:{headerIndexTitle: "Who ?", rowIndexTitle:["Me", "You", "Us"]}},
      ...  
    ],
    ...
});
```

#### Example with options with Object

Header on page
```HTML
<script src="https://jexcel.net/v7/jexcel.js"></script>
<script src="https://jexcel.net/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jexcel.net/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jexcel.net/v7/jexcel.css" type="text/css" />

<script src="/path/to/jexcel.rowHeaderRename.js"></script>
```

Initialize plugin on JExcel
```JavaScript
jexcel(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'rowRename', plugin:jss_rowHeaderRename, options:{headerIndexTitle: "Name", rowIndexTitle:{0:"Tom", 1:"Pierre", 2:"Jean", 3:"William"}, widthRowIndex: 100}},
      ...  
    ],
    ...
});
```

## CDN

You can use this CDN link
```HTML
<script src="https://cdn.jsdelivr.net/gh/Guillaume-Bo/jexcel-plugins-and-editors@latest/plugins/rowHeaderRename/jexcel.rowHeaderRename.js"></script>
```

## NPM
Coming soon (March 2021)
```javascript
import download from '@jspreadsheet/rowHeaderRename';
```

## Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License