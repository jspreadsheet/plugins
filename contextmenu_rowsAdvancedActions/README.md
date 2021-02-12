## JExcel Plugin : Contextmenu rows advanced actions

ContextMenu rows advanced actions is a plugin for add new items in contextMenu of JExcel Pro for manage rows. 

![preview](https://user-images.githubusercontent.com/52194475/102090914-5b802d80-3e1e-11eb-9fe6-572cea5eecae.png)

This plugin is **Free**

## Demo

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.contextmenu.php)

## GitHub

Source available on GitHub : [GitHub](https://github.com/Guillaume-Bo/jexcel-plugins-and-editors/tree/master/plugins/contextmenu_rowsAdvancedActions)

## Documentation

### Dependencies

- [JExcel Pro v7](https://www.jexcel.net/v7)

- With default options of plugin, you should use [Material Design icons](https://material.io/resources/icons/). 

```HTML
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
 ```   

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
			<td><code>icon_moveup</code></td>
			<td>Icon for "move up rows"</td>
			<td><code>String</code></td>
			<td><code>arrow_upward</code></td>
		</tr>
		<tr>
			<td><code>icon_movedown</code></td>
			<td>Icon for "Move down rows"</td>
			<td><code>String</code></td>
			<td><code>arrow_downward</code></td>
		</tr>
		<tr>
			<td><code>icon_duplicate</code></td>
			<td>Icon for "Duplicate rows"</td>
			<td><code>String</code></td>
			<td><code>content_copy</code></td>
		</tr>
		<tr>
			<td><code>icon_deleteSelectedColumns</code></td>
			<td>Icon for "Delete selected columns"</td>
			<td><code>String</code></td>
			<td><code>delete</code></td>
		</tr>		
	</tbody>
</table>

### For translation
you can defined on translation global to replace var <code>text_XXXX</code> by <code>contextmenurowsadvancedactions_</code>
<table>
	<thead>
		<tr>
			<th>Option name</th>
			<th>Default Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>text_moveup</code></td>
			<td><code>Move up row(s) selected</code></td>
		</tr>
		<tr>
			<td><code>text_movedown</code></td>
			<td><code>Move down row(s) selected</code></td>
		</tr>
		<tr>
			<td><code>text_duplicate</code></td>
			<td><code>Duplicate row(s) selected</code></td>
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
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">

<script src="/path/to/jexcel.contextmenu_rowAdvancedActions.js"></script>
```

Initialize plugin on JExcel
```JavaScript
jexcel(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'rowsAdvancedAction', plugin:jss_contextmenu_rowAdvancedActions},
      ...  
    ],
    ...
});
```


## CDN

You can use this CDN link

```HTML
<script src="https://cdn.jsdelivr.net/gh/Guillaume-Bo/jexcel-plugins-and-editors@latest/plugins/contextmenu_rowsAdvancedActions/jexcel.contextmenu_rowsAdvancedActions.js"></script>
```

## NPM
Coming soon (March 2021)
```javascript
import download from '@jspreadsheet/contextmenu_rowAdvancedActions';
```

## Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License